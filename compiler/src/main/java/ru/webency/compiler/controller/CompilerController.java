package ru.webency.compiler.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import ru.webency.compiler.model.Response;
import ru.webency.compiler.model.Result;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.Date;


@RestController
@RequestMapping(value = "api/v1/compiler")
public class CompilerController {
    Logger logger = LogManager.getLogger(CompilerController.class);

    @RequestMapping(
            value = "python",
            method = RequestMethod.POST
    )
    public ResponseEntity<?> compilePython(
            @RequestPart(value="outputFile", required = true) MultipartFile outputFile,
            @RequestPart(value="sourceCode", required = true) MultipartFile sourceCode,
            @RequestParam(value = "inputFile", required = false) MultipartFile inputFile,
            @RequestParam(value = "timeLimit", required = true) int timeLimit,
            @RequestParam(value = "memoryLimit", required = true) int memoryLimit
    ) throws IOException, InterruptedException {
        return compiler(outputFile, sourceCode, inputFile, timeLimit, memoryLimit);
    }

    private ResponseEntity<?> compiler(
            MultipartFile outputFile,
            MultipartFile sourceCode,
            MultipartFile inputFile,
            int timeLimit,
            int memoryLimit) throws IOException, InterruptedException {
        String folder = "utility";
        String file = "main.py";

        if (memoryLimit < 0 || memoryLimit > 1000)
            return ResponseEntity.badRequest().body("Memory must be between 0 and 1000Mb");

        if (timeLimit < 0 || timeLimit > 15)
            return ResponseEntity.badRequest().body("Time must be between 0 and 15 seconds");

        LocalDateTime date = LocalDateTime.now();

        createEntryPoint(sourceCode, inputFile, timeLimit, memoryLimit);

        saveUploadFiles(sourceCode, folder + "/" + file);
        saveUploadFiles(outputFile, folder + "/" + outputFile.getOriginalFilename());
        if (inputFile!= null) {
            saveUploadFiles(inputFile, folder + "/" + inputFile.getOriginalFilename());
        }
        String imageName = "compile_" + new Date().getTime();
        Result result = executeCode(folder, imageName, outputFile);
        String statusResponse = result.getStatus();
        deleteFile(folder, file);
        deleteFile(folder, outputFile.getOriginalFilename());
        deleteFile(folder, inputFile.getOriginalFilename());

        return ResponseEntity.status(HttpStatus.OK).body(
                new Response(result.getOutput(), result.getExpectedOutput(), statusResponse, date));
    }


    private Result executeCode(String folder, String imageName, MultipartFile outputFile) throws IOException, InterruptedException {
        logger.info("Building docker image");
        int status = buildDockerImage(folder, imageName);
        if (status == 0) {
            logger.info("Docker image has been built");
        } else {
            logger.error("Error while building docker image");
        }
        logger.info("Running docker container");
        String[] dockerCommand = {"docker", "run", "--rm", imageName};
        ProcessBuilder processBuilder = new ProcessBuilder(dockerCommand);
        Process process = processBuilder.start();
        status = process.waitFor();
        logger.info("End of the container execution");
        BufferedReader outputReader = new BufferedReader(new InputStreamReader(outputFile.getInputStream()));
        StringBuilder outputBuilder = new StringBuilder();
        BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
        StringBuilder builder = new StringBuilder();
        boolean result = checkCode(outputReader, outputBuilder, reader, builder);
        String statusResponse = statusResponse(status, result);
        return new Result(statusResponse, builder.toString(), outputBuilder.toString());
    }



    private boolean checkCode(BufferedReader outputReader, StringBuilder outputBuilder, BufferedReader reader, StringBuilder builder) throws IOException {
        String line = null;
        String outputLine = null;
        boolean answer = true;
        while ((line = reader.readLine()) !=  null && (outputLine = outputReader.readLine()) != null) {
            if (!line.equals(outputLine)) {
                answer = false;
             }
            builder.append(line);
            builder.append(System.getProperty("line.separator"));
            outputBuilder.append(outputLine);
            outputBuilder.append(System.getProperty("line.separator"));
        }
        if (line != null) {
            builder.append(line);
            builder.append(System.getProperty("line.separator"));
        }
        if (outputLine != null) {
            outputBuilder.append(outputLine);
            outputBuilder.append(System.getProperty("line.separator"));
        }
        while ((outputLine = outputReader.readLine()) != null) {
            answer = false;
            outputBuilder.append(outputLine);
            outputBuilder.append(System.getProperty("line.separator"));
        }
        return answer;
    }

    private void saveUploadFiles(MultipartFile file, String name) throws IOException {
        if (file.isEmpty()) return;
        byte[] bytes = file.getBytes();
        Path path = Paths.get(name);
        Files.write(path, bytes);
    }


    private int buildDockerImage(String folder, String imageName) throws IOException, InterruptedException {
        String[] dockerCommand = {"docker", "image", "build", folder, "-t", imageName};
        ProcessBuilder processBuilder = new ProcessBuilder(dockerCommand);
        Process process = processBuilder.start();
        return process.waitFor();
    }

    private boolean deleteFile(String folder, String file) {
        if (folder != null && file != null) {
            String fileName = folder + "/" + file;
            new File(fileName).delete();
            logger.info("File " + fileName + " has been deleted");
            return true;
        }
        return false;
    }

    private String statusResponse(int status, boolean answer) {
        String statusResponse;
        if (status == 0) {
            if (answer) {
                statusResponse = "Успешно";
            } else {
                statusResponse = "Не правильный ответ";
            }
        } else if (status == 2) {
            statusResponse = "Ошибка компиляции";
        } else if (status == 1) {
            statusResponse = "Ошибка во время выполнения";
        } else if (status == 139) {
            statusResponse = "Превышен лимит по памяти";
        } else {
            statusResponse = "Превышен лимит по времени выполнения";
        }
        return statusResponse;
    }

    private void createEntryPoint(MultipartFile sourceCode, MultipartFile inputFile, int timeLimit, int memoryLimit) {
        createPythonEntryPointFile(sourceCode.getOriginalFilename(), timeLimit, memoryLimit, inputFile);
    }

    private void createPythonEntryPointFile(String filename, int timeLimit, int memoryLimit, MultipartFile inputFile) {
        String executionCommand = inputFile == null
                ? "timeout --signal=SIGTERM " + timeLimit + " python3 main.py" + "\n"
                : "timeout --signal=SIGTERM " + timeLimit + " python3 main.py" + " < " + inputFile.getOriginalFilename() + "\n";
        String content = "#!/usr/bin/env bash\n" +
                "ulimit -s " + memoryLimit + "\n" +
                executionCommand +
                "exit $?\n";
        OutputStream os = null;

        try {
            os = new FileOutputStream(new File("utility/entrypoint.sh"));
            os.write(content.getBytes(), 0, content.length());
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                os.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }


}

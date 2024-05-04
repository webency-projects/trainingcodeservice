package ru.webency.compiler.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import ru.webency.compiler.model.Result;
import ru.webency.compiler.utils.StatusMessage;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.concurrent.TimeUnit;

@Slf4j
@Service
public class DockerService implements DockerServiceInterface {
    private static final long TIME_OUT = 20000;
    private static final int TIME_LIMIT_STATUS_CODE = 127;
    @Override
    public int buildImage(String folder, String imageName) throws InterruptedException, IOException {
        String[] command = new String[]{"docker", "image", "build", folder, "-t", imageName};
        ProcessBuilder processBuilder = new ProcessBuilder(command);
        Process process = processBuilder.start();
        return process.waitFor();
    }

    @Override
    public Result executeCode(String imageName, MultipartFile outputFile) {
        try {
            int status = 0;

            BufferedReader expectedOutputReader = new BufferedReader(new InputStreamReader(outputFile.getInputStream()));
            String expectedOutput = readOutput(expectedOutputReader);

            log.info("Running the container");
            String[] dockerCommand = new String[]{"docker", "run", "--rm", imageName};
            ProcessBuilder processbuilder = new ProcessBuilder(dockerCommand);
            Process process = processbuilder.start();


            process.waitFor(TIME_OUT, TimeUnit.MILLISECONDS);


            if (process.isAlive()) {
                status = TIME_LIMIT_STATUS_CODE;
                log.info("The container exceed the 20 sec allowed for its execution");
                process.destroy();
                log.info("The container has been destroyed");


                String statusResponse = StatusMessage.statusResponse(status, false);
                return new Result(statusResponse, "No available output", expectedOutput);
            } else {
                status = process.exitValue();
                log.info("End of the execution of the container");

                BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
                String containerOutput = readOutput(reader);

                boolean result = compareResult(containerOutput, expectedOutput);
                String statusResponse = StatusMessage.statusResponse(status, result);
                return new Result(statusResponse, containerOutput, expectedOutput);
            }
        } catch (Exception e){
            log.error("Error: ", e);
            return null;
        }
    }

    @Override
    public String getRunningContainers() throws IOException {
        String[] command = new String[]{"docker", "ps"};
        ProcessBuilder processBuilder = new ProcessBuilder(command);
        Process process = processBuilder.start();
        BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
        return readOutput(reader);
    }

    @Override
    public String getRunningImages() throws IOException {
        String[] command = new String[]{"docker", "image"};
        ProcessBuilder processBuilder = new ProcessBuilder(command);
        Process process = processBuilder.start();
        BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
        return readOutput(reader);
    }

    private String readOutput(BufferedReader reader) throws IOException {
        String line;
        StringBuilder builder = new StringBuilder();
        while ((line = reader.readLine())!= null) {
            builder.append(line);
            builder.append(System.getProperty("line.separator"));
        }
        return builder.toString();
    }
    private boolean compareResult(String containerOutput, String expectedOutput) {
        return containerOutput.trim().equals(expectedOutput.trim());
    }
}

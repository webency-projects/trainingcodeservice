package ru.webency.compiler.service;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import ru.webency.compiler.exceptions.DockerException;
import ru.webency.compiler.model.Response;
import ru.webency.compiler.model.Result;
import ru.webency.compiler.utils.FileHandler;

import java.time.LocalDateTime;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicInteger;

import static ru.webency.compiler.utils.EntryPointFile.*;


@Slf4j
@Service
@AllArgsConstructor
public class CompilerService implements CompilerServiceInterface {
    private DockerServiceInterface dockerService;
    @Override
    public ResponseEntity<Object> compile(
            MultipartFile outputFile,
            MultipartFile sourceCode,
            MultipartFile inputFile,
            int timeLimit,
            int memoryLimit) throws Exception {
        String folder = "utility";
        String file = "main.py";

        if (memoryLimit < 0 || memoryLimit > 1000)
            return ResponseEntity
                    .badRequest()
                    .body("Error memoryLimit must be between 0Mb and 1000Mb");

        if (timeLimit < 0 || timeLimit > 15)
            return ResponseEntity
                    .badRequest()
                    .body("Error timeLimit must be between 0 Sec and 15 Sec");


        String imageName = UUID.randomUUID().toString();
        LocalDateTime date = LocalDateTime.now();

        synchronized (this) {
            createEntryPoint(sourceCode, inputFile, timeLimit, memoryLimit);
            log.info("entryPoint file has been created");

            FileHandler.saveUploadedFile(sourceCode, folder + "/" + file);
            FileHandler.saveUploadedFile(outputFile, folder + "/" + outputFile.getOriginalFilename());
            if (inputFile!= null) {
                FileHandler.saveUploadedFile(inputFile, folder + "/" + inputFile.getOriginalFilename());
            }
            log.info("File have been saved");
            try {
                log.info("Start building image");
                AtomicInteger status = new AtomicInteger(dockerService.buildImage(folder, imageName));
                if (status.get() == 0) {
                    log.info("Image has been built");
                } else {
                    throw new DockerException("Error while building image");
                }
            } finally {
                FileHandler.deleteFile(folder, file);
                FileHandler.deleteFile(folder, outputFile.getOriginalFilename());
                if (inputFile!= null)
                    FileHandler.deleteFile(folder, inputFile.getOriginalFilename());

            }
        }
        Result result = dockerService.executeCode(imageName, outputFile);
        String status = result.getStatus();
        log.info("Status response is" + status);
        return ResponseEntity.status(200).body(new Response(result.getOutput(), result.getExpectedOutput(), status,date));

    }
    private void createEntryPoint(MultipartFile sourceCode, MultipartFile inputFile, int timeLimit, int memoryLimit) {
        createPythonEntrypointFile(timeLimit, memoryLimit, inputFile);
    }
}

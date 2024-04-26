package ru.webency.compiler.service;

import org.springframework.web.multipart.MultipartFile;
import ru.webency.compiler.model.Result;

import java.io.IOException;

public interface DockerServiceInterface {
    int buildImage(String folder, String imageName) throws InterruptedException, IOException;
    Result executeCode(String imageName, MultipartFile outputFile);
    String getRunningContainers() throws IOException;
    String getRunningImages() throws IOException;
}

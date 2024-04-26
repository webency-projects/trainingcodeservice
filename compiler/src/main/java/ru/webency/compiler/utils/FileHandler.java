package ru.webency.compiler.utils;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Slf4j
public class FileHandler {

    public static void saveUploadedFile(MultipartFile file, String name) throws IOException {
        if (file.isEmpty()) return;
        byte[] bytes = file.getBytes();
        Path path = Paths.get(name);
        Files.write(path, bytes);
    }
    public static boolean deleteFile(String folder, String file) {
        if (folder != null && file!= null) {
            String fileName = folder + "/" + file;
            new File(fileName).delete();
            log.info("The file " + fileName + " has been deleted");
            return true;
        }
        return false;
    }
}

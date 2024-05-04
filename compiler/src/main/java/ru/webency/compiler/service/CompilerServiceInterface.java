package ru.webency.compiler.service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

public interface CompilerServiceInterface {
    ResponseEntity<Object> compile(
            MultipartFile outputFile,
            MultipartFile sourceCode,
            MultipartFile inputFile,
            int timeLimit,
            int memoryLimit) throws Exception;
}

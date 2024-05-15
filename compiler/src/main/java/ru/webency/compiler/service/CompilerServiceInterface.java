package ru.webency.compiler.service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;
import ru.webency.compiler.exceptions.CompilerException;
import ru.webency.compiler.model.Language;
import ru.webency.compiler.model.Request;

import java.io.IOException;

public interface CompilerServiceInterface {
    ResponseEntity<Object> compile(
            MultipartFile outputFile,
            MultipartFile sourceCode,
            MultipartFile inputFile,
            int timeLimit,
            int memoryLimit,
            Language language) throws CompilerException;

    ResponseEntity<Object> compile(Request request) throws CompilerException, IOException;
}

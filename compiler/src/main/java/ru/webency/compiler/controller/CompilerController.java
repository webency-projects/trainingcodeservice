package ru.webency.compiler.controller;

import lombok.AllArgsConstructor;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import ru.webency.compiler.exceptions.CompilerException;
import ru.webency.compiler.model.Language;
import ru.webency.compiler.model.Request;
import ru.webency.compiler.service.CompilerServiceInterface;

import java.io.IOException;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@AllArgsConstructor
@RequestMapping(value = "service/v1/compiler")
public class CompilerController {
    private CompilerServiceInterface compilerService;

    @RequestMapping(
            value = "python",
            method = RequestMethod.POST,
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Object> compilePython(
            @RequestPart(value="outputFile", required = true) MultipartFile outputFile,
            @RequestPart(value="sourceCode", required = true) MultipartFile sourceCode,
            @RequestPart(value = "inputFile", required = false) MultipartFile inputFile,
            @RequestParam(value = "timeLimit", required = true) int timeLimit,
            @RequestParam(value = "memoryLimit", required = true) int memoryLimit
    ) throws Exception {
        System.out.println(outputFile.toString());
        System.out.println(sourceCode.toString());
        return compilerService.compile(outputFile, sourceCode, inputFile, timeLimit, memoryLimit, Language.PYTHON);
    }
    @PostMapping("/json")
    public ResponseEntity<Object> compile(@RequestBody Request request) throws CompilerException, IOException {
        return compilerService.compile(request);
    }
}

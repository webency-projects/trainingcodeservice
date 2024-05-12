package ru.codeline.controllers.compiler;

import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import ru.codeline.dto.compiler.CompileResponse;
import ru.codeline.services.compiler.CompilerService;

@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/compiler")
public class CompilerController {

    private final CompilerService compilerService;

    @RequestMapping(
            value = "python",
            params = {"problemId"},
            method = RequestMethod.POST,
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public CompileResponse compile(
            @RequestPart(value = "sourceCode") MultipartFile sourceCode,
            @RequestParam(value = "problemId") Integer problemId) {

        return compilerService.compile(sourceCode, problemId);
    }
}

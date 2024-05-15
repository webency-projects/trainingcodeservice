package ru.codeline.services.compiler;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import ru.codeline.dto.compiler.CompileResponse;

@Service
public class CompilerService {
    private static final String URI_COMPILER_SERVICE = "http://localhost:5000/compiler?timeLimit=10&memoryLimit=500";

    public ResponseEntity<CompileResponse> compile(MultipartFile sourceCode, Integer problemId) {

        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        body.add("sourceCode", sourceCode);
        body.add("outputFile", sourceCode); // TODO: получить из базы ожидаемые данные
        body.add("inputFile", sourceCode); // TODO: получить из базы входные данные

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);
        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<CompileResponse> response = restTemplate
                .postForEntity(
                        URI_COMPILER_SERVICE,
                        requestEntity,
                        CompileResponse.class);

        return response;
    }
}

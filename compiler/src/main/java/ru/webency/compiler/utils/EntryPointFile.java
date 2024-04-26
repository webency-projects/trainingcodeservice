package ru.webency.compiler.utils;

import lombok.NoArgsConstructor;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;

@Slf4j
@NoArgsConstructor
public class EntryPointFile {
    public static final String PYTHON_COMMAND = "python3";

    @SneakyThrows
    public static void createPythonEntrypointFile(int timeLimit, int memoryLimit, MultipartFile inputFile) {
        String executionCommand = inputFile == null
                ? "timeout --signal=SIGTERM " + timeLimit + " " + PYTHON_COMMAND + " main.py" + "\n"
                : "timeout --signal=SIGTERM " + timeLimit + " " + PYTHON_COMMAND + " main.py" + " < " + inputFile.getOriginalFilename() + "\n";
        String content = "#!/usr/bin/env bash\n" +
                "ulimit -s " + memoryLimit + "\n" +
                executionCommand +
                "exit $?\n";
        OutputStream os;
        os = new FileOutputStream(new File("utility/entrypoint.sh"));
        os.write(content.getBytes(), 0, content.length());
        os.close();
    }
}

package ru.webency.compiler.model;

public enum Language {
    PYTHON("container_py", "main.py", "python3"),
    CPP("container_cpp", "main.cpp", "g++"),
    JAVA("container_java", "main.java", "javac");
    final String folder;
    final String file;
    final String command;
    Language(String folder, String file, String command) {
        this.folder = folder;
        this.file = file;
        this.command = command;
    }
    public String getFolder() {
        return folder;
    }
    public String getFile() {
        return file;
    }
    public String getCommand() {
        return command;
    }
}

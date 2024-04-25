package ru.webency.compiler.model;

public class Result {
    private String status;
    private String output;
    private String expectedOutput;

    public Result(String status, String output, String expectedOutput) {
        this.status = status;
        this.output = output;
        this.expectedOutput = expectedOutput;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getOutput() {
        return output;
    }

    public void setOutput(String output) {
        this.output = output;
    }

    public String getExpectedOutput() {
        return expectedOutput;
    }

    public void setExpectedOutput(String expectedOutput) {
        this.expectedOutput = expectedOutput;
    }
}

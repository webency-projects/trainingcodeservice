import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './CodeBlock.module.scss'
import {Editor} from "@monaco-editor/react";
// import {useState} from "react";
// import {Button, ButtonTheme} from "@shared/ui/Buttton/Button.tsx";
// import axios from "axios";


const language = "python"
const defaultCode = "# Ваш код"

interface CodeBlockProps {
    classname?: string;
    width: number;
}

const CodeBlock = (props: CodeBlockProps) => {
    const {classname = "", width} = props;

    // const [codeData, setCodeData] = useState<string | undefined>("")
    // const sendCode = async () => {
    //     if (codeData === undefined) return;
    //     const strBlob = new Blob([codeData], {type: 'text/x-python'});
    //     const ouptut = new Blob(["hello"], {type: 'text/plain'});
    //     const formData = new FormData();
    //     formData.append("sourceCode", strBlob, "main.py")
    //     formData.append("outputFile", ouptut, "output.txt")
    //
    //
    //     await axios.post("http://localhost:5000/api/v1/compiler/python",
    //         formData, {
    //             headers: {
    //                 "Content-Type": "multipart/form-data",
    //             },
    //             params: {
    //                 timeLimit: 10,
    //                 memoryLimit: 500,
    //             }
    //         }).then(res => {
    //         console.log(res.data)
    //     }).catch(err => {
    //         console.log(err.message)
    //     })
    // }


    return (
        <div className={cNames(cls.CodeBlock, {}, [classname])} style={{width: width}}>
            <Editor

                defaultLanguage={language}
                defaultValue={defaultCode}
                height={"100%"}
                theme={"vs-dark"}
                // onChange={(newValue) => {
                //     setCodeData(newValue)
                // }}
                options={{
                    wordWrap: 'on',
                    minimap: {enabled: false},
                    showUnused: false,
                    folding: false,
                    lineNumbersMinChars: 3,
                    fontSize: 16,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                }}
            />
        </div>
    )
}

export default CodeBlock;


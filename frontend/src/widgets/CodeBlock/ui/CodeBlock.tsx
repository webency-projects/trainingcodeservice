import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './CodeBlock.module.scss'
import {Editor} from "@monaco-editor/react";
import {useState} from "react";
import {Button, ButtonTheme} from "@shared/ui/Buttton/Button.tsx";
import axios, {head} from "axios";

const language = "python"
const defaultCode = "# Ваш код"

interface CodeBlockProps {
    classname?: string;
    width: number;
}

const CodeBlock = (props: CodeBlockProps) => {
    const {classname = "", width} = props;

    const [codeData, setCodeData] = useState<string | undefined>("")
    const sendCode = async () => {
        const strBlob = new Blob([codeData], {type: 'text/plain'});
        const formData = new FormData();
        formData.append("input", strBlob, "input.txt")

        await axios.post("http://127.0.0.1:5000/api/v1/compiler/python",
            {
                input: formData
            }, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }
}

return (
    <div className={cNames(cls.CodeBlock, {}, [classname])} style={{width: width}}>
        <Editor

            defaultLanguage={language}
            defaultValue={defaultCode}
            height={"100%"}
            theme={"vs-dark"}
            onChange={(newValue) => {
                setCodeData(newValue)
            }}
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
        <div>
            <Button
                onClick={sendCode}
                theme={ButtonTheme.PRIMARY}
            >Проверить</Button>
        </div>
    </div>
)

export default CodeBlock;
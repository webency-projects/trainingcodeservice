import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './CodeBlock.module.scss'
import {Editor} from "@monaco-editor/react";


interface CodeBlockProps {
    classname?: string;
    width: number;
}

const CodeBlock = (props: CodeBlockProps) => {
    const {classname = "", width} = props;
    return (
        <div className={cNames(cls.CodeBlock, {}, [classname])} style={{width: width}}>
            <Editor
                defaultLanguage={"python"}
                defaultValue={"# Ваш код"}
                height={"100%"}
                theme={"vs-dark"}
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
                
            </div>
        </div>
    )
}

export default CodeBlock;
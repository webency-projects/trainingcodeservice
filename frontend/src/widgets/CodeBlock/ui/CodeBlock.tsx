import {cNames} from "@shared/lib/cNames/cNames.ts";
import cls from './CodeBlock.module.scss'
import {Editor} from "@monaco-editor/react";



const language = "python"
const defaultCode = "# Ваш код"

interface CodeBlockProps {
    classname?: string;
    width: number;
}

const CodeBlock = (props: CodeBlockProps) => {
    const {classname = "", width} = props;

    // const [codeData, setCodeData] = useState<string | undefined>("")
    // const sendCode = () => {
    //     const obj = {
    //         sourceCode: codeData,
    //         expectedOutput: "Hello world",
    //         input: "Hello",
    //         language: "PYTHON",
    //         timeLimit: 10,
    //         memoryLimit: 500
    //     }
    //     axios.post("http://localhost:5000/service/v1/compiler/json", obj)
    //         .then(res => console.log(res.data))
    //         .catch(err => console.error(err))
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


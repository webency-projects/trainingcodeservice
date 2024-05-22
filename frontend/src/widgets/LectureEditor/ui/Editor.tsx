import {useEffect, useState} from "react";
import ReactQuill from "react-quill";
import './quiltheme.css';

interface EditorProps {
    retrieveData: (data: string) => void;
    clear: boolean;
    onCleared: () => void;
}
const modules = {
    toolbar: [
        [{ 'header': [2, 3, false] }],
        ['bold', 'italic', 'underline' , 'blockquote', 'code-block'],
        [{'list': 'ordered'}, {'list': 'bullet'}],
        ['link', 'image'],
    ],
}
const formats = [
    'header',
    'bold', 'italic', 'underline', 'blockquote', 'code-block',
    'list', 'bullet',
    'link', 'image'
]
const Editor = ({retrieveData, clear, onCleared}: EditorProps) => {
    const [value, setValue] = useState<string>('');

    useEffect(() => {
        retrieveData(value);

    }, [value]);
    useEffect(() => {
        if (clear) {
            setValue("")
            onCleared();
        }
    }, [clear]);
    return (
        <ReactQuill theme="snow"
                    modules={modules}
                    formats={formats}
                    value={value}
                    placeholder={"Введите текст..."}
                    onChange={setValue}/>
    );
}

export default Editor;
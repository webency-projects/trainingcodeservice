import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './AddSection.module.scss'
import {Input} from "@shared/ui/Input/Input.tsx";
import {Editor} from "@widgets/LectureEditor";
import {Button} from "@shared/ui/Buttton/Button.tsx";
import {useState} from "react";
import {Section} from "@entities/Lecture/model/LectureModel.ts";

interface AddSectionProps {
    classname?: string;
    addSection: (section: Section) => void;
}

const AddSection = (props: AddSectionProps) => {
    const {classname = "", addSection} = props;
    const [title, setTitle] = useState<string>("")
    const [order, setOrder] = useState<number>(1)
    const [body, setBody] = useState<string>("")
    const [isClear, setIsClear] = useState<boolean>(false)
    const handleData = () => {
        const section = {order, title,  body}
        addSection(section)
        setTitle("")
        setOrder(o => o++)
        setIsClear(true)
    }
    return (
        <div className={cNames(cls.AddSection, {}, [classname])}>
            <h3>Название раздела</h3>
            <Input value={title} onChange={e => setTitle(e.target.value)}/>
            <Editor retrieveData={data => setBody(data)} clear={isClear} isCleared={() => setIsClear(false)}/>
            <Button className={cls.button} onClick={handleData}>Добавить раздел</Button>
        </div>
    )
}

export default AddSection;
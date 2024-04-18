import {cNames} from "@shared/lib/cNames/cNames.ts";
import cls from './Lectures.module.scss'
import Card from "@widgets/Dashboard/Teacher/Card/Card.tsx";
import {Toolbar} from "@widgets/Dashboard/Teacher/Toolbar";
import {Button} from "@shared/ui/Buttton/Button.tsx";
import {Input} from "@shared/ui/Input/Input.tsx";
import {useState} from "react";
import {Editor} from "@widgets/LectureEditor";
import {LectureSectionType} from "@widgets/LectureEditor/type/LectrureType.ts";


interface LecturesProps {
    classname?: string;
}



const Lectures = (props: LecturesProps) => {
    const {classname = ""} = props;
    const [isClear, setIsClear] = useState<boolean>(false)
    const [lectureTitle, setLectureTitle] = useState<string>("")
    const [showEditor, setShowEditor] = useState<boolean>(false)
    const [sectionOfLecture, setSectionOfLecture] = useState("")

    const [sectionTitle, setSectionTitle] = useState("")

    const [sections, setSections] = useState<LectureSectionType[]>([])

    const addSection = () => {
        setSections([...sections, {title: sectionTitle, content: sectionOfLecture}])
        setSectionTitle("")
        setIsClear(true)
    }
    return (
        <div className={cNames(cls.Lectures, {}, [classname])}>
            <Card>
                <Toolbar>
                    <div>
                        <Input value={lectureTitle} onChange={e => {
                            setLectureTitle(e.target.value)
                            setIsClear(false)
                        }}/>
                    </div>
                    <Button onClick={() => setShowEditor(true)}>Добавить лекцию</Button>
                </Toolbar>
            </Card>
            <div className={cls.content}>

                {showEditor && (
                    <div className={cls.sectionWrapper}>
                        <h3>Название раздела</h3>
                        <Input value={sectionTitle} onChange={e => setSectionTitle(e.target.value)}/>
                        <Editor retrieveData={data => setSectionOfLecture(data)} clear={isClear}/>
                        <Button className={cls.button} onClick={addSection}>Добавить раздел</Button>
                    </div>
                )}

                <div className={cls.preview} dangerouslySetInnerHTML={{__html: sections.map(i => i.content)}}>

                </div>

            </div>

        </div>
    )
}

export default Lectures;
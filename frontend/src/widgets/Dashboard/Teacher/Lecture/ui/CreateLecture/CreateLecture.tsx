import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './CreateLecture.module.scss'
import {Input} from "@shared/ui/Input/Input.tsx";
import {Editor} from "@widgets/LectureEditor";
import {useState} from "react";
import {Button, ButtonTheme} from "@shared/ui/Buttton/Button.tsx";
import {useAppDispatch} from "@app/store/hooks.ts";
import {
    addLecture,
    addSection,
    deleteLecture,
    saveLecture
} from "@widgets/Dashboard/Teacher/Lecture/store/lectureSlice.ts";


interface CreateLectureProps {
    classname?: string;
}

const CreateLecture = (props: CreateLectureProps) => {
    const {classname = ""} = props;
    const [lecture, setLecture] = useState({title:"", description: ""})
    const [section, setSection] = useState({ order: 0, title: "", content: ""})
    const [isCleared, setIsCleared] = useState(false)
    const dispatch = useAppDispatch();
    const onClear = () => {
        setIsCleared(false)
    }
    const saveHandler = () => {
        setIsCleared(true)
        setLecture({title:"", description: ""})
        setSection({ order: 0, title: "", content: ""})
        dispatch(saveLecture())
    }
    const handleSection = () => {
        dispatch(addLecture(lecture));
        const currentSection = section.order + 1;
        const newSection = {
            order: currentSection,
            title: section.title,
            content: section.content
        }
        dispatch(addSection(newSection))
        setSection({ order: currentSection, title: "", content: ""})
        setIsCleared(true);
    }

    return (
        <div className={cNames(cls.CreateLecture, {}, [classname])}>
            <div className={cls.wrapper}>
                <div className={cls.group}>
                    <h2>Название лекции</h2>
                    <Input
                        onChange={e => setLecture({...lecture, title: e.target.value})}
                        value={lecture.title}/>
                </div>
                <div className={cls.group}>
                    <h2>Описание</h2>
                    <Input
                        onChange={e => setLecture({...lecture, description: e.target.value})}
                        value={lecture.description}/>
                </div>
            </div>
            <div className={cls.wrapper}>
                <div className={cls.group}>
                    <h2>Название раздела</h2>
                    <Input onChange={e => setSection({...section, title: e.target.value})}
                           value={section.title}/>
                </div>
                <div className={cls.group}>
                    <h2>Содержание</h2>
                    <Editor retrieveData={data => setSection({...section, content: data})}
                            clear={isCleared}
                            onCleared={onClear}/>
                </div>
            </div>
            <div className={cls.wrapper}>
                <div className={cls.controls}>
                    <Button onClick={() => dispatch(deleteLecture())} theme={ButtonTheme.CLEAR}>Отменить</Button>
                    <Button onClick={saveHandler}>Сохранить</Button>
                    <Button onClick={handleSection}>Добавить раздел</Button>
                </div>
            </div>
        </div>
    )
}

export default CreateLecture;
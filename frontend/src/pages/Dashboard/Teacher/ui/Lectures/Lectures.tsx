import {cNames} from "@shared/lib/cNames/cNames.ts";
import cls from './Lectures.module.scss'
import Card from "@widgets/Dashboard/Teacher/Card/Card.tsx";
import {Toolbar} from "@widgets/Dashboard/Teacher/Toolbar";
import {Button} from "@shared/ui/Buttton/Button.tsx";

import LecturePreview from "@shared/ui/LecturePreview/ui/LecturePreview.tsx";
import {LectureModel} from "@entities/Lecture/model/LectureModel.ts";
import {AddLecture} from "@widgets/AddLecture";
import { useState } from 'react';

interface LecturesProps {
    classname?: string;
}

const initLecture: LectureModel = {
    title: "",
    description: "",
    sections: []
}
const Lectures = (props: LecturesProps) => {
    const {classname = ""} = props;
    const [lecture, setLecture] = useState<LectureModel>(initLecture)
    const [showEditor, setShowEditor] = useState<boolean>(false)
    const [lectures, setLectures] = useState([])

    return (
        <div className={cNames(cls.Lectures, {}, [classname])}>
            <Card>
                <Toolbar>
                    <div>

                    </div>
                    <Button onClick={() => setShowEditor(true)}>Добавить лекцию</Button>
                </Toolbar>
            </Card>
            <div className={cls.content}>
                {showEditor && (
                    <AddLecture lecture={lecture} setLectures={setLecture}/>
                )}
                <LecturePreview lecture={lecture}/>
            </div>

        </div>
    )
}

export default Lectures;

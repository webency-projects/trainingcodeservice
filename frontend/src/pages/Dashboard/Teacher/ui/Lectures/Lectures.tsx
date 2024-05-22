import {cNames} from "@shared/lib/cNames/cNames.ts";
import cls from './Lectures.module.scss'
import {AllLectures, CreateLecture, PreviewLecture} from "@widgets/Dashboard/Teacher/Lecture";
import {Button} from "@shared/ui/Buttton/Button.tsx";
import {useState} from "react";
interface LecturesProps {
    classname?: string;
}
const Lectures = (props: LecturesProps) => {
    const {classname = ""} = props;
    const [isCreateView, setIsCreateView] = useState(false)

    return (
        <div className={cNames(cls.Lectures, {}, [classname])}>
            <div className={cls.panel}>
                <h1>Управление лекциями</h1>
                <div className={cls.controls}>
                    <Button onClick={() => setIsCreateView(false)}>Все лекции</Button>
                    <Button onClick={() => setIsCreateView(true)}>Создать лекцию</Button>
                </div>
            </div>
            {isCreateView ? (
                <div className={cls.wrapper}>
                    <CreateLecture/>
                    <PreviewLecture/>
                </div>
            ) : (
                <AllLectures />
            )}
        </div>
    )
}

export default Lectures;

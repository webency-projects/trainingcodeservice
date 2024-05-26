import {cNames} from "@shared/lib/cNames/cNames.ts";
import cls from './Lectures.module.scss'
import {AllLectures, CreateLecture, PreviewLecture} from "@widgets/Dashboard/Teacher/Lecture";
import {Button} from "@shared/ui/Buttton/Button.tsx";
import {useState} from "react";
import PanelWithControl from "@shared/ui/PanelWithControl/PanelWithControl.tsx";
interface LecturesProps {
    classname?: string;
}
const Lectures = (props: LecturesProps) => {
    const {classname = ""} = props;
    const [isCreateView, setIsCreateView] = useState(false)

    return (
        <div className={cNames(cls.Lectures, {}, [classname])}>
            <PanelWithControl title={"Управление лекциями"}>
                <Button onClick={() => setIsCreateView(false)}>Все лекции</Button>
                <Button onClick={() => setIsCreateView(true)}>Создать лекцию</Button>
            </PanelWithControl>
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

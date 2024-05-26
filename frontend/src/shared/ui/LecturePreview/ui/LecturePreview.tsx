import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './LecturePreview.module.scss'
import {LectureModel} from "@entities/Lecture/model/LectureModel.ts";
import Questionary from "@widgets/Dashboard/Teacher/Questionary/ui/Questionary.tsx";

interface LecturePreviewProps {
    classname?: string;
    lecture: LectureModel;
}

const LecturePreview = (props: LecturePreviewProps) => {
    const {classname = "", lecture} = props;
    return (
        <div className={cNames(cls.LecturePreview, {}, [classname])}>
            <h1>{lecture.title}</h1>
            {lecture.description && <p>{lecture.description}</p>}
            {lecture.sections && lecture.sections.map(section => (
                <section key={section.order}>
                    <h2>{section.title}</h2>
                    <div dangerouslySetInnerHTML={{__html: section.body}}/>
                </section>
            ))}
            <Questionary/>
        </div>
    )
}

export default LecturePreview;
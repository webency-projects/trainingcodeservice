import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './PreviewLecture.module.scss'
import {useAppSelector} from "@app/store/hooks.ts";
import Section from "./Section.tsx";

interface PreviewLectureProps {
    classname?: string;
}

const PreviewLecture = (props: PreviewLectureProps) => {
    const {classname = ""} = props;
    const {title, description, sections} = useAppSelector(state => state.editorLectures);
    return (
        <div className={cNames(cls.PreviewLecture, {}, [classname])}>

            <h1>{title}</h1>
            <p>{description}</p>
            {sections && sections.map((section, index) => (
                <Section
                    key={index}
                    order={section.order}
                    title={section.title}
                    content={section.content}
                />
            ))}
        </div>
    )
}



export default PreviewLecture;
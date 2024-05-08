import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './LecturePage.module.scss'
import LecturePreview from "@shared/ui/LecturePreview/ui/LecturePreview.tsx";
import {LectureModel} from "@entities/Lecture/model/LectureModel.ts";


interface LecturePageProps {
    classname?: string;
}

const LecturePage = (props: LecturePageProps) => {
    const {classname = ""} = props;

    const data:LectureModel = {}

    return (
        <div className={cNames(cls.LecturePage, {}, [classname])}>
            <div
                className={cls.lectureContent}>
                <LecturePreview lecture={data}/>
            </div>

        </div>
    )
}

export default LecturePage;
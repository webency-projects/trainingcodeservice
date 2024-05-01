import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './LecturePage.module.scss'
import data from "@shared/assets/mocks/lecturesData.json"
import LecturePreview from "@shared/ui/LecturePreview/ui/LecturePreview.tsx";


interface LecturePageProps {
    classname?: string;
}

const LecturePage = (props: LecturePageProps) => {
    const {classname = ""} = props;

    return (
        <div className={cNames(cls.LecturePage, {}, [classname])}>
            <div
                className={cls.lectureContent}>
                <LecturePreview lecture={data.lecture}/>
            </div>

        </div>
    )
}

export default LecturePage;
import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './LecturePage.module.scss'
import lecture from "@shared/assets/mocks/lecture.json"
interface LecturePageProps {
    classname?: string;
}

const LecturePage = (props: LecturePageProps) => {
    const {classname = ""} = props;

    const rawHTML = lecture.lecture;
    return (
        <div className={cNames(cls.LecturePage, {}, [classname])}>
            <div
                className={cls.lectureContent}
                dangerouslySetInnerHTML={{__html: rawHTML}}>
            </div>

        </div>
    )
}

export default LecturePage;
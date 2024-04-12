import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './Lectures.module.scss'

interface LecturesProps {
    classname?: string;
}

const Lectures = (props: LecturesProps) => {
    const {classname = ""} = props;
    return (
        <div className={cNames(cls.Lectures, {}, [classname])}>
            Lectures
        </div>
    )
}

export default Lectures;
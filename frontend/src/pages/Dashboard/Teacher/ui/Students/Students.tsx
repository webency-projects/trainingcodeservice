import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './Students.module.scss'

interface StudentsProps {
    classname?: string;
}

const Students = (props: StudentsProps) => {
    const {classname = ""} = props;
    return (
        <div className={cNames(cls.Students, {}, [classname])}>
            Students
        </div>
    )
}

export default Students;
import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './Tasks.module.scss'

interface TasksProps {
    classname?: string;
}

const Tasks = (props: TasksProps) => {
    const {classname = ""} = props;
    return (
        <div className={cNames(cls.Tasks, {}, [classname])}>
            Tasks
        </div>
    )
}

export default Tasks;
import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './Groups.module.scss'

interface GroupsProps {
    classname?: string;
}

const Groups = (props: GroupsProps) => {
    const {classname = ""} = props;
    return (
        <div className={cNames(cls.Groups, {}, [classname])}>
            Groups
        </div>
    )
}

export default Groups;
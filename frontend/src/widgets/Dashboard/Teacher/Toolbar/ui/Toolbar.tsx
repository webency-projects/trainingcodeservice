import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './Toolbar.module.scss'
import {ReactNode} from "react";

interface ToolbarProps {
    classname?: string;
    children: ReactNode;
}

const Toolbar = (props: ToolbarProps) => {
    const {classname = "", children} = props;
    return (
        <div className={cNames(cls.Toolbar, {}, [classname])}>
            {children}
        </div>
    )
}

export default Toolbar;
import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './Console.module.scss'

interface ConsoleProps {
    classname?: string;
}

const Console = (props: ConsoleProps) => {
    const {classname = ""} = props;
    return (
        <div className={cNames(cls.Console, {}, [classname])}>
            Console
        </div>
    )
}

export default Console;
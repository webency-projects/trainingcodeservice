import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './Console.module.scss'

const MAX_OUTPUT_LINES = 3;
interface ConsoleProps {
    classname?: string;
    data: string;
    isError: boolean;
}
const Console = (props: ConsoleProps) => {
    const {classname = "", data, isError = false} = props;
    const outputHandler = (data: string) => {
        const lines = data.split("\n\r");
        if (lines.length > MAX_OUTPUT_LINES) {
            lines.splice(0, MAX_OUTPUT_LINES);
            lines.push(". . .");
        }
        return lines;
    };

    return (
        <div className={cNames(cls.Console, {}, [classname])}>
            {data && outputHandler(data).map((elem, index) =>
                <p key={index}
                   className={isError ? cls.error : cls.output}
                >{elem}</p>
            )}
        </div>
    )
}

export default Console;
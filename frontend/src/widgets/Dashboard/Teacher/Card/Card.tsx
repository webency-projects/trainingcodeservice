import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './Card.module.scss'
import {ReactNode} from "react";

interface CardProps {
    classname?: string;
    children: ReactNode;
}

const Card = (props: CardProps) => {
    const {classname = "", children} = props;
    return (
        <div className={cNames(cls.Card, {}, [classname])}>
            {children}
        </div>
    )
}

export default Card;
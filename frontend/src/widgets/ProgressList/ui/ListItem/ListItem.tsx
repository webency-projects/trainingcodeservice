import {cNames} from "@shared/lib/cNames/cNames.ts";
import { AiOutlineCheckCircle, AiOutlineLock  } from "react-icons/ai";

import cls from './ListItem.module.scss'

interface ListItemProps {
    classname?: string;
    title: string;
    description: string;
    isAvailable?: boolean;
    onClick?: () => void;
}

const ListItem = (props: ListItemProps) => {
    const {
        classname = "",
        title,
        description,
        isAvailable = false,
        onClick
    } = props;
    const shortDescription = (value: string, maxValue: number) => {
        return value.length > maxValue ? value.substring(0, maxValue) + "..." : value;
    }
    return (
        <li className={cNames(cls.ListItem, {}, [classname])} onClick={onClick}>
            <div className={cls.content}>
                <h2>{title}</h2>
                <p>{shortDescription(description, 30)}</p>
            </div>
            <div className={cls.status}>
                {isAvailable ? <AiOutlineCheckCircle className={cls.isActive} /> : <AiOutlineLock />}
            </div>
        </li>
    )
}

export default ListItem;
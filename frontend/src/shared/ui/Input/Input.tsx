import cls from './Input.module.scss';
import {InputHTMLAttributes} from "react";
import {cNames} from "@shared/lib/cNames/cNames.ts";
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    className?: string;
    filled?: boolean;
}

export const Input = (props:InputProps) => {
    const {
        className = '',
        filled = true,
        type = 'text',
        ...other
    } = props;

    return (
        <input
            type={type}
            className={cNames(cls.Input, {[cls.filled]: filled}, [className])}
            {...other}
        />

    );
};

import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './Button.module.scss'
import {ButtonHTMLAttributes, FC} from "react";

export enum ButtonTheme {
    CLEAR = 'clear',
    PRIMARY = 'primary',
    SUCCESS = 'success',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className = '',
        children,
        disabled = false,
        theme = ButtonTheme.PRIMARY,
        ...other
    } = props;
    return (
        <button
            type='button'
            className={cNames(cls.Button, {[cls.disable]:disabled}, [className, cls[theme]])}
            disabled={disabled}
            {...other}
        >
            {children}
        </button>
    );
};

import cls from './PanelWithControl.module.scss'
import {ReactNode} from "react";

interface PanelWithControlProps {
    children?: ReactNode;
    title: string;
}

const PanelWithControl = ({title, children}: PanelWithControlProps) => {
    return (
        <div className={cls.panel}>
            <h1>{title}</h1>
            {children && (
                <div className={cls.controls}>
                    {children}
                </div>
            )}
        </div>
    )
}

export default PanelWithControl;
import {cNames} from "@shared/lib/cNames/cNames.ts";
import cls from './ExecutionControlPanel.module.scss';
import {BsFillPlayFill, BsFillStopFill, BsPauseFill} from "react-icons/bs";
import {useState} from "react";
interface ExecutionControlPanelProps {
    className?: string;
}

export const ExecutionControlPanel = ({className=""}:ExecutionControlPanelProps) => {
    const [isPlay, setPlay] = useState(false);

    const toggle = () => {
        setPlay(prev => !prev)
    }
    return (
        <div className={cNames(cls.controlPanel, {}, [className])}>
                {isPlay
                    ? (<BsPauseFill size={20} className={cls.pauseIcon}/>)
                    : (<BsFillPlayFill onClick={toggle} size={20} className={cls.playIcon}/>)
                }
                <BsFillStopFill onClick={toggle} size={20} className={cls.stopIcon}/>
        </div>
    );
};

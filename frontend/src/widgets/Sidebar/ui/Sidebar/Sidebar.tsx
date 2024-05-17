
import cls from './Sidebar.module.scss';

import {useCallback, useState} from "react";
import {BsPlusCircle, BsTextIndentLeft, BsTextIndentRight} from "react-icons/bs";
import {cNames} from "@shared/lib/cNames/cNames.ts";

import {AddElement, TreeElement} from "@widgets/TreeElement";
import {Button, ButtonTheme} from "@shared/ui/Buttton/Button.tsx";


interface SidebarProps {
    className?: string;
}

export const Sidebar = (props:SidebarProps) => {
    const {
        className = '',
    } = props;
    const [isCollapse, setCollapsed] = useState(true);


    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div className={cNames(cls.Sidebar,
            {[cls.isCollapse]: isCollapse},
            [className])}>
            <div className={cNames(cls.foldersPanel,{}, [])}>
                <TreeElement />
            </div>
            <div className={cNames(cls.controlPanel,{}, [])}>
                <Button onClick={onToggle} theme={ButtonTheme.CLEAR}>
                    { isCollapse ? <BsTextIndentRight size={25}/> : <BsTextIndentLeft size={25}/>}
                </Button>
                <Button theme={ButtonTheme.CLEAR}>
                    <BsPlusCircle size={20} />
                </Button>
            </div>
        </div>
    );
};

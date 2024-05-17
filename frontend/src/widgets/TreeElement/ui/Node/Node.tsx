import cls from './Node.module.scss';
import {BsChevronDown, BsChevronRight, BsFileEarmarkCode, BsFolder} from "react-icons/bs";
import {TreeModel} from "../../model/TreeModel.ts";
import {cNames} from "@shared/lib/cNames/cNames.ts";
import {Button, ButtonTheme} from "@shared/ui/Buttton/Button.tsx";


interface NodeProps {
    className?: string;
    item?: TreeModel;
    hasChildren?: boolean;
    level: number;
    onToggle: () => void;
    selected: boolean;
}

export const Node = (props: NodeProps) => {
    const {
        className = '',
        item,
        hasChildren,
        level,
        selected,
        onToggle,
    } = props;

    return (
        <div
            className={cNames(cls.Node, {}, [className])}
            style={{paddingLeft: `${level * 16}px`}}
        >
            {hasChildren && (
                <Button theme={ButtonTheme.CLEAR} onClick={onToggle}>
                    {selected ?<BsChevronDown size={12} /> : <BsChevronRight size={12} /> }
                </Button>
            )}
            {hasChildren ? <BsFolder size={16} className={cls.IconFolder}/> : <BsFileEarmarkCode size={16} className={cls.Icon}/>}
            {<Button theme={ButtonTheme.CLEAR}>{item?.label}</Button>}
        </div>
    );
};

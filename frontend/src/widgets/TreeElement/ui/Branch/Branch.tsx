import {useState} from "react";
import {Node} from "../Node/Node";
import {TreeModel} from "../../model/TreeModel.ts";
interface BranchProps {
    className?: string;
    item?: TreeModel;
    level: number;
}

export const Branch = ({item, level}:BranchProps) => {
    const [selected, setSelected] = useState(item?.selected ?? false)
    const hasChildren = item?.children && item.children.length !== 0;

    const renderBranches = () => {
        if (hasChildren) {
            const newLevel = level + 1;
            return item?.children?.map((child) => (
                <Branch key={child.id} item={child} level={newLevel}/>
            ))
        }
        return null;
    }
    const toggleSelected = () => {
        setSelected(prev => !prev);
    }

    return (
        <>
            <Node
                selected={selected}
                item={item}
                hasChildren={hasChildren}
                level={level}
                onToggle={toggleSelected}
            />
            {selected && renderBranches()}
        </>
    );
};


import cls from './TreeElement.module.scss';
// import {Branch} from "../Branch/Branch";

// import {useAppSelector} from "src/app/hooks/redux.ts";
import {cNames} from "@shared/lib/cNames/cNames.ts";

interface TreeFolderProps {
    className?: string;
}

export const TreeElement = ({className=''}:TreeFolderProps) => {
    // const {TreeNodes} = useAppSelector(state => state.treeReducer)
    return (
        <div className={cNames(cls.TreeFolder, {}, [className])}>
            {/*{TreeNodes.map((item) => <Branch key={item.id} item={item} level={0} />)}*/}
        </div>
    );
};

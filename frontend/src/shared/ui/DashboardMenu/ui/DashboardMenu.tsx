import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './DashboardMenu.module.scss'
import {menuData} from "../data/MenuData.ts";

interface DashboardMenuProps {
    classname?: string;
}

const DashboardMenu = (props: DashboardMenuProps) => {
    const {classname = ""} = props;

    return (
        <ul className={cNames(cls.DashboardMenu, {}, [classname])}>
            {menuData.map((section, index) => (
                <li key={index} className={cls.menuItem}>
                    <div className={cls.menuItemText}>{section.label}</div>
                    <ul className={cls.submenu}>
                        {section.items && section.items.map(item => (
                            <li key={item.to}>{item.label}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    )
}

export default DashboardMenu;
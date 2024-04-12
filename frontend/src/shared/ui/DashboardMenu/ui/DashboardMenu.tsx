import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './DashboardMenu.module.scss'
import {Link} from "react-router-dom";
import {SidebarDataType} from "@shared/ui/DashboardMenu";


interface DashboardMenuProps {
    classname?: string;
    data: SidebarDataType;
}

const DashboardMenu = (props: DashboardMenuProps) => {
    const {classname = "", data} = props;
    return (
        <ul className={cNames(cls.DashboardMenu, {}, [classname])}>
            {data.map((section, index) => (
                <li key={index} className={cls.menuItem}>
                    <div className={cls.menuItemText}>{section.label}</div>
                    <ul className={cls.submenu}>
                        {section.items && section.items.map(item => (
                            <li key={item.to}>
                                <Link to={item.to} relative="path">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    )
}

export default DashboardMenu;
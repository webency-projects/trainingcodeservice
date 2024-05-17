import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './Navbar.module.scss'
import {ThemeSwitcher} from "@shared/ui/ThemeSwitcher";
import {GiBrokenWall} from "react-icons/gi";
import {ExecutionControlPanel} from "@features/ExecutionControlPanel/ExecutionControlPanel.tsx";

interface NavbarProps {
    classname?: string;
}

const Navbar = (props: NavbarProps) => {
    const {classname = ""} = props;
    return (
        <div className={cNames(cls.Navbar, {}, [classname])}>
            <div className={cls.navbarLogo}>
                <GiBrokenWall/> CodingLine
            </div>
            <ExecutionControlPanel />
            <div className={cls.navbarMenu}>
                <ThemeSwitcher/>
            </div>
        </div>
    )
}

export default Navbar;
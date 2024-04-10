import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './Navbar.module.scss'

interface NavbarProps {
    classname?: string;
}

const Navbar = (props: NavbarProps) => {
    const {classname = ""} = props;
    return (
        <div className={cNames(cls.Navbar, {}, [classname])}>
            Navbar
        </div>
    )
}

export default Navbar;
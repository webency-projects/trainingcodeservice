import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './Layout.module.scss'
import {Outlet} from "react-router-dom";
import {GiBrokenWall} from "react-icons/gi";
import {Button, ButtonTheme} from "@shared/ui/Buttton/Button.tsx";
import {BsList} from "react-icons/bs";
import {useState} from "react";
import {DashboardMenu} from "@shared/ui/DashboardMenu";
import {menuData} from "@pages/Dashboard/Teacher";
import {SlLogout} from "react-icons/sl";


interface LayoutProps {
    classname?: string;
}

const Layout = (props: LayoutProps) => {
    const {classname = ""} = props;
    const [isShow, setIsShow] = useState(false)
    return (
        <div className={cNames(cls.Layout, {}, [classname])}>
            <div className={cls.top}>
                <div className={cls.topLogo}><GiBrokenWall/> CodingLine</div>
                <Button
                    theme={ButtonTheme.CLEAR}
                    className={cls.topButton}
                    onClick={() => setIsShow(p => !p)}>
                    <BsList/>
                </Button>
                <div className={cls.topMenu}>
                    <Button className={cls.topMenuButton}>Профиль</Button>
                    <Button className={cls.topMenuButton}>Настройки</Button>
                </div>
            </div>
            <div className={cNames(cls.sidebar, {[cls.isShowBar]: isShow}, [])}>
                <DashboardMenu data={menuData}/>
                <div className={cls.logout}> <SlLogout /> Выйти</div>
            </div>
            <div className={cNames(cls.mainContainer, {[cls.isFull]: isShow}, [])}>
                <div className={cls.main}>
                    <Outlet/>
                </div>
                <div className={cls.footer}><GiBrokenWall/> CodingLine</div>
            </div>
        </div>
    )
}

export default Layout;
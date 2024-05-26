import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './Layout.module.scss'
import {Outlet} from "react-router-dom";
import {GiBrokenWall} from "react-icons/gi";
import {Button, ButtonTheme} from "@shared/ui/Buttton/Button.tsx";
import {BsList} from "react-icons/bs";
import {useState} from "react";
import {DashboardMenu, SidebarDataType} from "@shared/ui/DashboardMenu";
import {SlLogout} from "react-icons/sl";
import { LuSettings } from "react-icons/lu";
import { PiUserCircle } from "react-icons/pi";
interface LayoutProps {
    classname?: string;
    sidebarData: SidebarDataType
}

const Layout = (props: LayoutProps) => {
    const {classname = "", sidebarData} = props;
    const [isShow, setIsShow] = useState(true)
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
                    <Button theme={ButtonTheme.CLEAR}>
                        <PiUserCircle className={cls.icon} size={28} />
                    </Button>
                    <Button theme={ButtonTheme.CLEAR}>
                        <LuSettings className={cls.icon} size={24} />
                    </Button>
                </div>
            </div>
            <div className={cNames(cls.sidebar, {[cls.isShowBar]: isShow}, [])}>
                <DashboardMenu data={sidebarData}/>
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
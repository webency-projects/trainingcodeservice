import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './TeacherDashboard.module.scss'
import {Button} from "@shared/ui/Buttton/Button.tsx";


interface TeacherDashboardProps {
    classname?: string;
}

const TeacherDashboard = (props: TeacherDashboardProps) => {
    const {classname = ""} = props;
    return (
        <div className={cNames(cls.TeacherDashboard, {}, [classname])}>
            <div className={cls.topbar}>
                <div className={cls.topbarLogo}>LineCoding</div>
                <Button className={cls.topbarButton}>click</Button>
                <div className={cls.topbarMenu}>
                    <Button className={cls.topbarMenuButton}>Профиль</Button>
                    <Button className={cls.topbarMenuButton}>Настройки</Button>
                </div>
            </div>
            <div className={cls.sidebar}>
                <ul className={cls.menu}>
                    <li className={cls.menuItem}>
                        <div className={cls.menuItemText}>Управление курсом</div>
                        <ul className={cls.submenu}>
                            <li>Главная</li>
                            <li>Проекты</li>
                            <li>Лекции</li>
                            <li>Тесты</li>
                        </ul>
                    </li>
                    <li className={cls.menuItem}>
                        <div className={cls.menuItemText}>Управление студентами</div>
                        <ul className={cls.submenu}>
                            <li>Студенты</li>
                            <li>Группы</li>
                            <li>Статистика</li>
                        </ul>
                    </li>
                    <li className={cls.menuItem}>
                        <div className={cls.menuItemText}>Дополнительно</div>
                        <ul className={cls.submenu}>
                            <li>Профиль</li>
                            <li>Выйти</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className={cls.mainContainer}>
                <div className={cls.main}>main</div>
                <div className={cls.footer}>LineCoding</div>
            </div>
        </div>
    )
}

export default TeacherDashboard;
import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './TeacherDashboard.module.scss'
import PanelWithControl from "@shared/ui/PanelWithControl/PanelWithControl.tsx";


interface TeacherDashboardProps {
    classname?: string;
}

const TeacherDashboard = (props: TeacherDashboardProps) => {
    const {classname = ""} = props;
    return (
        <div className={cNames(cls.TeacherDashboard, {}, [classname])}>
            <PanelWithControl title={"Панель управления"}/>
            <div className={cls.wrapper}>
                <div className={cls.panelCard}>
                    <h2>Курсы</h2>
                    <div>
54

                    </div>
                </div>
                <div className={cls.panelCard}>
                    <h2>Лекции</h2>
                    <div>

                    </div>
                </div>
                <div className={cls.panelCard}>
                    <h2>Тесты</h2>
                    <div>

                    </div>
                </div>
                <div className={cls.panelCard}>
                    <h2>Задачи</h2>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherDashboard;
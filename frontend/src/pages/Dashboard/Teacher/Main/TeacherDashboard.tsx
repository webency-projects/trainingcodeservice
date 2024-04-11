import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './TeacherDashboard.module.scss'
import {Button} from "@shared/ui/Buttton/Button.tsx";

import Card from "@widgets/Dashboard/Teacher/Card/Card.tsx";
import {Toolbar} from "@widgets/Dashboard/Teacher/Toolbar";


interface TeacherDashboardProps {
    classname?: string;
}

const TeacherDashboard = (props: TeacherDashboardProps) => {
    const {classname = ""} = props;
    return (
        <div className={cNames(cls.TeacherDashboard, {}, [classname])}>
            <Card>
                <Toolbar>
                    <div></div>
                    <div></div>
                    <div className={cls.groupEnd}>
                        <Button>Добавить проект</Button>
                        <Button>Удалить</Button>
                    </div>
                </Toolbar>
            </Card>
        </div>
    )
}

export default TeacherDashboard;
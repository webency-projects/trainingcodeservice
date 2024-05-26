import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './AdminTeachers.module.scss'
import {Input} from "@shared/ui/Input/Input.tsx";
import PanelWithControl from "@shared/ui/PanelWithControl/PanelWithControl.tsx";
import {Button, ButtonTheme} from "@shared/ui/Buttton/Button.tsx";
import Card from "@widgets/Dashboard/Teacher/Card/Card.tsx";
import {CgRemoveR} from "react-icons/cg";
import { LuCheckSquare } from "react-icons/lu";

interface AdminTeachersProps {
    classname?: string;
}

const AdminTeachers = (props: AdminTeachersProps) => {
    const {classname = ""} = props;
    return (
        <div className={cNames(cls.AdminTeachers, {}, [classname])}>
            <PanelWithControl title={"Преподаватели"}/>
            <div className={cls.wrapper}>
                <div>
                    <div className={cls.group}>
                        <h2>Имя:</h2>
                        <Input/>
                    </div>
                    <div className={cls.group}>
                        <h2>Фамилия:</h2>
                        <Input/>
                    </div>
                    <div className={cls.group}>
                        <h2>Email:</h2>
                        <Input/>
                    </div>
                    <Button>Добавить преподавателя</Button>
                </div>
                <Card>
                    <table className={cls.table}>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Имя</th>
                                <th>Фамилия</th>
                                <th>Email</th>
                                <th>Статус</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Иван</td>
                                <td>Иванов</td>
                                <td>ivan@ivan</td>
                                <td>
                                    <LuCheckSquare size={20} />
                                </td>
                                <td>
                                    <Button theme={ButtonTheme.CLEAR}>
                                        <CgRemoveR className={cls.deleteIcon} size={20} />
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Петр</td>
                                <td>Петров</td>
                                <td>petr@petr</td>
                                <td>
                                    <LuCheckSquare size={20} />
                                </td>
                                <td>
                                    <Button theme={ButtonTheme.CLEAR}>
                                        <CgRemoveR className={cls.deleteIcon} size={20} />
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Card>
            </div>
        </div>
    )
}

export default AdminTeachers;
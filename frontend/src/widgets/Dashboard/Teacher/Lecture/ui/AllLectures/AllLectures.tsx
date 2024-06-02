import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './AllLectures.module.scss'
import Card from "@widgets/Dashboard/Teacher/Card/Card.tsx";
import {useState} from "react";
import {Button, ButtonTheme} from "@shared/ui/Buttton/Button.tsx";
import {CgRemoveR} from "react-icons/cg";
import {FiEdit} from "react-icons/fi";

interface AllLecturesProps {
    classname?: string;
}

const AllLectures = (props: AllLecturesProps) => {
    const {classname = ""} = props;
    const [lectues] = useState(data)
    return (
        <div className={cNames(cls.AllLectures, {}, [classname])}>
            <Card >
                <table className={cls.table}>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Название</th>
                            <th>Описание</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {lectues.map((lecture) => (
                            <tr key={lecture.id}>
                                <td>{lecture.id}</td>
                                <td>{lecture.name}</td>
                                <td>{lecture.description}</td>
                                <td>
                                    <Button theme={ButtonTheme.CLEAR}><FiEdit className={cls.editIcon} size={24}/></Button>
                                    <Button theme={ButtonTheme.CLEAR}><CgRemoveR className={cls.deleteIcon} size={24} /></Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className={cls.pagination}>
                    <div>Назад</div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>Вперед</div>
                </div>
            </Card>
        </div>
    )
}

export default AllLectures;

const data = [
    {
        id: 1,
        name: "Лекция 1",
        description: "Описание лекции 1"
    },
    {
        id: 2,
        name: "Лекция 2",
        description: "Описание лекции 2"
    },
    {
        id: 3,
        name: "Лекция 3",
        description: "Описание лекции 3"
    },
    {
        id: 4,
        name: "Лекция 4",
        description: "Описание лекции 4"
    },
    {
        id: 5,
        name: "Лекция 5",
        description: "Описание лекции 5"
    },
    {
        id: 6,
        name: "Лекция 6",
        description: "Описание лекции 6"
    },
    {
        id: 7,
        name: "Лекция 7",
        description: "Описание лекции 7"
    },
    {
        id: 8,
        name: "Лекция 8",
        description: "Описание лекции 8"
    },
    {
        id: 9,
        name: "Лекция 9",
        description: "Описание лекции 9"
    },
    {
        id: 10,
        name: "Лекция 10",
        description: "Описание лекции 10"
    },

]
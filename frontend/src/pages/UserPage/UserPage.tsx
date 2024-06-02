import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './UserPage.module.scss'
import Navbar from "@widgets/Navbar/ui/Navbar.tsx";
import {Button} from "@shared/ui/Buttton/Button.tsx";

interface UserPageProps {
    classname?: string;
}

const coursesData = [
    {
        id: 1,
        title: "Python для начинающих",
        language: "Python",
        lectureQty: 34,
    },
    {
        id: 2,
        title: "Объектно-ориентированное программирование",
        language: "Python",
        lectureQty: 53,
    },
    {
        id: 3,
        title: "Python для продвинутых",
        language: "Python",
        lectureQty: 62,
    }
]

const UserPage = (props: UserPageProps) => {
    const {classname = ""} = props;
    return (
        <div className={cNames(cls.UserPage, {}, [classname])}>
            <Navbar showControl={false}/>
            <div className={cls.wrapper}>
                <h1>Доступные курсы</h1>
                <div className={cls.courses}>
                    {coursesData.map(course => (
                        <div className={cls.course}>
                            <h3>{course.language}</h3>
                            <h2>{course.title}</h2>
                            <div className={cls.group}>
                                <p><span>{course.lectureQty}</span> лекции</p>
                                <Button>Поступить на курс</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}



export default UserPage;
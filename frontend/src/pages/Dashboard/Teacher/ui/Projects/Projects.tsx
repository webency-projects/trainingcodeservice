import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './Projects.module.scss'
import {useState} from "react";
import PanelWithControl from "@shared/ui/PanelWithControl/PanelWithControl.tsx";

interface ProjectsProps {
    classname?: string;
}

const Projects = (props: ProjectsProps) => {
    const {classname = ""} = props;
    const [courses] = useState(data)
    return (
        <div className={cNames(cls.Projects, {}, [classname])}>
            <PanelWithControl title={"Управление курсами"}/>
            <div className={cls.courseWrapper}>
                {courses && courses.map((course) => (
                    <CourseCard
                        key={course.id}
                        title={course.title}
                        language={course.language}
                        lectureQty={course.lectureQty}
                        testQty={course.testQty}
                    />
                ))}
            </div>

        </div>
    )
}
export default Projects;


interface CourseCardProps {
    id?: number;
    title: string;
    language: string;
    lectureQty: number;
    testQty: number;
}
const CourseCard = (props:CourseCardProps) => {
    const {testQty,lectureQty,language,title} = props;
    return (
        <div className={cls.CourseCard}>
            <p>{language}</p>
            <h2>{title}</h2>
            <div className={cls.info}>
                <span>Лекции: {lectureQty}</span>
                <span>Тесты: {testQty}</span>
            </div>
        </div>
    )
}
const data: CourseCardProps[] = [
    {
        id: 1,
        title: 'Python Начало',
        language: 'Python',
        lectureQty: 10,
        testQty: 5,
    },
    {
        id: 2,
        title: 'Объектно-ориентированное программирование',
        language: 'Python',
        lectureQty: 10,
        testQty: 5,
    },
    {
        id: 3,
        title: 'Numpy & pandas',
        language: 'Python',
        lectureQty: 10,
        testQty: 5,
    }
]
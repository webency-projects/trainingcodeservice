import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './CoursePage.module.scss'
import {ManageLecturePanel} from "@widgets/ManageLecturePanel";
import {Outlet} from "react-router-dom";
import Navbar from "@widgets/Navbar/ui/Navbar.tsx";
import CodeBlock from "@widgets/CodeBlock/ui/CodeBlock.tsx";
import {Resizable} from "@shared/ui/Resizable/Resizable.tsx";
import {useState} from "react";

interface CoursePageProps {
    classname?: string;
}

const CoursePage = (props: CoursePageProps) => {
    const {classname = ""} = props;
    const [width, setWidth] = useState(800);
    return (
        <main className={cNames(cls.CoursePage, {}, [classname])}>
            <Resizable direction={"horizontal"} resizerPosition={"right"} changedWidth={(v) => setWidth(v - 100)}>
                <div className={cls.userPanel}>
                    <Navbar/>
                    <CodeBlock width={width}/>
                </div>
            </Resizable>
            <div className={cls.contentPanel}>
                <ManageLecturePanel/>
                <Outlet/>
            </div>
        </main>
    )
}

export default CoursePage;
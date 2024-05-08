import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './CoursePage.module.scss'
import {ManageLecturePanel} from "@widgets/ManageLecturePanel";
import {Outlet} from "react-router-dom";
import Navbar from "@widgets/Navbar/ui/Navbar.tsx";
import CodeBlock from "@widgets/CodeBlock/ui/CodeBlock.tsx";
import {Resizable} from "@shared/ui/Resizable/Resizable.tsx";
import {useState} from "react";
import {ProgressList} from "@widgets/ProgressList";
import Console from "@widgets/Console/ui/Console.tsx";


interface CoursePageProps {
    classname?: string;
}
const data:string = ""
const CoursePage = (props: CoursePageProps) => {
    const {classname = ""} = props;
    const [width, setWidth] = useState(800);
    const [isShowLectures, setIsShowLectures] = useState<boolean>(false)
    return (
        <main className={cNames(cls.CoursePage, {}, [classname])}>
            <Resizable direction={"horizontal"} resizerPosition={"right"} changedWidth={(v) => setWidth(v - 100)}>
                <div className={cls.userPanel}>
                    <Navbar/>
                    <CodeBlock width={width}/>
                    <Console data={data} isError={false}/>
                </div>
            </Resizable>
            <div className={cls.contentPanel}>
                <ManageLecturePanel showLectures={() => setIsShowLectures(p => !p)}/>
                {isShowLectures ? <Outlet/> : <ProgressList/>}

            </div>
        </main>
    )
}

export default CoursePage;
import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './LecturePage.module.scss'
import LecturePreview from "@shared/ui/LecturePreview/ui/LecturePreview.tsx";
import {LectureModel} from "@entities/Lecture/model/LectureModel.ts";
import {useEffect, useState} from "react";

import { useParams} from "react-router-dom";
import Loader from "@shared/ui/Loader/Loader.tsx";
import {getLectureBySlug} from "@shared/api/course";


interface LecturePageProps {
    classname?: string;
}

const LecturePage = (props: LecturePageProps) => {
    const {classname = ""} = props;
    const {slug} = useParams();
    const [lecture, setLecture] = useState<LectureModel>()

    useEffect(() => {
        if (slug !== undefined) {
            getLectureBySlug(slug)
               .then(res => {
                    setLecture(res)
                })
               .catch(err => {
                    console.log(err)
                })
        }
    }, [slug]);


    return (
        <div className={cNames(cls.LecturePage, {}, [classname])}>
            <div className={cls.lectureContent}>
                {lecture ? <LecturePreview lecture={lecture}/> : <Loader />}

            </div>
        </div>
    )
}

export default LecturePage;
import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './ProgressList.module.scss'

import ListItem from "@widgets/ProgressList/ui/ListItem/ListItem.tsx";
import { useNavigate  } from "react-router-dom";
import {useEffect, useState} from "react";
import {LectureModel} from "@entities/Lecture/model/LectureModel.ts";
interface ProgressListProps {
    classname?: string;
}

const ProgressList = (props: ProgressListProps) => {
    const {classname = ""} = props;
    const navigate = useNavigate()
    const [listLectures, setListLectures] = useState<LectureModel[]>([])

    useEffect(() => {


    }, []);

    const goToLecture = (slug: string, isAvailable: boolean) => {
        if (isAvailable) {
            navigate(slug)
        }
    }
    return (
        <div className={cNames(cls.ProgressList, {}, [classname])}>
            <ul>
                {listLectures.map(item => (
                    <ListItem
                        key={item.slug}
                        title={item.title}
                        description={item.description}
                        isAvailable={item.isAvailable}
                        onClick={() => goToLecture(item.slug, item.isAvailable)}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ProgressList;

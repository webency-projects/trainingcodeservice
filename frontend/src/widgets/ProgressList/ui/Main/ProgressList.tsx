import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './ProgressList.module.scss'
import ListLectures from "@shared/assets/mocks/ListLectures.json";
import {Lecture} from "@entities/Lecture/model/LectureModel.ts";
import ListItem from "@widgets/ProgressList/ui/ListItem/ListItem.tsx";
import { useNavigate  } from "react-router-dom";
interface ProgressListProps {
    classname?: string;
}

const ProgressList = (props: ProgressListProps) => {
    const {classname = ""} = props;
    const listLectures: Lecture[] = ListLectures;
    const navigate = useNavigate()

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

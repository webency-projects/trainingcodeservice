import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './AllLectures.module.scss'
import Card from "@widgets/Dashboard/Teacher/Card/Card.tsx";

interface AllLecturesProps {
    classname?: string;
}

const AllLectures = (props: AllLecturesProps) => {
    const {classname = ""} = props;
    return (
        <div className={cNames(cls.AllLectures, {}, [classname])}>
            <Card >
                Все лекции
            </Card>
        </div>
    )
}

export default AllLectures;
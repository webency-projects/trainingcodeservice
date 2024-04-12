import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './Statistic.module.scss'

interface StatisticsProps {
    classname?: string;
}

const Statistic = (props: StatisticsProps) => {
    const {classname = ""} = props;
    return (
        <div className={cNames(cls.Statistics, {}, [classname])}>
            Statistics
        </div>
    )
}

export default Statistic;
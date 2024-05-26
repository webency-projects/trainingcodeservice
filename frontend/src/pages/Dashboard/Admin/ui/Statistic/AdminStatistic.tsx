import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './AdminStatistic.module.scss'

interface AdminStatisticProps {
    classname?: string;
}

const AdminStatistic = (props: AdminStatisticProps) => {
    const {classname = ""} = props;
    return (
        <div className={cNames(cls.AdminStatistic, {}, [classname])}>
            AdminStatistic
        </div>
    )
}

export default AdminStatistic;
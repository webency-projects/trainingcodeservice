import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './AdminDashboard.module.scss'

interface AdminDashboardProps {
    classname?: string;
}

const AdminDashboard = (props: AdminDashboardProps) => {
    const {classname = ""} = props;
    return (
        <div className={cNames(cls.AdminDashboard, {}, [classname])}>
            AdminDashboard
        </div>
    )
}

export default AdminDashboard;
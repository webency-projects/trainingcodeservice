import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './AdminUsers.module.scss'

interface AdminUsersProps {
    classname?: string;
}

const AdminUsers = (props: AdminUsersProps) => {
    const {classname = ""} = props;
    return (
        <div className={cNames(cls.AdminUsers, {}, [classname])}>
            AdminUsers
        </div>
    )
}

export default AdminUsers;
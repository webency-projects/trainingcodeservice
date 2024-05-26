import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './AdminProfile.module.scss'

interface AdminProfileProps {
    classname?: string;
}

const AdminProfile = (props: AdminProfileProps) => {
    const {classname = ""} = props;
    return (
        <div className={cNames(cls.AdminProfile, {}, [classname])}>
            AdminProfile
        </div>
    )
}

export default AdminProfile;
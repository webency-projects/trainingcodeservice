import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './Profile.module.scss'

interface ProfileProps {
    classname?: string;
}

const Profile = (props: ProfileProps) => {
    const {classname = ""} = props;
    return (
        <div className={cNames(cls.Profile, {}, [classname])}>
            Profile
        </div>
    )
}

export default Profile;
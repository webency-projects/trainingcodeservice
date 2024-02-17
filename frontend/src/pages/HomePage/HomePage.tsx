
import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './HomePage.module.scss'
import {Login} from "@widgets/Login";

interface HomePageProps {
    classname?: string;
}

const HomePage = (props: HomePageProps) => {
    const {classname = ""} = props;
    return (
        <main className={cNames(cls.HomePage, {}, [classname])}>
            <Login />
        </main>
    )
}

export default HomePage;
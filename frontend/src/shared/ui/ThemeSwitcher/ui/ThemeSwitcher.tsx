import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './ThemeSwitcher.module.scss'
import {useTheme} from "@app/providers/lib/useTheme.ts";

interface ThemeSwitcherProps {
    classname?: string;
}

const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const {classname = ""} = props;
    const {toggleTheme} = useTheme();
    return (
        <div className={cNames(cls.ThemeSwitcher, {}, [classname])}>
            <input
                id="switch"
                type="checkbox"
                onClick={toggleTheme}
            />
            <label htmlFor="switch"></label>
        </div>
    )
}

export default ThemeSwitcher;
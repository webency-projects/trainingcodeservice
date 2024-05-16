import {useAppDispatch, useAppSelector} from "@app/store/hooks";

import {setTheme} from "../"

export const useTheme = () => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector(state => state.theme)
    const toggleTheme = () => {
        dispatch(setTheme(theme === "light" ? "dark" : "light"))
    };
    return {theme, toggleTheme}
}
import {Outlet} from "react-router-dom";

import "./styles/index.scss"
import {useAppSelector} from "@app/store/hooks.ts";
import {useEffect} from "react";
function App() {
    const theme = useAppSelector(state  => state.theme)
    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
    }, [theme]);
    return (
        <>
            <Outlet/>
        </>
    )
}
export default App;
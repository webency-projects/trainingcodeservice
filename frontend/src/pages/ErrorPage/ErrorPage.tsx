import cls from "./ErrorPage.module.scss";
import {Link} from "react-router-dom";

function ErrorPage() {
    return (
        <div className={cls.errorPage}>
            <div className={cls.wrapper}>
                <h1>404</h1>
                <Link to={'/'}>Вернуть на главную страницу</Link>
            </div>
        </div>
    )
}
export default ErrorPage;
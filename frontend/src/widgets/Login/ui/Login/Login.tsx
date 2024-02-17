import {useState} from "react";
import SignIn from "../SignIn/SignIn.tsx";
import Register from "../Register/Register.tsx";


import {cNames} from "@shared/lib/cNames/cNames.ts";
import cls from './Login.module.scss'
import {Button, ButtonTheme} from "@shared/ui/Buttton/Button.tsx";

interface LoginProps {
    classname?: string;
}

const Login = (props: LoginProps) => {
    const {classname = ""} = props;
    const [isRegister, setIsRegister] = useState(true);
    return (
        <div className={cNames(cls.Login, {}, [classname])}>
            <div className={cls.header}>
                <h2>Добро пожаловать в Онлайн-Курс</h2>
            </div>

            <div className={cls.formWrapper}>
                {isRegister ? <SignIn/> : <Register/>}
            </div>
            <div className={cls.footer}>
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={() => setIsRegister(p => !p)}>
                    {isRegister ? "Я новенький" : "У меня есть аккаунт!"}
                </Button>
            </div>
        </div>
    )
}

export default Login;
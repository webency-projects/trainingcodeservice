import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './SignIn.module.scss'
import {Input} from "@shared/ui/Input/Input.tsx";
import {Button} from "@shared/ui/Buttton/Button.tsx";
import {useState} from "react";
import AuthService from "@shared/api/auth/auth.service.ts";



interface SignInProps {
    classname?: string;
}

const SignIn = (props: SignInProps) => {
    const {classname = ""} = props;
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");


    const onSubmit = async () => {
        if (email?.trim().length === 0) return;
        if (password?.trim().length === 0) return;
        await AuthService.login(email, password).then(res => {
            console.log(res);
        });
    }

    return (
        <div className={cNames(cls.SignIn, {}, [classname])}>
            <div className={cls.fieldGroup}>
                <p>Email</p>
                <Input
                    type={"email"}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder={"Введите ваш email"}
                />
            </div>
            <div className={cls.fieldGroup}>
                <p>Пароль</p>
                <Input
                    type={"password"}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder={"Введите ваш пароль"}
                />
            </div>
            <Button onClick={onSubmit}>Войти</Button>
        </div>
    )
}

export default SignIn;
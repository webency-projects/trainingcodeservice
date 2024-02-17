import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './Register.module.scss'
import {Input} from "@shared/ui/Input/Input.tsx";
import {Button} from "@shared/ui/Buttton/Button.tsx";

interface RegisterProps {
    classname?: string;
}

const Register = (props: RegisterProps) => {
    const {classname = ""} = props;

    const onSubmit = () => {

    }
    return (
        <div className={cNames(cls.Register, {}, [classname])}>
            <div className={cls.fieldGroup}>
                <p>Фамилия</p>
                <Input
                    placeholder={"Введите вашу фамилию"}
                />
            </div>
            <div className={cls.fieldGroup}>
                <p>Имя</p>
                <Input
                    placeholder={"Введите ваше имя"}
                />
            </div>
            <div className={cls.fieldGroup}>
                <p>Токен приглашения</p>
                <Input
                    placeholder={"Введите ваш токен"}
                />
            </div>
            <div className={cls.fieldGroup}>
                <p>Пароль</p>
                <Input
                    type={"email"}
                    placeholder={"Введите ваш email"}
                />
            </div>
            <div className={cls.fieldGroup}>
                <p>Пароль</p>
                <Input
                    type={"password"}
                    placeholder={"Введите ваш пароль"}
                />
            </div>
            <Button onClick={onSubmit}>Зарегистрироваться</Button>
        </div>
    )
}

export default Register;
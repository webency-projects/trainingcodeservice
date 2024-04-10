import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './Register.module.scss'
import {Input} from "@shared/ui/Input/Input.tsx";
import {Button} from "@shared/ui/Buttton/Button.tsx";
import {useState} from "react";
import {UserRegister} from "@entities/user/model/UserTypes.ts";
import AuthService from "@shared/api/services/AuthService.ts";

interface RegisterProps {
    classname?: string;
}

const initForm:UserRegister = {
    firstName: "",
    lastName: "",
    inviteToken: "",
    email: "",
    password:""
}
const Register = (props: RegisterProps) => {
    const {classname = ""} = props;
    const [formData, setFormData] = useState<UserRegister>(initForm)
    const onSubmit = async () => {
        await AuthService.register(formData).then(res => {
                console.log(res);
            }
        );
    }
    return (
        <div className={cNames(cls.Register, {}, [classname])}>
            <div className={cls.fieldGroup}>
                <p>Фамилия</p>
                <Input
                    placeholder={"Введите вашу фамилию"}
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                />
            </div>
            <div className={cls.fieldGroup}>
                <p>Имя</p>
                <Input
                    placeholder={"Введите ваше имя"}
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                />
            </div>
            <div className={cls.fieldGroup}>
                <p>Токен приглашения</p>
                <Input
                    placeholder={"Введите ваш токен"}
                    value={formData.inviteToken}
                    onChange={(e) => setFormData({...formData, inviteToken: e.target.value})}
                />
            </div>
            <div className={cls.fieldGroup}>
                <p>Пароль</p>
                <Input
                    type={"email"}
                    placeholder={"Введите ваш email"}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
            </div>
            <div className={cls.fieldGroup}>
                <p>Пароль</p>
                <Input
                    type={"password"}
                    placeholder={"Введите ваш пароль"}
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
            </div>
            <Button onClick={onSubmit}>Зарегистрироваться</Button>
        </div>
    )
}

export default Register;
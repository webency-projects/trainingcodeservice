import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './Register.module.scss'
import {Input} from "@shared/ui/Input/Input.tsx";
import {Button} from "@shared/ui/Buttton/Button.tsx";
import {useState} from "react";
import {UserRegister} from "@entities/user/model/UserTypes.ts";
import publicAuthService from "@shared/api/services/publicAuthService.ts";

interface RegisterProps {
    classname?: string;
}

const initForm:UserRegister = {
    firstName: "",
    lastName: "",
    email: "",
    password:""
}
const Register = (props: RegisterProps) => {
    const {classname = ""} = props;
    const [formData, setFormData] = useState<UserRegister>(initForm)
    const onSubmit = async () => {
        await publicAuthService.register(formData)
            .then(res => {
                console.log(res);
            }
        );
    }
    return (
        <div className={cNames(cls.Register, {}, [classname])}>
            <div className={cls.fieldGroup}>
                <p>Фамилия</p>
                <Input
                    placeholder={"Введите фамилию"}
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                />
            </div>
            <div className={cls.fieldGroup}>
                <p>Имя</p>
                <Input
                    placeholder={"Введите имя"}
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                />
            </div>
            <div className={cls.fieldGroup}>
                <p>Пароль</p>
                <Input
                    type={"email"}
                    placeholder={"Введите email"}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
            </div>
            <div className={cls.fieldGroup}>
                <p>Пароль</p>
                <Input
                    type={"password"}
                    placeholder={"Введите пароль"}
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
            </div>
            <Button onClick={onSubmit}>Зарегистрироваться</Button>
        </div>
    )
}

export default Register;
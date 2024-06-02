import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './CreateQuestionary.module.scss';
import {Input} from "@shared/ui/Input/Input.tsx";

import {Button, ButtonTheme} from "@shared/ui/Buttton/Button.tsx";


interface CreateQuestionaryProps {
    classname?: string;
}

const CreateQuestionary = (props: CreateQuestionaryProps) => {
    const {classname = ""} = props;
    return (
        <div className={cNames(cls.CreateQuestionary, {}, [classname])}>
            <div className={cls.wrapper}>
                <div className={cls.groupDouble}>
                    <div className={cls.group}>
                        <h2>Курс</h2>
                        <Input/>
                    </div>
                    <div className={cls.group}>
                        <h2>Лекция</h2>
                        <Input/>
                    </div>
                </div>
            </div>
            <div className={cls.wrapper}>
                <div className={cls.group}>
                <h2>Вопрос</h2>
                    <Input/>
                </div>
                <div className={cls.group}>
                    <h2>Ответ 1</h2>
                    <Input/>
                </div>
                <div className={cls.group}>
                    <h2>Ответ 2</h2>
                    <Input/>
                </div>
                <div className={cls.group}>
                    <h2>Ответ 3</h2>
                    <Input/>
                </div>
                <div className={cls.group}>
                    <h2>Ответ 4</h2>
                    <Input/>
                </div>
                <div className={cls.group}>
                    <h2>Правильный ответ:</h2>
                    <Input/>
                </div>
            </div>
            <div className={cls.wrapper}>
                <div className={cls.controls}>
                    <Button theme={ButtonTheme.CLEAR}>Отменить</Button>
                    <Button>Сохранить</Button>
                    <Button>Добавить вопрос</Button>
                </div>
            </div>
        </div>
    )
}

export default CreateQuestionary;
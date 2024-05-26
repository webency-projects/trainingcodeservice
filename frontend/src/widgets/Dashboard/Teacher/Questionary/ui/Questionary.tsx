import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './Questionary.module.scss'
import {Button} from "@shared/ui/Buttton/Button.tsx";

interface QuestionaryProps {
    classname?: string;
}

const Questionary = (props: QuestionaryProps) => {
    const {classname = ""} = props;
    return (
        <div className={cNames(cls.Questionary, {}, [classname])}>
            <h2>Вопрос по теме 1</h2>
            <form >
                <div className={cls.form}>
                    <label>
                        <input type="radio" name="questionary" value="1"/>
                        <span>Ответ 1</span>
                    </label>
                    <label>
                        <input type="radio" name="questionary" value="2"/>
                        <span>Ответ 2</span>
                    </label>
                    <label>
                        <input type="radio" name="questionary" value="3"/>
                        <span>Ответ 3</span>
                    </label>
                    <label>
                        <input type="radio" name="questionary" value="4"/>
                        <span>Ответ 4</span>
                    </label>
                </div>
                <Button>Ответить</Button>
            </form>

        </div>
    )
}

export default Questionary;
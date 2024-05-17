import cls from './AddElement.module.scss';

import {Button} from "@shared/ui/Buttton/Button.tsx";
import {cNames} from "@shared/lib/cNames/cNames.ts";




interface AddElementProps {
    className?: string;
}

export const AddElement = ({className = ''}:AddElementProps) => {

    return (
        <div className={cNames(cls.AddElement, {}, [className])}>

            <p>Введите название папки или файла с расширением</p>
            <Button className={cls.Button} >Создать</Button>
        </div>
    );
};

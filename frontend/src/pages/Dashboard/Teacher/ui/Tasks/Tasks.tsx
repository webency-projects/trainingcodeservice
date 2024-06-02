import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './Tasks.module.scss'
import PanelWithControl from "@shared/ui/PanelWithControl/PanelWithControl.tsx";
import {Button} from "@shared/ui/Buttton/Button.tsx";
import TasksTable from "@widgets/Dashboard/Teacher/TasksTable/TasksTable.tsx";
import {useState} from "react";
import CreateQuestionary from "@widgets/Dashboard/Teacher/CreateQuestionary/CreateQuestionary.tsx";

interface TasksProps {
    classname?: string;
}

const Tasks = (props: TasksProps) => {
    const {classname = ""} = props;
    const [isCreateView, setIsCreateView] = useState(true)
    return (
        <div className={cNames(cls.Tasks, {}, [classname])}>
            <PanelWithControl title={"Управление квизами"}>
               <Button onClick={() => setIsCreateView(false)}>Список вопросов</Button>
               <Button onClick={() => setIsCreateView(true)}>Создать тест</Button>
            </PanelWithControl>
            {isCreateView ? (
                <div className={cls.wrapper}>
                    <CreateQuestionary/>
                </div>
            ) : (
                <TasksTable/>
            )}

        </div>
    )
}

export default Tasks;
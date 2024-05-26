import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './Tasks.module.scss'
import PanelWithControl from "@shared/ui/PanelWithControl/PanelWithControl.tsx";
import {Button} from "@shared/ui/Buttton/Button.tsx";
import TasksTable from "@widgets/Dashboard/Teacher/TasksTable/TasksTable.tsx";

interface TasksProps {
    classname?: string;
}

const Tasks = (props: TasksProps) => {
    const {classname = ""} = props;
    return (
        <div className={cNames(cls.Tasks, {}, [classname])}>
            <PanelWithControl title={"Управление тестами"}>
               <Button>Создать тест</Button>
            </PanelWithControl>
            <TasksTable/>
        </div>
    )
}

export default Tasks;
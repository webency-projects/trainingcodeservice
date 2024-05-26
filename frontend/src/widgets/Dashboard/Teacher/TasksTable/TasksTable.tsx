import {cNames} from "@shared/lib/cNames/cNames.ts";
import {tasksData, TasksType} from "@pages/Dashboard/Teacher/data/TasksData.ts"
import cls from './TasksTable.module.scss'
import {useState} from "react";
import {
    useReactTable,
    getCoreRowModel,
    flexRender, createColumnHelper,
} from '@tanstack/react-table'
import Card from "@widgets/Dashboard/Teacher/Card/Card.tsx";

interface TasksTableProps {
    classname?: string;
}

const columnHelper = createColumnHelper<TasksType>()
const columns = [
    columnHelper.accessor("id", {
        header: () => "Id",
        cell: info => info.getValue(),
    }),
    columnHelper.accessor("question", {
        header: () => "Вопрос",
        cell: info => info.getValue(),
    }),
    columnHelper.accessor("answer", {
        header: () => "Ответ",
        cell: info => info.getValue(),
    })
]
const TasksTable = (props: TasksTableProps) => {
    const {classname = ""} = props;
    const [data] = useState(() => tasksData)
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })
    return (
        <div className={cNames(cls.TasksTable, {}, [classname])}>
            <Card>
                <table>
                    <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id}>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        </div>
    )
}

export default TasksTable;
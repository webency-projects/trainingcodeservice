export type TasksType = {
    id: number;
    question: string;
    options: string[];
    answer: string;
}

export const tasksData = [
    {
        id: 1,
        question: "Сколько будет 2 + 2",
        options: ["4", "5", "6", "6"],
        answer: "4"
    },
    {
        id: 2,
        question: "Сколько будет 4 + 4",
        options: ["4", "5", "6", "8"],
        answer: "8"
    },
    {
        id: 3,
        question: "Программирование это?",
        options: ["Умение зарабатывать", "Определение интеграла", "Легко", "Завтрак после 12"],
        answer: "Завтрак после 12"
    },
    {
        id: 4,
        question: "Какой язык программирования?",
        options: ["Java", "Python", "C++", "C#"],
        answer: "C++"
    },
    {
        id: 5,
        question: "Какой язык программирования нельзя учить?",
        options: ["Java", "Python", "C++", "C#"],
        answer: "C++"
    }
]
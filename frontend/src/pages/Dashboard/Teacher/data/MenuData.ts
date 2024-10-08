import {SidebarDataType} from "@shared/ui/DashboardMenu";

export const menuData: SidebarDataType = [
    {
        label: 'Управление курсом',
        items: [
            { label: 'Главная', icon: 'pi pi-fw pi-home', to: '' },
            { label: 'Курсы', icon: 'pi pi-fw pi-server', to: 'projects' },
            { label: 'Лекции', icon: 'pi pi-fw pi-list', to: 'lectures' },
            { label: 'Квизы', icon: 'pi pi-fw pi-check-square', to: 'tasks' },
            { label: 'Задачи', icon: 'pi pi-fw pi-check-square', to: 'tasks' },
        ]
    },
    {
        label: 'Управление студентами',
        items: [
            { label: 'Студенты', icon: 'pi pi-fw pi-user', to: 'students' },
            { label: 'Статистика', icon: 'pi pi-fw pi-chart-bar', to: 'statistic' },
        ]
    },
    {
        label: 'Дополнительно',
        items: [
            {
                label: 'Профиль',
                icon: 'pi pi-fw pi-user',
                to: 'profile'
            }
        ]
    },
];
import {SidebarDataType} from "@shared/ui/DashboardMenu";

export const adminMenuData: SidebarDataType = [
    {
        label: 'Управление курсом',
        items: [
            { label: 'Преподаватели', icon: 'pi pi-fw pi-server', to: 'teachers' },
            { label: 'Студенты', icon: 'pi pi-fw pi-home', to: '' },
        ]
    },
    {
        label: 'Управление пользователями',
        items: [
            { label: 'Пользователи', icon: 'pi pi-fw pi-user', to: 'users' },
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
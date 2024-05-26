import {SidebarDataType} from "@shared/ui/DashboardMenu";

export const adminMenuData: SidebarDataType = [
    {
        label: 'Управление курсом',
        items: [
            { label: 'Главная', icon: 'pi pi-fw pi-home', to: '' },
            { label: 'Преподаватели', icon: 'pi pi-fw pi-server', to: 'teachers' },
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
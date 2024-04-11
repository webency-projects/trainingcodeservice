export const menuData = [
    {
        label: 'Управление курсом',
        items: [
            { label: 'Главная', icon: 'pi pi-fw pi-home', to: '/' },
            { label: 'Проекты', icon: 'pi pi-fw pi-server', to: '/projects' },
            { label: 'Лекции', icon: 'pi pi-fw pi-list', to: '/lectures' },
            { label: 'Тесты', icon: 'pi pi-fw pi-check-square', to: '/tests' },
        ]
    },
    {
        label: 'Управление студентами',
        items: [
            { label: 'Студенты', icon: 'pi pi-fw pi-user', to: '/students' },
            { label: 'Группы', icon: 'pi pi-fw pi-table', to: '/groups' },
            { label: 'Статистика', icon: 'pi pi-fw pi-chart-bar', to: '/statistic' },
        ]
    },
    {
        label: 'Дополнительно',
        icon: 'pi pi-fw pi-briefcase',
        to: '/pages',
        items: [
            {
                label: 'Que',
                icon: 'pi pi-fw pi-globe',
                to: '/landing'
            },
            {
                label: 'Профиль',
                icon: 'pi pi-fw pi-user',
                to: '/profile'
            },
            {
                label: 'Выйти',
                icon: 'pi pi-fw pi-sign-out',
                to: '/logout'
            },
        ]
    },
];
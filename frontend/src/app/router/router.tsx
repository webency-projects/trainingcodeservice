import {createBrowserRouter} from "react-router-dom";
import App from "@app/App.tsx";
import HomePage from "@pages/HomePage/HomePage.tsx";
import AdminDashboard from "@pages/Dashboard/Admin/ui/Main/AdminDashboard.tsx";
import {Layout} from "@pages/Dashboard/Layout";
import CoursePage from "@pages/CoursePage/CoursePage.tsx";
import LecturePage from "@pages/LecturePage/LecturePage.tsx";
import {
    Lectures,
    Projects,
    Students,
    Tasks,
    TeacherDashboard,
    Groups,
    Statistic,
    Profile, menuData
} from "@pages/Dashboard/Teacher";
import {ProgressList} from "@widgets/ProgressList";
import {adminMenuData} from "@pages/Dashboard/Admin/data/AdminMenuData.ts";
import AdminTeachers from "@pages/Dashboard/Admin/ui/Teachers/AdminTeachers.tsx";
import AdminUsers from "@pages/Dashboard/Admin/ui/Users/AdminUsers.tsx";
import AdminStatistic from "@pages/Dashboard/Admin/ui/Statistic/AdminStatistic.tsx";
import AdminProfile from "@pages/Dashboard/Admin/ui/Profile/AdminProfile.tsx";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {index: true, element: <HomePage />},
            {
                path: "course",
                element: <CoursePage/>,
                children: [
                    {
                        index: true,
                        element: <ProgressList/>,
                    },
                    {
                        path: ":slug",
                        element: <LecturePage/>,
                    }
                ]
            },
            {
                path: "dashboard",
                element: <Layout sidebarData={menuData}/>,
                children: [
                    {
                        path: "",
                        element: <TeacherDashboard/>
                    },
                    {
                        path: "projects",
                        element: <Projects/>
                    },
                    {
                        path: "tasks",
                        element: <Tasks/>
                    },
                    {
                        path: "lectures",
                        element: <Lectures/>
                    },
                    {
                        path: "groups",
                        element: <Groups/>
                    },
                    {
                        path: "students",
                        element: <Students/>
                    },
                    {
                        path: "statistic",
                        element: <Statistic/>
                    },
                    {
                        path: "profile",
                        element: <Profile/>
                    },
                ]
            },
            {
                path: "admin",
                element: <Layout sidebarData={adminMenuData} />,
                children: [
                    {
                        path: "",
                        element: <AdminDashboard />
                    },
                    {
                        path: "teachers",
                        element: <AdminTeachers/>
                    },
                    {
                        path: "users",
                        element: <AdminUsers/>
                    },
                    {
                        path: "statistic",
                        element: <AdminStatistic/>
                    },
                    {
                        path: "profile",
                        element: <AdminProfile/>
                    },
                ]
            }
        ]

    }
])
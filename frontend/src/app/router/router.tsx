import {createBrowserRouter} from "react-router-dom";


import App from "@app/App.tsx";
import ErrorPage from "@pages/ErrorPage/ErrorPage.tsx";
import HomePage from "@pages/HomePage/HomePage.tsx";
import AdminDashboard from "@pages/Dashboard/Admin/Main/AdminDashboard.tsx";
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
    Profile
} from "@pages/Dashboard/Teacher";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {index: true, element: <HomePage />},
            {
                path: "course",
                element: <CoursePage/>,
                children: [
                    {
                        path: "lectures",
                        element: <LecturePage/>
                    }

                ]
            },
            {
                path: "dashboard",
                element: <Layout />,
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
                element: <AdminDashboard />,
                children: []
            }
        ]

    }
])
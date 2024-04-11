import {createBrowserRouter} from "react-router-dom";


import App from "@app/App.tsx";
import ErrorPage from "@pages/ErrorPage/ErrorPage.tsx";
import HomePage from "@pages/HomePage/HomePage.tsx";
import CoursePage from "@pages/CoursePage/CoursePage.tsx";
import LecturePage from "@pages/LecturePage/LecturePage.tsx";
import TeacherDashboard from "@pages/Dashboard/Teacher/Main/TeacherDashboard.tsx";
import AdminDashboard from "@pages/Dashboard/Admin/Main/AdminDashboard.tsx";
import {Layout} from "@pages/Dashboard/Layout";


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
                        path: ":slug",
                        element: <LecturePage/>
                    }
                ]
            },
            {
                path: "dashboard",
                element: <Layout />,
                children: [
                    {
                        path: "teacher",
                        element: <TeacherDashboard/>,
                        children: [

                        ]
                    },
                    {
                        path: "admin",
                        element: <AdminDashboard />,
                    }
                ]
            }
        ]

    }
])
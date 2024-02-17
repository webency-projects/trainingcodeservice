import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from "./app/providers/ui/ThemeProvider.tsx";
import {RouterProvider} from "react-router-dom";
import {router} from "./app/router/router.tsx";



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
        <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>,
)

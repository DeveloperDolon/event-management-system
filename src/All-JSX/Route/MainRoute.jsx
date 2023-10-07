import { createBrowserRouter } from 'react-router-dom';
import MainLayout from "../Layout/MainLayout.jsx";

export const MainRoute = createBrowserRouter([
    {
        path: "/",
        loader: () => fetch("./service.json"),
        element: <MainLayout></MainLayout>
    }
])
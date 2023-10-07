import { createBrowserRouter } from 'react-router-dom';
import MainLayout from "../Layout/MainLayout.jsx";
import Home from '../Pages/Home.jsx';

export const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                loader: () => fetch("./service.json"),
                element: <Home></Home>
            }
        ]
    },
    {
        path: "*",
        element: <h1>Hello error</h1>
    }
])
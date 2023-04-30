import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Destination from "../pages/Destination/Destination";


const route = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Destination/>,
                loader: () => fetch('http://localhost:3000/')
            }
        ]
    }
]);

export default route;
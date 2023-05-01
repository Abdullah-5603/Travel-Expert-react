import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Destination from "../pages/Destination/Destination";
import Booking from "../pages/Booking/Booking";
import HotelLayout from "../Layout/HotelLayout";
import Hotels from "../pages/Hotels/Hotels";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import LoginLayout from "../Layout/LoginLayout";


const route = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Destination />,
                loader: () => fetch('http://localhost:3000/')
            },
            {
                path: 'destination/:id',
                element: <Booking />,
                loader: ({ params }) => fetch(`http://localhost:3000/destination/${params.id}`)
            },
        ]
    },
    {
        path: 'hotels',
        element: <HotelLayout />,
        children: [
            {
                path: '/hotels/:id',
                element: <Hotels />,
                loader: ({ params }) => fetch(`http://localhost:3000/hotels/${params.id}`)
            }
        ]
    },
    {
        path: 'login',
        element: <LoginLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    }

]);

export default route;
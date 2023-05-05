import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Destination from "../pages/Destination/Destination";
import Booking from "../pages/Booking/Booking";
import HotelLayout from "../Layout/HotelLayout";
import Hotels from "../pages/Hotels/Hotels";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import LoginLayout from "../Layout/LoginLayout";
import HotelDetails from "../pages/HotelDetails/HotelDetails";


const route = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Destination />,
                loader: () => fetch('https://travel-guru-data-server-abdullah-5603.vercel.app/destination')
            },
            {
                path: 'destination/:id',
                element: <Booking />,
                loader: ({ params }) => fetch(`https://travel-guru-data-server-abdullah-5603.vercel.app/destination/${params.id}`)
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
                loader: ({ params }) => fetch(`https://travel-guru-data-server-abdullah-5603.vercel.app/destination/${params.id}`)
            },
            {
                path : '/hotels/hotelDetails/:hotelId',
                element : <HotelDetails/>,
                loader : ({params}) => fetch(`https://travel-guru-data-server-abdullah-5603.vercel.app/hotels/${params.hotelId}`)
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
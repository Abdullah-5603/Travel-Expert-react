import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Destination from "../pages/Destination/Destination";
import Booking from "../pages/Booking/Booking";
import HotelLayout from "../Layout/HotelLayout";
import Hotels from "../pages/Hotels/Hotels";


const route = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Destination/>,
                loader: () => fetch('http://localhost:3000/')
            },
            {
                path: 'destination/:id',
                element: <Booking/>,
                loader: ({params}) => fetch(`http://localhost:3000/destination/${params.id}`)
            }
        ]
    },
    {
        path : 'hotels',
        element: <HotelLayout/>,
        children: [
            {
                path:'/hotels/:id',
                element: <Hotels/>,
                loader: ({params}) => fetch(`http://localhost:3000/hotels/${params.id}`)
            }
        ]
    }
]);

export default route;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HotelDetailsTable from '../HotelDetailsTable/HotelDetailsTable';

const HotelDetails = () => {
    const data = useLoaderData();
    const { image, hotelName, hotelDescription, roomFacilities, hotelRatings, rooms } = data;
    console.log(data)
    return (
        <div className='flex flex-row-reverse justify-between w-10/12 mt-5 bg-base-200 rounded-md p-2'>
            <img className='w-4/12' src={image} alt="" />
            <div className='w-8/12 mr-2'>
                <p className='text-3xl font-bold'>{hotelName}</p>
                <p className='font-semibold mt-2'>Room Facilities: <span className='font-normal'>{roomFacilities.join(', ')}</span></p>
                <p className='font-semibold mt-2'>Description: <span className='font-normal'>{hotelDescription}</span></p>
                <div className="overflow-x-auto mt-4">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Room Type</th>
                                <th>Max Guests</th>
                                <th>beds</th>
                                <th>Price/Night</th>
                                <th>Click to Book</th>
                            </tr>
                        </thead>
                        <tbody>
                          {
                            rooms.map(rm => <HotelDetailsTable
                            rm={rm}
                            ></HotelDetailsTable>)
                          }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default HotelDetails;
import React from 'react';

const HotelDetailsTable = ({rm}) => {
    return (
        <tr className='hover'>
        <td>{rm.roomType}</td>
        <td>{rm.maxGuests}</td>
        <td>{rm.beds}</td>
        <td>{rm.pricePerNight} $</td>
        <td><button className='bg-btn-color py-2 px-3 font-semibold'>Book Now</button></td>
    </tr>
    );
};

export default HotelDetailsTable;
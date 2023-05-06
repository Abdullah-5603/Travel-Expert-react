import React, { useEffect, useState } from 'react';

const HotelDetailsTable = ({ rm }) => {
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        let timer;
        if (showToast) {
            timer = setTimeout(() => {
                setShowToast(false);
            }, 2000);
        }
        return () => {
            clearTimeout(timer);
        }
    }, [showToast]);

    const handleBookNow = () => {
        setShowToast(!showToast)
    }

    return (
        <tr className='hover'>
            <td>{rm.roomType}</td>
            <td>{rm.maxGuests}</td>
            <td>{rm.beds}</td>
            <td>{rm.pricePerNight} $</td>
            <td>
                <button onClick={handleBookNow} className='bg-btn-color py-2 px-3 font-semibold'>
                    Book Now
                </button>
            </td>
            {showToast && (
                <div className='toast toast-top toast-end'>
                    <div className='alert alert-success'>
                        <div>
                            <span>Thanks for booking "{rm.roomType}"</span>
                        </div>
                    </div>
                </div>
            )}
        </tr>
    );
};

export default HotelDetailsTable;

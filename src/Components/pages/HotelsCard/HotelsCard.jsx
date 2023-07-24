import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const HotelsCard = ({ dt }) => {
    const { id, image, hotelName, hotelDescription, hotelRatings, hotels} = dt;
    console.log(id)
    
    let hotelId;
    for(const hotel in hotels){
        hotelId = hotel.id
    }
    return (
        <div className="card w-96 glass">
            <figure><img className='h-64 w-full' src={image} alt={hotelName} /></figure>
            <div className="card-body">
                <h2 className="card-title">{hotelName}</h2>
                <p>{hotelDescription}</p>
                <div className="card-actions items-center justify-between mt-3">
                    <p className='flex'><StarIcon className='h-6 w-5 mx-2 text-btn-color'/>{hotelRatings}</p>
                    <Link to={`/hotels/hotelDetails/${id}`}><button className="btn hover:bg-btn-color bg-btn-color border-none text-black">View details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HotelsCard;
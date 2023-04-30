import React from 'react';
import { StarIcon} from '@heroicons/react/24/solid'

const HotelsCard = ({dt}) => {
    const {id, image, hotelName, roomFacilities, hotelRating, rooms } = dt;

    return (
        <div className='flex md:w-11/12'>
            <img className='mx-5 w-72 rounded-md' src={image} alt="" />
            <div className='h-full'>
                <p className='text-2xl'>{hotelName}</p>
                <p className='text-gray-500 my-2'>{roomFacilities.map((facilities) => <span className='mr-3'>{facilities}</span>)}</p>
                <p className='text-gray-500 my-2 leading-7'>{rooms[0].roomCategoryDescription}</p>
                <div className='flex justify-between my-2'>
                    <p className='grid grid-cols-2 gap-2 items-center font-semibold'><span className=''><StarIcon className='text-btn-color'/></span>{hotelRating}</p>
                    <p className='font-semibold'>{rooms[0].pricing}/night</p>
                </div>
            </div>
        </div>
    );
};

export default HotelsCard;
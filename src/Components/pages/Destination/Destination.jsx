import React, { useState } from 'react';
import DestinationCard from '../DestinationCard/DestinationCard';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { Link, useLoaderData } from 'react-router-dom';

const Destination = () => {
    const destination = useLoaderData();
    const [activeIndex, setActiveIndex] = useState(0);
    const [description, setDescription] = useState('')

    const prevCard = () => {
        setActiveIndex(prevIndex => {
            const newIndex = prevIndex - 1;
            return newIndex < 0 ? destination.length - 1 : newIndex;
        });
    };

    const nextCard = () => {
        setActiveIndex(prevIndex => (prevIndex + 1) % destination.length);
    };

    const handleDescription = id =>{
        const cardDescription = destination.find((card) => card.id == id);
        setDescription(cardDescription)
    }

    const visibleCards = destination.slice(activeIndex, activeIndex + 1);

    // console.log(description)
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 my-auto h-auto">
            <div className="col-span-2 relative sm:m-10 md:m-32">
                {
                   Object.keys(description).length !== 0  ? <><p className='text-white text-7xl pb-10'>{description.name}</p>
                    <p className='text-white text-xl'>{description.description.slice(0, 400)}....</p>
                    <Link to={`/destination/${description.id}`}><button className='flex items-center bg-btn-color py-2 px-5 rounded-md mt-5 font-bold'>Booking <ArrowRightIcon className='h-5 w-5 ml-2'/></button></Link> </>: <p className='text-white text-4xl font-bold'>Please select a destination to visit</p>
                }
            </div>
            <div className="col-span-1 w-6/12 relative mt-32">
                <div onClick={prevCard} className='bg-white rounded-full flex items-center justify-center h-10 w-10 absolute top-1/2 -left-16 transform -translate-y-1/2  text-black z-10'>
                    <ArrowLeftIcon className='h-5 w-5 ' />
                </div>
                <div className='h-auto'>
                    {visibleCards.map(ds => (
                        <DestinationCard 
                        handleDescription={handleDescription}
                        ds={ds} key={ds.id}></DestinationCard>
                    ))}
                </div>
                <div onClick={nextCard} className='bg-white rounded-full flex items-center justify-center h-10 w-10 absolute top-1/2 -right-16 transform -translate-y-1/2  text-black z-10'>
                    <ArrowRightIcon className='h-5 w-5 ' />
                </div>
            </div>
        </div>
    );
};

export default Destination;

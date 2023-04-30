import React, { useEffect, useState } from 'react';
import DestinationCard from '../DestinationCard/DestinationCard';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { useLoaderData } from 'react-router-dom';

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
        setDescription(cardDescription.description)
    }

    const visibleCards = destination.slice(activeIndex, activeIndex + 1);
    const cardId = visibleCards.map(vc => vc.id);

    return (
        <div className="grid grid-cols-3 gap-4 my-auto h-auto">
            <div className="col-span-2">
                <p className='text-white'>{description}</p>
            </div>
            <div className="col-span-1 w-6/12 relative">
                <div onClick={prevCard} className='bg-white rounded-full flex items-center justify-center h-10 w-10 absolute top-1/2 -left-16 transform -translate-y-1/2  text-black z-10'>
                    <ArrowLeftIcon className='h-5 w-5 ' />
                </div>
                <div onClick={() => handleDescription(cardId)} className='h-auto'>
                    {visibleCards.map(ds => (
                        <DestinationCard ds={ds} key={ds.id}></DestinationCard>
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

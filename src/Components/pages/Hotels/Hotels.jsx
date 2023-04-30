import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import HotelsCard from '../HotelsCard/HotelsCard';
import Map from '../Map/Map';

const Hotels = () => {
    const data = useLoaderData();
  
    return (
        <div className='grid grid-cols-2 gap-5 mt-5 md:ml-28 '>
            <div className='grid grid-rows-1 gap-4 mb-10'>
            <p className='ml-5 my-2 text-2xl font-bold'>Stay on {data.name}</p>
                {
                    data.hotels.map(dt => <HotelsCard
                    dt={dt}
                    key={dt.id}
                    ></HotelsCard>)
                }
            </div>
            <div className='w-10/12 -ml-3'>
            <Map/>
            </div>
        </div>
    )
  };
  

export default Hotels;
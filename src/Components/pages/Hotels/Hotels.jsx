import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import HotelsCard from '../HotelsCard/HotelsCard';
import Map from '../Map/Map';

const Hotels = () => {
    const data = useLoaderData();
    console.log(data)
  
    return (
        <div className='mt-5 md:mx-auto md:w-10/12'>
            <p className='ml-5 mb-5 text-2xl font-bold'>Stay on {data.name}</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-10'>
                {
                    data.hotels.map(dt => <HotelsCard
            
                    dt={dt}
                    key={dt.id}
                    ></HotelsCard>)
                }
            </div>
            {/* <div className='w-10/12 -ml-3'>
            <Map/>
            </div> */}
        </div>
    )
  };
  

export default Hotels;
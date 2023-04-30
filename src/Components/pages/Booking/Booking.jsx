import { ArrowRightIcon, CalendarIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
// import 'react-date-range/dist/styles.css'; // main css file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import { DateRangePicker } from 'react-date-range';

const Booking = () => {
    const data = useLoaderData();
    console.log(data)


    // const [dateRange, setDateRange] = useState([
    //     {
    //       startDate: new Date(),
    //       endDate: null,
    //       key: 'selection',
    //     },
    //   ]);
    
    //   const handleDateRangeSelection = (ranges) => {
    //     setDateRange([ranges.selection]);
    //   };




    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-6 relative'>
            <div className='md:mx-32 md:my-16'>
                <p className='text-white text-7xl pb-10'>{data.name}</p>
                <p className='text-white text-xl'>{data.description}</p>
            </div>
            <div className='bg-white rounded-xl w-7/12 h-4/6 p-10 flex flex-col md:mx-32 md:my-16'>
                <label htmlFor="" className='font-bold text-gray-400'>Origin</label>
                <input className='bg-gray-300 p-3 my-3 rounded-md placeholder:text-gray-400' type="text" placeholder='Origin' />
                <label htmlFor="" className='font-bold text-gray-400'>Destination</label>
                <input className='bg-gray-300 p-3 my-3 rounded-md placeholder:text-gray-400' type="text" placeholder='Destination' />
                <div className='flex flex-row justify-between w-full'>
                    {/* <div className='flex flex-col mr-3'>
                        <label htmlFor="" className='font-bold text-gray-400'>From</label>
                        <div className='flex items-center relative'>
                            <input type="text" class="form-control w-full bg-gray-300 p-3 my-3 rounded-md placeholder:text-gray-400" placeholder="From" />
                            <span className='absolute right-2'><CalendarIcon className='h-6 w-6' /></span>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='font-bold text-gray-400'>To</label>
                        <div className='flex items-center relative'>
                            <input type="text" class="form-control w-full bg-gray-300 p-3 my-3 rounded-md placeholder:text-gray-400" placeholder="To" />
                            <span className='absolute right-2'><CalendarIcon className='h-6 w-6' /></span>
                        </div>
                    </div> */}
                          {/* <div className="flex flex-col mr-3">
        <label htmlFor="" className="font-bold text-gray-400">
          From
        </label>
        <div className="flex items-center relative">
          <DateRangePicker
            ranges={dateRange}
            onChange={handleDateRangeSelection}
          />
          <span className="absolute right-2">
            <CalendarIcon className="h-6 w-6" />
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="" className="font-bold text-gray-400">
          To
        </label>
        <div className="flex items-center relative">
          <DateRangePicker
            ranges={dateRange}
            onChange={handleDateRangeSelection}
          />
          <span className="absolute right-2">
            <CalendarIcon className="h-6 w-6" />
          </span>
        </div>
      </div> */}
                </div>
                <button className='bg-btn-color flex items-center justify-center py-3 my-3 rounded-md'>Start Booking <ArrowRightIcon className='h-5 w-5' /></button>
            </div>
        </div>
    );
};

export default Booking;
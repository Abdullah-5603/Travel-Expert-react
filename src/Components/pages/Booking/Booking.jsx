import { ArrowRightIcon, CalendarIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



const Booking = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const data = useLoaderData();

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-6 relative'>
            <div className='md:mx-32 md:my-16'>
                <p className='text-white text-7xl pb-10'>{data.name}</p>
                <p className='text-white text-xl'>{data.description}</p>
            </div>
            <div className='bg-white rounded-xl w-7/12 p-10 flex flex-col md:mx-32 md:my-16'>
                <label htmlFor="" className='font-bold text-gray-400'>Origin</label>
                <input className='bg-gray-300 p-3 my-3 rounded-md placeholder:text-gray-400 font-semibold' type="text" placeholder='Origin' />
                <label htmlFor="" className='font-bold text-gray-400'>Destination</label>
                <input className='bg-gray-300 p-3 my-3 rounded-md placeholder:text-gray-400 font-semibold' type="text" placeholder='Destination' />
                <div className='flex flex-row justify-between w-full'>
                    <div className='flex flex-col mr-3'>
                        <label htmlFor="" className='font-bold text-gray-400'>From</label>
                        <div className='flex items-center relative'>
                            <DatePicker className="calendar-container w-full bg-gray-300 rounded-md my-3 p-3 font-semibold placeholderText:text-gray-400" selected={startDate} onChange={(date) => setStartDate(date)} placeholderText='Start Date'/>
                            <span className='absolute right-2'><CalendarIcon className='h-6 w-6' /></span>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='font-bold text-gray-400'>To</label>
                        <div className='flex items-center relative'>
                            <DatePicker className="calendar-container w-full bg-gray-300 rounded-md my-3 p-3 font-semibold placeholderText:text-gray-400" selected={endDate} onChange={(date) => setEndDate(date)} placeholderText='End Date'/>
                            <span className='absolute right-2'><CalendarIcon className='h-6 w-6' /></span>
                        </div>
                    </div>
                </div>
                <Link to={`/hotels/${data.id}`}><button className='bg-btn-color flex items-center justify-center py-3 my-3 rounded-md font-semibold w-full'>Start Booking <ArrowRightIcon className='h-5 w-5 mx-2 mt-1 ' /></button></Link>
            </div>
        </div>
    );
};

export default Booking;
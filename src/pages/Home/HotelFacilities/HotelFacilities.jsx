import React from 'react';
import keyImg from '/image/icons/smart-door.png';
import roomService from '/image/icons/cleaning-cart.png';
import luggage from '/image/icons/hotel-service.png';
import sanitation from '/image/icons/sanitizer.png';

const HotelFacilities = () => {
    return (
        <div className='my-32'>
            <h3 className='text-5xl text-neutral-600 text-center'> Hotel Facilities </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-3/4 mx-auto mt-16'>
                <div className='space-y-5' >
                    <img src={keyImg} className='w-20 mx-auto' alt="" />
                    <p className='font-semibold text-center'>Smart Key</p>
                </div>
                <div className='space-y-5'>
                    <img src={roomService} className='w-20 mx-auto' alt="" />
                    <p className='font-semibold text-center'>Room Service</p>
                </div>
                <div className='space-y-5'>
                    <img src={luggage} className='w-20 mx-auto' alt="" />
                    <p className='font-semibold text-center'>Luggage Store</p>
                </div>
                <div className='space-y-5'>
                    <img src={sanitation} className='w-20 mx-auto' alt="" />
                    <p className='font-semibold text-center'>Daily Sanitation</p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-3/4 gap-5 lg:ml-[350px] mt-16'>
                <div className="bg-[#884A39] bg-opacity-75 text-center text-white py-5 font-semibold space-y-5">
                    <p>Reception</p>
                    <p>MON .... 11:00 - 3:00 pm</p>
                    <p>FRY .... 11:00 - 3:00 pm</p>
                    <p>SAT .... 11:00 - 3:00 pm</p>
                    <p>SUN .... 11:00 - 3:00 pm</p>
                </div>

                <div className="bg-[url('/image/lunch.jpg')] bg-cover bg-no-repeat h-[260px] relative lg:w-[360px] ml-8">
                   <div className='relative bg-black opacity-50 h-[260px]'></div>
                    <p className='absolute top-24 left-32 font-semibold text-white text-3xl'>Lunch</p>
                </div>

                <div className="bg-[url('/image/spa.jpg')] bg-contain bg-no-repeat lg:w-[195px] h-[260px] relative">
                <div className=' bg-black opacity-50 h-[260px]'></div>
                    <p className='absolute top-24 left-20 font-semibold text-white text-xl'>SPA</p>
                </div>
            </div>

        </div>
    );
};

export default HotelFacilities;
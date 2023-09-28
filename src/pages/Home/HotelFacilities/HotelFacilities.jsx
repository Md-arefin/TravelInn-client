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
        </div>
    );
};

export default HotelFacilities;
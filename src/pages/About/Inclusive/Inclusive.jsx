import React from 'react';
import Counter from '../Counter/Counter';
import icon1 from '/image/icons/travel-luggage.png'

const Inclusive = () => {
    return (
        <div className='my-32'>
            <div className='flex flex-col md:flex-row'>
                <div className='lg:w-1/2'>
                    <div className="bg-[url('/image/food-2.jpg')] bg-contain bg-no-repeat h-[360px] relative lg:ml-48">
                    </div>
                    <div className='bg-[#7c584e] absolute text-white lg:bottom-[-200px] lg:left-[640px] w-72 text-center py-5'>
                        <img src={icon1} className="w-32 mx-auto" alt="" />
                        <p className='text-5xl font-semibold my-5 flex justify-center'>+ <Counter endValue={76} /></p>
                        <p className='text-2xl font-semibold uppercase'>facilities</p>
                    </div>
                </div>

                <div className='lg:w-1/2'>
                    <p className='uppercase text-neutral-600 font-semibold text-sm'>Drinks and Breakfast</p>
                    <h3 className='text-neutral-600 text-6xl my-10'>
                        Al Inclusive
                    </h3>
                    <div className='flex flex-col md:flex-row'>
                        <p className='text-neutral-600 text-lg '>
                            your gateway to a world of exceptional travel experiences. Whether you're planning a romantic getaway, a family vacation, or a business trip, we are your trusted partner in finding the perfect accommodations. With a curated selection of handpicked hotels from around the globe, we offer you a diverse range of options, from luxurious beachfront resorts to charming boutique inns.
                        </p>
                        <p className='text-neutral-600 text-lg '>
                            your gateway to a world of exceptional travel experiences. Whether you're planning a romantic getaway, a family vacation, or a business trip, we are your trusted partner in finding the perfect accommodations. With a curated selection of handpicked hotels from around the globe, we offer you a diverse range of options, from luxurious beachfront resorts to charming boutique inns.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inclusive;
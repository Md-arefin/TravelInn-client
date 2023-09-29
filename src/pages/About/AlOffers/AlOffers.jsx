import React from 'react';
import tickImg from "/image/icons/checked.png"

const AlOffers = () => {
    return (
        <div className='lg:mt-32'>
            <div className='w-3/4 mx-auto mb-20'>
                <p className='uppercase text-neutral-600 font-semibold text-sm'>all offers</p>
                <h3 className='text-neutral-600 text-6xl my-10'>
                    Relax on Vacation
                </h3>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 '>

                    <div className=''>
                        <h3 className='text-neutral-600 text-6xl my-10'>
                            1
                        </h3>

                        <p className='uppercase text-neutral-600 font-semibold text-2xl my-2'>Swimming Pool</p>

                        <p className='text-neutral-600 text-lg '>
                            your gateway to a world of exceptional travel experiences. Whether you're planning a romantic getaway, a family vacation.
                        </p>

                        <div>
                            <div className='my-5 flex gap-5'>
                                <img src={tickImg} className='w-10' alt="" />
                                <p>To a world travel experiences.</p>
                            </div>
                            <div className='my-5 flex gap-5'>
                                <img src={tickImg} className='w-10' alt="" />
                                <p>To a world travel experiences.</p>
                            </div>
                        </div>

                    </div>
                    <div className=' '>
                        <h3 className='text-neutral-600 text-6xl my-10'>
                            2
                        </h3>
                        <p className='uppercase text-neutral-600 font-semibold text-2xl my-2'>Meeting Area</p>
                        <p className='text-neutral-600 text-lg '>
                            your gateway to a world of exceptional travel experiences. Whether you're planning a romantic getaway, a family vacation.
                        </p>
                        <div>
                            <div className='my-5 flex gap-5'>
                                <img src={tickImg} className='w-10' alt="" />
                                <p>To a world travel experiences.</p>
                            </div>
                            <div className='my-5 flex gap-5'>
                                <img src={tickImg} className='w-10' alt="" />
                                <p>To a world travel experiences.</p>
                            </div>
                        </div>
                    </div>
                    <div className=' '>
                        <h3 className='text-neutral-600 text-6xl my-10'>
                            3
                        </h3>
                        <p className='uppercase text-neutral-600 font-semibold text-2xl my-2'>Mini Club</p>
                        <p className='text-neutral-600 text-lg '>
                            your gateway to a world of exceptional travel experiences. Whether you're planning a romantic getaway, a family vacation.
                        </p>
                        <div>
                            <div className='my-5 flex gap-5'>
                                <img src={tickImg} className='w-10' alt="" />
                                <p>To a world travel experiences.</p>
                            </div>
                            <div className='my-5 flex gap-5'>
                                <img src={tickImg} className='w-10' alt="" />
                                <p>To a world travel experiences.</p>
                            </div>
                        </div>
                    </div>
                    <div className=' '>
                        <h3 className='text-neutral-600 text-6xl my-10'>
                            4
                        </h3>
                        <p className='uppercase text-neutral-600 font-semibold text-2xl my-2'>Indoor Gym</p>
                        <p className='text-neutral-600 text-lg '>
                            your gateway to a world of exceptional travel experiences. Whether you're planning a romantic getaway, a family vacation.
                        </p>
                        <div>
                            <div className='my-5 flex gap-5'>
                                <img src={tickImg} className='w-10' alt="" />
                                <p>To a world travel experiences.</p>
                            </div>
                            <div className='my-5 flex gap-5'>
                                <img src={tickImg} className='w-10' alt="" />
                                <p>To a world travel experiences.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[url('/image/bed.jpg')] bg-cover bg-no-repeat h-[560px] relative">
                <div className='bg-black h-[560px] opacity-40 '>
                </div>
                <div className='absolute lg:top-40 ml-10 w-full'>
                    <div className='text-white lg:ml-72'>
                        <p className=' font-bold text-5xl lg:ml-96'>Lunch & Dinner</p>
                        <p className=' my-5 text-lg w-3/4'>
                        your gateway to a world of exceptional travel experiences. Whether you're planning a romantic getaway, a family vacation.
                        your gateway to a world of exceptional travel experiences. Whether you're planning a romantic getaway, a family vacation.
                        your gateway to a world of exceptional travel experiences. Whether you're planning a romantic getaway, a family vacation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlOffers;
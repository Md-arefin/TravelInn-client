import React from 'react';
import img1 from "/image/news-01.jpg";
import img2 from "/image/news-02.jpg";
import img3 from "/image/abstract.jpg";

const HotelEvents = () => {
    return (
        <div className='my-32'>
            <div className='text-center'>
                <p className='uppercase font-semibold text-sm'>HOTEL EVENTS</p>
                <h3 className='text-6xl font-semibold my-10'>
                    Check our Latest <br /> News
                </h3>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto '>

                <div className='lg:ml-[300px]'>
                    <div className="bg-[url('/image/abstract.jpg')] bg-cover bg-no-repeat h-[260px] relative lg:w-96 mb-5">
                        <div className='bg-[#895446] h-[260px] opacity-70  lg:w-96'>
                        </div>

                        <div className='absolute top-1 py-5 px-5 text-white'>
                            <p className='font-semibold text-2xl text-center mb-5'>
                                Luxury Spa Retreat
                            </p>
                            <p>
                                Indulge in a rejuvenating spa experience within the hotel, offering massages, facials, and wellness treatments for a truly relaxing stay.
                                Indulge in a rejuvenating spa experience within the hotel, offering massages, facials.
                            </p>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 rounded-none shadow-xl ">
                        <figure><img src={img1} alt=" " /></figure>
                        <div className="card-body">
                            <p className='border-l-4 pl-2 border-[#a86654]'>MARCH 14, 2022</p>
                            <h2 className="card-title">Adventure and Outdoors Package</h2>
                            <p>
                                Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci utet.
                            </p>
                            <div className="card-actions justify-start">
                                <button className="btn bg-red-400 rounded-none">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:ml-[120px]'>
                    <div className="card w-96 bg-base-100 shadow-xl rounded-none space-y-0 mb-5">
                        <figure><img src={img2} className='h-[270px]' alt="" /></figure>
                        <div className="card-body h-72">
                            <p className='border-l-4 pl-2 border-[#a86654] h-[5px]'>MARCH 14, 2022</p>
                            <h2 className="card-title">Culinary Delights Weekend</h2>
                            <p>
                                Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci utet.
                            </p>
                            <div className="card-actions justify-start">
                                <button className="btn bg-red-400 rounded-none">Read More</button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[url('/image/abstract.jpg')] bg-cover bg-no-repeat h-[260px] relative lg:w-96">
                        <div className='bg-[#895446] h-[260px] opacity-70  lg:w-96'>
                        </div>

                        <div className='absolute top-1 py-5 px-5 text-white'>
                            <p className='font-semibold text-2xl text-center mb-5'>
                                Exclusive Wine Tasting Soiree
                            </p>
                            <p>
                                Indulge in a rejuvenating spa experience within the hotel, offering massages, facials, and wellness treatments for a truly relaxing stay.
                                Indulge in a rejuvenating spa experience within the hotel, offering massages, facials.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='lg:ml-[-60px]'>
                    <div className="bg-[url('/image/123.jpg')] bg-cover bg-no-repeat h-[260px] relative lg:w-96">
                        <div className='bg-black h-[260px] opacity-40 '>
                        </div>
                        <p className='absolute top-52 text-white font-semibold text-2xl left-5 border-l-4 border-white pl-2'>Gala Dinner</p>
                    </div>

                    <div className="bg-[url('/image/456.jpg')] bg-cover bg-no-repeat h-[260px] relative lg:w-96 my-7">
                        <div className='bg-black h-[260px] opacity-40 '>
                        </div>
                        <p className='absolute top-52 text-white font-semibold text-2xl left-5 border-l-4 border-white pl-2'> Wedding Receptions</p>
                    </div>

                    <div className="bg-[url('/image/food-2.jpg')] bg-cover bg-no-repeat h-[260px] relative lg:w-96 mt-5">
                        <div className='bg-black h-[260px] opacity-40 '>
                        </div>
                        <p className='absolute top-52 text-white font-semibold text-2xl left-5 border-l-4 border-white pl-2'> Adventure Outdoors</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HotelEvents;
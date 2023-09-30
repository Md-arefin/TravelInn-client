import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <Swiper
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper">
                <SwiperSlide>
                    <div className="w-full bg-[url('/image/banners/1.jpg')] h-[750px] bg-cover bg-no-repeat">
                        <div className="relative bg-black opacity-50 h-[750px]">
                        </div>
                        <div className='absolute lg:top-72 w-full'>
                            <p className='text-6xl text-center text-white '>Discover Paradise in Every Stay</p>
                            <p className='uppercase text-white text-opacity-70 text-center my-10 font-semibold lg:text-2xl'>check our latest seasonal promotions</p>
                            <Link to='/' className='text-white flex justify-center'>
                                <p className='bg-[#a98467] btn border-none p-1 w-40 text-center '>Check All Rooms</p>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full bg-[url('/image/banners/5.jpg')] h-[750px] bg-cover bg-no-repeat">
                        <div className=" bg-black opacity-50 h-[750px]">
                        </div>
                        <div className='absolute lg:top-72 w-full'>
                            <p className='text-6xl text-center text-white '>Discover Paradise in Every Stay</p>
                            <p className='uppercase text-white text-opacity-70 text-center my-10 font-semibold lg:text-2xl'>check our latest seasonal promotions</p>
                            <Link to='/' className='text-white flex justify-center'>
                                <p className='bg-[#a98467] btn border-none p-1 w-40 text-center '>Check All Rooms</p>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full bg-[url('/image/banners/3.jpg')] h-[750px] bg-cover bg-no-repeat">
                        <div className=" bg-black opacity-50 h-[750px]">
                        </div>
                        <div className='absolute lg:top-72 w-full'>
                            <p className='text-6xl text-center text-white '>Discover Paradise in Every Stay</p>
                            <p className='uppercase text-white text-opacity-70 text-center my-10 font-semibold lg:text-2xl'>check our latest seasonal promotions</p>
                            <Link to='/' className='text-white flex justify-center'>
                                <p className='bg-[#a98467] btn border-none p-1 w-40 text-center '>Check All Rooms</p>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full bg-[url('/image/banners/4.jpg')] h-[750px] bg-cover bg-no-repeat">
                        <div className=" bg-black opacity-50 h-[750px]">
                        </div>
                        <div className='absolute lg:top-72 w-full'>
                            <p className='text-6xl text-center text-white '>Discover Paradise in Every Stay</p>
                            <p className='uppercase text-white text-opacity-70 text-center my-10 font-semibold lg:text-2xl'>check our latest seasonal promotions</p>
                            <Link to='/' className='text-white flex justify-center'>
                                <p className='bg-[#a98467] btn border-none p-1 w-40 text-center '>Check All Rooms</p>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full bg-[url('/image/banners/2.jpg')] h-[750px] bg-cover bg-no-repeat">
                        <div className=" bg-black opacity-50 h-[750px]">
                        </div>
                        <div className='absolute lg:top-72 w-full'>
                            <p className='text-6xl text-center text-white '>Discover Paradise in Every Stay</p>
                            <p className='uppercase text-white text-opacity-70 text-center my-10 font-semibold lg:text-2xl'>check our latest seasonal promotions</p>
                            <Link to='/' className='text-white flex justify-center'>
                                <p className='bg-[#a98467] btn border-none p-1 w-40 text-center '>Check All Rooms</p>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
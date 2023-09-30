import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from 'react-router-dom';
import tickImg from '/image/icons/check-mark.png'

const Gallery = () => {
    return (
        <div className='my-32'>
            <Swiper
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper">
                {/* 1 slide */}
                <SwiperSlide>
                    <div className="w-full">
                        {/* grid start*/}
                        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>

                            {/* 1st column */}
                            <div>
                                {/* 1st column 1st pic */}
                                <div className="bg-[url('/image/abstract.jpg')] bg-cover bg-no-repeat relative lg:w-96 mb-7 h-[280px]">
                                    <div className='bg-[#895446] h-[280px] opacity-70  lg:w-96'>
                                    </div>
                                    <div className='absolute top-1 py-5 px-5 text-white'>
                                        <div>
                                            <p>
                                                Indulge in a rejuvenating spa experience within the hotel, offering massages, facials.
                                                Indulge in a rejuvenating spa experience within the hotel, offering massages, facials.
                                            </p>
                                            <div className='flex items-center justify-center gap-5 mt-10'>
                                                <div className="avatar">
                                                    <div className="w-16 rounded-full">
                                                        <img src="https://i.ibb.co/BscB2zH/w-6.jpg" />
                                                    </div>
                                                </div>
                                                <div className=''>
                                                    <p>Robin parker</p>
                                                    <p>Manager</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 1st column 2nd pic */}
                                <div className="bg-[url('/image/g-7.jpg')] bg-cover bg-no-repeat relative lg:w-96">
                                    <div className='bg-black h-[270px] opacity-50  lg:w-96'>
                                    </div>

                                    <div className='absolute lg:top-6 lg:left-20 py-5 px-5 text-white'>
                                        <div className='w-full text-center'>
                                            <p className='text-5xl mb-5'>
                                                HOTEL
                                            </p>
                                            <p className='font-bold text-7xl'>
                                                320+
                                            </p>
                                            <p className='font-semibold text-xl lg:mt-3'>
                                                CUSTOMERS
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 2nd column */}
                            <div className="bg-[url('/image/g-3.jpg')] bg-contain bg-no-repeat lg:ml-[-70px] lg:h-[580px]">
                            </div>
                            {/* 3rd column */}
                            <div className='lg:ml-[-140px]'>
                                {/* 3rd column 1st pic */}
                                <div className="bg-[url('/image/g-2.jpg')] bg-cover bg-no-repeat h-[270px] relative mb-5 "></div>

                                <div className='flex justify-evenly gap-5'>
                                    {/* 3rd column 2nd pic */}
                                    <div className="">
                                        <div className='bg-[#a86654] h-[290px] opacity-100  lg:w-[300px] relative'>
                                        </div>

                                        <div className='absolute lg:top-[300px] py-5 px-5 text-white  lg:w-[290px]'>
                                            <p className='text-center text-4xl my-5 font-semibold'>Hotel Info</p>

                                            <div className='flex items-center justify-center gap-5'>
                                                <img src={tickImg} className="w-10" alt="" />
                                                <p className=' text-xl'>Drinks Included</p>
                                            </div>
                                            <div className='flex items-center justify-center gap-5'>
                                                <img src={tickImg} className="w-10" alt="" />
                                                <p className=' text-xl'>Pets Allowed</p>
                                            </div>
                                            <div className='flex items-center justify-center gap-5'>
                                                <img src={tickImg} className="w-10" alt="" />
                                                <p className=' text-xl'>Heated Pool</p>
                                            </div>
                                            <div className='flex items-center justify-center gap-5'>
                                                <img src={tickImg} className="w-10" alt="" />
                                                <p className=' text-xl'>Indoor Gym</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 3rd column 3rd pic */}
                                    <div className="">
                                        <div className="bg-[url('/image/g-5.jpg')] bg-cover bg-no-repeat h-[290px] opacity-100 lg:w-[290px]">
                                        </div>

                                        <div className='absolute lg:top-6 lg:left-20 py-5 px-5 text-white'>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* 4th column */}
                            <div className="bg-[url('/image/saad-khan-425b2PhNuHA-unsplash.jpg')] bg-contain bg-no-repeat lg:h-[580px] lg:ml-[20px]">
                            </div>
                        </div>
                        {/* grid ends */}
                    </div>
                </SwiperSlide>

                {/* 2 slide */}
                <SwiperSlide>
                    <div className="w-full">

                        {/* grid start*/}
                        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                            {/* 1st column */}
                            <div className="bg-[url('/image/g-6.jpg')] bg-cover bg-no-repeat lg:h-[580px] ">
                            </div>

                            {/* 2nd column */}
                            <div className='lg:ml-[25px]'>
                                {/* 2nd column 1st pic */}
                                <div className="bg-[url('/image/g-4.jpg')] bg-cover bg-no-repeat lg:w-[580px] h-[270px] relative mb-5 "></div>

                                <div className='flex justify-evenly gap-5 lg:ml-[130px]'>
                                    {/* 2nd column 2nd pic */}
                                    <div className="">
                                        <div className='bg-[#a86654] opacity-100 h-[290px] lg:w-[280px] relative'>
                                        </div>

                                        <div className='absolute lg:top-[300px] py-5 px-5 text-white  lg:w-[280px]'>
                                            <p className='text-center text-4xl my-5 font-semibold'>Hotel Info</p>

                                            <div className='flex items-center justify-center gap-5'>
                                                <img src={tickImg} className="w-10" alt="" />
                                                <p className=' text-xl'>Drinks Included</p>
                                            </div>
                                            <div className='flex items-center justify-center gap-5'>
                                                <img src={tickImg} className="w-10" alt="" />
                                                <p className=' text-xl'>Pets Allowed</p>
                                            </div>
                                            <div className='flex items-center justify-center gap-5'>
                                                <img src={tickImg} className="w-10" alt="" />
                                                <p className=' text-xl'>Heated Pool</p>
                                            </div>
                                            <div className='flex items-center justify-center gap-5'>
                                                <img src={tickImg} className="w-10" alt="" />
                                                <p className=' text-xl'>Indoor Gym</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 2nd column 3rd pic */}
                                    <div className="">
                                        <div className="bg-[url('/image/food.jpg')] bg-cover bg-no-repeat h-[290px] opacity-100 lg:w-[280px]">
                                        </div>

                                        <div className='absolute lg:top-6 lg:left-20 py-5 px-5 text-white'>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* 3rd column */}
                            <div className="bg-[url('public/image/darshan-patel-DfzzpBRZCT0-unsplash.jpg')] bg-contain bg-no-repeat w-full lg:ml-[150px] ">
                            </div>

                            {/*4th column */}

                            <div className='xl:ml-[1520px] absolute '>
                                {/* 4th column 1st pic */}
                                <div className="bg-[url('/image/abstract.jpg')] bg-cover bg-no-repeat relative lg:w-96 mb-7 h-[280px]">
                                    <div className='bg-[#895446] h-[280px] opacity-70  lg:w-96'>
                                    </div>
                                    <div className='absolute top-1 py-5 px-5 text-white'>
                                        <div>
                                            <p>
                                                Indulge in a rejuvenating spa experience within the hotel, offering massages, facials.
                                                Indulge in a rejuvenating spa experience within the hotel, offering massages, facials.
                                            </p>
                                            <div className='flex items-center justify-center gap-5 mt-10'>
                                                <div className="avatar">
                                                    <div className="w-16 rounded-full">
                                                        <img src="https://i.ibb.co/BscB2zH/w-6.jpg" />
                                                    </div>
                                                </div>
                                                <div className=''>
                                                    <p>Robin parker</p>
                                                    <p>Manager</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 4th column 2nd pic */}
                                <div className="bg-[url('/image/g-2.jpg')] bg-cover bg-no-repeat relative lg:w-96">
                                    <div className='bg-black h-[270px] opacity-50  lg:w-96'>
                                    </div>

                                    <div className='absolute lg:top-6 lg:left-20 py-5 px-5 text-white'>
                                        <div className='w-full text-center'>
                                            <p className='text-5xl mb-5'>
                                                HOTEL
                                            </p>
                                            <p className='font-bold text-7xl'>
                                                320+
                                            </p>
                                            <p className='font-semibold text-xl lg:mt-3'>
                                                CUSTOMERS
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* grid ends */}
                    </div>
                </SwiperSlide>

                {/* 3 slide */}
                <SwiperSlide>
                    <div className="w-full">
                        {/* <div className="relative bg-black opacity-50 h-[750px]"></div> */}

                        {/* grid start*/}
                        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>

                            {/* 1st column */}
                            <div>
                                {/* 1st column 1st pic */}
                                <div className="bg-[url('/image/vojtech-bruzek-Yrxr3bsPdS0-unsplash.jpg')] bg-cover bg-no-repeat relative lg:w-96 mb-7">
                                    <div className='bg-black h-[270px] opacity-50  lg:w-96'>
                                    </div>

                                    <div className='absolute lg:top-6 lg:left-20 py-5 px-5 text-white'>
                                        <div className='w-full text-center'>
                                            <p className='text-5xl mb-5'>
                                                HOTEL
                                            </p>
                                            <p className='font-bold text-7xl'>
                                                320+
                                            </p>
                                            <p className='font-semibold text-xl lg:mt-3'>
                                                CUSTOMERS
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 1st column 2nd pic */}
                                <div className="bg-[url('/image/abstract.jpg')] bg-cover bg-no-repeat relative lg:w-96  h-[280px]">
                                    <div className='bg-black h-[280px] opacity-70 lg:w-96'>
                                    </div>
                                    <div className='absolute top-1 py-5 px-5 text-white'>
                                        <div>
                                            <p>
                                                Indulge in a rejuvenating spa experience within the hotel, offering massages, facials.
                                                Indulge in a rejuvenating spa experience within the hotel, offering massages, facials.
                                            </p>
                                            <div className='flex items-center justify-center gap-5 mt-10'>
                                                <div className="avatar">
                                                    <div className="w-16 rounded-full">
                                                        <img src="https://i.ibb.co/BscB2zH/w-6.jpg" />
                                                    </div>
                                                </div>
                                                <div className=''>
                                                    <p>Robin parker</p>
                                                    <p>Manager</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 2nd column */}
                            <div className="bg-[url('/image/spa.jpg')] bg-cover bg-no-repeat lg:ml-[-70px] lg:w-[380px] lg:h-[580px]">
                            </div>
                            {/* 3rd column */}
                            <div className='lg:ml-[-140px]'>
                                {/* 3rd column 1st pic */}
                                <div className="bg-[url('/image/bed.jpg')] bg-cover bg-no-repeat h-[270px] relative mb-5 "></div>

                                <div className='flex justify-evenly gap-5'>
                                    {/* 3rd column 2nd pic */}
                                    <div className="">
                                        <div className='bg-[#a86654] h-[290px] opacity-100  lg:w-[300px] relative'>
                                        </div>

                                        <div className='absolute lg:top-[300px] py-5 px-5 text-white  lg:w-[290px]'>
                                            <p className='text-center text-4xl my-5 font-semibold'>Hotel Info</p>

                                            <div className='flex items-center justify-center gap-5'>
                                                <img src={tickImg} className="w-10" alt="" />
                                                <p className=' text-xl'>Drinks Included</p>
                                            </div>
                                            <div className='flex items-center justify-center gap-5'>
                                                <img src={tickImg} className="w-10" alt="" />
                                                <p className=' text-xl'>Pets Allowed</p>
                                            </div>
                                            <div className='flex items-center justify-center gap-5'>
                                                <img src={tickImg} className="w-10" alt="" />
                                                <p className=' text-xl'>Heated Pool</p>
                                            </div>
                                            <div className='flex items-center justify-center gap-5'>
                                                <img src={tickImg} className="w-10" alt="" />
                                                <p className=' text-xl'>Indoor Gym</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 3rd column 3rd pic */}
                                    <div className="">
                                        <div className="bg-[url('/image/g-5.jpg')] bg-cover bg-no-repeat h-[290px] opacity-100 lg:w-[290px]">
                                        </div>

                                        <div className='absolute lg:top-6 lg:left-20 py-5 px-5 text-white'>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* 4th column */}
                            <div className="bg-[url('/image/darshan-patel-DfzzpBRZCT0-unsplash.jpg')] bg-contain bg-no-repeat lg:h-[580px] lg:ml-[20px]">
                            </div>
                        </div>
                        {/* grid ends */}
                    </div>
                </SwiperSlide>

                {/* 4 slide */}
                <SwiperSlide>
                    <div className="w-full">

                        {/* grid start*/}
                        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                            {/* 1st column */}
                            <div className="bg-[url('/image/food-25.jpg')] bg-cover bg-no-repeat lg:h-[580px] ">
                            </div>

                            {/* 2nd column */}
                            <div className='lg:ml-[25px]'>
                                {/* 2nd column 1st pic */}
                                <div className="bg-[url('/image/parallax.jpg')] bg-cover bg-no-repeat lg:w-[580px] h-[270px] relative mb-5 "></div>

                                <div className='flex justify-evenly gap-5 lg:ml-[130px]'>
                                    {/* 2nd column 2nd pic */}
                                    <div className="">
                                        <div className='bg-[#a86654] opacity-100 h-[290px] lg:w-[280px] relative'>
                                        </div>

                                        <div className='absolute lg:top-[300px] py-5 px-5 text-white  lg:w-[280px]'>
                                            <p className='text-center text-4xl my-5 font-semibold'>Hotel Info</p>

                                            <div className='flex items-center justify-center gap-5'>
                                                <img src={tickImg} className="w-10" alt="" />
                                                <p className=' text-xl'>Drinks Included</p>
                                            </div>
                                            <div className='flex items-center justify-center gap-5'>
                                                <img src={tickImg} className="w-10" alt="" />
                                                <p className=' text-xl'>Pets Allowed</p>
                                            </div>
                                            <div className='flex items-center justify-center gap-5'>
                                                <img src={tickImg} className="w-10" alt="" />
                                                <p className=' text-xl'>Heated Pool</p>
                                            </div>
                                            <div className='flex items-center justify-center gap-5'>
                                                <img src={tickImg} className="w-10" alt="" />
                                                <p className=' text-xl'>Indoor Gym</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 2nd column 3rd pic */}
                                    <div className="">
                                        <div className="bg-[url('/image/food.jpg')] bg-cover bg-no-repeat h-[290px] opacity-100 lg:w-[280px]">
                                        </div>

                                        <div className='absolute lg:top-6 lg:left-20 py-5 px-5 text-white'>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* 3rd column */}
                            <div className="bg-[url('public/image/darshan-patel-DfzzpBRZCT0-unsplash.jpg')] bg-contain bg-no-repeat w-full lg:ml-[150px] ">
                            </div>

                            {/*4th column */}

                            <div className='xl:ml-[1520px] absolute '>
                                {/* 4th column 1st pic */}
                                <div className="bg-[url('/image/abstract.jpg')] bg-cover bg-no-repeat relative lg:w-96 mb-7 h-[280px]">
                                    <div className='bg-[#895446] h-[280px] opacity-70  lg:w-96'>
                                    </div>
                                    <div className='absolute top-1 py-5 px-5 text-white'>
                                        <div>
                                            <p>
                                                Indulge in a rejuvenating spa experience within the hotel, offering massages, facials.
                                                Indulge in a rejuvenating spa experience within the hotel, offering massages, facials.
                                            </p>
                                            <div className='flex items-center justify-center gap-5 mt-10'>
                                                <div className="avatar">
                                                    <div className="w-16 rounded-full">
                                                        <img src="https://i.ibb.co/BscB2zH/w-6.jpg" />
                                                    </div>
                                                </div>
                                                <div className=''>
                                                    <p>Robin parker</p>
                                                    <p>Manager</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 4th column 2nd pic */}
                                <div className="bg-[url('/image/g-2.jpg')] bg-cover bg-no-repeat relative lg:w-96">
                                    <div className='bg-black h-[270px] opacity-50  lg:w-96'>
                                    </div>

                                    <div className='absolute lg:top-6 lg:left-20 py-5 px-5 text-white'>
                                        <div className='w-full text-center'>
                                            <p className='text-5xl mb-5'>
                                                HOTEL
                                            </p>
                                            <p className='font-bold text-7xl'>
                                                320+
                                            </p>
                                            <p className='font-semibold text-xl lg:mt-3'>
                                                CUSTOMERS
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* grid ends */}
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Gallery;
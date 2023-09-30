import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from 'react-router-dom';

const Gallery = () => {
    return (
        <div className='my-32'>
            <Swiper
                // autoplay={{
                //     delay: 3500,
                //     disableOnInteraction: false,
                // }}
                // modules={[Autoplay]}
                className="mySwiper">
                <SwiperSlide>
                    <div className="w-full">
                        {/* <div className="relative bg-black opacity-50 h-[750px]"></div> */}
                        <div className='w-full '>
                          
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Gallery;
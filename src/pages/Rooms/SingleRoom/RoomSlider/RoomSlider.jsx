import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const RoomSlider = ({ images }) => {
    console.log("[images]", images);
    return (
        <div>
            <Swiper
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper">
                {
                    images?.map((image, i) =>
                        <SwiperSlide key={i}>
                            <div className="w-full h-96 lg:h-[750px]">
                                <figure>
                                    <img src={image} className='object-contain h-96 lg:h-[750px] w-full' alt='' />
                                </figure>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default RoomSlider;
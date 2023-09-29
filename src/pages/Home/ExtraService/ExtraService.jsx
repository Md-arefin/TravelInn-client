import React from 'react';
import { Link } from 'react-router-dom';
import lady from '/image/lady.jpg'

const ExtraService = () => {
    return (
        <div className='my-32'>
            <div className='flex flex-col md:flex-row gap-10 ml-96 relative'>

                <div className='lg:w-1/2'>
                    <p className='uppercase font-semibold text-sm'>extra services & offers</p>
                    <h3 className='text-neutral-600 text-6xl my-10'>
                        Best Stay by the Lake
                    </h3>
                    <div className='flex flex-col md:flex-row gap-10'>
                        <p className='text-neutral-600 text-lg '>
                            Experience the ultimate lakeside getaway: serene views, water activities, and cozy accommodations. Unwind by the tranquil lake, savor nature's beauty, and make unforgettable memories in a perfect lakeside retreat.
                        </p>
                        <p className='text-neutral-600 text-lg '>
                            Experience the ultimate lakeside getaway: serene views, water activities, and cozy accommodations. Unwind by the tranquil lake, savor nature's beauty, and make unforgettable memories in a perfect lakeside retreat.
                        </p>
                    </div>
                    <Link to='' className='btn uppercase bg-[#a98467] mt-10'>
                        Order now
                    </Link>

                    <div className='flex flex-col md:flex-row absolute gap-10 mt-10 z-10'>
                        <img src="https://i.ibb.co/6sdK3h6/vojtech-bruzek-Yrxr3bs-Pd-S0-unsplash.jpg" className="w-40" alt="" />

                        <img src="https://i.ibb.co/hcnhbX2/visualsofdana-T5p-L6ci-En-I-unsplash.jpg" className="w-40" alt="" />

                        <img src="https://i.ibb.co/K98tR5v/parallax6.jpg" className="w-40" alt="" />

                        <img src="https://i.ibb.co/9Wp8GqV/rhema-kallianpur-uoc-Sn-WMhn-As-unsplash.jpg" className="w-40" alt="" />
                       
                    </div>
                </div>

                <div className='lg:w-1/2'>
                    <img src={lady} className="w-2/3" alt="" />
                </div>

            </div>
        </div>
    );
};

export default ExtraService;
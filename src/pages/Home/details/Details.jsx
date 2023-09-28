import React from 'react';

const Details = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row gap-5 my-32'>

                <div className='lg:w-1/2 relative'>
                    <div className='w-1/2'>
                        <img src="https://i.ibb.co/L8SDkGN/cody-weiss-h-EMYw-IE6-GEY-unsplash.jpg" className='bg-cover w-full lg:ml-96' alt="" />
                    </div>
                    <div className='absolute top-[300px] lg:ml-16 w-2/3 bg-white p-5'>
                        <img src="https://i.ibb.co/6sdK3h6/vojtech-bruzek-Yrxr3bs-Pd-S0-unsplash.jpg"  alt="" />
                    </div>
                </div>

                <div className='lg:w-1/2 lg:mt-20'>
                    <p className='uppercase text-neutral-600 text-sm'>best stay in the town</p>
                    <h3 className='text-neutral-600 text-6xl my-10'>
                        Reserve a <br />
                        Cool Suite
                    </h3>
                    <p className='text-neutral-600 text-lg '>
                        Welcome to our website, your gateway to a world of exceptional travel experiences. Whether you're planning a romantic getaway, a family vacation, or a business trip, we are your trusted partner in finding the perfect accommodations. With a curated selection of handpicked hotels from around the globe, we offer you a diverse range of options, from luxurious beachfront resorts to charming boutique inns. Our user-friendly platform provides you with detailed hotel listings, user reviews, and seamless booking processes. Explore our site to discover remarkable destinations, explore unique amenities, and secure your dream stay. With us, your journey begins with a click, and your unforgettable memories are just a reservation away.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Details;
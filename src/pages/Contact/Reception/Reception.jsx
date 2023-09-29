import React from 'react';
import img1 from "/image/circle-1.png";
import img2 from "/image/circle-2.png";

const Reception = () => {
    return (
        <div className='lg:my-32'>
            <div className='flex flex-col md:flex-row gap-28 relative justify-center'>
                <div className=' flex flex-row items-center border-2 py-6 gap-5 lg:w-[35%]'>
                    <div >
                        <img src={img1} className="w-28 absolute lg:top-6 lg:left-[170px]" alt="" />
                    </div>
                    <div className='pl-20'>
                        <p className='text-3xl mb-5'>
                            Reception Always Open
                        </p>
                        <p className='text-neutral-600 text-lg'>
                            your gateway to a world of exceptional travel experiences. Whether you're planning a romantic getaway, a family vacation.
                        </p>
                    </div>
                </div>

                <div className='relative flex flex-row items-center border-2 p-2 gap-5 lg:w-[35%]'>
                    <div>
                        <img src={img2} className="w-28 absolute lg:top-6 lg:left-[-40px]" alt="" />
                    </div>
                    <div  className='pl-20'>
                        <p className='text-3xl mb-5'>
                            Online Reservations
                        </p>
                        <p className='text-neutral-600 text-lg '>
                            your gateway to a world of exceptional travel experiences. Whether you're planning a romantic getaway, a family vacation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reception;
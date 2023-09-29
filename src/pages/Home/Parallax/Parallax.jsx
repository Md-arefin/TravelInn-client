import React from 'react';
import { Link } from 'react-router-dom';

const Parallax = () => {
    return (
        <div className='my-32'>
            <div className="relative bg-[url('/image/parallax.jpg')] bg-cover bg-no-repeat h-[800px] bg-fixed">
                <div className=' bg-black opacity-50 h-[800px]'></div>
                <div className='absolute text-white lg:top-20 w-full'>
                    <p className='text-center uppercase'>our room prices</p>

                    <h5 className='text-center text-4xl mt-10 '>The Best Prices</h5>
                </div>

                <div className='absolute lg:top-60 lg:left-24 w-2/4 lg:ml-96 grid grid-cols-1 lg:grid-cols-3 h-[450px]'>

                    <div className='bg-white text-center space-y-6 py-5 w-60 h-[350px] lg:mt-14 lg:ml-[51px] '>
                        <p className='text-4xl'>Single Room</p>
                        <p className='text-2xl'>$ 45 / night</p>
                        <p>
                            Book early, use deals, loyalty programs; consider alternatives, be date-flexible.
                        </p>
                        <Link to='' className='btn uppercase bg-[#a98467]'>
                            more info
                        </Link>
                    </div>
                    <div className='bg-[#a86654] text-center space-y-4 lg:pt-8 w-64  opacity-90 text-white'>
                        <p className='text-4xl'>Small Suite</p>
                        <p className='text-2xl'>$ 55 / night</p>
                        <p>
                            Book early, use deals, loyalty programs; consider alternatives, be date-flexible.
                            Book early, use deals, loyalty programs; consider alternatives, be date-flexible.
                            Book early, use deals, loyalty programs; consider alternatives, be date-flexible.
                        </p>
                        <Link to='' className='btn uppercase bg-white'>
                            more info
                        </Link>
                    </div>
                    <div className='bg-white  py-5 w-60 text-center space-y-6 h-[350px] lg:mt-14 lg:ml-[-35px]'>
                        <p className='text-4xl'>Apartment</p>
                        <p className='text-2xl'>$ 72 / night</p>
                        <p>
                            Book early, use deals, loyalty programs; consider alternatives, be date-flexible.
                        </p>
                        <Link to='' className='btn uppercase bg-[#a98467]'>
                            more info
                        </Link>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Parallax;
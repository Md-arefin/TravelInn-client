import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { ImList } from 'react-icons/im';
import { BsGrid3X3Gap } from 'react-icons/bs';

const RoomsHeader = () => {
    return (
        <div>
            <div className="bg-[url('/image/123456.jpg')] bg-cover bg-no-repeat h-[560px] relative mt-5">
                <div className='bg-black h-[560px] opacity-50 '>
                </div>
                <div className='absolute lg:top-60 lg:ml-48 lg:w-10/12'>
                    <p className=' text-white font-bold text-5xl text-center'>Rooms</p>
                </div>
            </div>
            <div className='w-full bg-[#895446] h-16 flex items-center justify-center gap-52'>
                <div className='flex items-center justify-center gap-16'>
                    <div>
                        <details className="dropdown cursor-pointer">
                            <summary className="text-white font-semibold text-center text-xl btn bg-transparent border-none hover:bg-transparent">Stay Price
                                <MdKeyboardArrowDown />
                            </summary>
                            <p></p>
                            <ul className=" shadow menu dropdown-content z-[1] bg-base-100 rounded-md w-52">
                                <li className='btn bg-transparent cursor-pointer hover:bg-[#895446] hover:text-white py-1'>Lowest Price</li>
                                <li className='btn bg-transparent cursor-pointer hover:bg-[#895446] hover:text-white py-1'>Highest Price</li>
                            </ul>
                        </details>
                    </div>
                    <div>
                        <details className="dropdown cursor-pointer">
                            <summary className="text-white font-semibold text-center text-xl btn bg-transparent border-none hover:bg-transparent">Room Size  <MdKeyboardArrowDown /></summary>
                            <ul className=" shadow menu dropdown-content z-[1] bg-base-100 rounded-md w-52">
                                <li className='btn bg-transparent cursor-pointer hover:bg-[#895446] hover:text-white py-1'>Larger</li>
                                <li className='btn bg-transparent cursor-pointer hover:bg-[#895446] hover:text-white py-1'>Smallest</li>
                            </ul>
                        </details>
                    </div>
                </div>

                <div className='text-white flex items-center justify-center gap-10'>
                    <ImList className='cursor-pointer text-xl'/>
                    <BsGrid3X3Gap className='cursor-pointer text-xl'/>
                </div>
            </div>
        </div>
    );
};

export default RoomsHeader;
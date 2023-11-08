import React from 'react';



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

                <p className='text-white text-center text-2xl my-auto'>Enjoy your holidays in our beautiful Hotels</p>

            </div>
        </div>
    );
};

export default RoomsHeader;
import React from 'react';

const HeaderSection = () => {
    return (
        <div>
            <div className="bg-[url('/image/23.jpg')] bg-cover bg-no-repeat h-[560px] relative mt-5">
                <div className='bg-black h-[560px] opacity-50 '>
                </div>
                <div className='absolute lg:top-60 ml-10 w-full'>
                    <p className=' text-white font-bold text-5xl text-center'>About Us</p>
                </div>
            </div>
        </div>
    );
};

export default HeaderSection;
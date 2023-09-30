import React from 'react';

const ContactBanner = () => {
    return (
        <div>
            <div className="bg-[url('/image/123.jpg')] bg-cover bg-no-repeat h-[560px] relative mt-5">
                <div className='bg-black h-[560px] opacity-50 '>
                </div>
                <div className='absolute lg:top-60 lg:ml-48 lg:w-10/12'>
                    <p className=' text-white font-bold text-5xl text-center'>Contact</p>
                </div>
            </div>
        </div>
    );
};

export default ContactBanner;
import React from 'react';

const Parallax = () => {
    return (
        <div className='my-32'>
            <div className="relative bg-[url('/image/parallax.jpg')] bg-cover bg-no-repeat h-[800px] bg-fixed">
                <div className=' bg-black opacity-50 h-[800px]'></div>
             
            </div>

        </div>
    );
};

export default Parallax;
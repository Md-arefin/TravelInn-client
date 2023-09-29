import React from 'react';
import img1 from "/image/news-01.jpg";
import img2 from "/image/news-02.jpg";

const HotelEvents = () => {
    return (
        <div className='my-32'>
            <div className='text-center'>
                <p className='uppercase font-semibold text-sm'>HOTEL EVENTS</p>
                <h3 className='text-6xl font-semibold my-10'>
                    Check our Latest <br /> News
                </h3>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto '>
                <div className="card w-96 bg-base-100 rounded-none shadow-xl">
                    <figure><img src={img1} alt=" " /></figure>
                    <div className="card-body">
                        <p>MARCH 14, 2022</p>
                        <h2 className="card-title">Adventure and Outdoors Package</h2>
                        <p>
                            Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci utet.
                        </p>
                        <div className="card-actions justify-start">
                            <button className="btn bg-red-400 rounded-none">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl rounded-none">
                    <figure><img src={img2} alt="" /></figure>
                    <div className="card-body">
                        <p>MARCH 14, 2022</p>
                        <h2 className="card-title">Culinary Delights Weekend</h2>
                        <p>
                            Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci utet.
                        </p>
                        <div className="card-actions justify-start">
                            <button className="btn bg-red-400 rounded-none">Read More</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default HotelEvents;
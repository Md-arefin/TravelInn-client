import React from 'react';
import { Link } from 'react-router-dom';

const Details = ({ hotel, CSS }) => {

    const { _id, images, name, location, amenities, price_per_night, description
    } = hotel;

    return (
        <div key={_id} className="card bg-base-100 w-3/3 h-[620px]  shadow-xl relative">
            <img className='w-full object-cover rounded-t-2xl h-[280px]' src={images} alt={name} />
            <div className="card-body">
                <h2 className="text-center font-bold text-2xl">{name}</h2>
                <p className='flex items-center text-lg'>
                    <span className='font-semibold  pr-5'>Price per night:</span>
                    $ {price_per_night}
                </p>

                <p className='flex items-center'>
                    <span className='font-semibold text-lg pr-5'>Location:  </span>   {location}
                </p>

                <p className='flex '>
                    <span className='font-semibold text-lg pr-3'>Amenities:  </span>
                    <div className=''>
                        {
                            amenities.map((item, i) =>
                                <p key={i}>
                                    {item}
                                </p>
                            )
                        }
                    </div>
                </p>


                <div className="card-actions justify-end">
                    <Link to={`/room/${_id}`} className='btn bg-gradient-to-tr from-[#041C44] to-[#09A4DB] text-white hover:bg-gradient-to-bl'>
                        View details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Details;
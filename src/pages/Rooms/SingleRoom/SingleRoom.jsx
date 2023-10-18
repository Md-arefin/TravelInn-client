import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAdmin from '../../../components/Hooks/useAdmin';
import useCart from '../../../components/Hooks/useCart';
import { AuthContext } from '../../../provider/AuthProvider';
import RoomSlider from './RoomSlider/RoomSlider';

const SingleRoom = () => {

    const [isAdmin] = useAdmin();
    const { user } = useContext(AuthContext);
    const hotel = useLoaderData();
    const [totalAmount, setTotalAmount] = useState(100);
    const [, cartRefetch] = useCart();

    console.log(isAdmin?.admin);

    const { _id, images, name, location, amenities, price_per_night, description
    } = hotel[0];

    console.log(hotel);
    const handleAddToCart = (id) => {

        const cartItem = {
            productId:  id,
            UserEmail: user?.email,
            images, 
            name, 
            location, 
            amenities, 
            price_per_night, 
            description,
            totalAmount
        }

        if (user) {
            fetch("http://localhost:5000/carts", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        cartRefetch();   // update ta cart number
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: "Your room add to cart",
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        } else {
            Swal.fire({
                title: 'Please Login!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'login!'
            }).then((result) => {
                if (result.isConfirmed) {
                    // TODO: Private Route
                }
            })
        }

    }


    return (
        <div className='mb-20'>
            <RoomSlider images={images} />
            <div className='flex flex-col md:flex-row items-center justify-center gap-10'>

                <div className="card bg-base-100 lg:w-1/2 mt-10 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center font-bold lg:text-4xl">{name}</h2>

                        <p className='lg:text-xl'>
                            <span className='font-semibold text-xl'>
                                Description:
                            </span> {description}</p>
                        <p className='lg:text-xl'>
                            <span className='font-semibold text-xl'>
                                Location:
                            </span> {location}.</p>
                        <p className='lg:text-xl'>
                            <span className='font-semibold text-xl'>
                                Amenities:
                            </span>
                            <span className='lg:text-xl '>
                                {amenities?.map((sz, i) => <p className='font-sans ml-10' key={i}>
                                    {sz}
                                </p>)}
                            </span>
                        </p>

                        <p className='lg:text-xl'>
                            <span className='font-sans font-semibold'>Number of days for Staying: </span>
                            5
                        </p>

                        <p className='lg:text-xl '>
                            <span className='font-sans font-semibold'>Price: </span>
                            ${price_per_night}
                        </p>

                        <p className='lg:text-xl'>
                            <span className='font-sans font-semibold'>Total Amount: </span>
                            ${price_per_night}
                        </p>
                        {/* -- */}

                        <div className="card-actions justify-center mt-5">

                            <button onClick={() => handleAddToCart(_id)} className="btn bg-[#09A4DB] hover:bg-[#041C44] hover:text-white w-[184px] text-black" disabled={isAdmin?.admin === true}>Book your Room</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='md:w-3/4 lg:w-1/2 mx-auto px-5' >
                <p className='text-xl md:text-3xl lg:text-5xl text-center'>Reviews</p>

                {
                    reviews ?
                        <p className='lg:text-xl text-center'>
                            {
                                reviews?.map((review, i) => <div key={i} className='mt-5 px-5  flex items-center justify-normal rounded-lg border-2 lg:gap-12'>

                                    <div className=''>
                                        <div className="avatar p-2">
                                            <div className="w-16 lg:w-24  rounded">
                                                <img src={review.user_photo_url} alt="Tailwind-CSS-Avatar-component" />
                                            </div>
                                        </div>

                                        <div className=''>
                                            <p>{review.user_name}</p>

                                        </div>

                                    </div>
                                    <div className='my-3 space-y-2'>
                                        <Rating style={{ maxWidth: 150 }} value={review?.rating} />
                                        <p >{review.review_msg}</p>
                                    </div>
                                </div>)
                            }
                        </p>
                        :
                        <p className='text-xl md:text-3xl lg:text-4xl text-center my-5'>
                            There is no review yet.
                        </p>
                }

            </div> */}
        </div>
    );
};

export default SingleRoom;
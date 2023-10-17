import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import useAdmin from '../../../components/Hooks/useAdmin';
import { AuthContext } from '../../../provider/AuthProvider';

const SingleRoom = () => {

    const [isAdmin] = useAdmin();
    const { user } = useContext(AuthContext);
    const room = useLoaderData();

    const { category, sales, dressTitle, image, length, price, reviews, size, stock, style, type, _id } = room[0];

    console.log(room);

    return (
        <div>
            <div className='flex flex-col md:flex-row items-center justify-center gap-10 mb-10'>
                <div className='lg:w-[25%]'>
                    <figure><img src={image} alt={dressTitle} /></figure>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title lg:text-4xl">{dressTitle}</h2>

                        <p className='lg:text-xl'> Category: {category}</p>
                        <p className='lg:text-xl'>Length: {length}</p>
                        <p className='lg:text-xl'>stock: {stock}</p>
                        <p className='lg:text-xl'>style: {style}</p>
                        <p className='lg:text-xl w-48 grid grid-cols-4'>size:
                            <span className='lg:text-xl w-48 grid grid-cols-4 '>
                                {size?.map((sz, i) => <p className='font-sans' key={i}>
                                    {sz}
                                </p>)}
                            </span>
                        </p>

                        {
                            sales && <p className='lg:text-xl'>Sales: {sales} %</p> || ""
                        }

                        <p className='lg:text-xl flex items-center justify-between'>Price:
                            <div>
                                $<span className='font-sans font-bold'> {price}</span>
                            </div>
                        </p>

                        <p className='lg:text-xl flex items-center justify-between'>Total Amount:

                            <div>
                                $<span className='font-sans font-bold'> totalAmount</span>
                            </div>
                        </p>


                        {/* -- */}

                        <div className="card-actions justify-between mt-5">
                            <button onClick={() => handleAddToFavourite(_id)} className="btn bg-[#041C44] hover:bg-[#09A4DB] hover:text-black text-white" disabled={isAdmin?.admin == true}>Add to favourite</button>

                            <button onClick={() => handleAddToCart(_id)} className="btn bg-[#09A4DB] hover:bg-[#041C44] hover:text-white w-[184px] text-black" disabled={isAdmin?.admin === true}>Add to cart</button>
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
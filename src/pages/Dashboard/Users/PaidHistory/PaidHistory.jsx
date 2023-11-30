import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../provider/AuthProvider';

const PaidHistory = () => {

    const [PaidItems, setPaidItems] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/get-payment/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log("[data]", data);
                setPaidItems(data)
            })
    }, [user]);

    return (
        <div className=' pt-10'>
            <p className='text-center text-5xl my-10'>Purchase Items</p>


            <div className="overflow-x-auto rounded-xl mx-5">
                <table className="table table-zebra ">
                    {/* head */}
                    <thead>
                        <tr className='text-lg md:text-xl bg-gray-300 text-black'>
                            <th>
                            </th>
                            <th className='text-center'>Hotels Name</th>
                            <th className='text-center'>Hotels Locations</th>
                            <th className='text-center'>Total days</th>
                            <th className='text-center'>Price per night</th>
                            <th className='text-center'>Total</th>
                            <th className='text-center'>Transaction Id</th>
                            <th className='text-center'>Add Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            PaidItems.map((PaidItem, i) =>
                                <tr key={PaidItem._id}>

                                    <th className='font-serif text-xl'>
                                        {i + 1}
                                    </th>

                                    <td>
                                        {
                                            PaidItem.carts.map((items, i) =>
                                                <h2 key={i} className="card-title flex flex-col items-center py-4"> {items.name}</h2>)
                                        }
                                    </td>

                                    <td>
                                        {
                                            PaidItem.carts.map((items, i) =>
                                                <p key={i} className="text-lg flex flex-col items-center py-4"> {items.location}</p>)
                                        }
                                    </td>


                                    <td>
                                        {
                                            PaidItem.carts.map((items, i) =>
                                                <p key={i} className="text-lg flex flex-col items-center py-4"> {items.location}</p>)
                                        }
                                    </td>


                                    <td>
                                        <p className='text-xl flex items-center justify-end my-5 font-serif font-bold'>$  {PaidItem.price}</p>
                                    </td>

                                    <td>
                                        {
                                            PaidItem.carts.map((items, i) =>
                                                <p key={i} className="text-xl flex items-center justify-end my-5 font-serif font-bold"> $ {items.totalAmount}</p>)
                                        }
                                    </td>

                                    <td>
                                        <p className='text-xl flex items-center justify-between'>    {PaidItem.transactionID}</p>
                                    </td>

                                    <td>
                                        {
                                            PaidItem.carts.map((items, i) =>
                                                <Link key={i} to={`/dashboard/product-review/${items.productId}`} target='_blank' className='flex flex-col items-center py-4'>
                                                    <button className="btn bg-gradient-to-tr from-[#041C44] to-[#09A4DB] text-white hover:bg-gradient-to-bl">Add review</button>
                                                </Link>)
                                        }
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default PaidHistory;
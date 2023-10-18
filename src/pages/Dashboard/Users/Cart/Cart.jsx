import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useCart from '../../../../components/Hooks/useCart';

const Cart = () => {

    const [carts, cartRefetch] = useCart();

    const totalPrice = carts.reduce((sum, item) => item.totalAmount + sum, 0)


    console.log(carts);
    const handleDeleteItems = (id) => {
        fetch(`http://localhost:5000/carts/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    cartRefetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: "Item delete successful",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }

    return (
        <div>
            <div className='flex items-center justify-center mx-20 mt-20 gap-5'>

                {/* <div className='flex items-center justify-between gap-10'>
                <p className=' text-xl my xl:text-3xl my-6 ml-5'>Total Price :$ <span className='font-sans font-semibold'> {totalPrice.toFixed(2)}</span></p>

            </div> */}
            </div>

            <div className="overflow-x-auto lg:w-3/4 rounded-xl md:mx-auto">
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
                            <th className='text-center'>Total Price</th>
                            <th className='text-center'>Delete Item</th>
                            <th className='text-center'>Pay the Bills</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            carts.map((cart, i) =>
                                <tr key={cart._id}>
                                    <th className='font-serif text-xl'>
                                        {i + 1}
                                    </th>
                                    <td className='flex items-center justify-center gap-5'>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-full h-20">
                                                <img src={cart.images} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div className="font-bold text-xl">{cart.name}</div>
                                    </td>

                                    <td>
                                        <div className="font-semibold text-xl">{cart.location}</div>
                                    </td>

                                    <td>
                                        
                                    </td>

                                    <td className='text-xl text-right'>
                                        <span className='font-bold text-2xl'>$</span>{cart.price_per_night}
                                    </td>

                                    <td className='text-xl text-right'>
                                        <span className='font-bold text-2xl'>$</span>{cart.totalAmount}
                                    </td>
                                    <td className='text-center'>
                                        <div onClick={() => handleDeleteItems(cart._id)} className='btn bg-red-600 text-white hover:text-black'>
                                            <FaTrashAlt />
                                        </div>
                                    </td>

                                    <td>
                                        <Link to="/dashboard/payment" className='btn bg-slate-300 flex justify-center'>
                                            <p className='text-xl text-center'> Pay</p>
                                            {/* <img src={cash} className='w-7' alt="" /> */}
                                        </Link>
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

export default Cart;
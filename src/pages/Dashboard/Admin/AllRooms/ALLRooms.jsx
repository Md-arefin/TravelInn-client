import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const ALLRooms = () => {

    const { data: allRooms = [], refetch } = useQuery(["allRooms"], async () => {
        const res = await fetch('http://localhost:5000/all-rooms')
        return res.json();
    })

    console.log(allRooms);

    const handleDeleteProduct = (id) => {
        fetch(`http://localhost:5000/delete-room/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: "Successfully delete ",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className='my-20'>
            <p className='text-3xl lg:text-5xl my-10 pl-10'>Total products <span className='font-sans'>{allRooms.length}.</span></p>


            <div className="overflow-x-auto lg:w-3/4 rounded-xl md:mx-auto">
                <table className="table table-zebra ">
                    {/* head */}
                    <thead>
                        <tr className='text-lg md:text-xl bg-gray-300 text-black'>
                            <th>
                            </th>
                            <th>Hotels</th>
                            <th>location</th>
                            <th>Rooms</th>
                            <th>Price per night</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allRooms.map((room, i) =>
                                <tr key={room._id}>
                                    <th className='font-serif text-xl'>
                                        {i + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-16 h-12">
                                                    <img src={room.images[0]} alt={room.name} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold text-lg">{room.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="">{room.location}</div>
                                    </td>
                                    
                                    <td>
                                        <div className=" font-serif text-xl">{room.stock}</div>
                                    </td>
                                    <td>
                                        <div className=" text-right font-serif text-xl">${room.price_per_night}</div>
                                    </td>
                                    <td>
                                        <Link to={`/dashboard/edit-room/${room._id}`} >
                                            <div className="btn bg-slate-300">Edit <FaEdit /></div>
                                        </Link>
                                    </td>
                                    <td>
                                        <div onClick={() => handleDeleteProduct(room._id)} className='btn bg-red-600 text-white hover:text-black'>
                                            <FaTrashAlt />
                                        </div>
                                    </td>
                                </tr>
                            )
                        }

                        {/* row 2 */}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ALLRooms;
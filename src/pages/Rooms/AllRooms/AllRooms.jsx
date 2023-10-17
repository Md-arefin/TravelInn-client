import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Details from '../../../components/Details/Details';

const AllRooms = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/all-rooms')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data);
            })
    }, [])

    return (
        <div className='lg:my-32'>
            <div className='grid grid-cols-1 md:grid-cols-2 w-full mx-auto'>
                <div>
                    <div className='bg-black h-96 w-96 mx-auto'>
                        <p className='text-white text-3xl text-center pt-40'>TODO: Date Rage</p>
                    </div>
                    <div className='h-96 w-96 mx-auto space-y-20'>
                        <div>
                            <details className="dropdown cursor-pointer">
                                <summary className=" font-semibold text-center text-xl btn border-none hover:bg-transparent">Services:
                                    <MdKeyboardArrowDown />
                                </summary>
                                <p></p>
                                <ul className=" shadow menu dropdown-content z-[1] bg-base-100 rounded-md w-52">
                                    <li className='btn bg-transparent cursor-pointer hover:bg-[#895446] hover:text-white py-1'>Lowest Price</li>
                                    <li className='btn bg-transparent cursor-pointer hover:bg-[#895446] hover:text-white py-1'> Highest Price</li>
                                </ul>
                            </details>
                        </div>
                        <div>
                            <details className="dropdown cursor-pointer">
                                <summary className=" font-semibold text-center text-xl btn border-none hover:bg-transparent">Extra Services:
                                    <MdKeyboardArrowDown />
                                </summary>
                                <p></p>
                                <ul className=" shadow menu dropdown-content z-[1] bg-base-100 rounded-md w-52">
                                    <li className='btn bg-transparent cursor-pointer hover:bg-[#895446] hover:text-white py-1'>Lowest Price</li>
                                    <li className='btn bg-transparent cursor-pointer hover:bg-[#895446] hover:text-white py-1'>
                                        Highest Price
                                    </li>
                                </ul>
                            </details>
                        </div>
                    </div>
                </div>

                {/* data fetch */}
                <div className='flex flex-col md:flex-row gap-5 justify-center mb-20'>

                    <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-10 mt-5 lg:mt-20 px-4'>
                        {
                            products.map(product =>
                                <Details key={product._id} product={product} />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllRooms;
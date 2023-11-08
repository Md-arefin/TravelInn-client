import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Details from '../../../components/Details/Details';
import { ImList } from 'react-icons/im';
import { BsGrid3X3Gap } from 'react-icons/bs';

const AllRooms = () => {

    const [hotels, setHotels] = useState([]);
    const [CSS, setCSS] = useState('grid');

    useEffect(() => {
        fetch('http://localhost:5000/all-rooms')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setHotels(data);
            })
    }, []);

    const handleCss = (props) =>{
        setCSS(props)
    };

    return (
        <div className='md:my-10 lg:my-10 relative'>
            <div className='text-white  absolute lg:-top-20 lg:right-32 flex items-center justify-center gap-10'>
                <ImList onClick={()=> handleCss('flex')} className='hover:text-black cursor-pointer text-xl' />
                <BsGrid3X3Gap onClick={()=> handleCss('grid')} className='hover:text-black cursor-pointer text-xl' />
            </div>
            <div className='flex flex-col md:flex-row justify-center gap-5 w-full mx-auto lg:px-10'>

                <div className='w-96 h-96 lg:ml-14 lg:sticky top-10'>
                    <div className='bg-slate-400 h-96 rounded-xl mx-auto '>
                        <p className='text-white text-3xl text-center pt-40'>TODO: Date Rage</p>
                    </div>
                    <div className='w-96 mx-auto space-y-20 mt-10'>
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
                <div className={`w-2/2 ${CSS} flex-col grid-cols-1 lg:grid-cols-3 gap-10`}>
                    {
                        hotels.map(hotel =>
                            <Details key={hotel._id} hotel={hotel} />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default AllRooms;
import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Details from '../../../components/Details/Details';
import { ImList } from 'react-icons/im';
import { BsGrid3X3Gap } from 'react-icons/bs';

const AllRooms = () => {

    const [hotels, setHotels] = useState([]);
    const [filteredHotels, setFilteredHotels] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedPriceRange, setSelectedPriceRange] = useState('all');
    const productsPerPage = 6;
    const [CSS, setCSS] = useState('grid');

    useEffect(() => {
        fetch('http://localhost:5000/all-rooms')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setHotels(data);
                setFilteredHotels(data);
            })
    }, []);

    const handleCss = (props) => {
        setCSS(props)
    };

    // pagination calculations
    const totalPages = Math.ceil(filteredHotels.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentHotels = filteredHotels.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
      };

    return (
        <div className='md:my-10 lg:my-10 relative'>
            <div className='text-white  absolute lg:-top-20 lg:right-32 flex items-center justify-center gap-10'>
                <ImList onClick={() => handleCss('flex')} className='hover:text-black cursor-pointer text-xl' />
                <BsGrid3X3Gap onClick={() => handleCss('grid')} className='hover:text-black cursor-pointer text-xl' />
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
                        currentHotels.map(hotel =>
                            <Details key={hotel._id} hotel={hotel} CSS={CSS} />
                        )
                    }
                </div>
            </div>

            <div className="flex items-center justify-center gap-5 my-16 xl:ml-52">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <div
                        key={index}
                        onClick={() => handlePageChange(index + 1)} >
                        <p className='cursor-pointer bg-slate-500 text-white w-10 text-center rounded-lg hover:bg-gray-700'>{index + 1}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllRooms;
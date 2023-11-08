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
    const [CSS, setCSS] = useState('grid');
    const [active, setActive] = useState('');

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
    const hotelsPerPage = 6;
    const totalPages = Math.ceil(filteredHotels.length / hotelsPerPage);
    const startIndex = (currentPage - 1) * hotelsPerPage;
    const endIndex = startIndex + hotelsPerPage;
    const currentHotels = filteredHotels.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const Locations = hotels?.map(hotel => hotel.location);
    const uniqueLocations = ["All", ...new Set(Locations)]
    // console.log(['active'], active);


    const handleLocations = (props) => {
        if (props !== "All") {
            const filterLocation = hotels?.filter((hotel) => hotel.location === props)
            setFilteredHotels(filterLocation)
        } else {
            setFilteredHotels(hotels)
        }
        setActive(props);
        setCurrentPage(1);
    }

    return (
        <div className='md:my-10 lg:my-10 relative'>

            <div className='text-white  absolute lg:-top-20 lg:right-32 flex items-center justify-center gap-10'>
                <ImList onClick={() => handleCss('flex')} className='hover:text-black cursor-pointer text-xl' />
                <BsGrid3X3Gap onClick={() => handleCss('grid')} className='hover:text-black cursor-pointer text-xl' />
            </div>

            <div className='flex flex-col md:flex-row justify-center gap-5 w-full mx-auto lg:px-10'>

                <div className='w-96 h-96 flex flex-col lg:ml-14 space-y-10 lg:sticky top-10'>

                    <div className="">
                        <p className=" font-semibold text-center  text-xl btn border-none w-full">Location</p>

                        <ul className=" space-y-2 w-[90%] mx-auto menu">
                            {
                                uniqueLocations?.map((location, i) =>
                                    <li
                                        key={i}
                                        onClick={() => handleLocations(location)}
                                        className={`btn cursor-pointer hover:bg-[#895446] hover:text-white py-1 
                                        ${active == location ? 'bg-black text-white' : ''}`}>{location}
                                    </li>)
                            }
                        </ul>
                    </div>


                    <details className="dropdown cursor-pointer">
                        <summary className="font-semibold text-center text-xl btn border-none hover:bg-transparent">Stay Price
                            <MdKeyboardArrowDown />
                        </summary>
                        <p></p>
                        <ul className=" shadow menu dropdown-content z-[1] bg-base-100 rounded-md w-52">
                            <li className='btn bg-transparent cursor-pointer hover:bg-[#895446] hover:text-white py-1'>Lowest Price</li>
                            <li className='btn bg-transparent cursor-pointer hover:bg-[#895446] hover:text-white py-1'>Highest Price</li>
                        </ul>
                    </details>

                    <details className="dropdown cursor-pointer">
                        <summary className="font-semibold text-center text-xl btn border-none hover:bg-transparent">Room Size  <MdKeyboardArrowDown /></summary>
                        <ul className=" shadow menu dropdown-content z-[1] bg-base-100 rounded-md w-52">
                            <li className='btn bg-transparent cursor-pointer hover:bg-[#895446] hover:text-white py-1'>Larger</li>
                            <li className='btn bg-transparent cursor-pointer hover:bg-[#895446] hover:text-white py-1'>Smallest</li>
                        </ul>
                    </details>

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

                {/* data fetch */}
                <div className={`w-full ${CSS} flex-col grid-cols-1 lg:grid-cols-3 gap-10`}>
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
                        <p className={`cursor-pointer border-2 ${currentPage === index + 1 ? `bg-black text-white` : ``} hover:text-white w-10 text-center rounded-lg hover:bg-gray-700`}>{index + 1}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllRooms;
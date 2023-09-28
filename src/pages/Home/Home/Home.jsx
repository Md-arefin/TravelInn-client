import React from 'react';
import Banner from '../Banner/Banner';
import Booking from '../Booking/Booking';
import Details from '../details/Details';
import Gallery from '../Gallery/Gallery';
import HotelFacilities from '../HotelFacilities/HotelFacilities';

const Home = () => {
    return (
        <div>
            <Banner />
            <Details />
            <Booking />
            <Gallery />
            <HotelFacilities />
        </div>
    );
};

export default Home;
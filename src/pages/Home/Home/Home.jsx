import React from 'react';

import Banner from '../Banner/Banner';
import Booking from '../Booking/Booking';
import Details from '../details/Details';
import ExtraService from '../ExtraService/ExtraService';
import Gallery from '../Gallery/Gallery';
import HotelEvents from '../HotelEvents/HotelEvents';
import HotelFacilities from '../HotelFacilities/HotelFacilities';
import Parallax from '../Parallax/Parallax';

const Home = () => {
    return (
        <div>
            <Banner />
            <Details />
            <Booking />
            <Gallery />
            <HotelFacilities />
            <Parallax />
            <ExtraService />
            <HotelEvents />
        </div>
    );
};

export default Home;
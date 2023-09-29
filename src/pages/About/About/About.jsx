import React from 'react';
import Gallery from '../../Home/Gallery/Gallery';
import AlOffers from '../AlOffers/AlOffers';
import HeaderSection from '../Header/HeaderSection';
import Inclusive from '../Inclusive/Inclusive';

const About = () => {
    return (
        <div>
            <HeaderSection />
            <Inclusive />
            <Gallery />
            <AlOffers />
        </div>
    );
};

export default About;
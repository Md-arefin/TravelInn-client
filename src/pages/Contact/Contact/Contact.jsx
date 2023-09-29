import React from 'react';
import ContactBanner from '../ContactBanner/ContactBanner';
import ContactFrom from '../ContactForm/ContactFrom';
import ContactMap from '../ContactMap/ContactMap';
import Reception from '../Reception/Reception';

const Contact = () => {
    return (
        <div>
            <ContactBanner />
            <Reception />
            <ContactFrom />
            <ContactMap />
        </div>
    );
};

export default Contact;
import React from 'react';
import why from '../../../assets/image/ask.png';
import guide from '../../../assets/image/manual.png';
import trust from '../../../assets/image/trustworthy.png';

const Booking = () => {

    return (
        <div className='my-40 lg:mt-52'>
            <div className='text-center space-y-5 px-10'>
                <h3 className='text-5xl font-serif'>Discover Your Perfect Stay</h3>
                <p className='text-lg'>
                    Welcome to Travelling, where seamless travel experiences begin. Whether you're planning a weekend getaway, a business trip, or a family vacation, we have the perfect accommodation for you. Explore our curated selection of hotels, resorts, and cozy retreats to find the ideal match for your travel needs.
                    Welcome to Travelling, where seamless travel experiences begin. Whether you're planning a weekend getaway, a business trip, or a family vacation, we have the perfect accommodation for you. Explore our curated selection of hotels, resorts, and cozy retreats to find the ideal match for your travel needs.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                <div className='px-10 space-y-3'>
                    <h6 className='font-serif mb-5 text-xl flex items-center justify-center gap-5'>
                       <img src={why} className='w-10' alt="" /> Why Choose Us?
                    </h6>
                    <p>
                        Unrivaled Selection: Browse through a diverse range of accommodations, from luxury hotels to budget-friendly options. We partner with top-rated establishments to ensure a variety of choices for every traveler.
                    </p>
                    <p>
                        Real Reviews, Real Experiences: Make informed decisions with genuine reviews from fellow travelers. We believe in transparency, providing you with honest feedback to help you select the best stay for your preferences.
                    </p>

                    <p>
                        Exclusive Deals: Enjoy special discounts and exclusive deals when you book through our platform. We negotiate with hotels to bring you the best rates, ensuring you get the most value for your money.
                    </p>
                </div>

                <div className='px-10 space-y-2'>
                    <h6 className='flex items-center justify-center gap-5 font-serif mb-5 text-xl'>
                        <img src={guide} className='w-10' alt="" /> How It Works</h6>
                    <p>
                        Search & Compare: Use our user-friendly search tool to find hotels based on your destination, dates, and preferences. Easily compare prices, amenities, and guest ratings to make an informed decision.
                    </p>

                    <p>
                        Secure Booking: Rest easy knowing that your booking is secure with our trusted payment gateway. We prioritize the security of your personal information and financial details.
                    </p>

                    <p>
                        Instant Confirmation: Receive instant confirmation for your reservation, along with all the details you need for a smooth check-in process.
                    </p>
                </div>

                <div className='px-10'>
                    <h6 className='flex items-center justify-center gap-5 font-serif mb-5 text-xl'>
                       <img src={trust} className='w-10' alt="" /> Travel with Confidence</h6>
                    <p>
                        At Travelling, we understand the importance of a comfortable and stress-free stay. That's why we're dedicated to providing you with a hassle-free booking experience. Join millions of satisfied travelers who trust us for their accommodation needs.
                        <div className='h-2'/>
                        Start your journey with us today. Explore, book, and embark on unforgettable experiences.
                        <div className='h-2'/>
                        Explore Our Hotels. Get Exclusive Deals Learn More About Us
                    </p>

                </div>
            </div>

        </div>
    );
};

export default Booking;
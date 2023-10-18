import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import useCart from '../../../../components/Hooks/useCart';
import CheckOutForm from './CheckOutForm';
import './style.css';


const stripePromise = loadStripe(import.meta.env.VITE_stripe_PK);

const Payment = () => {

    const [carts] = useCart();

    // const totalPrice = carts.reduce((sum, item) => item.totalAmount + sum, 0)
    // const price = parseFloat(totalPrice.toFixed(2))
    const price = carts.map(cart=> cart.totalAmount)

    return (
        <div>
        <p className='text-center text-3xl'> This is payment page.</p>

        <Elements stripe={stripePromise}>
            <CheckOutForm price= {price} carts={carts}/>
        </Elements>
    </div>
    );
};

export default Payment;
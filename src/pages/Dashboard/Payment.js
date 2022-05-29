import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from '../Dashboard/CheckoutForm';


const stripePromise = loadStripe('pk_test_51L4OOwFE4wv54inCJWJ2BZ3NoNDmmg6qUgrE1hYdZLE87KX2mHE3T0BGaQu0Slg25Au1LEI8Au6XYhXQvibAPxqt003aktsh7u');
const Payment = () => {
    const { id } = useParams();


    const url = `https://dry-thicket-30903.herokuapp.com/booking/${id}`;
    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': ` Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>

            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <h2 className='text-2xl text-bold text-green-500 uppercase'>Hello,{appointment.coustomarName}</h2>
                    <h2 class="card-title text-purple-500 text-bold">Please Pay for :{appointment.order} </h2>


                    <p>Please pay:$ {appointment.price}</p>
                </div>
            </div>
            <div class=" card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>


                </div>
            </div>
        </div>

    );
};

export default Payment;
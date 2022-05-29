import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';


const BookingModal = ({ orders, setOrders }) => {


    //   const { productId } = useParams();
    //   const [product, setProduct] = useState({});
    // const [q, setQ] = useState()

    //   const reStockRef = useRef(0);

    const { _id, name, price } = orders;
    const [user, loading, error] = useAuthState(auth)
    const handleOrders = event => {
        event.preventDefault();
        console.log(_id, name)
        const booking = {
            ordersId: _id,
            order: name,
            price: price,
            coustomar: user.email,
            coustomarName: user.displayName,
            quantity: event.target.quantity.value,
            phone: event.target.phone.value

        }
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // if (data.success) {
                //   toast("Your Order is Successful")
                // } else {
                //   toast('Already booking')
                // }
                toast('Your Order is successful')
                setOrders(null)
            })


    }




    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-bold text-secondary">Name: {name}</h3>
                    <form onSubmit={handleOrders} className='grid grid-cols-1 gap-3 justify-items-center mt-5'>
                        <input type="text" name="name" disabled value={user?.displayName || ''} class="input input-bordered input-accent w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user?.email || ''} class="input input-bordered input-accent w-full max-w-xs" />
                        <input type="number" name="quantity" min={orders.order} max={orders.Available} placeholder="Quantity" required class="input input-bordered input-accent w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" class="input input-bordered input-accent w-full max-w-xs" />

                        <input type="submit" value="submit" class="btn btn-secondary w-full max-w-xs" />
                    </form>

                </div>
            </div>


        </div>
    );
};

export default BookingModal;
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import UseServices from '../hooks/useServices';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [services, setServices] = UseServices();
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/bookingP/${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': ` Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/')
                    }

                    return res.json()
                })
                .then(data => setOrders(data))
        }
    }, [user])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure')
        if (proceed) {
            const url = `http://localhost:5000/booking/${id}`
            console.log(url);
            fetch(url, {
                method: 'DELETE'
            })
                .Then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                })
        }
    }

    return (
        <div>
            <h2>My Orders:{orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Tools</th>
                            <th>quantity</th>
                            <th>payment</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.coustomarName} </td>
                                <td>{order.order}</td>
                                <td>{order.quantity}</td>
                                <td>
                                    {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    {(order.price && order.paid) && <span className='btn-success'>paid</span>}
                                </td>
                                <td>{(order.price && !order.paid) && <button onClick={() => handleDelete(order._id)} className='btn btn-xs btn-success'>Delete</button>}</td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
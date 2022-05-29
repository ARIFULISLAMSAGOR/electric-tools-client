import React, { useEffect, useState } from 'react';
import Product from '../Home/Product';
import BookingModal from '../Home/BookingModal';
import RequireAuth from '../Login/RequireAuth';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState(null);
    useEffect(() => {
        fetch(`https://dry-thicket-30903.herokuapp.com/product`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div >
            <h2 className='text-center text-primary text-3xl lg:mt-[-750px]'>Electric tools part</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 services-container'>
                {
                    products.map(product => <Product
                        product={product}
                        setOrders={setOrders}
                        key={product._id}></Product>)
                }
            </div>
            {orders && <RequireAuth><BookingModal
                orders={orders}
                setOrders={setOrders}>
            </BookingModal></RequireAuth>}
        </div>
    );
};

export default Products;
import React, { useEffect, useState } from 'react';
import Product from '../Home/Product';
import BookingModal from '../Home/BookingModal';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:5000/product`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div >
            <h2 className='text-center text-primary text-3xl mt-[-750px]'>Electric tools part</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 services-container'>
                {
                    products.map(product => <Product
                        product={product}
                        setOrders={setOrders}
                        key={product._id}></Product>)
                }
            </div>
            {orders && <BookingModal
                orders={orders}
                setOrders={setOrders}>
            </BookingModal>}
        </div>
    );
};

export default Products;
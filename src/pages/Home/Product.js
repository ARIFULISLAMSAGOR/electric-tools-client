import React from 'react';
import './Product.css';

const Product = ({ product }) => {
    const { name, img, description, order, Available, price } = product;
    return (
        <div className='service m-5'>
            <img className='w-80 p-1' src={img} alt="" />
            <h2 className='text-2xl'>{name}</h2>
            <p>price:{price}</p>
            <p>Minimum order quantity:{order}</p>
            <p>Available price:{Available}</p>
            <p>{description}</p>
            <button className='btn btn-primary m-1'>Purchase</button>

        </div>
    );
};

export default Product;
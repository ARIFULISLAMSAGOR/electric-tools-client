import React from 'react';
import './Product.css';

const Product = ({ product, setOrders }) => {
    const { _id, name, img, description, order, Available, price } = product;
    // const navigate = useNavigate();
    // const navigateToPurchase = id => {
    //     navigate(`/product/${id}`);
    // }
    return (
        <div className='service m-5'>
            <img className='w-80 p-1' src={img} alt="" />
            <h2 className='text-2xl'>{name}</h2>
            <p>price:{price}</p>
            <p>Minimum order quantity:{order}</p>
            <p>Available price:{Available}</p>
            <p>{description}</p>
            {/* <button onClick={() => navigateToPurchase(_id)} className='btn btn-primary m-1'>Purchase</button> */}
            <div className='card-actions'>
                <label for="booking-modal"
                    onClick={() => setOrders(product)} className='btn btn-primary m-12'>Purchase</label>
            </div>

        </div>
    );
};

export default Product;
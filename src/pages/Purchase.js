// import React, { useEffect, useRef, useState } from 'react';
// // import { useAuthState } from 'react-firebase-hooks/auth';
// // import { useQuery } from 'react-query';
// import { useParams } from 'react-router-dom';
// // import auth from '../firebase.init'
// // import Loading from './Shared/Loading';

// const Purchase = () => {
//     const { productId } = useParams();
//     const [product, setProduct] = useState({});
//     const restocRef = useRef(0);
//     useEffect(() => {
//         const url = `https://dry-thicket-30903.herokuapp.com/product/${productId}`
//         fetch(url)
//             .then(res => res.json())
//             .then(data => setProduct(data))
//     }, [productId]);

//     const handleRestok = productId => {
//         const restocQuantity = restocRef.current.value;
//         const { order, ...rest } = product;
//         const newQuantity = parseInt(order) + parseInt(restocQuantity);
//         const newItem = { OverconstrainedError: newQuantity, ...rest }
//         setProduct(newItem)

//         const url = `https://dry-thicket-30903.herokuapp.com/product/${productId}`
//         fetch(url, {
//             method: 'GET',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(newItem)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//             });
//         restocRef.current.value = '';
//     }



//     return (
//         <div>
//             <div className='w-50 mx-auto text-center'>
//                 <h2 className='text-primary text-center'>Product Detail</h2>
//                 <img className='w-80 p-1 align-center' src={product.img} alt="" />
//                 <h2 className='text-2xl'>{product.name}</h2>
//                 <p>price:{product.price}</p>
//                 <p>Order:{product.order}</p>
//                 <p>Available price:{product.Available}</p>
//                 <p>{product.description}</p>
//  
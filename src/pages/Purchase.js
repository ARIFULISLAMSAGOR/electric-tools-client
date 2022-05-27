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
//         const url = `http://localhost:5000/product/${productId}`
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

//         const url = `http://localhost:5000/product/${productId}`
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
//                 <button className='text-center btn-primary px-4 py-2'>Purchase</button>

//                 <form className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

//                     <input ref={restocRef} type="number" name="number" placeholder="add number" class="input input-bordered w-full max-w-xs" />
//                     <input onClick={() => handleRestok(product._id)} type="submit" value="Submit" class="btn btn-secondary w-full max-w-xs" />
//                 </form>


//                 {/* <form className='w-50 mx-auto '>
//                     <input ref={restocRef} type="number" placeholder='add numbers' name="number" id="" />
//                     <input onClick={() => handleRestok(product._id)} type="button" value="restok the items" />
//                 </form> */}
//             </div>
//         </div>
//     );
// };


// export default Purchase;
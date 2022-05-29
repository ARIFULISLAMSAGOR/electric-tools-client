
import React, { useEffect, useState } from 'react';
import Reveiw from '../Reveiw/reveiw';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    console.log(reviews);
    return (
        <div className='px-20 md:px-20  py-20 md:py-20 '>
            <h2 className='text-4xl text-center text-purple-700 mb-10'>All Reviews</h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    reviews.map(review => <Reveiw
                        key={review._id}
                        review={review}

                    >
                    </Reveiw>)
                }
            </div>
        </div>
    );
};

export default Reviews;
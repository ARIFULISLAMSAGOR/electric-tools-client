import React from 'react';

const Review = ({ review }) => {
    const { name, email, rating, text } = review
    return (

        <div class="card  w-70 bg-cyan-200 text-primary-content">
            <div class="card-body">
                <h2 className="card-title text-2xl text-indigo-700">Name: {name}</h2>
                <p className='text-xl'>Review: {text}</p>
                <h2 className='text-red-500 text-2xl'>Rating: {rating}</h2>

            </div>
        </div>

    );
};

export default Review;
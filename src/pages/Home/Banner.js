import React from 'react';
import electric from '../../images/banner/electric.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="item1" className="carousel-item  w-full">
                <img src={electric} className="w-full h-2/5" />
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';
import electric from '../../images/banner/electric.jpg'

const Banner = () => {
    return (
        <div class="carousel w-full">
            <div id="item1" class="carousel-item w-full">
                <img src={electric} class="w-full h-screen" />
            </div>
        </div>
    );
};

export default Banner;
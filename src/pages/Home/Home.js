import React from 'react';
import Banner from '../Home/Banner'
import Products from '../Home/Products';
import BusinessSummary from '../Home/BusinessSummary';
import Footer from '../Home/Footer';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <Footer></Footer>
        </div>
    );
};

export default Home;
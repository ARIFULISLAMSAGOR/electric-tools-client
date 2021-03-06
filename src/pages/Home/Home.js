import React from 'react';
import Banner from '../Home/Banner'
import Products from '../Home/Products';
import BusinessSummary from '../Home/BusinessSummary';
import Footer from '../Home/Footer';
import ExtraSection from '../Home/ExtraSection';
import ExtraSection2 from '../Home/ExtraSection2';
import Reviews from '../Reveiw/Reveiws';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <ExtraSection></ExtraSection>
            <ExtraSection2></ExtraSection2>
            <Footer></Footer>
        </div>
    );
};

export default Home;
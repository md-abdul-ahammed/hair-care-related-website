import React from 'react';
import AboutWork from '../AboutWork/AboutWork';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <AboutWork></AboutWork>
            <Services></Services>
            <Blog></Blog>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Extrasection from './Extrasection';
import Footer from './Footer';
import Navbar from './Navbar';
import Services from './Services';

const Home = () => {
    return (
        <div>
            
            <Banner/>
            <Services lim={6}/>
            <Extrasection/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;
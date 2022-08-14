import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navbar/Navigation';
import Hero from '../Home/Hero'
import CommitteeMemmbers from './CommitteeMemmbers';
import Gallary from '../PhotoGallary]/Gallary';


const Home = () => {
    return (
    <>
    <Hero></Hero>
    <CommitteeMemmbers></CommitteeMemmbers>
    <Gallary></Gallary>
   
    
    </>
    );
};

export default Home;
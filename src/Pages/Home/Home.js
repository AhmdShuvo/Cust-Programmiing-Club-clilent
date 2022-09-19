import React from 'react';
import Hero from '../Home/Hero'
import CommitteeMemmbers from './CommitteeMemmbers';
import Gallary from '../PhotoGallary]/Gallary';
import Current from '../Event/CurrentEvents/Current';



const Home = () => {
    return (
        <>
        {/* hERO sECTION // */}
            <Hero></Hero>

            {/* Members section / */}
            <CommitteeMemmbers></CommitteeMemmbers>

            {/* Curretn Events // */}
            <Current></Current>

            {/* Photo Gallary // */}
            <Gallary></Gallary>

        </>
    );
};

export default Home;
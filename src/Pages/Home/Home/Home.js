import React from 'react';
import Aboutus from '../Aboutus/Aboutus';
import Banner from '../Banner/Banner';
import Ourteams from '../ourteams/Ourteams';
import Services from '../Services/Services';



const Home = () => {
    return (
        <div>

            <Banner></Banner>

            <Services></Services>
            <Aboutus></Aboutus>
            <Ourteams></Ourteams>


        </div>
    );
};

export default Home;
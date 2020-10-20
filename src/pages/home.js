import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import Services from "../components/Services"
import FeaturedRoom from "../components/FeaturedRoom";
 export default function home() {
    return (
        <>
        <Hero>
            <Banner title="luxurious rooms" subtitle=" deluxe rooms startting at Rs. 1000">
            <Link to= "/room" className="btn-primary"> OUR ROOMS</Link>
            </Banner>
        </Hero>
        <Services></Services>
        <FeaturedRoom></FeaturedRoom>
        </>
    );
};

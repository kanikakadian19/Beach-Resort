import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
function room() {
    
        return <Hero hero="roomsHero">
                <Banner title="our rooms">
                <Link to="/" className="btn-primary">return home</Link>
                </Banner>
        </Hero>

    

};

export default room;

import React from 'react';
import suzuki from './../assets/suzuki-bike.jpg';
import healthcare from './../assets/healthcare.jpg';
import travel from './../assets/travel-agency.jpg';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div className="">
           <About></About>
        <Projects></Projects>
        <Contact></Contact>
        </div>
    );
};

export default Home;
import React from 'react';
import home1 from '../img/home1.png';
import {About,Description,Image,Hide } from '../styles';
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim } from '../animations';

const AboutSection = () => {
    
    return (
        <About>
            <Description>
                <motion.div>
                    <div className="hide">
                        <motion.h2>We work to make</motion.h2>
                    </div>
                    <Hide>
                        <h2>your <span>dreams</span> come</h2>
                    </Hide>
                    <Hide>
                        <motion.h2>true.</motion.h2>
                    </Hide>
                </motion.div>
                <p>Contact us for any photography or videography ideas that you have. </p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="camera guy"/>

            </Image>
        </About>
    )
}
//styled components


export default AboutSection;
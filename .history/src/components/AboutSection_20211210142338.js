import React from 'react';
import home1 from '../img/home1.png';
import {About,Description,Image,Hide } from '../styles';
//Framer Motion
import {motion} from "framer-motion";
import {titleAnim,fade} from '../animations';

const AboutSection = () => {
    
    return (
        <About>
            <Description>
                <motion.div variants={titleAnim}>
                    <div className="hide">
                        <motion.h2>We work to make</motion.h2>
                    </div>
                    <Hide>
                        <h2>your <span>dreams</span> come</h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p>Contact us for any photography or videography ideas that you have. </motion.p>
                <motion.button>Contact Us</motion.button>
            </Description>
            <Image>
                <img src={home1} alt="camera guy"/>

            </Image>
        </About>
    )
}
//styled components


export default AboutSection;
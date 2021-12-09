import React from 'react';
import home1 from '../img/home1.png';
import {About,Description,Image,Hide } from '../styles';
//Framer Motion
import { motion } from "framer-motion";

const AboutSection = () => {
    const titleAnim = {
        hidden: {opacity: 0},
        show: { opacity: 1, transition: { duration: 2 } },
    }
    const container = {
        hidden: { x: 100},
        show: { x: 0, transition: { duration: 0.75, ease: "easeOut", staggerChildren: 1, when: "beforeChildren" }},
    }
    return (
        <About>
            <Description>
                <motion.div variants={container} initial="hidden" animate="show" className="title">
                    <div className="hide">
                        <motion.h2 variants={container} initial='hidden' animate="show">We work to make</motion.h2>
                    </div>
                    <Hide>
                        <h2>your <span>dreams</span> come</h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
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
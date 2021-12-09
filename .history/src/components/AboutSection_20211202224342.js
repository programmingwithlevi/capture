import React from 'react';
import home1 from '../img/home1.png';
//styled
import styled from 'styled-components';
import {About,Description,Image,Hide } from '../styles';

const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <Hide>
                        <h2>your <span>dreams</span> come</h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
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
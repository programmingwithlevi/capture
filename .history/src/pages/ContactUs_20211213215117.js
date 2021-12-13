import React from "react";

//animation
import {motion} from "framer-motion";
import { pageAnimation,titleAnim} from "../animations";
import styled from 'styled-components';

const ContactUs = () => {
    return(
        <ContactStyle exit="exit" 
                    variants={pageAnimation} 
                    initial="hidden" 
                    animate="show"
                    style={{ background: "#FFF" }}
                >
            <Title>
               <Hide>
                   <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
                </Hide> 
            </Title>
            <div>
                <Social variants={titleAnim}>
                    <Circle />
                        <h2>Send Us A Message</h2>
                </Social>
            </div>
        </ContactStyle>
    )
}
const ContactStyle = styled(motion.div)`
    padding: 5rem 10 rem;
    color: #353535;
    min-height: 90vh; 
`
const Title = styled.div`
    padding-top:2rem;
    margin-bottom: 2rem;
    margin-left:1rem;
    color: black;
`
const Hide = styled.div`
    overflow: hidden;
    `
const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #353535;
`
const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    margin-left: 3rem;
    h2{
        margin: 2rem;
    };
`



export default ContactUs;
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
    margin-bottom: 4rem;
    color: black;
`
const Hide = styled.div`
    overflow: hidden;
    `
const Social = styled(motion.div)`
`



export default ContactUs;
import React from "react";

//animation
import {motion} from "framer-motion";
import { pageAnimation } from "../animations";
import styled from 'styled-components';

const ContactUs = () => {
    return(
        <ContactStyle exit="exit" 
                    variants={pageAnimation} 
                    initial="hidden" 
                    animate="show"
                    style={{ background: "#FFF" }}
                >
            <h1>Contact</h1>
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




export default ContactUs;
import React from "react";

//animation
import {motion} from "framer-motion";
import { pageAnimation } from "../animations";

const ContactUs = () => {
    return(
        <motion.div exit="exit" 
                    variants={pageAnimation} 
                    initial="hidden" 
                    animate="show"
                >
            <h1>Contact</h1>
        </motion.div>
    )
}

export default ContactUs;
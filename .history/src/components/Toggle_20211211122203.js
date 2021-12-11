import { motion } from 'framer-motion';
import React,{useState,title} from 'react';

const Toggle = ({children}) => {
    const [toggle,setToggle] = useState(true);
    return(
        <div onClick={() => setToggle(!toggle)}>
            <motion.h4>{title}</motion.h4>
            {toggle?children:""}
            <div className="faq-line"></div>
        </div>
    )
}
export default Toggle;
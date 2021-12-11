import React,{useState,} from 'react';

const Toggle = ({children}) => {
    const [toggle,setToggle] = useState(true);
    return(
        <div onClick={() => setToggle(!toggle)}>
            {toggle?children:""}
            <div className="faq-line"></div>
        </div>
    )
}
export default Toggle;
import React,{useState} from 'react';

const Toggle = ({children}) => {
    const [toggle,setToggle] = useState(true);
    return(
        <div>
            {children}
        </div>
    )
}
export default Toggle;
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
const Nav = () => {
    return(
        <StyledNav>
            <h1><Link id="logo" to="/">Capture</Link></h1>
            <ul>
                <li>
                    <Link to="/">1. About Us</Link>
                    <Line transition={{duration: 0.75}} initial={{width: "0%"}} />
                </li>
                <li>
                    <Link to="/work">2. Our Work</Link>
                </li>
                <li>
                    <Link to="/contact">3. Contact Us</Link>
                </li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    position: sticky;
    top: 0;
    z-index: 10;
    a{
        color: white;
        text-decoration: none;
    }
    ul{
        display: flex;
        list-style: none;
    }
    #logo{
        font-size: 1.8rem;
        font-family: 'Lobster', cursive;
        font-weight: lighter;
    }
    li{
        padding-left: 10rem;
        position: relative;
    }
    @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo{
        display: inline-block;
        margin: 1rem;
    }
    ul{
        padding: 2rem;
        justify-content: space-around;
        width: 100%;
        li{
            padding: 0;
        }
    }
}
`;

const Line = styled(motion.div)`
    height: 0.3rem;
    background: #32d997;
    width: 0%;
    position: absolute;
    bottom: -80%;
    left: 60%;
`

export default Nav;
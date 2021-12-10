import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
//images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
//animation
import {motion} from "framer-motion";
import {pageAnimation,fade,photoAnim,lineAnim} from "../animations";

const OurWork = () => {
    return(
        <Work exit="exit" variants={pageAnimation} initial="hidden" animate="show">
            <Movie>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-athlete">
                <Hide>
                    <motion.img variants={photoAnim} src={athlete} alt="athlete" />
                </Hide>    
                </Link>
                
            </Movie>
            <Movie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to="/work/the-racer">
                <img src={theracer} alt="theracer-small" /></Link>
            </Movie>
            <Movie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link to="/work/good-times">
                    
                        <img src={goodtimes} alt="goodtimes" /></Link>
                
            </Movie>
        </Work>
    )
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
    }
    
`;
const Movie = styled.div`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #23d997;
        //margin-top: 3rem;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`
export default OurWork;
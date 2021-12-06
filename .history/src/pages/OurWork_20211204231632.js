import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
//images
import athlete from "../img/athlete-small.png";
import theracer2 from "../img/the-racer2.jpeg";
import goodtimes from "../img/goodtimes-small.png";
const OurWork = () => {
    return(
        <Work>
            <Movie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link>
                <img src={athlete} alt="athlete" /></Link>
            </Movie>
            <Movie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link>
                <img src={theracer2} alt="theracer2" /></Link>
            </Movie>
            <Movie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link>
                <img src={goodtimes} alt="goodtimes" /></Link>
            </Movie>
        </Work>
    )
}

const Work = styled.div`
    min-height: 100vh;
`;
const Movie = styled.div`
    padding-bottom: 10rem;
`;


export default OurWork;
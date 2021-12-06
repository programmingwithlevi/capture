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
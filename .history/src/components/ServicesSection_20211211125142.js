import React from 'react';
//Import Icons
import clock from '../img/clock.svg';
import diaphram from '../img/diaphram.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
//styles
import {About,Description,Image} from "../styles";
import styled from "styled-components";
//Test
import {useInView} from 'react-intersection-observer';
import {useAnimation} from 'framer-motion';


const ServicesSection = () => {
    return(
        <About>
            <div className="description">
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img alt="icon" src={clock} />
                            <h3>Efficient</h3>
                        </div>
                        <p>lorem5 </p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt="icon" src={teamwork} />
                            <h3>Teamwork</h3>
                        </div>
                        <p>lorem5 </p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt="icon" src={diaphram} />
                            <h3>Diaphram</h3>
                        </div>
                        <p>lorem5 </p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt="icon" src={money} />
                            <h3>Affordable</h3>
                        </div>
                        <p>lorem5 </p>
                    </Card>
                </Cards>
            </div>
        <div className="image">
            <img alt="camera" src={home2} />

        </div>
        </About>
    )
}

const Services = styled(About)`
h2{
    padding-bottom: 5rem;
}
p{
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
}
`;
const Cards = styled.div`
display: flex;
flex-wrap: wrap;
`;
const Card = styled.div`
    flex-basis: 15rem;
    .icon { 
        display: flex;
        align-items: center;
        h3 {
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
`;

export default ServicesSection;
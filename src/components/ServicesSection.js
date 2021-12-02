import React from 'react';
//Import Icons
import clock from '../img/clock.svg';
import diaphram from '../img/diaphram.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

const ServicesSection = () => {
    return(
        <div className="services">
            <div className="description">
                <h2>High <span>quality</span> services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img alt="icon" src={clock} />
                            <h3>Efficient</h3>
                        </div>
                        <p>lorem5 </p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img alt="icon" src={teamwork} />
                            <h3>Teamwork</h3>
                        </div>
                        <p>lorem5 </p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img alt="icon" src={diaphram} />
                            <h3>Diaphram</h3>
                        </div>
                        <p>lorem5 </p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img alt="icon" src={money} />
                            <h3>Affordable</h3>
                        </div>
                        <p>lorem5 </p>
                    </div>
                </div>
            </div>
        <div className="image">
            <img alt="camera" src={home2} />

        </div>
        </div>
    )
}

export default ServicesSection;
import React from 'react'
import './Hero.css';
import hero from '../../assets/Saving cloud Animation.mp4';
import arrow_right from '../../assets/right-arrow.png'
    const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-container">
                <div className="hero-up">
                    <div className="hero-left">
                            <video autoPlay loop muted src={hero}></video>
                    </div>
                    <div className="hero-right">
                        <h1>Discover Your Perfect Courses with <span className='typing'></span> </h1> 
                        <button className='btn'>Explore Courses <img src={arrow_right} alt="arrow" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero

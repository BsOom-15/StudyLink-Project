import React from 'react'
import './About.css';
import about_section from '../../assets//about-section.png';
import arrow_right from '../../assets/right-arrow.png';
const About = () => {
    return (
        <div className='about'>
            <div className="info">
                <h1>About Us</h1>
                <p>Who We Are ?</p>
            </div>
            <div className="about-row">
                <div className="about-left">
                    <img src={about_section}alt="" />
                </div>
                <div className="about-right">
                    <p>
                    <span>StudyLink</span> is a modern platform that connects learners with high-quality courses across a wide range of fields, 
                    from technology and business to creative arts and personal development. 
                    Our primary aim is to make learning accessible, 
                    engaging, and tailored to meet the diverse needs of every individual, 
                    whether you’re a beginner just starting out or a seasoned professional seeking to expand your skills.
                    </p>
                    <button className='about-btn'>Read More <img src={arrow_right} alt="arrow" /></button>
                </div>
            </div>
        </div>
    )
}

export default About

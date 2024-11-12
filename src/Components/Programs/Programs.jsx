import React from 'react'
import './Programs.css'
import online_program from '../../assets/OnlineCourse.jpeg';
import workshop_program from '../../assets/Workshops.jpeg';
import cirtificate_program from '../../assets/Certificate.jpeg';
import Program_One from '../../assets/online-learning.png';
import Program_two from '../../assets/workshop.png';
import Program_three from '../../assets/winner.png';
const Programs = () => {
    return (
        <div className='programs'>
        <div className="program">
            <img src={online_program} alt="" />
            <div className="caption">
                <img src={Program_One} alt="" />
                <p>Online Program</p>
            </div>
        </div>
        <div className="program">
            <img src={workshop_program} alt="" />
            <div className="caption">
                <img src={Program_two} alt="" />
                <p>Workshop Program</p>
            </div>
        </div>
        <div className="program">
            <img src={cirtificate_program} alt="" />
            <div className="caption">
                <img src={Program_three} alt="" />
                <p>Cirtificate Program</p>
            </div>
        </div>
        </div>
    )
}

export default Programs

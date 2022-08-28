import React from 'react';
import './programs.css';
import {programsData} from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png'

const programs = () => {
    return (
        <div className='programs' id='programs'>
            <div className="programs-header">
                <span className='stroke-text'>Explore Our</span>
                <span>Programs</span>
                <span className='stroke-text'>To Shape You</span>
            </div>

            <div className='programs-categories'>
                {
                    programsData.map((program) => {
                        return (
                            <div className='category'>
                                {program.image}
                                <span>{program.heading}</span>
                                <span>{program.details}</span>
                                <div className="join-now">
                                    <span>Join Now</span>
                                    <img src={RightArrow} alt="" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default programs
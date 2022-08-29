import React from 'react';
import './hero.css';
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import {motion} from 'framer-motion';
import NumberCounter from 'number-counter';

const hero = () => {
    const transition = {type: 'spring', duration: 3}
    const mobile = window.innerWidth <= 768 ? true : false;

    return (
    <div className='hero' id='home'>
        <div className='blur blur-hero'>

        </div>
        <div className="left-h">
            <Header />

            {/*text avec animation*/}
            <div className='the-best-ad'>
                <motion.div 
                    initial={{left: mobile ? '170px' : '238px'}}
                    whileInView={{left: '8px'}}
                    transition={{...transition, type: 'tween'}}
                >  
                </motion.div>
                <span>The best fitness club in the town</span>
            </div>

            {/*grand titre + parag*/}
            <div className='hero-text'>
                <div>
                    <span className='stroke-text'>Shape</span> <span>Your</span>
                </div>
                <div>
                    <span>Ideal Body</span>
                </div>
                <div>
                    <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                </div>
            </div>


            {/*les figures*/}
            <div className='figures'>
                <div>
                    <span>
                        <NumberCounter end={140} start={100} delay='4' preFix='+'></NumberCounter>
                        </span>
                    <span>expert coaches</span>
                </div>

                <div>
                    <span>
                        <NumberCounter end={978} start={800} delay='4' preFix='+'></NumberCounter>
                        </span>
                    <span>members joined</span>
                </div>

                <div>
                    <span>
                        <NumberCounter end={50} start={0} delay='4' preFix='+'></NumberCounter>
                    </span>
                    <span>fitness programs</span>
                </div>
            </div>

            <div className='hero-buttons'>
                <button className='btn'>Get Started</button>
                <button className='btn'>Learn More</button>
            </div>
        </div>
            
        <div className="right-h">
            <button className='btn'>Join Now</button>

            <motion.div className='heart-rate'
                initial={{right: "-1rem"}}
                whileInView={{right: '4rem'}}
                transition={transition}
            >
                <img src={Heart} alt="" />
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </motion.div>

            {/*hero image*/}
            <img src={hero_image} alt="" className='hero-image'/>
            
            <motion.img src={hero_image_back} alt="" className='hero-image-back'
            initial={{right: '20rem'}}
            whileInView={{right: '28rem'}}
            transition={transition}
            />

            {/*calories*/}
            <motion.div className='calories'
                initial={{right: '60rem'}}
                whileInView={{right: '50rem'}}
                transition={transition}
            >
                <img src={Calories} alt="" />
                <div>
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                </div>
            </motion.div>
        </div>
    </div>
    )
}

export default hero
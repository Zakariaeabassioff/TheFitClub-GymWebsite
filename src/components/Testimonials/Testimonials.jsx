import React, {useState} from 'react'
import './Testimonials.css'
import {testimonialsData} from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import {motion} from 'framer-motion'

const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

    const transition = {type: 'spring', duration: 3}

    return (
        <div className='testimonials'>
            <div className='test-left'>
                <span>Testimonials</span>
                <span className='stroke-text'>What They</span>
                <span>Say about us</span>
                <span>
                    {testimonialsData[selected].review}
                </span>
                <span>
                    <span>{testimonialsData[selected].name}</span>
                    <span> - {testimonialsData[selected].status}</span>
                </span>
            </div>

            <div className='test-right'>
                <motion.div
                    initial={{opacity: 0, x: -100}}
                    transition={{...transition, duration: 2}}
                    whileInView={{opacity: 1, x: 0}}
                ></motion.div>

                <motion.div
                    initial={{opacity: 0, x: 100}}
                    transition={{...transition, duration: 2}}
                    whileInView={{opacity: 1, x: 0}}
                ></motion.div>

                <motion.img src={testimonialsData[selected].image} alt=''
                    key={selected}
                    initial={{opacity: 0, x: 100}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={transition}
                />
                <div className='arrows'> 
                    <img src={leftArrow} alt="" 
                    onClick={(() => {
                        selected === 0? setSelected(tLength-1) : setSelected((prev) => prev - 1)
                    })}
                    />
                    <img src={rightArrow} alt="" 
                    onClick={(() => {
                        selected === tLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1)
                    })}
                    />
                </div>
            </div>
        </div>
    )
}

export default Testimonials
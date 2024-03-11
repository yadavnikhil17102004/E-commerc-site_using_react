import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image2.png'
const Hero = () => {
  return (
    <div className='hero' >
        <div className="hero-left">
            <h2>NEW ARRIVALS EVERYDAY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>Pets</p>
                    <img src={hand_icon} alt="hand_icon" />
                </div>
                <p>For Everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Newly added</div>
                <img src={arrow} alt="arrow" />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt='hero_image' />
        </div>
    </div>
  )
}

export default Hero
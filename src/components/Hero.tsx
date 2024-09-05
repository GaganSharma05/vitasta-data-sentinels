import React from 'react';
import './style/Hero.css';
import heroImage from '../assets/About1.png';  // Adjust the path if needed

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <img src={heroImage} alt="Hero" className="hero-image" />
                <a href="#services" className="hero-button">Learn More</a>
            </div>
        </section>
    );
}

export default Hero;


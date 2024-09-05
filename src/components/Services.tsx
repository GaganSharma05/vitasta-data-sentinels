import React from 'react';
import './style/Services.css';

const Services: React.FC = () => {
    return (
        <section className="services" id="services">
            <h2>Our Services</h2>
            <div className="service-cards">
                <div className="service-card">
                    <h3>Data-Driven portfolio and Risk management</h3>
                    <p>By combining the power of quantitative analysis, machine learning, and AI, we can help you make informed investment decisions and achieve your financial objectives</p>
                    <button className="button">AI enabled advisor</button>
                </div>
                <div className="service-card">
                    <h3>Tailored Training and Resources for Financial Professionals</h3>
                    <p>We offer a range of training programs and resources designed for Financial Market professionals, Economics Students, Quant Strategists, Data Scientists in Finance</p>
                    <button className="button">Login</button>
                </div>
                <div className="service-card">
                    <h3>Technology Consulting Services</h3>
                    <p>We offer expert guidance and solutions for businesses looking to leverage technology to drive growth and efficiency</p>
                    <button className="button">Book Appointment</button>
                </div>
            </div>
        </section>
    );
}

export default Services;

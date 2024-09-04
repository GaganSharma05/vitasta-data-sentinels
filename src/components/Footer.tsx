import React from 'react';
import './style/Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p>&copy; 2024 Vitasta Data Sentinels. All rights reserved.</p>
                <div className="social-media">
                    <a href="#facebook">Facebook</a>
                    <a href="#twitter">Twitter</a>
                    <a href="#linkedin">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-dark py-4">
            <h4 className="footer-text">English Language Academy</h4>
            <h4 className="footer-text my-4">
                <i class="fab fa-facebook-square mx-3"></i>
                <i class="fab fa-twitter-square mx-3"></i>
                <i class="fab fa-instagram mx-3"></i>
            </h4>
            <p className="footer-text">Copyright &copy; 2021 English Language Academy. All Rights Reserved</p>
        </div>
    );
};

export default Footer;
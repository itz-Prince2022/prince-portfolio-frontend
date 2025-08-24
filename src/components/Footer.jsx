import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { TbMail } from "react-icons/tb";

const Footer = ({name, contact}) => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="portfolio-footer" id="contact">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>{name}</h3>
                        <p>Passionate developer building clean and functional web applications.</p>
                    </div>
                    <div className="footer-section social-links">
                        <h3>Connect with me</h3>
                        <div className="social-icons">
                            <a href={`https://${contact.github}`} target="_blank" rel="noopener noreferrer" className="social-icon">
                                <span className="icon"><FaGithub/></span>
                                {/* 📁 */}
                            </a>
                            <a href={`https://${contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="social-icon">
                                <span className="icon"><FaLinkedin/></span>
                                {/* 🔗 */}
                            </a>
                            <a href={`mailto:${contact.email}`} className="social-icon">
                                <span className="icon"><TbMail /></span>
                                {/* 📧 */}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {currentYear} {name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
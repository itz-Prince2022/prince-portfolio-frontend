import React from 'react';
import logo from '/img3.png';

const Header = ({ name, bio }) => {
    return (
        <header className="premium-header">
            <div className="container">
                <nav className="header-nav fade-in-up">
                    <div className="logo-placeholder">
                        <span className="logo-initials">PP</span>
                    </div>
                    <ul className="nav-links">
                        <li><a href="#about" className="nav-link">About</a></li>
                        <li><a href="#projects" className="nav-link">Projects</a></li>
                        <li><a href="#skills" className="nav-link">Skills</a></li>
                        <li><a href="#contact" className="nav-link nav-contact-btn">Contact</a></li>
                    </ul>
                </nav>

                <div className="header-content-wrapper">
                    <div className="profile-image-container fade-in-up">
                        <img src={logo} alt="Prince Patel" className="profile-image" />
                    </div>
                    <div className="hero-text-container">
                        <p className="header-tagline fade-in-up">Hello, I'm a passionate</p>
                        <h1 className="header-name fade-in-up">{name}</h1>
                        <h2 className="header-title fade-in-up">Software Developer</h2>
                        <p className="header-bio fade-in-up">{bio}</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;



// import React from 'react';
// import logo from '/img3.png';
// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa6";
// import { TbMail } from "react-icons/tb";

// const Header = ({ name, bio, contact }) => {
//     return (
//         <header className="portfolio-header">
//             <div className="container">
//                 <img src={logo} alt="Portfolio Logo" className="logo fade-in-up" />
//                 <h1 className="header-name fade-in-up">{name}</h1>
//                 <p className="header-bio fade-in-up">{bio}</p>
//                 <div className="contact-links fade-in-up">
//                     <a href={`mailto:${contact.email}`} className="contact-link">
//                         <span className="icon"><TbMail /></span>
//                         <span className="link-text">{contact.email}</span>
//                     </a>
//                     <a href={"https://"+contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
//                         <span className="icon"><FaLinkedin/></span>
//                         <span className="link-text">LinkedIn</span>
//                     </a>
//                     <a href={"https://"+contact.github} target="_blank" rel="noopener noreferrer" className="contact-link">
//                         <span className="icon"><FaGithub/></span>
//                         <span className="link-text">GitHub</span>
//                     </a>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Header;
import React from 'react';

const AboutMe = ({ education, certifications }) => {
    return (
        <section className="about-me-section"  id="about">
            <div className="container">
                <h2 className="section-title fade-in-up">About Me</h2>
                <div className="about-me-grid">
                    <div className="card education-card fade-in-up">
                        <h3>Education</h3>
                        {education.map((edu, index) => (
                            <div key={index} className="edu-item">
                                <h4>{edu.degree}</h4>
                                <p className="edu-info">{edu.institution}</p>
                                <p className="edu-duration">{edu.duration}</p>
                                {edu.gpa && <p className="edu-info">GPA: {edu.gpa}</p>}
                                {edu.percentages && <p className="edu-info">Percentages: {edu.percentages}</p>}
                                {edu.details && (
                                    <ul className="edu-details-list">
                                        {edu.details.map((detail, i) => <li key={i}>{detail}</li>)}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="card certifications-card fade-in-up">
                        <h3>Achievements/Certifications</h3>
                        {certifications.map((cert, index) => (
                            <div key={index} className="cert-item">
                                <h4>{cert.title}</h4>
                                <p className="cert-info">From: {cert.from}</p>
                                {cert.toolsLearned.length > 0 && (
                                    <p className="cert-tools">Tools Learned: {cert.toolsLearned.join(', ')}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
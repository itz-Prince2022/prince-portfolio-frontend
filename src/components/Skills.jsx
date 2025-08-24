import React from 'react';

const Skills = ({ skills }) => {
    return (
        <section className="skills-section" id="skills">
            <div className="container">
                <h2 className="section-title fade-in-up">Skills</h2>
                <div className="skills-grid">
                    {skills.map((skillGroup, index) => (
                        <div key={index} className="skill-group fade-in-up">
                            <h3>{skillGroup.name}</h3>
                            <ul className="skill-list">
                                {skillGroup.list.map((skill, i) => (
                                    <li key={i} className="skill-item">{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
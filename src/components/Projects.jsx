import React from 'react';

const Projects = ({ projects }) => {
    return (
        <section className="projects-section" id="projects">
            <div className="container">
                <h2 className="section-title fade-in-up">Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="card project-card fade-in-up">
                            <h3>{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <p className="project-tools"><strong>Tools Used:</strong> {project.tools.join(', ')}</p>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                View on GitHub
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
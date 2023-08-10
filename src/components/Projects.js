import React from 'react';
import projects from '../Projects.json';

export const Projects = () => {
  return (
    <section className="feat-projects">
      <div className="container">
        <div className="portfolio-heading-container">
          <h2 className="main-title">FEATURED PROJECTS</h2>
        </div>
        <div className="main-wrapper">
          {projects.map(project => (
            <article className="main-projects" key={project.id}>
              <a
                className="img-container"
                href={project.netlify}
                target="blank"
              >
                <div className="overlay"></div>
                <img
                  className="project-img"
                  src={project.image}
                  alt="Project photo"
                />
              </a>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tools.map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

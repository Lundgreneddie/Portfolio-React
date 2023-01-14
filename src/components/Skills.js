import React from 'react';

export const Skills = () => {
  return (
    <section className="skills">
      <div className="container">
        <div className="portfolio-heading-container">
          <h2 className="main-title">Skills</h2>
        </div>
        <div className="skill-container">
          <div className="code-skills">
            <h4>CODE</h4>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript ES6</li>
              <li>React</li>
              <li>Redux</li>
              <li>React Native</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Git</li>
            </ul>
          </div>

          <div className="toolboxes">
            <h4>TOOLBOXES</h4>
            <ul>
              <li>Slack</li>
              <li>Figma</li>
              <li>Github</li>
              <li>VS code</li>
            </ul>
          </div>

          <div className="upcoming-skills">
            <h4>UPCOMING</h4>
            <ul>
              <li>TypeScript</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

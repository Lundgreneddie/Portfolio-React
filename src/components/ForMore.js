import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faGithub,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';

export const ForMore = () => {
  return (
    <section className="more-about-me">
      <div className="container">
        <div className="portfolio-heading-container">
          <h2 className="main-title">For more</h2>
        </div>
        <nav className="navbar-bottom">
          <a aria-label="github-link" href="https://github.com/Lundgreneddie">
            <FontAwesomeIcon icon={faGithub} color="black" />
          </a>
          <a
            aria-label="linkedin-link"
            href="https://www.linkedin.com/in/eddie-lundgren-96b697218/"
          >
            <FontAwesomeIcon icon={faLinkedinIn} color="black" />
          </a>
          <a
            aria-label="stackoverflow-link"
            href="https://stackoverflow.com/users/16651644/eddie-lundgren"
          >
            <FontAwesomeIcon icon={faStackOverflow} color="black" />
          </a>
        </nav>
      </div>
    </section>
  );
};

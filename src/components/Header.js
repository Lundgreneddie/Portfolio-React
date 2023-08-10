import React from 'react';
import ProfileImage from 'images/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faGithub,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';

export const Header = () => {
  return (
    <header>
      <div>
        <nav className="navbar-header">
          <a aria-label="github-link" href="https://github.com/Lundgreneddie">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            aria-label="linkedin-link"
            href="https://www.linkedin.com/in/eddie-lundgren-96b697218/"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            aria-label="stackoverflow-link"
            href="https://stackoverflow.com/users/16651644/eddie-lundgren"
          >
            <FontAwesomeIcon icon={faStackOverflow} />
          </a>
        </nav>
      </div>
      <div className="header-text">
        <p>
          <span className="name-bold">EDDIE LUNDGREN</span>
        </p>
        <h1>Frontend developer</h1>
        <h2>+ retail sales</h2>
      </div>
      <img src={ProfileImage} className="profile-img" alt="profile image" />
    </header>
  );
};

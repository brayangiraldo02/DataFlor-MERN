// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  const developer = {
    name: "Brayan Cataño Giraldo",
    github: "https://github.com/brayangiraldo02"
  };

  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerLegal">
          <p>© {new Date().getFullYear()} DataFlor, Inc. All Rights Reserved</p>
        </div>

        <div className="footerDevelopers">
          <p>Developer:</p>
          <ul>
            <li>
              <a href={developer.github} target="_blank" rel="noopener noreferrer">
                {developer.name}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si'; // Fiverr icon
import './Service.css';

const services = [
  'UI/UX Design',
  'Frontend Development',
  'Backend Development',
  'Database Management',
  'Full Stack Development',
  'C++ Development',
  'Java Development',
  'Android Application',
  'Desktop Application',
];

const Service = () => {
  return (
    <section className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            {service}
          </div>
        ))}
      </div>

      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-icons">
        <a
          href="https://www.linkedin.com/in/furqan-mehdi-242569245/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/FurqanMehdi"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:furqanmehdi329@gmail.com"
          className="icon-link email-icon"
          data-tooltip="furqanmehdi329@gmail.com"
        >
          <FaEnvelope />
        </a>
        {/* Fiverr icon link */}
        <a
          href="https://www.fiverr.com/furqan_mehdi110/buying?source=avatar_menu_profile"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <SiFiverr />
        </a>
      </div>
    </section>
  );
};

export default Service;

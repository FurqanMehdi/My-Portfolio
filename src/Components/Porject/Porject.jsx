import React from 'react';
import './Porject.css';
import libaray from '../Images/libaray.png';
import chat from '../Images/chat.png';
import crud from '../Images/crud.png';
import dice from '../Images/dice.jpg';
import azora from '../Images/logo.png';
import social from '../Images/social.png';
import skill from '../Images/skill.png';

const projects = [
  {
    name: 'Library Management System',
    image: libaray,
    tools: 'SQL, C#',
    description:
      'A comprehensive library management system featuring separate interfaces for Students (book reservations, fine payments), Librarians (add/remove books and students, manage fines), and Admin (manage librarians, view reports).',
    github: 'https://github.com/FurqanMehdi/Library-Management-System',
  },
  {
    name: 'Skillspace Android Application',
    image: skill,
    tools: 'Java',
    description:
      'An Android app where users can register, log in, enroll in courses, and receive certificates upon completion.',
    github: 'https://github.com/FurqanMehdi/Skill-Space-Application',
  },
  {
    name: 'Chatbot',
    image: chat,
    tools: 'HTML, CSS, JavaScript',
    description:
      'A responsive chatbot interface that dynamically answers user questions in real-time.',
    github: 'https://github.com/FurqanMehdi/Chat_Bot_integration',
  },
  {
    name: 'Dice Roll Kotlin App',
    image: dice,
    tools: 'Kotlin',
    description:
      'A simple Kotlin application that generates a random number between 0 and 6 when the user presses a button.',
    github: 'https://github.com/FurqanMehdi/Dice-Roll-Kotlin',
  },
  {
    name: 'Social Media Dashboard',
    image: social,
    tools: 'HTML, CSS, JavaScript',
    description:
      'A visually engaging dashboard that aggregates and displays total likes, comments, and views across multiple social media platforms like Facebook, Instagram, and Twitter.',
    github: 'https://github.com/FurqanMehdi/Social_media_dashboard',
  },
  {
    name: 'Azora E-commerce Website',
    image: azora,
    tools: 'HTML, CSS',
    description:
      'A multi-page e-commerce website featuring a homepage, category listings, product details, and contact page for an intuitive online shopping experience.',
    github: 'https://github.com/FurqanMehdi/Azora',
  },
  {
    name: 'CRUD Operations using React',
    image: crud,
    tools: 'React.js',
    description:
      'A React-based application that allows users to create, read, update, and delete student records seamlessly.',
    github: 'https://github.com/FurqanMehdi/React-Application',
  },
];

const Porject = () => {
  return (
    <section className="project-container">
      <h2 className="project-title">My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
            <h3 className="project-name">{project.name}</h3>
            <p className="project-tools">
              <strong>Tools:</strong> {project.tools}
            </p>
            <p className="project-description">
              <strong>Description:</strong> {project.description}
            </p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Porject;

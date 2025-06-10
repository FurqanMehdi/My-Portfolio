import React from 'react';
import './Skill.css';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiFigma, SiAndroid, SiCplusplus, SiMysql } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact color="#61dafb" /> },
  { name: 'HTML5', icon: <FaHtml5 color="#e34c26" /> },
  { name: 'CSS3', icon: <FaCss3Alt color="#2965f1" /> },
  { name: 'JavaScript', icon: <FaJsSquare color="#f0db4f" /> },
  { name: 'Java', icon: <FaJava color="#f89820" /> },
  { name: 'C++', icon: <SiCplusplus color="#00599c" /> },
  { name: 'Figma', icon: <SiFigma color="#f24e1e" /> },
  { name: 'Android', icon: <SiAndroid color="#3ddc84" /> },
  { name: 'MySQL', icon: <SiMysql color="#00758f" /> },
  { name: 'GitHub', icon: <FaGithub color="#333" /> },
  { name: 'Full Stack', icon: <FaReact color="#61dafb" /> },
];

const Skill = () => {
  return (
    <section className="skills-container">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-name">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;

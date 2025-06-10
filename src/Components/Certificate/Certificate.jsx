import React from 'react';
import './Certificate.css';
import Certificate1 from '../Images/Certificate1.PNG';
import Certificate2 from '../Images/Certificate2.PNG';
import Certificate3 from '../Images/Certificate3.PNG';
import Certificate4 from '../Images/Certificate4.PNG';
import Certificate5 from '../Images/Certificate5.PNG';
import Certificate6 from '../Images/Certificate6.PNG';
import Certificate7 from '../Images/Certificate7.PNG';
import Certificate8 from '../Images/Certificate8.PNG';
import Certificate9 from '../Images/Certificate9.PNG';
import Certificate10 from '../Images/Certificate10.PNG';
import Certificate11 from '../Images/Certificate11.PNG';
import Certificate12 from '../Images/Certificate12.jpg';
import Certificate13 from '../Images/Certificate13.PNG';
import Certificate14 from '../Images/Certificate14.jpg';
import Certificate15 from '../Images/Certificate15.jpg';

const certificates = [
  { img: Certificate1, name: 'Andriod Application Development' },
  { img: Certificate2, name: 'ASP.NET MVC' },
  { img: Certificate3, name: 'Computer Architecture' },
  { img: Certificate4, name: 'Introduction To API & REST API' },
  { img: Certificate5, name: 'Introduction TO NoSQL' },
  { img: Certificate6, name: 'Java Programming' },
  { img: Certificate7, name: 'MongoDB Developer' },
  { img: Certificate8, name: 'Introduction To MongoDB' },
  { img: Certificate9, name: ' Introduction To Node Js' },
  { img: Certificate10, name: 'Node Js' },
  { img: Certificate11, name: 'NoSQL Database' },
  { img: Certificate12, name: 'Quantum Computing' },
  { img: Certificate13, name: 'React Js' },
  { img: Certificate14, name: 'Software Testing' },
  { img: Certificate15, name: 'Web5 Fundamental' },
];

const Certificate = () => {
  return (
    <section className="certificates-container">
      {certificates.map((cert, index) => (
        <div key={index} className="certificate-card">
          <a href={cert.img} target="_blank" rel="noopener noreferrer">
            <img src={cert.img} alt={cert.name} />
          </a>
          <p>{cert.name}</p>
        </div>
      ))}
    </section>
  );
};

export default Certificate;

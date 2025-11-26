import React, { useEffect, useRef } from 'react';
import './Home.css';
import Typed from 'typed.js';
import BackgroundImage from '../Images/Furqan.png';

const Home = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        'UI/UX Designer',
        'Frontend Developer',
        'Backend Developer',
        'MERN Stack Developer',
        'Full Stack Developer',
        'Java Developer',
        'C++ Developer ',
        'SpringBoot Developer'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      smartBackspace: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      className="home-container"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
      }}
    >
      <div className="home-text">
        <h1>I am a <span ref={typedElement} style={{ color: '#69ea48' }} /></h1>
        <p style={{ marginTop: '1rem', fontSize: '1.1rem' }}>
          My name is <strong style={{color: '#69ea48'}}>Furqan Mehdi</strong>. I am passionate about building elegant and functional user interfaces as well as robust backend systems. Let’s work together!
        </p>
      </div>
    </section>
  );
};

export default Home;

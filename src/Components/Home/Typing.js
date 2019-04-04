import React from 'react';
import Typing from 'react-typing-animation';
import './Home.css';

const AnimatedTyping = () => (
  <Typing speed={100} loop={true}>
    <Typing.Reset count={1} delay={500} />
    <span className="animation-text">Full Stack Developer</span>
    <Typing.Reset count={1} delay={3000} />
    <span className="animation-text">Magician</span>
    <Typing.Reset count={2} delay={3000} />
    <span className="animation-text">Freelance Astronaut</span>
    <Typing.Reset delay={3000} />
  </Typing>
);

export default AnimatedTyping;

import './Section1.scss';
import Logo from '../../Logo/Logo';
import CodeExamples from '../../CodeExamples/CodeExamples';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Section1() {
  const [getStartedClass, setGetStartedClass] = useState('get-started-btn btn-invisible');

  useEffect(() => {
    setGetStartedClass('get-started-btn');
  }, []);

  return (
    <section className="section1">
      <div className="section1__wrapper">
        <Logo />
        <CodeExamples />
      </div>
      <button className={getStartedClass}>
        <NavLink to="/SignUp" className="nav__link" id="sign-up">
          Get Started
        </NavLink>
      </button>
    </section>
  );
}

export default Section1;

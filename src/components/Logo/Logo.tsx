import './Logo.scss';
import logo from '../../assets/svg/logo.svg';
import { ReactSVG } from 'react-svg';
import { useState, useEffect } from 'react';

function Logo() {
const [logoClass, setlogoClass] = useState('logo-welcome code-invisible');
useEffect(() => {
    setlogoClass('logo-welcome')
  }, []);
  return <div className={logoClass}>
      <ReactSVG src={logo} className="logo-welcome__svg" />
      <h1 className="logo-welcome__title">GraphQL</h1>
  </div>;
}
export default Logo;
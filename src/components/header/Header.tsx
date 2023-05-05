import './Header.scss';
import Navigation from '../navigation/Navigation';
import burger from '../../assets/svg/burger_menu.svg';
import logo from '../../assets/svg/logo.svg';
import { ReactSVG } from 'react-svg';
import { useState } from 'react';

function Header() {
  const [navClass, setNavClass] = useState('nav');
  const [overlayClass, setOverlayClass] = useState('overlay');

  function showNavigation() {
    setNavClass('nav nav-visible');
    setOverlayClass('overlay overlay-visible');
  }

  function hideNavigation() {
    setNavClass('nav');
    setOverlayClass('overlay');
  }

  return (
    <header className="header">
      <div className="header__wrapper">
        <ReactSVG src={logo} className="logo" />
        <Navigation navClass={navClass} hideNavigation={hideNavigation} />
        <ReactSVG src={burger} className="burger" onClick={showNavigation} />
      </div>
      <div className={overlayClass} onClick={hideNavigation} />
    </header>
  );
}
export default Header;

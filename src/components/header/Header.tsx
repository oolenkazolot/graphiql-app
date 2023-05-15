import './Header.scss';
import Navigation from '../navigation/Navigation';
import burger from '../../assets/svg/burger_menu.svg';
import logo from '../../assets/svg/logo.svg';
import { ReactSVG } from 'react-svg';
import { useState, useEffect } from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectAuthorized } from '../../slices/authSlice';


function Header() {
  const [navClass, setNavClass] = useState('nav');
  const [overlayClass, setOverlayClass] = useState('overlay');
  const [isScroll, setIsScroll] = useState(false);
  
  // берет значение из редакса
  const isAuthorized = useAppSelector(selectAuthorized);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledPxs = window.pageYOffset;
      setIsScroll(scrolledPxs > 0);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function showNavigation() {
    setNavClass('nav nav-visible');
    setOverlayClass('overlay overlay-visible');
  }

  function hideNavigation() {
    setNavClass('nav');
    setOverlayClass('overlay');
  }


  return (
    <header className={isScroll ? 'header scroll' : 'header'}>
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

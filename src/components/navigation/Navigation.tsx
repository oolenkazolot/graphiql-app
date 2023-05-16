import './Navigation.scss';
import { NavLink } from 'react-router-dom';
import HeaderBtns from '../headerBtns/HeaderBtns';
import cross from '../../assets/svg/x_icon.svg';
import { ReactSVG } from 'react-svg';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { useState, useEffect } from 'react';

export type IProps = {
  navClass: string;
  hideNavigation: () => void;
};

function Navigation(props: IProps) {
  const [user, loading] = useAuthState(auth);
  const { navClass, hideNavigation } = props;
  const [graphiClass, setGraphiClass] = useState('invisible-nav');

  useEffect(() => {
    if (!loading) {
      if (!user) {
        setGraphiClass('invisible-nav');
      } else {
        setGraphiClass('nav__li');
      }
    }
  }, [user, loading]);

  return (
    <nav className={navClass}>
      <ul className="nav__ul">
        <li className="nav__li">
          <NavLink to="/" className="nav__link">
            Welcome Page
          </NavLink>
        </li>
        <li className={graphiClass}>
          <NavLink to="/Main" className="nav__link">
            GraphiQL
          </NavLink>
        </li>
      </ul>
      <HeaderBtns />
      <ReactSVG src={cross} className="cross" onClick={hideNavigation} />
    </nav>
  );
}
export default Navigation;

import './Navigation.scss';
import { NavLink } from 'react-router-dom';
import HeaderBtns from '../headerBtns/HeaderBtns';
import cross from '../../assets/svg/x_icon.svg'
import { ReactSVG } from 'react-svg';

export type IProps = {
  navClass: string;
  hideNavigation: () => void;
};

function Navigation(props: IProps) {
  const {navClass, hideNavigation} = props;

    return (
      <nav className={navClass}>
        <ul className="nav__ul">
          <li className="nav__li">
            <NavLink to="/" className="nav__link">
              Welcome Page
            </NavLink>
          </li>
          <li className="nav__li">
            <NavLink to="/Main" className="nav__link">
              GraphiQL
            </NavLink>
          </li>
        </ul>
        <HeaderBtns />
        <ReactSVG src={cross} className='cross' onClick={hideNavigation}/>
      </nav>
    );
  }
  export default Navigation;
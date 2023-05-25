import './Navigation.scss';
import { NavLink } from 'react-router-dom';
import HeaderBtns from '../headerBtns/HeaderBtns';
import cross from '../../assets/svg/x_icon.svg';
import { ReactSVG } from 'react-svg';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';


export type IProps = {
  navClass: string;
  hideNavigation: () => void;
};

function Navigation(props: IProps) {
  const [user, loading] = useAuthState(auth);
  const { navClass, hideNavigation } = props;
  const [graphiClass, setGraphiClass] = useState('invisible-nav');
  const { t, i18n } = useTranslation();
  const currLng = i18n.language;

  useEffect(() => {
    if (!loading) {
      if (!user) {
        setGraphiClass('invisible-nav');
      } else {
        setGraphiClass('nav__li');
      }
    }
  }, [user, loading]);

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  return (
      <nav className={navClass}>
        <ul className="nav__ul">
          <li className="nav__li">
            <NavLink to="/" className="nav__link" onClick={hideNavigation}>
              {t("header.welcome")}
            </NavLink>
          </li>
          <li className={graphiClass}>
            <NavLink to="/Main" className="nav__link" onClick={hideNavigation}>
              {t("header.main")}
            </NavLink>
          </li>
        </ul>
        <select className="lang" value={currLng} onChange={(e) => changeLang(e.target.value)}>
          <option className="option" value="en">EN</option>
          <option className="option" value="ru">RU</option>
        </select>
        <HeaderBtns hideNavigation={hideNavigation}/>
        <ReactSVG src={cross} className="cross" onClick={hideNavigation} />
      </nav>
  );
}
export default Navigation;

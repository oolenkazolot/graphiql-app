import { logout } from '../../firebase';
import './HeaderBtns.scss';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { useTranslation } from 'react-i18next';

function HeaderBtns() {
  const [logInBtnClass, setLogInBtnClass] = useState('invisible-btn');
  const [logOutBtnClass, setLogOutBtnClass] = useState('invisible-btn');

  const [user, loading] = useAuthState(auth);

  const { t } = useTranslation();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        setLogInBtnClass('btns__sign-up');
        setLogOutBtnClass('invisible-btn');
      } else {
        setLogInBtnClass('invisible-btn');
        setLogOutBtnClass('btns__sign-up');
      }
    }
  }, [user, loading]);

  return (
    <div className="btns">
      <button className={logInBtnClass}>
        <NavLink to="/SignIn" className="nav__link" id="sign-in">
          {t("header.signIn")}
        </NavLink>
      </button>
      <button className={logInBtnClass}>
        <NavLink to="/SignUp" className="nav__link" id="sign-up">
          {t("header.signUp")}
        </NavLink>
      </button>
      <button className={logOutBtnClass} onClick={logout}>
        <NavLink to="/" className="nav__link" id="log-out">
        {t("header.logOut")}
        </NavLink>
      </button>
    </div>
  );
}
export default HeaderBtns;

import { logout } from '../../firebase';
import './HeaderBtns.scss';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { useTranslation } from 'react-i18next';

type IProps = {
  hideNavigation: () => void;
};

function HeaderBtns(props: IProps) {
  const { hideNavigation } = props;
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
        <NavLink to="/SignIn" className="nav__link" id="sign-in" onClick={hideNavigation}>
          {t('header.signIn')}
        </NavLink>
      </button>
      <button className={logInBtnClass}>
        <NavLink to="/SignUp" className="nav__link" id="sign-up" onClick={hideNavigation}>
          {t('header.signUp')}
        </NavLink>
      </button>
      <button className={logOutBtnClass} onClick={logout}>
        <NavLink to="/" className="nav__link" id="log-out" onClick={hideNavigation}>
          {t('header.logOut')}
        </NavLink>
      </button>
    </div>
  );
}
export default HeaderBtns;

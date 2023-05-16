import { logout } from '../../firebase';
import './HeaderBtns.scss';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

function HeaderBtns() {

  const [logInBtnClass, setLogInBtnClass] = useState('invisible-btn');
  const [logOutBtnClass, setLogOutBtnClass] = useState('invisible-btn');

  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if(!loading) {
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
          Sign In
        </NavLink>
      </button>
      <button className={logInBtnClass}>
        <NavLink to="/SignUp" className="nav__link" id="sign-up">
          Sign Up
        </NavLink>
      </button>
      <button className={logOutBtnClass} onClick={logout}>
        <NavLink to="/" className="nav__link" id="log-out">
          Log out
        </NavLink>
      </button>
    </div>
  );
}
export default HeaderBtns;

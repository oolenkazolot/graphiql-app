import './HeaderBtns.scss';

import { NavLink } from 'react-router-dom';

function HeaderBtns() {
  return (
    <div className="btns">
      <button className="btns__sign-in">
        <NavLink to="/SignIn" className="nav__link" id="sign-in">
          Sign In
        </NavLink>
      </button>
      <button className="btns__sign-up">
        <NavLink to="/SignUp" className="nav__link" id="sign-up">
          Sign Up
        </NavLink>
      </button>
      <button className="btns__sign-up">
        <NavLink to="/" className="nav__link" id="log-out">
          Log out
        </NavLink>
      </button>
    </div>
  );
}
export default HeaderBtns;

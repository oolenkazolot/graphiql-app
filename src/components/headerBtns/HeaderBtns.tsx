import { NavLink } from 'react-router-dom';

function HeaderBtns() {
    return (
      <div className="btns">
        <button className="btns__sign-in">
            <NavLink to="/SignIn" className="nav__link">
              Sign In
            </NavLink>
        </button>
        <button className="btns__sign-up">
            <NavLink to="/SignUp" className="nav__link">
              Sign Up
            </NavLink>
        </button>
      </div>
    );
  }
  export default HeaderBtns;
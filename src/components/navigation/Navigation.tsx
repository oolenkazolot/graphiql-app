import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="nav">
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
    </nav>
  );
}
export default Navigation;

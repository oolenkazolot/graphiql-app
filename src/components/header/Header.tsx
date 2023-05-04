import './Header.scss';
import Navigation from "../navigation/Navigation";
import HeaderBtns from "../headerBtns/HeaderBtns";

function Header() {
    return <header className="header">
      <Navigation />
      <HeaderBtns />
    </header>
  }
  export default Header;
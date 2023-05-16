import './Footer.scss';
import gitHub from '../../assets/svg/github.svg';
import RS from '../../assets/svg/rs_school.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="gitHub__wrapper">
          <a className="gitHub__link" href="https://github.com/oolenkazolot">
            <img src={gitHub} className="gitHub__svg" />
          </a>
          <a className="gitHub__link" href="https://github.com/oolenkazolot">
            <span className="gitHub__name">oolenkazolot</span>
          </a>
          <a className="gitHub__link" href="https://github.com/svetik-k">
            <span className="gitHub__name">svetik-k</span>
          </a>
          <a className="gitHub__link" href="https://github.com/alisatonks">
            <span className="gitHub__name">alisatonks</span>
          </a>
        </div>
        <div className="footer__year">2023</div>
        <a className="gitHub__link" href="https://rs.school/">
          <img src={RS} className="footer__RS" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

import './Developers.scss';
import olenka from '../../../assets/jpeg/oolenkazolot.jpg';
import svetik from '../../../assets/jpeg/svetik.jpg';
import alisatonks from '../../../assets/jpeg/alisatonks.jpg';
import { useTranslation } from 'react-i18next';

function Developers() {
  const { t } = useTranslation();

  return (
    <section className="developers">
      <div className="developers__wrapper">
        <h2 className="developers__h2">{t("developers.team")}</h2>
        <div className="cards__wrapper">
          <a href="https://github.com/oolenkazolot" className="gitHubLink">
            <div className="cards__card">
              <div className="cards__name">{t("developers.oolenka")}</div>
              <div className="cards__img-wrapper">
                <img src={olenka} alt="olenkazolot" className="cards__img" />
              </div>
              <div className="cards__info">{t("developers.lead")}</div>
            </div>
          </a>
          <a href="https://github.com/svetik-k" className="gitHubLink">
            <div className="cards__card">
              <div className="cards__name">{t("developers.svetik")}</div>
              <div className="cards__img-wrapper">
                <img src={svetik} alt="svetik-k" className="cards__img" />
              </div>
              <div className="cards__info">{t("developers.dev")}</div>
            </div>
          </a>
          <a href="https://github.com/alisatonks" className="gitHubLink">
            <div className="cards__card rotate">
              <div className="cards__name">{t("developers.alisa")}</div>
              <div className="cards__img-wrapper">
                <img src={alisatonks} alt="alisatonks" className="cards__img" />
              </div>
              <div className="cards__info">{t("developers.dev")}</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Developers;

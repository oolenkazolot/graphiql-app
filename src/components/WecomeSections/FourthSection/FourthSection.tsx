import './FourthSection.scss';
import { ReactSVG } from 'react-svg';
import server from '../../../assets/svg/server.svg';
import phone from '../../../assets/svg/phone.svg';
import { useTranslation } from 'react-i18next';

function FourthSection() {
  const { t } = useTranslation();
  return (
    <section className="fourth-section">
      <div className="fourth-section__wrapper">
        <div className="fourth-section__block1">
          <h2 className="fourth-section__h2">
            {t("section4.title1")} <br />
            {t("section4.title2")}
          </h2>
          <p className="fourth-section__p">
          {t("section4.text")}
          </p>
        </div>
        <div className="fourth-section__block2">
          <ReactSVG src={server} className="fourth-section__server" />
          <div className="fourth-section__code-wrap">
            <pre className="fourth-section__request">
              {'{'}
              {'\n    '}
              hero {'{'}
              {'\n    '}
              name
              {'\n    '}
              friends {'{'}
              {'\n        '}
              name
              {'\n        '}
              {'}'}
              {'\n    '}
              {'}'}
              {'\n'}
              {'}'}
            </pre>
            <pre className="fourth-section__response">
              {'{'}
              {'\n    '}
              <span className="blue-code">"hero"</span>
              <span>: {'{'}</span>
              {'\n      '}
              <span className="blue-code">"name"</span>
              <span>:</span> <span className="pink-code">"Luke Skywalker"</span>
              <span>,</span>
              {'\n      '}
              <span className="blue-code">"friends"</span>
              <span>: {'['}</span>
              {'\n        '}
              {'{'} <span className="blue-code">"name"</span>
              <span>:</span> <span className="pink-code">"Obi-Wan Kenobi"</span> {'}, '}
              {'\n        '}
              {'{'} <span className="blue-code">"name"</span>
              <span>:</span> <span className="pink-code">"R2-D2"</span> {'}, '}
              {'\n        '}
              {'{'} <span className="blue-code">"name"</span>
              <span>:</span> <span className="pink-code">"Han Solo"</span> {'}, '}
              {'\n        '}
              {'{'} <span className="blue-code">"name"</span>
              <span>:</span> <span className="pink-code">"Leia Organa"</span> {'}, '}
              {'\n      '}
              {']'}
              {'\n    '}
              {'}'}
              {'\n'}
              {'}'}
            </pre>
          </div>
          <ReactSVG src={phone} className="fourth-section__phone" />
        </div>
      </div>
    </section>
  );
}

export default FourthSection;

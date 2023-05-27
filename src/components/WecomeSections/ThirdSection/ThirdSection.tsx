import './ThirdSection.scss';
import { useTranslation } from 'react-i18next';

function ThirdSection() {
  const { t } = useTranslation();

  return (
    <section className="third-section">
      <div className="third-section__wrapper">
        <div className="third-section__block1">
          <h2 className="third-section__h2">{t('section3.title1')}</h2>
          <p className="third-section__text">{t('section3.text1')}</p>
        </div>
        <div className="third-section__block2">
          <h2 className="third-section__h2">{t('section3.title2')}</h2>
          <p className="third-section__text">{t('section3.text2')}</p>
        </div>
      </div>
    </section>
  );
}

export default ThirdSection;

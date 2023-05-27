import './FifthSection.scss';
import { useTranslation } from 'react-i18next';

function FifthSection() {
  const { t } = useTranslation();

  return (
    <section className="fifth-section">
      <div className="fifth-section__wrapper">
        <div className="fifth-section__block1">
          <h2 className="fifth-section__h2">{t('section5.title1')}</h2>
          <p className="fifth-section__p">{t('section5.text1')}</p>
        </div>
        <div className="fifth-section__block2">
          <h2 className="fifth-section__h2">{t('section5.title2')}</h2>
          <p className="fifth-section__p">{t('section5.text2')}</p>
        </div>
      </div>
    </section>
  );
}

export default FifthSection;

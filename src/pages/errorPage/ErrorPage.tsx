import './errorPage.scss';
import { useTranslation } from 'react-i18next';

const ErrorPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="error-page">
      <div className="error-page__info">
        <h1 className="error-page__title">404</h1>
        <p className="error-page__text">{t("404")}</p>
      </div>
    </div>
  );
};

export default ErrorPage;

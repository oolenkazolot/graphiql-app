import './errorPage.scss';

const ErrorPage: React.FC = () => {
  return(
    <div className="error-page">
      <div className="error-page__info">
        <h1 className="error-page__title">404</h1>
        <p className="error-page__text">Page not found</p>
      </div>
    </div>
  )
}

export default ErrorPage;

import './signInPage.scss';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { auth, logInWithEmailAndPassword } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { setAuthorized } from '../../slices/authSlice';
import { useTranslation } from 'react-i18next';

interface SignInValues {
  email: string;
  password: string;
}

const SignInPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInValues>();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [signInError, setSignInError] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    if (user) {
      navigate('/Main');
      dispatch(setAuthorized(true));
    }
  });

  const handleFormSubmit = async (data: SignInValues) => {
    const { email, password } = data;

    try {
      setSignInError('');
      setLoading(true);
      await logInWithEmailAndPassword(email, password);
    } catch {
      setSignInError(`${t('signIn.error')}`);
    }

    setLoading(false);
  };

  return (
    <div className="sign-in">
      <form className="sign-in-form" onSubmit={handleSubmit(handleFormSubmit)}>
        <h1 className="sign-in-form__title">{t('signIn.signIn')}</h1>
        {signInError && <div className="response-error">{signInError}</div>}
        <div className="sign-in-form__email-info">
          <label htmlFor="user-email">{t('signIn.e-mail')}</label>
          <input
            type="email"
            id="user-email"
            {...register('email', { required: `${t('signIn.required')}` })}
            placeholder={t('signIn.e-mail-pl') || ''}
          />
          {errors.email?.type === 'required' && (
            <span className="error-message">{errors.email.message}</span>
          )}
        </div>
        <div className="sign-in-form__password-info">
          <label htmlFor="user-pass">{t('signIn.password')}</label>
          <input
            type="password"
            id="user-pass"
            {...register('password', { required: `${t('signIn.required')}` })}
            placeholder={t('signIn.password-pl') || ''}
          />
          {errors.password?.type === 'required' && (
            <span className="error-message">{errors.password.message}</span>
          )}
        </div>
        <button className="button-auth button-auth_sign-in" disabled={loading}>
          {t('signIn.signIn')}
        </button>
        <div className="sign-in-form__redirect">
          <span className="sign-in-form__text">{t('signIn.text')}</span>
          <Link to="/SignUp" className="sign-in-form__link">
            {t('signIn.signUp')}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;

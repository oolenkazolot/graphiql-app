import './signUpPage.scss';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth, registerWithEmailAndPassword } from '../../firebase';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { setAuthorized } from '../../slices/authSlice';
import { useTranslation } from 'react-i18next';

interface SignUpValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpValues>();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    if (user) {
      navigate('/Main');
      dispatch(setAuthorized(true));
    }
  });

  const handleFormSubmit = async (data: SignUpValues) => {
    const { email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      return setAuthError(`${t("signUp.mismatch")}`);
    }

    try {
      setAuthError('');
      setAuthLoading(true);
      await registerWithEmailAndPassword(email, password);
    } catch {
      setAuthError(`${t("signUp.error")}`);
    }

    setAuthLoading(false);
  };

  const validatePassword = (password: string): boolean => {
    const passRegex = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$');
    const valid = passRegex.test(password);
    return valid;
  };

  return (
    <div className="sign-up">
      <form className="sign-up-form" onSubmit={handleSubmit(handleFormSubmit)}>
        <h1 className="sign-up-form__title">{t("signUp.signUp")}</h1>
        {authError && <div className="response-error">{authError}</div>}
        <div className="sign-up-form__email-info">
          <label htmlFor="user-email">{t("signUp.e-mail")}</label>
          <input
            type="email"
            id="user-email"
            {...register('email', { required: `${t("signUp.required")}` })}
            placeholder={t("signUp.e-mail-pl") || ""}
          />
          {errors.email?.type === 'required' && (
            <span className="error-message">{errors.email.message}</span>
          )}
        </div>
        <div className="sign-up-form__password-info">
          <label htmlFor="user-pass">{t("signUp.password")}</label>
          <input
            type="password"
            id="user-pass"
            {...register('password', {
              required: `${t("signUp.required")}`,
              minLength: 8,
              validate: (value) => validatePassword(value),
            })}
            placeholder={t("signUp.password-pl") || ""}
          />
          {errors.password?.type === 'required' && (
            <span className="error-message">{errors.password.message}</span>
          )}
          {errors.password?.type === 'minLength' && (
            <span className="error-message">{t("signUp.error-pswd")}</span>
          )}
          {errors.password?.type === 'validate' && (
            <span className="error-message">
             {t("signUp.error-pswd2")}
            </span>
          )}
        </div>
        <div className="sign-up-form__confirm-password-info">
          <label htmlFor="user-confirm-pass">{t("signUp.confirm")}</label>
          <input
            type="password"
            id="user-confirm-pass"
            {...register('confirmPassword', {
              required: `${t("signUp.required")}`,
              minLength: 8,
            })}
            placeholder={t("signUp.confirm-pl") || ""}
          />
          {errors.confirmPassword?.type === 'required' && (
            <span className="error-message">{errors.confirmPassword.message}</span>
          )}
          {errors.confirmPassword?.type === 'minLength' && (
            <span className="error-message">{t("signUp.error-pswd")}</span>
          )}
        </div>
        <button className="button-auth button-auth_sign-up" disabled={authLoading}>
        {t("signUp.submit")}
        </button>
        <div className="sign-up-form__redirect">
          <span className="sign-up-form__text">{t("signUp.text")}</span>
          <Link to="/SignIn" className="sign-up-form__link">
          {t("signIn.signIn")}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;

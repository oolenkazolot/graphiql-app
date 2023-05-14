import './signUpPage.scss';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth, registerWithEmailAndPassword, setToken } from '../../firebase';
import { useEffect, useState } from 'react';

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

  useEffect( () => {
    if (user) {
      navigate('/Main');
      setToken(user);
    }
  }, [user]);

  const handleFormSubmit = async (data: SignUpValues) => {
    console.log(data);
    const { email, password, confirmPassword } = data;

    if(password !== confirmPassword) {
      return setAuthError(`Passwords don't match`);
    } 

    try {
      setAuthError('');
      setAuthLoading(true);
      await registerWithEmailAndPassword(email, password);
    } catch {
      setAuthError('Failed to create an account. This email is already in use.');
    }

    setAuthLoading(false);
  };

  return (
    <div className="sign-up">
      <form className="sign-up-form" onSubmit={handleSubmit(handleFormSubmit)}>
        <h1 className="sign-up-form__title">Sign Up</h1>
        {authError && <div className="response-error">{authError}</div>}
        <div className="sign-up-form__email-info">
          <label htmlFor="user-email">E-mail</label>
          <input
            type="email"
            id="user-email"
            {...register('email', { required: 'This field is mandatory for registration' })}
            placeholder="Please enter your e-mail"
          />
          {errors.email?.type === 'required' && (
            <span className="error-message">{errors.email.message}</span>
          )}
        </div>
        <div className="sign-up-form__password-info">
          <label htmlFor="user-pass">Password</label>
          <input
            type="password"
            id="user-pass"
            {...register('password', { required: 'This field is mandatory for registration',  minLength: 6 })}
            placeholder="Please enter your password"
          />
          {errors.password?.type === 'required' && (
            <span className="error-message">{errors.password.message}</span>
          )}
          {errors.password?.type === 'minLength' && (
            <span className="error-message">Your password should be at least 6 symbols</span>
          )}
        </div>
        <div className="sign-up-form__confirm-password-info">
          <label htmlFor="user-confirm-pass">Confirm password</label>
          <input
            type="password"
            id="user-confirm-pass"
            {...register('confirmPassword', { required: 'This field is mandatory for registration',  minLength: 6})}
            placeholder="Please repeat your password"
          />
          {errors.confirmPassword?.type === 'required' && (
            <span className="error-message">{errors.confirmPassword.message}</span>
          )}
          {errors.confirmPassword?.type === 'minLength' && (
            <span className="error-message">Your password should be at least 6 symbols</span>
          )}
        </div>
        <button className="button-auth button-auth_sign-up" disabled={authLoading}>Submit</button>
        <div className="sign-up-form__redirect">
          <span className="sign-up-form__text">Already have an account?</span>
          <Link to="/SignIn" className="sign-up-form__link">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;

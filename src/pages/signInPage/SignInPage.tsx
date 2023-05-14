import './signInPage.scss';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { auth, logInWithEmailAndPassword, setToken } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useState } from 'react';

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

  useEffect(() => {
    if (user) {
      navigate('/Main');
      setToken(user);
    }
  });

  const handleFormSubmit = async (data: SignInValues) => {
    const { email, password } = data;

    try {
      setSignInError('');
      setLoading(true);
      await logInWithEmailAndPassword(email, password);
    } catch {
      setSignInError('Failed to sign in with current credentials');
    }

    setLoading(false);
  };

  return (
    <div className="sign-in">
      <form className="sign-in-form" onSubmit={handleSubmit(handleFormSubmit)}>
        <h1 className="sign-in-form__title">Sign In</h1>
        {signInError && <div className="response-error">{signInError}</div>}
        <div className="sign-in-form__email-info">
          <label htmlFor="user-email">E-mail</label>
          <input
            type="email"
            id="user-email"
            {...register('email', { required: 'This field is mandatory for signing in' })}
            placeholder="Please enter your e-mail"
          />
          {errors.email?.type === 'required' && (
            <span className="error-message">{errors.email.message}</span>
          )}
        </div>
        <div className="sign-in-form__password-info">
          <label htmlFor="user-pass">Password</label>
          <input
            type="password"
            id="user-pass"
            {...register('password', { required: 'This field is mandatory for signing in' })}
            placeholder="Please enter your password"
          />
          {errors.password?.type === 'required' && (
            <span className="error-message">{errors.password.message}</span>
          )}
        </div>
        <button className="button-auth button-auth_sign-in" disabled={loading}>
          Sign In
        </button>
        <div className="sign-in-form__redirect">
          <span className="sign-in-form__text">Do not have an account yet?</span>
          <Link to="/SignUp" className="sign-in-form__link">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;

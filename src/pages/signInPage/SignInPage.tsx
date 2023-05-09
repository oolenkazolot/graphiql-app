import './signInPage.scss';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { auth, logInWithEmailAndPassword } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';

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
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/Main');
  }, [user, loading]);

  const handleFormSubmit = (data: SignInValues) => {
    console.log(data);
    const { email, password } = data;
    logInWithEmailAndPassword(email, password);
  };

  return (
    <div className="sign-in">
      <form className="sign-in-form" onSubmit={handleSubmit(handleFormSubmit)}>
        <h1 className="sign-in-form__title">Sign In</h1>
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
        <button className="button-auth button-auth_sign-in">Sign In</button>
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

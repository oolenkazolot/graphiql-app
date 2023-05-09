import './signUpPage.scss';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth, registerWithEmailAndPassword } from '../../firebase';
import { useEffect } from 'react';

interface SignUpValues {
  email: string;
  password: string;
}

const SignUpPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpValues>();
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/Main');
  }, [user, loading]);

  const handleFormSubmit = (data: SignUpValues) => {
    console.log(data);
    const { email, password } = data;
    registerWithEmailAndPassword(email, password);
  };

  return (
    <div className="sign-up">
      <form className="sign-up-form" onSubmit={handleSubmit(handleFormSubmit)}>
        <h1 className="sign-up-form__title">Sign Up</h1>
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
            {...register('password', { required: 'This field is mandatory for registration' })}
            placeholder="Please enter your password"
          />
          {errors.password?.type === 'required' && (
            <span className="error-message">{errors.password.message}</span>
          )}
        </div>
        <button className="button-auth button-auth_sign-up">Submit</button>
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

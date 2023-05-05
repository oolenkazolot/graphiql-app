import { Link } from 'react-router-dom';
import './signUpPage.scss';
import { useForm } from 'react-hook-form';

interface FormValues {
  email: string;
  password: string;
}

const SignUpPage: React.FC = () => {
  const {register, handleSubmit, formState: { errors }} = useForm<FormValues>();

  const handleFormSubmit = (data: FormValues)=> {
    console.log(data);
  }

  return (
    <div className="sign-up">
      <form className="sign-up-form" onSubmit={handleSubmit(handleFormSubmit)}>
        <h1 className="sign-up-form__title">Sign Up</h1>
        <div className="sign-up-form__email-info">
          <label htmlFor="user-email">E-mail</label>
          <input type="email" id="user-email" {...register("email", { required: "This field is mandatory for registration" })} placeholder="Please enter your e-mail"/>
          {errors.email?.type === "required" && <span className="error-message">{errors.email.message}</span>}
        </div>
        <div className="sign-up-form__password-info">
          <label htmlFor="user-pass">Password</label>
          <input type="password" id="user-pass" {...register("password", { required: "This field is mandatory for registration" })} placeholder="Please enter your password"/>
          {errors.password?.type === "required" && <span className="error-message">{errors.password.message}</span>}
        </div>
        <button className="button button_sign-up">Submit</button>
        <div className="sign-up-form__redirect">
          <span className="sign-up-form__text">Already have an account?</span>
          <Link to="/SignIn" className="sign-up-form__link">Sign In</Link>
        </div>
      </form>
    </div>
  );
}

export default SignUpPage;
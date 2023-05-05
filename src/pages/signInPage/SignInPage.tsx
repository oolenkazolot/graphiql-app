import { Link } from 'react-router-dom';
import './signInPage.scss'

const SignInPage : React.FC = () => {
  return (
    <div className="sign-in">
      <form className="sign-in-form">
        <h1 className="sign-in-form__title">Sign In</h1>
        <div className="sign-in-form__email-info">
          <label htmlFor="user-email">E-mail</label>
          <input type="email" name="email" id="user-email" placeholder="Please enter registered e-mail"/>
        </div>
        <div className="sign-in-form__password-info">
          <label htmlFor="user-pass">Password</label>
          <input type="password" name="password" id="user-pass" placeholder="Please enter your password"/>
        </div>
        <button className="button button_sign-in">Sign In</button>
        <div className="sign-in-form__redirect">
          <span className="sign-in-form__text">Do not have an account yet?</span>
          <Link to="/SignUp" className="sign-in-form__link">Sign Up</Link>
        </div>
      </form>
    </div>
  );
}

export default SignInPage;
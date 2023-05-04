import './signUpPage.scss';

const SignUpPage: React.FC = () => {
  return (
    <div className="sign-up">
      <form className="sign-up-form">
        <h1 className="sign-up-form__title">Sign Up</h1>
        <div className="sign-up-form__email-info">
          <label htmlFor="user-email">E-mail</label>
          <input type="email" name="email" id="user-email" placeholder="Please enter your e-mail"/>
        </div>
        <div className="sign-up-form__password-info">
          <label htmlFor="user-pass">Password</label>
          <input type="password" name="password" id="user-pass" placeholder="Please enter your password"/>
        </div>
        <button className="button button_sign-up">Submit</button>
      </form>
    </div>
  );
}

export default SignUpPage;
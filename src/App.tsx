import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage';
import ErrorPage from './pages/errorPage/ErrorPage';
import SignInPage from './pages/signInPage/SignInPage';
import SignUpPage from './pages/signUpPage/SignUpPage';
import WelcomePage from './pages/welcomePage/WelcomePage';
import Header from './components/header/Header';
import './index.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/SignIn" element={<SignInPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/Main" element={<MainPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;

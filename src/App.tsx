import { Routes, Route} from 'react-router-dom';
import MainPage from './pages/MainPage';
import ErrorPage from './pages/ErrorPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import WelcomePage from './pages/WelcomePage';
import Header from './components/header/Header';

function App() {
  return (
    <div>
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

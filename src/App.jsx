import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Who_we_serve from './pages/Who_we_serve';
import ResourcePage from './pages/ResourcePage';
import PricingPage from './pages/PricingPage';
import Login from './components/auth/Login';
import SignUp from './components/auth/Signup';
import { useAuth } from './components/auth/context/AuthContext';
import Success from './components/Pricing/Success';
import Cancel from './components/Pricing/Cancel';
import PaymentPage from './components/Pricing/PaymentPage';
import NotFound from './components/NotFound';
import User from './components/features/user/User';
import UserCard from './components/features/user/UserCard';
import OurAdvantage from './components/OurAdvantage';

const App = () => {
  const location = useLocation();
  const auth = useAuth();

  const isLoginOrSignup = () => {
    return location.pathname === '/login' || location.pathname === '/signup';
  };

  return (
    <>
      {!isLoginOrSignup() && <Header />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/who-we-serve" element={<Who_we_serve />} />
        <Route exact path="/resource" element={<ResourcePage />} />
        <Route exact path="/pricing" element={<PricingPage />} />
        <Route exact path="/aur-advantages" element={<OurAdvantage />} />
        <Route exact path="/payment/:index" element={<PaymentPage />} />
        <Route exact path="/success" element={<Success />} />
        <Route exact path="/cancel" element={<Cancel />} />
        <Route exact path="/user/profile" element={<User />} />
        <Route exact path="/users" element={<UserCard />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

      {!isLoginOrSignup() && <Footer />}
    </>
  );
};

export default App;

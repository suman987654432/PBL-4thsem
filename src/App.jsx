import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

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
import Shivam from './components/Shivam';
import Success from './components/Pricing/Success';
import Cancel from './components/Pricing/Cancel';
import PaymentPage from './components/Pricing/PaymentPage';

const App = () => {
 const location = useLocation();
 const auth = useAuth();

 // Function to check if the current route is for login or signup
 const isLoginOrSignup = () => {
    return location.pathname === '/login' || location.pathname === '/signup';
 };

 return (
    <>
      {!isLoginOrSignup() && <Header />}
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/who-we-serve" element={<Who_we_serve />} />
        <Route exact path="/resource" element={<ResourcePage />} />
        <Route exact path="/pricing" element={<PricingPage />} />
        <Route exact path="/shivam" element={<Shivam />} />
        <Route exact path="/payment/:index" element={<PaymentPage />} />
        <Route exact path="/success" element={<Success />} />
        <Route exact path="/cancel" element={<Cancel />} />
      </Routes>
      {!isLoginOrSignup() && <Footer />}
    </>
 );
};

export default App;

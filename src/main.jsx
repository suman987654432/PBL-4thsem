import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from './components/auth/context/AuthContext.jsx';
import { Toaster } from "react-hot-toast";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000/api/v1";
axios.defaults.withCredentials = true;


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Toaster position="top-right" />
        <App />
      </Router>
    </AuthProvider>
  </React.StrictMode>,
)

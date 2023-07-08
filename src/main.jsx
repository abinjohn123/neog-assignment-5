import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { makeServer } from './server';

import App from './App.jsx';
import './index.scss';

import AppProvider from './context/AppContext';
import AuthProvider from './context/AuthContext';
import CustomSnackbarProvider from './Components/Shared/CustomSnackbar';

// Call make Server
makeServer();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomSnackbarProvider>
      <AuthProvider>
        <AppProvider>
          <Router>
            <App />
          </Router>
        </AppProvider>
      </AuthProvider>
    </CustomSnackbarProvider>
  </React.StrictMode>
);

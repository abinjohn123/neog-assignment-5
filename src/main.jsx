import React from 'react';
import ReactDOM from 'react-dom/client';

import { makeServer } from './server';
import App from './App.jsx';
import './index.scss';

// Call make Server
makeServer();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

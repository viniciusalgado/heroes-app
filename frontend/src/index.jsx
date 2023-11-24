import React from 'react';
import ReactDOM from 'react-dom/client'; // Importing from 'react-dom/client'
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

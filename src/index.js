import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyUhA6KQDvRFYKhJwxxh15DyYlPmwNzfQ",
  authDomain: "ecommerce-christian-marchi.firebaseapp.com",
  projectId: "ecommerce-christian-marchi",
  storageBucket: "ecommerce-christian-marchi.appspot.com",
  messagingSenderId: "231813470828",
  appId: "1:231813470828:web:2bf7840076e402733ed649"
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

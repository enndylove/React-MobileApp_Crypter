import React from 'react';
import ReactDOM from 'react-dom/client';
import './bootstrap.min.css';
import './reset.css';
import './index.css';


import Header from './components/main/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
  </React.StrictMode>
);

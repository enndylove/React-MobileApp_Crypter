import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from 'react';
import './fonts.css'
import './bootstrap.min.css';
import './reset.css';
import './index.css';

import Preloader from './components/main/Preloader';
import HomePage from './components/main/pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Suspense fallback={<Preloader />}> <HomePage/> </Suspense>}  />
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/Index.css';
import App from './App';
import Layout from './pages/layout.js';
import Kontakt from './pages/kontakt.js';
import Impressum from './pages/impressum.js';
import Datenschutz from './pages/datenschutz.js';
import NoPage from './pages/nopage.js';

const Beratung = React.lazy(() => import('./pages/beratung.js'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Beratung />} />
          <Route path="beratung" element={<Beratung />} />
          <Route path="kontakt" element={<Kontakt />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
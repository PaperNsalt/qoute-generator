import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import QuotesPage from './pages/QuotesPage';
import FavoritePage from './pages/FavotitePage';
import ContactPage from './pages/ContactPage';

import Footer from './components/Footer';
function App() {

  return (
    <>
    <Router>
      <Navbar />

      <Routes>
        <Route path="/qoute-generator" element={<HomePage />} />
        <Route path="/qoutes" element={<QuotesPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>

<Footer></Footer>
    </>
  )
}

export default App

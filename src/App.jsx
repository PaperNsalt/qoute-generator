import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import QoutesPage from './pages/QoutesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
function App() {

  return (
    <>
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/qoutes" element={<QoutesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App

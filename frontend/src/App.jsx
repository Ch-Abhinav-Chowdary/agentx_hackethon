import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import DomainsPage from './pages/DomainsPage';

function App() {
  return (
    <Router>
      <div className="app-container relative w-full h-full">
        <Background />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/domains" element={<DomainsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import DomainsPage from './pages/DomainsPage';
import SchedulePage from './pages/SchedulePage';
import FAQ from './components/FAQ';

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
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

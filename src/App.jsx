import React, { useState, useEffect } from 'react';
import './index.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import MainHeader from './components/MainHeader';
import data from './data';
import Spinner from './components/Spinner';

const App = () => {
 const info=data;
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  // Detect navigation change and show the spinner
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false); // Stop showing spinner after the page has "loaded"
    }, 500); // Simulate a delay

    return () => clearTimeout(timer); // Cleanup on unmount or navigation
  }, [location]);

  return (
    <div className="">
      <Navbar />
      {loading && <Spinner />}
      <Routes>
        <Route path="/" element={<MainHeader />}>
          <Route path="/" index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Portfolio" element={<Portfolio info={info} />} />
          <Route path="/Blog" element={<Blog />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
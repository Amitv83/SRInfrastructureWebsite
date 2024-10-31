import React from 'react';

import './App.css'
import './index.css';
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx';
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/AboutUs.jsx'
import ContactPage from './pages/ContactUs.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/About" element={<AboutPage/>}/> 
      <Route path="/Contact" element={<ContactPage/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;

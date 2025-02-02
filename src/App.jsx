import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Project from './components/Project';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="react-portfolio">
      <Header />
      <Project />
      <Footer />
      <Outlet />
    </div>
  );
}

export default App;

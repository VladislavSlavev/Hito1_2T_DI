import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Contacto from './pages/contacto';
import About from './pages/about';

function App() {
  return (
      <div className='container mt-4'>

          <Routes>
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/about' element={<About />} />
          </Routes>

      </div>
  );
}

export default App;

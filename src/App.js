
import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Menu from './Menu.js';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import SignUp from './Signup.js';
import Login from './Login.js';

function App() {
    return (
      <div className='app'>
      <ToastContainer theme='colored'></ToastContainer>
      <BrowserRouter>
        <div>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </div>
      </BrowserRouter>

      </div>
    );
}

export default App;

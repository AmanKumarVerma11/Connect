import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/home';
import About from './Pages/about';
import Contact from './Pages/contact';
import SForm from './Components/studentForm';
import TForm from './Components/teacherForm';
import Login from './Components/loginForm';

function App() {
  return (
    
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/sform" element={<SForm />} />
    <Route path="/tform" element={<TForm />} />
    <Route path="/login" element={<Login />} />
    </Routes>
    
  );
}

export default App;
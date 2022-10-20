import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';

const App = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
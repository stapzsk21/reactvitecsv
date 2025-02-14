import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { APP_CONSTANTS } from './constants/site.config';

import Footer from './components/Footer';
import Nav from './components/Nav';
import Header from './components/layouts/mixins/Header';

import Index from './pages/Index';
import Contacts from './pages/Contacts';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';

import { TranslationProvider } from "./components/functions/translate/TranslationContext";
import { BurgerProvider } from './context/BurgerContext';

function App() {
  return (
    <TranslationProvider initialLanguage={APP_CONSTANTS.languages.default}>
      <BurgerProvider>
        <Router>
          <Nav />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </BurgerProvider>
    </TranslationProvider>
  );
}

export default App;


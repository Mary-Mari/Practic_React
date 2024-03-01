import React from 'react';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';

import Works from "./components/works/Works";
import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Footer from "./components/footer/Footer";



  
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Promo />} />
          <Route path="/works" element={<Works />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


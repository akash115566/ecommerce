import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Slide from "./Pages/Slide";
import SeasonalProducts from "./Pages/SeasonalProducts";
import MostLovedRituals from "./Pages/MostLovedRituals";
import JustIn from "./Pages/JustIn";
import RecentAwards from "./Pages/RecentAwards";
import Footer from "./Components/Footer";





const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seasonal" element={<SeasonalProducts />} />
        <Route path="/most-loved-rituals" element={<MostLovedRituals />} />
        <Route path="/just-in" element={<JustIn />} />
        <Route path="/recent-awards" element={<RecentAwards />} />
        
      
      
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

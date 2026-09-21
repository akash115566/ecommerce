import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CartDrawer from "./Components/CartDrawer";

import Home from "./Pages/Home";
import SeasonalProducts from "./Pages/SeasonalProducts";
import MostLovedRituals from "./Pages/MostLovedRituals";
import JustIn from "./Pages/JustIn";
import RecentAwards from "./Pages/RecentAwards";
import ProductDetails from "./Pages/ProductDetails";
import Checkout from "./Pages/Checkout";
import Payment from "./Pages/Payment";
import LatestReads from "./Pages/LatestReads";
import ForbesArticle from "./Pages/ForbesArticle";
import Reviews from "./Pages/Reviews";
import OurStory from "./Pages/OurStory";
import AboutUs from "./Pages/AboutUs";
import Blog from "./Pages/Blog";
import WhySkinCare from "./Pages/WhySkinCare";
import SeaBuckthornBlog from "./Pages/SeaBuckthornBlog";
import GreenTeaBlog from "./Pages/GreenTeaBlog";
import GoldCharcoalSoap from "./Pages/GoldCharcoalSoap";


import {
  CartProvider,
  useCart,
} from "./Context/CartContext";



const AppContent = () => {

  const {
    cartOpen,
    setCartOpen,
  } = useCart();

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/seasonal"
          element={<SeasonalProducts />}
        />

        <Route
          path="/most-loved-rituals"
          element={<MostLovedRituals />}
        />

        <Route
          path="/just-in"
          element={<JustIn />}
        />

        <Route
          path="/recent-awards"
          element={<RecentAwards />}
        />

        <Route
          path="/product-details"
          element={<ProductDetails />}
        />

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/latest-reads" element={<LatestReads />} />
        <Route path="/forbes-article" element={<ForbesArticle />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/why-skin-care" element={<WhySkinCare />} />
        <Route path="/sea-buckthorn-blog" element={<SeaBuckthornBlog />} />
        <Route path="/green-tea-blog" element={<GreenTeaBlog />} />
        <Route path="/gold-charcoal-soap" element={<GoldCharcoalSoap />} />
      </Routes>


      {/* CART DRAWER */}

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />




      <Footer />

    </BrowserRouter>
  );
};


function App() {

  return (
    <CartProvider>

      <AppContent />

    </CartProvider>
  );
}

export default App;
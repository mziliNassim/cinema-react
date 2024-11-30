import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/home/Home.jsx";
import Footer from "./components/Footer";
import NotFound from "./components/notFind/NotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element=<Home /> />
          <Route path="*" element=<NotFound /> />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

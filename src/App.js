import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

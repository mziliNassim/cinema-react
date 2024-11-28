import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";

import Navigation from "./components/Navigation.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes></Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
};

export default App;

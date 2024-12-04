import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/home/Home.jsx";
import Footer from "./components/Footer";
import NotFound from "./components/notFound/NotFound";
import PrivacyPolicy from "./components/privacyPolicy/PrivacyPolicy";
import TermsConditions from "./components/termsConditions/TermsConditions.jsx";

import Register from "./components/user/sign/Register.jsx";
import Login from "./components/user/sign/Login.jsx";
import CardsDetails from "./components/details/CardsDetails.jsx";
import Movies from "./components/movies/Cards.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element=<Home /> />
          <Route path="*" element=<NotFound /> />

          <Route path="/movies" element=<Movies type="movie" /> />
          <Route path="/tvshows" element=<Movies type="tvshow" /> />

          <Route path="/movies/movie" element=<CardsDetails /> />
          <Route path="/tvshows/tvshow" element=<CardsDetails /> />

          <Route path="/about">
            <Route path="" element=<NotFound /> />
            <Route path="privacy&policy" element=<PrivacyPolicy /> />
            <Route path="terms&conditions" element=<TermsConditions /> />
          </Route>

          <Route path="/user">
            <Route path="" element=<NotFound /> />
            <Route path="register" element=<Register /> />
            <Route path="login" element=<Login /> />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

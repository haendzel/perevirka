import React, { Component, useEffect, useState } from "react";
// import ReactGA from "react-ga";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";
import Home from "./pages/Home/Home";
import Article from "./pages/Article/Article";
import { StyledSideFrame } from "./components/SideFrame/SideFrame.styled";
import { GlobalStyle } from "./theme/mainTheme";
// import Contact from "./pages/Contact";

function App() {
  const { ready } = useTranslation();

  console.log("i fire once");

  if (ready) {
    return (
      <BrowserRouter>
        <GlobalStyle />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resistance-infrastructures" element={<Article />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    );
  }
}
export default App;

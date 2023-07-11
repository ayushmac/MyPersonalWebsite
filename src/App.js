import { Navibar } from "./Components/NaviBar";
import { Router, useLocation } from "react-router-dom";
import React from "react";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Education from "./Pages/Education";
import Error from "./Pages/Error";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AnimatePresence } from "framer-motion";
import "./Pages/Scrolltotop.css";
function App() {
  const ScrollToTopButton = () => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
      <button className="scroll-to-top" onClick={scrollToTop}>
        <i class="bi bi-arrow-up-circle-fill"></i>
      </button>
    );
  };
  const location = useLocation();
  return (
    <div>
      <Navibar />
      <AnimatePresence initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<About />}></Route>
          <Route path="/home" element={<About />}></Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </AnimatePresence>
      <ScrollToTopButton />
    </div>
  );
}

export default App;

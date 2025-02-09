import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Courses from "./Pages/Courses";
import Admission from "./Pages/Admission";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Admission" element={<Admission />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;

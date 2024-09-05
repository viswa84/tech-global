import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import FirstNavbar from "./Components/FirstNavBar/FirstNavbar";
import Navbar from "./Components/SecondNavbar/SecondNavbar";
import Slideshow from "./Components/Services/Services";
import AboutCompany from "./Components/AboutCompany/AboutCompany";
import Slider from "./Components/Slider/Slider";
import MainPrinciples from "./Components/MainPrinciples/MainPrinciple";
import ServicesSection from "./Components/ServicesSection/ServicesSection";
import HoverGrid from "./Components/HoverGrid/HoverGrid";
import ProcessSection from "./Components/ProcessSection/ProcessSection";
import TestimonialsSlider from "./Components/Testmonials/Testimionial";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div>
          <FirstNavbar />
          <Navbar />
          <Slideshow />
          <AboutCompany />
          <Slider />
          <MainPrinciples />
          <ServicesSection />
          <HoverGrid />
          <ProcessSection />
          <TestimonialsSlider />
          <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/option1" element={<div>Option 1</div>} />
            <Route path="/option2" element={<div>Option 2</div>} />
            <Route path="/about" element={<div>About</div>} />
            <Route path="/contact" element={<div>Contact</div>} />
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;

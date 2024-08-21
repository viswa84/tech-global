import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import FirstNavbar from "./Components/FirstNavBar/FirstNavbar";
import Navbar from "./Components/SecondNavbar/SecondNavbar";
import Slideshow from "./Components/Services/Services";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div>
          <FirstNavbar />
          <Navbar />
          <Slideshow/>
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

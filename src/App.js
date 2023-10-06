import { BrowserRouter } from "react-router-dom";
import Navbar from "./navbar";
import React from "react";
import Home from "./home";
import Projects from './projects'
import Skills from './skills'
import Contact from "./contact";
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Home />
    <Skills />
    <Projects />
    <Contact />
    </BrowserRouter>
    </>
  );
}

export default App;

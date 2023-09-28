import { BrowserRouter } from "react-router-dom";
import Navbar from "./navbar";
import React from "react";
import Home from "./home";
import Projects from './projects'
import Skills from './skills'
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Home />
    <Skills />
    <Projects />
    </BrowserRouter>
    </>
  );
}

export default App;

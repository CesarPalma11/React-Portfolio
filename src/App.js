import { BrowserRouter } from "react-router-dom";
import Navbar from "./navbar";
import React from "react";
import Home from "./home";
import Projects from './projects'
import Skills from './skills'
import Contact from "./contact";
import Rout from "./rout";
function App() {
  return (
    <>
    <BrowserRouter>
    <React.Fragment>
    <Navbar />
    </React.Fragment>
    <Home />
    <Skills />
    <Projects />
    <Contact />
    <Rout />
    </BrowserRouter>
    </>
  );
}

export default App;

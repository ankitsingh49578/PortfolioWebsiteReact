import Navbar from "./components/header/Navbar2";
import Home from "./components/home/Home";
import Education from "./components/education/Education";
import Line from "./components/Line";
import Project from "./components/projects/Project";
import Skills from "./components/skills/Skills";
import Contact from "./components/footer/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";
import "./App.css";
import CustomCursor from "./components/CustomCursor";
import { Particles } from "./components/Particles";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored === "dark";
  });

  useEffect(() => {
    // Update localStorage and document class when theme changes
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.documentElement.className = darkMode ? "dark" : "";
  }, [darkMode]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={darkMode ? "dark relative overflow-hidden" : "relative overflow-hidden"}>
      <Particles
        className="absolute inset-0 z-0"
        quantity={500}
        ease={80}
        color={darkMode ? "#ffffff": "#A020F0"}
        refresh
      />
      <div className="bg-slate-200 h-full dark-theme">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode}></Navbar>
        <div className="ml-0 mr-0 md:ml-20 md:mr-20 overflow-x-hidden md:overflow-x-visible">
          <Home></Home>
          <Line></Line>
          <Education></Education>
          <Line></Line>
          <Project></Project>
          <Line></Line>
          <Skills></Skills>
          <Line></Line>
          <Contact></Contact>
          <Line></Line>
          <Footer></Footer>
          <CustomCursor />
        </div>
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;

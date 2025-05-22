import Navbar from "./components/header/Navbar2"
import Home from "./components/home/Home"
import Education from "./components/education/Education"
import Line from "./components/Line"
import Project from "./components/projects/Project"
import Skills from "./components/skills/Skills"
import Contact from "./components/footer/Contact"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';

function App() {

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, [])

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* <div className="md:p-[16px] bg-gradient-to-r from-green-400 via-[#03c0c6] to-purple-500 -webkit-background-clip: border-box border-transparent min-h-screen min-w-screen"> */}
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
        </div>
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>
      {/* </div> */}
    </div>
  )
}

export default App

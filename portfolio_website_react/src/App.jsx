import Navbar from "./components/header/Navbar"
import Home from "./components/home/Home"
import Education from "./components/education/Education"
import Line from "./components/Line"
import Project from "./components/projects/Project"
import Skills from "./components/skills/Skills"
import Contact from "./components/footer/Contact"
import Footer from "./components/Footer"
import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({duration: 600});
  }, [])

  return (
    <>
      <div className="md:p-[16px] bg-gradient-to-r from-green-400 via-[#03c0c6] to-purple-500 -webkit-background-clip: border-box border-transparent min-h-screen min-w-screen">
        <div className="bg-[#212428] w-full h-full">
          <Navbar></Navbar>
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
        </div>
      </div>
    </>
  )
}

export default App

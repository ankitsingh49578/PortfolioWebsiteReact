import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Line from "./components/Line"
import Project from "./components/Project"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({duration: 900});
  }, [])

  return (
    <>
      <div className="md:p-[16px] bg-gradient-to-r from-green-400 via-[#03c0c6] to-purple-500 -webkit-background-clip: border-box border-transparent min-h-screen min-w-screen">
        <div className="bg-[#212428] w-full h-full">
          <Navbar></Navbar>
          <div className="ml-5 mr-5 md:ml-24 md:mr-24">
            <Home></Home>
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

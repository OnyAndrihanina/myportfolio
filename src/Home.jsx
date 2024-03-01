import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MyServices from "./components/MyServices";
import AboutMe from "./components/AboutMe";
import TsBlock from "./components/TsBlock";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Clients from "./components/Clients";
import Testimonials from "./components/Testimonials.jsx";
import Logos from "./components/Logos.jsx";
import Footer from "./components/Footer.jsx";
import Modal from "./components/Modal.jsx";
import ModalSym from "./components/ModalSym.jsx";
const Home = () => {
  const [language, setLanguage] = useState("fr");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };
  return (
    <>
      <div className="ts-page-wrapper" id="page-top">
        <Navbar onLanguageChange={handleLanguageChange} language={language} />
        <Hero language={language} />
        <main id="ts-content">
          <AboutMe language={language} />
          <Skills language={language} />
          <TsBlock language={language} />
          <MyServices language={language} />
          {/* <Portfolio /> */}
          {/* <Clients /> */}
          {/* <Testimonials /> */}
          {/* <Logos /> */}
        </main>
        <Footer language={language} />
      </div>
      <Modal language={language} />
      <ModalSym language={language} />
    </>
  );
};

export default Home;

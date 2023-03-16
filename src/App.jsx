import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Brand from "./assets/img/brand-logo.png";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import HeroSection from "./components/hero/HeroSection";
import Feature from "./components/feature/Feature";
import Finance from "./components/finance/Finance";
import Footer from "./components/footer/Footer";
import { Close } from "./assets/AppIcons";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />}
      <div className="main-container w-min-screen flex content-center md:justify-center">
        {isOpen && (
          <div className="menu-overlay min-w-full  h-full flex-col  bg-white md:hidden   justify-center items-center fixed top-0 z-[350] ">
            <div className="menu-overlay-close flex justify-end items-center">
              <button
                className="overlay-close bg-transparent border-none absolute top-0"
                onClick={() => setIsOpen(false)}
              >
                <Close />
              </button>
            </div>
            <div className="central-menu   flex-col content-center gap-y-8  text-center absolute top-[50%] left-[25%]">
              <div className="nav-central-menu-items">
                <a
                  href="/"
                  className="menu-link no-underline text-[32px] font-[600] text-gray-800 text-md hover:text-cyan-400 hover:cursor-pointer"
                >
                  Home
                </a>
              </div>
              <div className="nav-central-menu-items">
                <a
                  href="/"
                  className="menu-link no-underline text-[32px] font-[600] text-gray-800 text-md hover:text-cyan-400 hover:cursor-pointer"
                >
                  Our Products
                </a>
              </div>
              <div className="nav-central-menu-items">
                <a
                  href="/"
                  className="menu-link no-underline text-[32px] font-[600] text-gray-800 text-md hover:text-cyan-400 hover:cursor-pointer"
                >
                  About TAPDATA
                </a>
              </div>
            </div>
          </div>
        )}
        <div className="web-container mt-[350px]  flex-col content-center md:mt-[224px]   box-border px-[32px]   md:px-0 w-100 md:w-10/12 h-auto ">
          <HeroSection />
          <Feature />
          <Finance />
          <Footer />
        </div>
        )
      </div>
    </>
  );
}

export default App;

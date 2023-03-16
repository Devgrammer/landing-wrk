import React from 'react'
import Arrow from './../../assets/img/Arrow.png'
import  Star from './../../assets/img/VectorStar.png';
import  Product from './../../assets/img/Dash.png';

const HeroSection = () => {
  return (
    <div
      id="hero"
      className="w-full  mb-[110px] md:mb-[268px] h-screen flex-col-reverse  md: flex  md:flex-row items-center    "
    >
      <div className="img-bg absolute top-[40rem] md:top-60 w-[420px] md:w-[1200px] z-[3]">
        <img src={Arrow} width={"100%"} />
      </div>
      <div className="hero-section-content-container   w-full grid grid-rows-1 md:w-1/2  gap-8 z-[5]">
        <div className="hero-trusted-btn border-2 border-rounded border-cyan-500 text-[18px] font-[400] w-[141px] h-[36px] rounded-full  flex justify-center items-center">
          {" "}
          <div className="flex justify-between  items-center">
            <span className="mr-1">
              <img src={Star} />
            </span>
            Trusted
          </div>
        </div>
        <div className="hero-trusted-heading  text-[44px] leading-[58px] md:text-[80px] font-[600] md:leading-[110px]">
          Data that’s Professional
        </div>
        <div className="hero-trusted-sub-heading text-[20px] font-[400] leading-[30px] text-gray-700">
          If trading is a profession, then your data needs to be professional
          too. Trading as profession presents Data Blaze.
        </div>
        <div className="hero-trusted-hero-btn flex gap-8 ">
          <button className="login-hero w-[220px] h-[60px] bg-transparent border-1 border-gray-800 text-[20px] font-bold">
            LOGIN
          </button>
          <button className="login-hero w-[220px] h-[60px] text-white bg-gradient-to-t from-sky-700 to-sky-400 transparent border-none border-gray-800 text-[20px] font-bold">
            SIGNUP
          </button>
        </div>
      </div>

      <div className="hero-img-content-container flex justify-center  mb-[64px] md:mb-0 w-full md:w-1/2 z-[5]">
        <div className="hero-img-container  w-full md:w-[556px]  drop-shadow-[23px_23px_64px_rgba(0, 0, 0, 0.2)]">
          <img src={Product} className="min-w-full" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection
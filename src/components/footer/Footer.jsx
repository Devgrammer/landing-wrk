import React from 'react'


const Footer =()=>{
    return (
        <section id='footer flex flex-col content-center '>
            <div className="footer-content text-[22px] leading-[33px] md:text-[60px] font-[600] md:leading-[90px] text-center">Your <span className="text-cyan-600">career </span>is waiting ahead</div>
        <div className="footer-content text-[22px] leading-[33px] md:text-[60px] font-[600] md:leading-[90px] text-center">click on the button and <span className="text-cyan-600">get started </span></div>
            <div className="hero-trusted-hero-btn flex  justify-center mt-[51px] ">
          <button className="login-hero flex justify-center items-center w-[220px] h-[60px] text-white bg-gradient-to-t from-sky-700 to-sky-400 transparent border-none border-gray-800 text-[26px] font-[400] leading-[39px]">
            Get Started
          </button>
       
        </div>
        </section>
    )
}

export default Footer;

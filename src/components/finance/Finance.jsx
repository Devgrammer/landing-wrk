import React from 'react'
import  Arrow from './../../assets/img/Arrow.png';
import  Star from './../../assets/img/VectorStar.png';
import  Product from './../../assets/img/Dash.png';

const FinanceSection = () => {
  return (
    <section id="finance" className="w-full  h-auto  mb-[86px] md:mb-[289px] md:flex justify-center items-center  bg-[url('./../../assets/img/Arrow.png')]  bg-cover bg-center bg-no-repeat gap-32  ">
           <div className="finance-img-content-container hidden md:flex justify-start w-full md:w-1/2">
      <div className="finance-img-container  w-full md:w-[556px] drop-shadow-2xl">
        <img src={Product} />
                </div>

      </div>
      <div className="finance-section-content-container  w-full md:w-1/2 grid grid-rows-1 gap-8">
        <div className="finance-trusted-heading text-[32px]   leading-[44px] md:text-[60px] font-[600] md:leading-[80px]">Finance can’t hold you back now.</div>
        <div className="finance-trusted-sub-heading text-[18px] font-[400] leading-[27px] text-gray-700">If finance is your challenge then finance can’t challenge, if you are a part of trading as profession. we are there to support you. To know more about how we can help you.</div>
        <div className="finance-trusted-finance-btn flex gap-8 ">
          <button className="login-finance w-[220px] h-[60px] text-white bg-gradient-to-t from-sky-700 to-sky-400 transparent border-none border-gray-800 text-[20px] font-bold">
            Connect Now
          </button>
        </div>
      </div>


   
    </section>
  )
};

export default FinanceSection;
import React, {useState} from 'react'
import  Brand from "./../../assets/img/brand-logo.png"
import { Close, HamBurger } from './../../assets/AppIcons'
import Star from './../../assets/img/VectorStar.png'

const NavBar = ({isOpen, setIsOpen}) => {

  // const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className="nav-bar-container w-full mx-auto h-[86.4px] z-[100]  bg-white  flex justify-between items-center fixed top-0 p-2 border-b-2 border-gray-200">
    <div className="brand-logo "><img src={ Brand } className="w-[67]" /></div>
    <div className="central-menu  gap-[5rem] hidden md:grid grid-cols-3">         <div className="nav-central-menu-items"><a href="/" className='menu-link no-underline  text-gray-500 text-md hover:text-gray-700 hover:cursor-pointer'>Home</a></div>
        <div className="nav-central-menu-items"><a href="/" className='menu-link no-underline  text-gray-500 text-md hover:text-gray-700 hover:cursor-pointer'>Our Products</a></div>
        <div className="nav-central-menu-items"><a href="/" className='menu-link no-underline  text-gray-500 text-md hover:text-gray-700 hover:cursor-pointer'>About TAPDATA</a></div>     </div>
         <div className="profile-login-console w-1/5 gap-[6px] justify-end float-right items-center hidden md:flex">
             <div className="nav-central-menu-items  "><a href="/" className='menu-link no-underline  text-gray-800  font-regular text-md flex hover:cursor-pointe'>Log in</a> </div>
             <div className="nav-central-menu-items text-center text-2xl text-gray-400">|</div>
             <div className="nav-central-menu-items "><a href="/" className='menu-link no-underline font-regular text-gray-800 text-md  flex hover:cursor-pointer'>Create Account <img src={Star } alt="" className="w-[24px] ml-2 flex h-auto" /></a><img src={ './assets/img/VectorStar.png' } alt="" className="w-[64px] flex h-auto" /></div>
         </div>
          <div className="ham-burger-container md:hidden">
       <button className="ham-burger-btn bg-transparent border-none md:hidden" onClick={()=>setIsOpen(true)}> <HamBurger /></button>
          </div>
          </div>
       {  isOpen && <div className="menu-overlay w-100  h-full bg-white flex   absolute flex-col justify-center z-[20]">
        <div className="menu-overlay-close flex justify-end"><button className="overlay-close bg-transparent border-none" onClick={ () => setIsOpen(false) }><Close/></button></div>
      <div className="central-menu  gap-[5rem] hidden md:grid grid-rows-3 text-center">
              <div className="nav-central-menu-items"><a href="/" className='menu-link no-underline text-[32px] font-[600] text-gray-800 text-md hover:text-cyan-400 hover:cursor-pointer'>Home</a></div>
        <div className="nav-central-menu-items"><a href="/" className='menu-link no-underline text-[32px] font-[600] text-gray-800 text-md hover:text-cyan-400 hover:cursor-pointer'>Our Products</a></div>
        <div className="nav-central-menu-items"><a href="/" className='menu-link no-underline text-[32px] font-[600] text-gray-800 text-md hover:text-cyan-400 hover:cursor-pointer'>About TAPDATA</a></div>
        </div>
          </div>}
          </>
  )
}

export default NavBar
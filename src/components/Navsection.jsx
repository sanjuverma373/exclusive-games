import React from 'react'
import navlogo from '../assets/images/nav-logo.webp'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Commonbtns from './Commonbtns';
import { Btnline } from './Icons';

function Navsection() {
        const [first, setfirst] = useState(false);
        function MobileView() {
                setfirst(!first);
                if (first === false) {
                        document.body.classList.add("overflow-hidden");
                } else {
                        document.body.classList.remove("overflow-hidden");
                }
        }

        { first ? document.body.classList.add("overflow-hidden") : document.body.classList.remove("overflow-hidden") }
        return (
                <div className=' backdrop:blur-[26px] relative z-50 bg-[rgba(255,255,255,0.10)] pt-[24px] pb-[23px]'>
                        <nav className=" max-w-[1140px] px-3 mx-auto w-full">
                                <div className="flex justify-between items-center px-3 ">
                                        <div className=" flex items-center ">
                                                <Link to="/"><img className=" max-w-[209px] h-[42px] cursor-pointer" src={navlogo} alt="#" /></Link>
                                        </div>
                                        <div className="flex items-center">
                                                <ul className={` ${first ? "left-0" : "left-[-100%]"} flex items-center  gap-[28px] duration-300 mobileview2  max-lg:justify-center max-lg:flex-col max-lg:text-white max-lg:w-full max-lg:h-full  max-lg:fixed max-lg:top-0 max-lg:z-20 max-lg:bg-black max-lg:bg-[url(./assets/images/hero-section-bg-img.webp)] bg-no-repeat bg-center bg-cover`}>
                                                        <Link to="/hogar" onClick={() => setfirst(false)} className=' cursor-pointer transition after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0  after:-bottom-2  after:h-[2px] after:bg-white font-Inter text-[16px] font-medium leading-[25px] text-white'>Hogar</Link>
                                                        <Link to="/misión" onClick={() => setfirst(false)} className='cursor-pointer transition after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0 after:-bottom-2 after:h-[2px] after:bg-white font-Inter text-[16px] font-medium leading-[25px] text-white'>Misión</Link>
                                                        <Link to="/tragamonedas" onClick={() => setfirst(false)} className='cursor-pointer transition after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0 after:-bottom-2 after:h-[2px] after:bg-white font-Inter text-[16px] font-medium leading-[25px] text-white'>Tragamonedas</Link>
                                                        <Link to="/elegirnos" onClick={() => setfirst(false)} className='cursor-pointer transition after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0 after:-bottom-2 after:h-[2px] after:bg-white font-Inter text-[16px] font-medium leading-[25px] text-white'>Por qué elegirnos</Link>
                                                        <Link to="/ofertas" onClick={() => setfirst(false)} className='cursor-pointer transition after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0 after:-bottom-2 after:h-[2px] after:bg-white font-Inter text-[16px] font-medium leading-[25px] text-white'>Ofertas</Link>
                                                        <Link className=' duration-300 hover:scale-95 cursor-pointer block lg:hidden relative'>
                                                                <li ><Commonbtns text="Acceso" /></li>
                                                                <span className=' absolute bottom-[-12%] left-[-3%]' href=""><Btnline /></span>
                                                        </Link>
                                                </ul>
                                        </div>
                                        <div className=' duration-300 hover:scale-95 hidden lg:block relative cursor-pointer'>
                                                <div ><Commonbtns  text="Acceso" /></div>
                                                <span className=' absolute bottom-[-12%] left-[-3%]' href=""><Btnline /></span>
                                        </div>


                                        <label className=" lg:hidden" onClick={MobileView}>
                                                {first ? (
                                                        <div className="z-20 relative">
                                                                <span className="flex bg-white absolute -left-7 duration-300 rounded-lg top-1 rotate-45 h-[3px] w-6"></span>
                                                                <span className="flex bg-white absolute -left-7 duration-300 rounded-lg -rotate-45 h-[3px] w-6 mt-1"></span>
                                                        </div>
                                                ) : (
                                                        <div className="z-20 relative">
                                                                <span className="flex bg-white h-[3px] rounded-lg duration-300 w-6"></span>
                                                                <span className="flex bg-white h-[3px] rounded-lg duration-300 w-6 my-1"></span>
                                                                <span className="flex bg-white h-[3px] rounded-lg duration-300 w-6 "></span>
                                                        </div>
                                                )}
                                        </label>
                                </div>

                        </nav>
                </div>
        );
}

export default Navsection;

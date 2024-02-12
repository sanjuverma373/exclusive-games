import React from 'react'
import jackpotimg1 from '../assets/images/jackpot-img1.webp'
import jackpotshadow1 from '../assets/images/jackpot-shadow-1.webp'
import jackpotshadow2 from '../assets/images/jackpot-shadow-2.webp'
import jackpot1 from '../assets/images/jackpot3img-1.webp'
import jackpot2 from '../assets/images/jackpot3img-2.webp'
import jackpot3 from '../assets/images/jackpot3img-3.webp'
import { Right } from './Icons'
import Commonbtns from './Commonbtns';
import { Btnline } from './Icons';

const Jackpotsection = () => {
        return (
                <div className='bg-[url(./assets/images/jackpot-bg-img.webp)] bg-no-repeat bg-center bg-cover relative z-10  overflow-x-clip sm:mt-0 mt-[-120px] '>
                        <div className=' max-w-[1140px] px-3 mx-auto pt-0 sm:pt-[90px] w-full '>
                                <div className=' grid lg:grid-cols-2 gap-6'>
                                        <div className=' flex items-center justify-center lg:items-start lg:justify-start'>
                                                <img className='' src={jackpotimg1} alt="#" />
                                        </div>
                                        <div className=' flex justify-center flex-col'>
                                                <div>
                                                        <h3 className='font-Anton font-normal text-[30px] sm:text-[48px] leading-[35px] sm:leading-[57px] text-center lg:text-start text-white pb-4'>Potenciando sus elecciones</h3>
                                                        <p className=' mx-auto font-Inter font-medium text-[14px] sm:text-[16px] text-[#CDD0D2] text-center lg:text-start leading-[25px] pb-[24px]'>Con Exclusive Game lo mejor está de tu lado.</p>
                                                        <div className=' flex lg:items-center justify-center lg:justify-start gap-2 mb-3'>
                                                                <span>
                                                                        <Right />
                                                                </span>
                                                                <p className='font-Inter text-center lg:text-start font-medium text-[14px] sm:text-[16px] text-[#CDD0D2] leading-[25px]'>Tecnología HTML5</p>
                                                        </div>
                                                        <div className=' flex lg:items-center justify-center lg:justify-start gap-2 mb-3'>
                                                        <span>
                                                                        <Right />
                                                                </span>
                                                                <p className='font-Inter text-center lg:text-start font-medium text-[14px] sm:text-[16px] text-[#CDD0D2] leading-[25px]'>Versión PC y móvil</p>
                                                        </div>
                                                        <div className=' flex lg:items-center justify-center lg:justify-start gap-2 mb-3'>
                                                        <span>
                                                                        <Right />
                                                                </span>
                                                                <p className='font-Inter text-center lg:text-start font-medium text-[14px] sm:text-[16px] text-[#CDD0D2] leading-[25px]'>Control de RTP (controlás qué porcentaje pagar)</p>
                                                        </div>
                                                        <div className=' flex lg:items-center justify-center lg:justify-start gap-2 mb-3'>
                                                        <span>
                                                                        <Right />
                                                                </span>
                                                                <p className='font-Inter text-center lg:text-start font-medium text-[14px] sm:text-[16px] text-[#CDD0D2] leading-[25px] max-w-[412px]'>Bonos editables, happy hours, Jackpots, códigos  promocionales.</p>
                                                        </div>
                                                        <div className=' flex lg:items-center justify-center lg:justify-start gap-2 mb-6'>
                                                        <span>
                                                                        <Right />
                                                                </span>
                                                                <p className='font-Inter text-center lg:text-start font-medium text-[14px] sm:text-[16px] text-[#CDD0D2] leading-[25px]'>Aplicación para android y windows de regalo.</p>
                                                        </div>
                                                        <p className='font-Inter font-medium text-[14px] sm:text-[16px] text-center lg:text-start text-[#CDD0D2] leading-[25px]'>Te reintegramos todo lo invertido en fichas en la moneda que elijas.</p>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div className=' max-w-[1040px] mx-auto px-3 pt-[50px] sm:pt-[80px] md:pt-[150px] pb-[50px] sm:pb-[80px] md:pb-[150px] w-full '>
                                <div className=' w-full min-h-[200px] sm:min-h-[308px] border-[0.5px] border-solid border-white flex items-center justify-center rounded-[16px] z-50 relative '>
                                        <h3 className='font-Anton font-normal text-[30px] sm:text-[48px] leading-[48px] sm:leading-[57px] text-white text-center max-w-[520px] z-10 '>lanza tu propia plataforma en sólo 2 semanas</h3>
                                        <img className=' absolute top-0  left-0' src={jackpotshadow1} alt="#" />
                                        <img className=' absolute bottom-0 right-0' src={jackpotshadow2} alt="#" />
                                </div>
                        </div>
                        <div className=' max-w-[1140px] mx-auto px-3 pb-0 md:pb-[100px] w-full '>
                                <h3 className='font-Anton font-normal text-[30px] sm:text-[48px] leading-[35px] sm:leading-[57px] text-white text-center pb-[60px]'>Juegos en vivo</h3>
                                <div className=' grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                        <div className=' flex items-center justify-center w-full group relative'>
                                                <img className=' w-full' src={jackpot1} alt="#" />
                                                <div className=' absolute group-hover:opacity-100 opacity-0 duration-300 bg-black rounded-[8px] z-20 w-full h-full justify-center items-center flex bg-opacity-80'>
                                                        <div className=' duration-300 hover:scale-95 relative'>
                                                                <button ><Commonbtns text="Reproducir ahora" /></button>
                                                                <a className=' absolute bottom-[-12%] left-[-3%]' href=""><Btnline /></a>
                                                        </div>
                                                </div>

                                        </div>
                                        <div className=' flex items-center justify-center w-full group relative'>
                                                <img className=' w-full' src={jackpot2} alt="#" />
                                                <div className=' absolute group-hover:opacity-100 opacity-0 duration-300 bg-black rounded-[8px] z-20 w-full h-full justify-center items-center flex bg-opacity-80'>
                                                        <div className=' duration-300 hover:scale-95 relative'>
                                                                <button ><Commonbtns text="Reproducir ahora" /></button>
                                                                <a className=' absolute bottom-[-12%] left-[-3%]' href=""><Btnline /></a>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className=' flex items-center justify-center w-full group relative'>
                                                <img className=' w-full' src={jackpot3} alt="#" />
                                                <div className=' absolute group-hover:opacity-100 opacity-0 duration-300 bg-black rounded-[8px] z-20 w-full h-full justify-center items-center flex bg-opacity-80'>
                                                        <div className=' duration-300 hover:scale-95 relative'>
                                                                <button ><Commonbtns text="Reproducir ahora" /></button>
                                                                <a className=' absolute bottom-[-12%] left-[-3%]' href=""><Btnline /></a>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <span className=' w-full max-w-[440px] h-full max-h-[440px] bg-buttonbg flex absolute bottom-[2%] right-[-10%] opacity-50 rounded-full blur-[155px] -z-10 '></span>
                        <span className=' w-full max-w-[440px] h-full max-h-[440px] bg-buttonbg flex absolute top-[-20%] left-[-10%] opacity-50 rounded-full blur-[155px] -z-10 '></span>

                </div>
        )
}

export default Jackpotsection

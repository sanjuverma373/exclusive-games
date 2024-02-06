import React from 'react'
import footerlogo from '../assets/images/footer-logo.webp'
import { Call, Facebook, Inn, Insta, Msg } from './Icons'

const Footersection = () => {
        return (
                <div className=' bg-black relative z-10'>
                        <div className=' max-w-[1140px] px-3 w-full mx-auto pt-[40px] sm:pt-[64px]'>
                                <div className=' grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5'>
                                        <div className='col-span-2'>
                                                <img className=' pb-4' src={footerlogo} alt="#" />
                                                <p className=' max-w-[348px] font-Inter font-medium  text-[14px] sm:text-[16px] leading-[25px] text-[#CCCCCC] pb-6'>En Exclusive Games somos un equipo apasionado de personas dedicadas al desarrollo de multiplataformas para juegos de azar</p>
                                                <div className=' flex items-center gap-3'>
                                                        <span className=' hover:-translate-y-1 cursor-pointer duration-300'><Insta/></span>
                                                        <span className=' hover:-translate-y-1 cursor-pointer duration-300'><Facebook/></span>
                                                        <span className=' hover:-translate-y-1 cursor-pointer duration-300'><Inn/></span>
                                                        
                                                </div>
                                        </div>
                                        <div className='col-span-1 pt-[10px]'>
                                                <ul>
                                                        <li className=' font-Inter font-bold text-[14px] sm:text-[16px] leading-[25px] text-white pb-[16px]'>Menú principal</li>
                                                        <li className='font-Inter font-medium cursor-pointer  text-[14px] sm:text-[16px] leading-[25px] text-[#CCCCCC] pb-3'>Hogar</li>
                                                        <li className='font-Inter font-medium cursor-pointer  text-[14px] sm:text-[16px] leading-[25px] text-[#CCCCCC] pb-3'>Misión</li>
                                                        <li className='font-Inter font-medium cursor-pointer  text-[14px] sm:text-[16px] leading-[25px] text-[#CCCCCC] pb-3'>Tragamonedas</li>
                                                        <li className='font-Inter font-medium cursor-pointer  text-[14px] sm:text-[16px] leading-[25px] text-[#CCCCCC] pb-3'>Por qué elegirnos</li>
                                                        <li className='font-Inter font-medium cursor-pointer  text-[14px] sm:text-[16px] leading-[25px] text-[#CCCCCC] sm:pb-[40px]'>Ofertas</li>                                                        
                                                </ul>
                                        </div>
                                        <div className='col-span-1 pt-[10px]'>
                                                <ul>
                                                        <li className=' font-Inter font-bold text-[14px] sm:text-[16px] leading-[25px] text-white pb-[16px]'>Atención al cliente</li>
                                                        <li className='font-Inter font-medium cursor-pointer text-[14px] sm:text-[16px] leading-[25px] text-[#CCCCCC] pb-3'>¿Necesitas ayuda?</li>
                                                        <li className='font-Inter font-medium cursor-pointer text-[14px] sm:text-[16px] leading-[25px] text-[#CCCCCC] pb-3'>política de privacidad</li>
                                                        <li className='font-Inter font-medium cursor-pointer text-[14px] sm:text-[16px] leading-[25px] text-[#CCCCCC] pb-3'>Términos de servicios</li>                                                       
                                                </ul>
                                        </div>
                                        <div className='col-span-1 pt-[10px]'>
                                                <ul>
                                                        <li className=' font-Inter font-bold text-[14px] sm:text-[16px] leading-[25px] text-white pb-[16px]'>Ponerse en contacto</li>
                                                        <span className=' cursor-pointer flex  gap-[9px]'>
                                                                <a href=""><Msg/></a>
                                                                <li className='font-Inter font-medium text-[14px] sm:text-[16px] leading-[25px] text-[#CCCCCC] pb-3'>juegosexclusivos@gmail.com</li>
                                                        </span>
                                                        <span className=' flex  cursor-pointer gap-[9px]'>
                                                                <a href=""><Call/></a>
                                                                <li className='font-Inter font-medium text-[14px] sm:text-[16px] leading-[25px] text-[#CCCCCC] pb-3'>(101)342-7873</li>
                                                        </span>
                                                      
                                                </ul>
                                        </div>

                                </div>
                        </div>
                                <hr className=' border border-solid border-white opacity-[10%] w-full' />
                                <p className='font-Inter font-medium text-center mx-auto opacity-[50%] text-[16px] leading-[25px] text-[#CCCCCC] py-[20px]'>© Juegos exclusivos - Todos los derechos reservados {new Date().getFullYear()}</p>
                                <span className=' w-full max-w-[180px] h-full max-h-[180px] bg-gradient-to-r from-[#51C8EF] to-[#7AF57A] flex absolute top-[28%] right-0 opacity-50 rounded-full blur-[90px] -z-10 '></span>
                                <span className=' w-full max-w-[170px] h-full max-h-[170px] bg-gradient-to-r from-[#51C8EF] to-[#7AF57A] flex absolute bottom-0 left-0 opacity-50 rounded-full blur-[90px] -z-10 '></span>
                </div>
        )
}

export default Footersection

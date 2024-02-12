import React from 'react'
import spin1img1 from '../assets/images/spin1img-1.webp'
import { Bulbmini, Money, People } from './Icons'

const Nuestras = () => {
        return (
                <div className=' pt-0  md:pt-[100px] pb-[50px] sm:pb-[80px] md:pb-[150px] relative z-10 overflow-x-clip '>
                        <div className=' max-w-[1140px] mx-auto px-3 w-full'>
                                <div className=' grid lg:grid-cols-2 gap-6'>
                                        <div>
                                                <img className='w-full' src={spin1img1} alt="#" />
                                        </div>
                                        <div>
                                                <h3 className='font-Anton text-center lg:text-start font-normal text-[30px] sm:text-[48px] leading-[37px] text-white mb-6 sm:mb-[60px]'>Más razones para elegirnos</h3>
                                                <div className=' border-[0.5px] border-solid border-white px-[20px] sm:px-[56px] rounded-[16px] py-[24px] leading-[57px] max-w-[374px] bg-gradient-to-r !from-[#051D20] !to-[#051D22] mb-6'>
                                                        <div className=' flex items-center gap-[37px]'>
                                                                <Bulbmini />
                                                                <div>
                                                                        <h1 className=' font-Anton font-normal text-[26px] sm:text-[32px] leading-[30px] sm:leading-[41px] text-white'>200</h1>
                                                                        <p className=' font-Inter font-medium text-[14px] sm:text-[16px] leading-[25px] text-white'>Páginas creadas</p>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className=' border-[0.5px] border-solid border-white px-[20px] sm:px-[56px] rounded-[16px] py-[24px] leading-[57px] max-w-[374px] bg-gradient-to-r !from-[#051D20] !to-[#051D22] mb-6'>
                                                        <div className=' flex items-center gap-[37px]'>
                                                                <People />
                                                                <div>
                                                                        <h1 className=' font-Anton font-normal text-[26px] sm:text-[32px] leading-[30px] sm:leading-[41px] text-white'>98% </h1>
                                                                        <p className=' font-Inter font-medium text-[14px] sm:text-[16px] leading-[25px] text-white'>Clientes Satisfecha</p>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className=' border-[0.5px] border-solid border-white px-[20px] sm:px-[56px] rounded-[16px] py-[24px] leading-[57px] max-w-[374px] bg-gradient-to-r !from-[#051D20] !to-[#051D22]'>
                                                        <div className=' flex items-center gap-[37px]'>
                                                                <Money />
                                                                <div>
                                                                        <h1 className=' font-Anton font-normal text-[26px] sm:text-[32px] leading-[30px] sm:leading-[41px] text-white'>200</h1>
                                                                        <p className=' font-Inter font-medium text-[14px] sm:text-[16px] leading-[25px] text-white'>Divisas Disponibles</p>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <span className=' w-full max-w-[440px] h-full max-h-[440px] bg-buttonbg flex absolute top-[-41%] left-[-10%] opacity-50 rounded-full blur-[155px] -z-10 '></span>
                        <span className=' w-full max-w-[484px] h-full max-h-[484px] bg-buttonbg flex absolute bottom-[5%] right-[-10%] opacity-50 rounded-full blur-[155px] -z-10 '></span>

                </div>
        )
}

export default Nuestras

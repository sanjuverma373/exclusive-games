import React from 'react'
import spincrd1img1 from '../assets/images/spin-crd-img-1.webp'
import spinshadow from '../assets/images/spin-shadow.webp'
import spin3img from '../assets/images/spincrd3-img.webp'
import spin4img1 from '../assets/images/spin4img1.webp'
import spin4img2 from '../assets/images/spin4img2.webp'
import spin4img3 from '../assets/images/spin4img3.webp'
import greendoller from '../assets/images/green-doller.webp'
import crdheart from '../assets/images/card-heart.webp'
import crdet from '../assets/images/card-et.webp'
import ludo from '../assets/images/ludo.webp'
import { Right } from './Icons'
import Commonbtns from './Commonbtns';
import { Btnline } from './Icons';

const Spinsection = () => {
        return (
                <div className=' relative '>
                        <div className=' max-w-[1140px] mx-auto px-3'>
                                <h3 className='font-Anton font-normal text-[30px] sm:text-[48px] leading-[35px] sm:leading-[57px] text-white text-center pb-4'>Nuestras ofertas</h3>
                                <p className=' font-Inter font-medium text-[14px] sm:text-[16px] leading-[25px] text-center text-white pb-6 sm:pb-[60px]'>Te ofrecemos las mejores experiencias de juegos para tus clientes.</p>
                                <div className=' bg-[#062025] border-[0.5px] border-[#819192] pt-[57px] pb-[32px] pr-[40px] pl-[47px] rounded-[16px]'>
                                        <div className=' grid lg:grid-cols-2 gap-6'>
                                                <div className=' flex flex-col items-center lg:items-start justify-center lg:justify-start relative'>
                                                        <img className=' relative z-10' src={spincrd1img1} alt="#" />
                                                        <img className='mix-blend-multiply ' src={spinshadow} alt="#" />
                                                        <span className=' w-full max-w-[160px] h-full max-h-[162px] bg-buttonbg flex absolute top-[-6%] left-[5%] opacity-50 rounded-full blur-[50px]'></span>

                                                </div>
                                                <div className=' flex flex-col justify-center lg:justify-start mx-auto'>
                                                        <h3 className=' font-Anton font-normal text-[26px] sm:text-[32px] leading-[41px] text-white pb-4 text-center lg:text-start'>Silver</h3>
                                                        <p className=' font-Inter font-medium text-[14px] sm:text-[16px] leading-[25px] text-[#CDD2D3] max-w-[401px] pb-[32px] text-center lg:text-start mx-auto lg:mx-0'>Diseño predeterminado, atractivo y fácil de navegar, tecnología HTLM5.</p>
                                                        <h3 className='font-Anton font-normal text-[30px] sm:text-[48px] leading-[35px] sm:leading-[57px] text-white pb-4 text-center lg:text-start'>$5000</h3>
                                                        <div className=' flex pb-3 gap-2'>
                                                                <span>
                                                                        <Right />
                                                                </span>
                                                                <p className='  mx-auto lg:mx-0 font-Inter font-medium text-[14px] sm:text-[16px] leading-[25px] text-[#CDD2D3] text-center lg:text-start '>Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales</p>
                                                        </div>
                                                        <div className=' flex pb-3 gap-2'>
                                                                <span>
                                                                        <Right />
                                                                </span>
                                                                <p className=' mx-auto lg:mx-0 lg:text-start text-center font-Inter font-medium text-[14px] sm:text-[16px] leading-[25px] text-[#CDD2D3]'>Control de RTP (controlás qué porcentaje pagar)</p>
                                                        </div>
                                                        <div className=' flex pb-3 gap-2'>
                                                                <span>
                                                                        <Right />
                                                                </span>
                                                                <p className='  mx-auto lg:mx-0 font-Inter lg:text-start text-center font-medium text-[14px] sm:text-[16px] leading-[25px] text-[#CDD2D3]'>Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo</p>
                                                        </div>
                                                        <div className=' flex pb-3 gap-2'>
                                                                <span>
                                                                        <Right />
                                                                </span>
                                                                <p className='  mx-auto lg:mx-0 font-Inter lg:text-start text-center font-medium text-[14px] sm:text-[16px] leading-[25px] text-[#CDD2D3]'>Aplicación para Android y Windows de regalo.</p>
                                                        </div>
                                                        <div className=' flex pb-3 gap-2'>
                                                                <span>
                                                                        <Right />
                                                                </span>
                                                                <p className='  mx-auto lg:mx-0 font-Inter lg:text-start text-center font-medium text-[14px] sm:text-[16px] leading-[25px] text-[#CDD2D3] pb-3'>Tiempo de creación 2 a 3 semanas</p>
                                                        </div>
                                                        <div className=' flex justify-center lg:justify-start'>
                                                                <div className=' duration-300 hover:scale-95 relative'>
                                                                        <button ><Commonbtns text="Comprar ahora" /></button>
                                                                        <a className=' absolute bottom-[-13%] left-[-3%]' href=""><Btnline /></a>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div className='bg-[#062025] border-[0.5px] border-[#819192] rounded-[16px] mt-6 sm:mt-[64px]  py-[46px] bg-[url(./assets/images/spincrd2-bg-img.webp)] bg-no-repeat bg-center bg-cover relative px-3'>
                                        <div className=' flex flex-col justify-center items-center'>
                                                <h3 className=' font-Anton font-normal text-[26px] sm:text-[32px] text-center leading-[41px] text-white pb-4'>Luxury</h3>
                                                <p className=' font-Inter font-medium text-[14px] sm:text-[16px] leading-[25px] text-[#CDD2D3] max-w-[401px] pb-[32px] text-center mx-auto'>lleva tu experiencia de juego al siguiente nivel. Con todas las características de la versión Silver y la potencia adicional de la tecnología React .</p>
                                                <h3 className='font-Anton font-normal text-center text-[30px] sm:text-[48px] leading-[35px] sm:leading-[57px] text-white pb-4'>$9000</h3>
                                                <div className='max-w-[418px]'>
                                                        <div className=' flex pb-3 gap-2'>
                                                                <span>
                                                                        <Right />
                                                                </span>
                                                                <p className='font-Inter font-medium text-[14px] sm:text-[16px] leading-[25px] max-w-[387px] mx-auto !text-center text-[#CDD2D3]'>Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales</p>
                                                        </div>
                                                        <p className=' flex pb-3 gap-2'>
                                                                <span>
                                                                        <Right />
                                                                </span>
                                                                <span className='font-Inter w-[95%] flex justify-center !text-center  font-medium text-[14px] sm:text-[16px]  mx-auto leading-[25px] text-[#CDD2D3]'>Control de RTP (controlás qué porcentaje pagar)</span>
                                                        </p>
                                                        <div className=' flex pb-3 gap-2'>
                                                                <span>
                                                                        <Right />
                                                                </span>
                                                                <p className='font-Inter !text-center mx-auto font-medium text-[14px] sm:text-[16px] max-w-[419px] leading-[25px] text-[#CDD2D3]'>Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo</p>
                                                        </div>
                                                        <div className=' flex pb-3 gap-2'>
                                                                <span>
                                                                        <Right />
                                                                </span>
                                                                <p className='font-Inter !text-center mx-auto font-medium text-[16px] leading-[25px] text-[#CDD2D3]'>Aplicación para Android y Windows de regalo.</p>
                                                        </div>
                                                        <p className=' flex pb-3 gap-2'>
                                                                <span>
                                                                        <Right />
                                                                </span>
                                                                <span className='font-Inter w-[95%] flex justify-center !text-center  font-medium text-[14px] sm:text-[16px]  mx-auto leading-[25px] text-[#CDD2D3]'>Tiempo de creación 2 a 3 semanas</span>
                                                        </p>
                                                </div>
                                                <div className=' flex items-center justify-center pt-6'>
                                                        <div className=' duration-300 hover:scale-95 relative '>
                                                                <button ><Commonbtns custom="bg-buttonbg hover:bg-buttonbg2 !text-black !duration-500 !border !border-0" text="Comprar ahora" /></button>
                                                                <a className=' absolute bottom-[-13%] left-[-3%]' href=""><Btnline /></a>
                                                        </div>
                                                </div>
                                        </div>
                                        <img data-aos="fade-up" data-aos-duration="500" className='absolute bottom-[10%] left-[6%] max-w-[80px] lg:max-w-[176px] max-sm:hidden' src={crdet} alt="bg" />
                                        <img data-aos="fade-up" data-aos-duration="500" className='absolute right-[6%] top-[10%] max-sm:hidden max-w-[100px] lg:max-w-[146px]' src={crdheart} alt="bg" />
                                        <img data-aos="fade-up" data-aos-duration="500" className='absolute bottom-[15%] right-[7%] max-sm:hidden max-w-[46px] lg:max-w-[66px]' src={ludo} alt="bg" />
                                        <img data-aos="fade-up" data-aos-duration="500" className='absolute top-[16%] left-[18%] max-sm:hidden max-w-[46px] lg:max-w-[78px]' src={greendoller} alt="bg" />
                                </div>
                                <div className='bg-[#062025] border-[0.5px] border-[#819192] rounded-[16px] mt-6 sm:mt-[64px] pr-[40px] pl-[50px] py-[78px]'>
                                        <div className=' grid lg:grid-cols-2 gap-6'>
                                                <div>
                                                        <h3 className=' font-Anton font-normal text-[26px] sm:text-[32px] text-center lg:text-start leading-[41px] text-white pb-4'>Platinum</h3>
                                                        <p className=' font-Inter font-medium text-[14px] sm:text-[16px] text-center mx-auto lg:mx-0 lg:text-start leading-[25px] text-[#CDD2D3] max-w-[401px] pb-[32px]'>Diseño totalmente personalizado. Contáctanos para un presupuesto.</p>
                                                        <h3 className='font-Anton font-normal text-[30px] sm:text-[48px] text-center lg:text-start leading-[35px] sm:leading-[57px] text-white pb-4'>Consultar precio</h3>
                                                        <div className=' flex justify-center lg:justify-start gap-2 pb-[40px]'>
                                                                <span>
                                                                        <Right />
                                                                </span>
                                                                <p className='font-Inter font-medium text-[14px] sm:text-[16px] leading-[25px] text-[#CDD2D3]'>Personalizable</p>
                                                        </div>
                                                        <div className=' flex justify-center lg:justify-start'>
                                                                <div className=' duration-300 hover:scale-95 relative'>
                                                                        <button ><Commonbtns text="Comprar ahora" /></button>
                                                                        <a className=' absolute bottom-[-13%] left-[-1%]' href=""><Btnline /></a>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className=' flex justify-center lg:justify-start pt-6 relative z-10 '>
                                                        <img src={spin3img} alt="#" />
                                                        <span className=' w-full max-w-[162px] h-full max-h-[162px] bg-buttonbg flex absolute -top-[2%] right-[36px] opacity-50 rounded-full blur-[40px] -z-10'></span>


                                                </div>
                                        </div>
                                </div>
                                <div className=' max-w-[1140px] mx-auto px-3 pt-[50px] sm:pt-[80px] md:pt-[150px] w-full '>
                                        <h3 className='font-Anton font-normal text-[30px] sm:text-[48px] leading-[35px] sm:leading-[57px] text-white text-center pb-6 sm:pb-[60px]'>Juegos en vivo</h3>
                                        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                                <div className=' flex items-center justify-center w-full group relative'>
                                                        <img className=' w-full' src={spin4img1} alt="#" />
                                                        <div className=' absolute group-hover:opacity-100 opacity-0 duration-300 bg-black rounded-[8px] z-20 w-full h-full justify-center items-center flex bg-opacity-80'>
                                                                <div className=' duration-300 hover:scale-90 relative'>
                                                                        <button ><Commonbtns text="Reproducir ahora" /></button>
                                                                        <a className=' absolute bottom-[-12%] left-[-3%]' href=""><Btnline /></a>
                                                                </div>
                                                        </div>

                                                </div>
                                                <div className=' flex items-center justify-center w-full group relative'>
                                                        <img className=' w-full' src={spin4img2} alt="#" />
                                                        <div className=' absolute group-hover:opacity-100 opacity-0 duration-300 bg-black rounded-[8px] z-20 w-full h-full justify-center items-center flex bg-opacity-80'>
                                                                <div className='  duration-300 hover:scale-90 relative'>
                                                                        <button ><Commonbtns text="Reproducir ahora" /></button>
                                                                        <a className=' absolute bottom-[-12%] left-[-3%]' href=""><Btnline /></a>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className=' flex items-center justify-center w-full group relative'>
                                                        <img className=' w-full' src={spin4img3} alt="#" />
                                                        <div className=' absolute group-hover:opacity-100 opacity-0 duration-300 bg-black rounded-[8px] z-20 w-full h-full justify-center items-center flex bg-opacity-80'>
                                                                <div className='  duration-300 hover:scale-90 relative'>
                                                                        <button ><Commonbtns text="Reproducir ahora" /></button>
                                                                        <a className=' absolute bottom-[-12%] left-[-3%]' href=""><Btnline /></a>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <p className=' font-Inter text-center font-medium text-[14px] sm:text-[16px]  leading-[25px] text-[#CDD2D3] max-w-[880px] pt-[38px] mx-auto'>Clientes satisfechos que confiaron en Exclusive Games y han disfrutado de emocionantes experiencias de juego.<span className=' block'> Ahora, la próxima apuesta está en tus manos.</span>
                                        Elige ganar. Elige exclusive game.</p>
                        </div>
                        <span className=' w-full max-w-[484px] h-full max-h-[484px] bg-buttonbg flex absolute top-[53%] -left-[10%] opacity-50 rounded-full blur-[180px] '></span>

                </div>
        )
}

export default Spinsection

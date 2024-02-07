import React from 'react'
import casionimg from '../assets/images/casion-img1.webp'
import Commonbtns from './Commonbtns';
import { Btnline1 } from './Icons';

const Cosionsection = () => {
  return (
    <div className='bg-[url(./assets/images/casion-img-bg.webp)] bg-no-repeat bg-center bg-cover'>
      <div className=' max-w-[1140px] mx-auto px-3 pt-[134px] sm:pt-[335px] pb-[145px] sm:pb-[324px]'>
        <div className=' grid lg:grid-cols-2 gap-6'>
          <div className=' flex justify-center  flex-col '>
            <h3 className='font-Anton font-normal text-center lg:text-start text-[30px] sm:text-[48px] leading-[35px] sm:leading-[57px] text-black pb-4'>Por qué elegirnos</h3>
            <div className='flex justify-center lg:justify-start flex-col items-center lg:items-start '>
              <p className=' max-w-[542px] text-center lg:text-start mx-auto font-Inter font-medium text-[14px] sm:text-[16px] text-[#334349] leading-[25px] pb-6'>Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos todo lo invertido en fichas en la moneda que elijas. En Exclusive Games siempre sumamos nuevos juegos. Juegos crash, los juegos interactivos que más pide la gente. Con Exclusive Games empezás a ganar ya! Creamos tu plataforma en solo 2 semanas.</p>              
                <div className=' duration-300 hover:scale-95 relative'>
                  <button ><Commonbtns custom="bg-buttonbg hover:bg-buttonbg2 !text-black !duration-500 !border !border-0" text="Aprende más" /></button>
                  <a className=' absolute bottom-[-13%] left-[-3%]' href=""><Btnline1 /></a>
                </div>              
            </div>
          </div>
          <div>
            <img className=' w-full' src={casionimg} alt="#" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cosionsection

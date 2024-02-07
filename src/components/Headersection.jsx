import React from 'react'
import Navsection from './Navsection'
import Commonbtns from './Commonbtns'
import { Btnline1,} from './Icons';

const Headersection = () => {
  
  
  return (
    <div className='bg-[url(./assets/images/hero-section-bg-img.webp)] bg-no-repeat bg-center bg-cover w-full min-h-[710px] sm:min-h-[100vh]'>
      <Navsection />
      <div className=' max-w-[1140px] px-3 mx-auto w-full '>
        <div className=' flex flex-col items-center justify-center min-h-[810px]'>
          <h1 className=' font-Anton font-normal text-[50px] sm:text-[72px] text-center leading-[50px] sm:leading-[86px] max-w-[505px] mx-auto text-white pb-4'>Exclusive Games. Pasión por ganar</h1>
          <p className=' font-Inter font-medium text-[14px] sm:text-[16px] leading-[25px] max-w-[727px] text-center text-[#CCCFD1] pb-[40px] '>En Exclusive Games somos un equipo apasionado de personas dedicados al desarrollo de multiplataformas para juegos de azar. A lo largo de nuestra vida consumimos todo tipo de juegos hasta que un día decidimos crear los propios.</p>
          <div className=' duration-300 hover:scale-90 relative cursor-pointer'>
            <Commonbtns custom=" bg-buttonbg hover:bg-buttonbg2 !text-black !duration-500 !border !border-0 " text="Empezar" />
            <span className=' absolute bottom-[-12%] left-[-3%]'><Btnline1 /></span>
          </div>         
        </div>
      </div>
    </div>
  )
}

export default Headersection

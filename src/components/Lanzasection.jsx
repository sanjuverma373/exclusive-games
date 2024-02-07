import React from 'react'
import lanzasdow1 from '../assets/images/lanzashadow1.webp'
import lanzasdow2 from '../assets/images/lanzashadow2.webp'
import Commonbtns from './Commonbtns'
import { Btnline1,} from './Icons';

const Lanzasection = () => {
  return (
    <div>
      <div className=' max-w-[1140px] mx-auto px-3 pb-[50px] sm:pb-[80px] md:pb-[150px]'>
        <div className=' rounded-[16px] border-[0.5px] border-[#829094] relative'>
          <div className=' flex flex-col items-center justify-center min-h-[256px] sm:min-h-[341px]'>
            <h3 className=' font-Anton font-normal text-[32px] text-white mx-auto text-center leading-[41px] pb-[40px] z-10'>Lanza tu propia plataforma en sólo 2 semanas</h3>
            <div className='  duration-300 hover:scale-90 z-10 relative'>
              <button ><Commonbtns custom="bg-buttonbg hover:bg-buttonbg2 !text-black !duration-500 !border !border-0" text="Empezar" /></button>
              <a className=' absolute bottom-[-12%] left-[-3%]' href=""><Btnline1 /></a>
            </div>
            <img className=' absolute left-0' src={lanzasdow1} alt="#" />
            <img className=' absolute right-0' src={lanzasdow2} alt="#" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lanzasection

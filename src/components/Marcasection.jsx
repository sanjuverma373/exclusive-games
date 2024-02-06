import React from 'react'
import { Bulb, Pro, Inno, Arrowt, Arrowb } from './Icons'
import sloteimg1 from '../assets/images/sloteimg1.webp'
import sloteimg2 from '../assets/images/sloteimg2.webp'
import sloteimg3 from '../assets/images/sloteimg3.webp'
import sloteimg4 from '../assets/images/sloteimg4.webp'
import sloteimg5 from '../assets/images/sloteimg5.webp'
import sloteimg6 from '../assets/images/sloteimg6.webp'
import Commonbtns from './Commonbtns';
import { Btnline, Btnline1, } from './Icons';

const Marcasection = () => {
  const marcacrd = [
    {
      svg: (<Bulb />),
      hading: "Inteligencia",
      para: "Comprendemos a la perfección los gustos de las personas y el mundo del gaming.",
    },
    {
      svg: (<Pro />),
      hading: "Proactividad",
      para: "Somos creadores de cambios que exploran nuevas formas de entretenimiento."
    },
    {
      svg: (<Inno />),
      hading: "Innovación",
      para: "Pensamos fuera de la caja para estar siempre un paso adelante."
    },
  ]
  const slotscrd = [
    {
      img: sloteimg1,
    },
    {
      img: sloteimg2,
    },
    {
      img: sloteimg3,
    },
    {
      img: sloteimg4,
    },
    {
      img: sloteimg5,
    },
    {
      img: sloteimg6,
    },
  ]

  const Cardsdata = marcacrd.map((data, index) => (
    <div key={index} className=' flex flex-col items-center justify-center' >
      <a className=' pb-4' href="">{data.svg}</a>
      <h3 className=' font-Anton font-normal  text-[20px] leading-[26px] pb-[10px] text-center'>{data.hading}</h3>
      <p className=' max-w-[245px] font-Inter text-[#334349] font-medium text-[14px] sm:text-[16px] leading-[25px] text-center'>{data.para}</p>
    </div>
  ))

  const Imgsdata = slotscrd.map((slotsdata, index) => (
    <div key={index} className=' flex flex-col items-center w-full group justify-center relative'>
      <img className='w-full' src={slotsdata.img} alt="#" />
      <div className=' absolute group-hover:opacity-100 opacity-0 duration-300 bg-black rounded-[8px] z-20 w-full h-full justify-center items-center flex bg-opacity-80'>
        <div className='duration-300 hover:scale-95 relative'>
          <button ><Commonbtns text="Jugar" /></button>
          <a className=' absolute bottom-[-12%] left-[-3%]' href=""><Btnline /></a>
        </div>
      </div>

    </div>
  ))
  return (
    <div className='bg-[url(./assets/images/marca-bg-img.webp)] bg-no-repeat bg-center bg-cover w-full pt-[290px] sm:pt-[316px] pb-[265px]'>
      <div className=' max-w-[1140px] px-3 mx-auto w-full pb-[50px] sm:pb-[80px] md:pb-[150px]'>
        <h3 className=' font-Anton font-normal text-[30px] sm:text-[48px] leading-[35px] sm:leading-[57px] text-black text-center pb-[24px] sm:pb-[60px]'>Nuestros Atributos de Marca</h3>
        <div className=' grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3  relative '>
          {Cardsdata}
          <span className=' block lg:hidden absolute top-[33%] right-[20%] left'><Arrowb /></span>
          <span className=' block lg:hidden absolute  top-[6%] left-[20%]'><Arrowt /></span>
        </div>
      </div>
      <div className=' max-w-[1140px] px-3 mx-auto w-full'>
        <h3 className='font-Anton font-normal text-[30px] sm:text-[48px] leading-[35px] sm:leading-[57px] text-black text-center pb-4'>Slots </h3>
        <p className=' max-w-[904px] mx-auto font-Inter font-medium text-[14px] sm:text-[16px] text-[#334349] leading-[25px] text-center pb-6 sm:pb-[60px]'>En Exclusive Games, ofrecemos una selección de más de 600 juegos de los principales desarrolladores, como Aristocrat, Amatic, EGT, Novomatic, IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo trabaja incansablemente para innovar y ampliar nuestra oferta de experiencias, garantizando la máxima seguridad con operaciones protegidas por cifrado SSL de 256 bits.</p>
        <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-[40px] '>
          {Imgsdata}
        

        </div>
        <div className=' flex items-center justify-center'>
          <div className=' duration-300 hover:scale-95 relative'>
            <button ><Commonbtns custom=" bg-gradient-to-r !from-[#7AF57A] !to-[#51C8EF] !text-black !border !border-0" text="Mostrar más" /></button>
            <a className=' absolute bottom-[-12%] left-[-3%]' href=""><Btnline1 /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Marcasection

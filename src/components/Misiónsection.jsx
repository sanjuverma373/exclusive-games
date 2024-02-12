import React from 'react'
import mision1 from '../assets/images/mision-img-1.webp'
import mision2 from '../assets/images/mision-img-2.webp'

const Misiónsection = () => {
        return (
                <div className=' pt-[40px] sm:pt-[74px]  pb-0 sm:pb-[80px] md:pb-[150px] mb[-172px] relative z-10 overflow-x-clip -mb-[160px] sm:mb-0'>
                        <div className=' max-w-[1140px] mx-auto px-3'>
                                <div className=' grid lg:grid-cols-2'>
                                        <div className=' flex flex-col items-center lg:items-start justify-center lg:justify-start px-7'>
                                                <img className=' pb-6 sm:pb-[60px] w-full max-w-[538px]' src={mision1} alt="#" />
                                                <h3 className=' font-Anton text-center lg:text-start font-normal text-[30px] sm:text-[48px] leading-[35px] sm:leading-[57px] text-white pb-4'>Nuestra Visión</h3>
                                                <p className='font-Inter text-center lg:text-start font-medium text-[14px] sm:text-[16px] leading-[25px] max-w-[444px] text-[#CCCFD1] pb-6'>Nuestra visión es ser líderes indiscutibles en la industria de los juegos de azar y llevar nuestra pasión por el entretenimiento más allá de las fronteras. Imagina un mundo donde la emoción y la diversión no tengan límites, y ese es el mundo que queremos crear contigo.</p>
                                                <a className=' text-[#7AF57A] font-Inter font-bold text-[16px] leading-[25px]' href="">Aprende más {'-->'}</a>
                                        </div>
                                        <div className=' flex flex-col items-center lg:items-start justify-center lg:justify-start pt-6 lg:pt-0 px-7'>
                                                <h3 className=' order-2 lg:order-1  font-Anton text-center lg:text-start font-normal text-[30px] sm:text-[48px] leading-[35px] sm:leading-[57px] text-white pb-4'>Nuestra Misión</h3>
                                                <p className=' order-2 lg:order-1 font-Inter text-center lg:text-start font-medium text-[14px] sm:text-[16px] leading-[25px] max-w-[444px] text-[#CCCFD1] pb-6'>Nuestra misión es simple pero poderosa: proporcionarte la más amplia gama de soluciones de entretenimiento de alta calidad y rentabilidad. Estamos comprometidos a elevar tus expectativas y brindarte experiencias inigualables.</p>
                                                <a className=' order-2 lg:order-1  text-[#7AF57A] font-Inter font-bold text-[16px] leading-[25px]' href="">Aprende más {'-->'}</a>
                                                <img className=' order-1 lg:order-2 pb-6 sm:pb-[60px]  pt-6 sm:pt-[60px] w-full max-w-[538px] ' src={mision2} alt="#" />
                                        </div>
                                </div>
                        </div>
                        <span className=' w-full max-w-[484px] h-full max-h-[484px] bg-buttonbg flex absolute top-[10%] left-[-10%] opacity-50 rounded-full blur-[155px] -z-10 '></span>
                        <span className=' w-full max-w-[484px] h-full max-h-[484px] bg-buttonbg flex absolute bottom-[-50%] right-[-10%] opacity-50 rounded-full blur-[155px] -z-10 '></span>
                        
                </div>
        )
}

export default Misiónsection

import React, { useEffect, useState } from 'react'
import preloader from '../assets/images/nav-logo.webp'
const Preloadersection = () => {
        const [isLoaded, setIsLoaded] = useState(false);

        // Simulating data loading with a delay
        useEffect(() => {
                const delay = setTimeout(() => {
                        setIsLoaded(true);
                        document.body.style.overflow = '';
                }, 3500);

                return () => clearTimeout(delay);
        }, []);
        useEffect(() => {
                document.body.style.overflow = 'hidden';
        }, []);
        return (
                <div>
                        <div className=" duration-300 w-screen h-screen bg-[url(./assets/images/hero-section-bg-img.webp)] bg-no-repeat bg-center bg-cover bg-black fixed top-0 start-0" style={{ display: isLoaded ? 'none' : 'block', zIndex: 9999 }}>
                                <div className='flex items-center justify-center h-screen'>
                                        <div className="flex items-center justify-center  flex-colum gap-6">
                                                <div className="loader animate-bounce aspect-square w-8 flex flex-col justify-center items-center">
                                                        <img className=' max-w-[150px] sm:max-w-[400px]' src={preloader} alt="#" />
                                                </div>
                                        </div>

                                </div>
                        </div>
                </div>
        )
}

export default Preloadersection

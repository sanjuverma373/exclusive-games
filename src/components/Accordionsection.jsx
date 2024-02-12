import React, { useState } from "react";
import { Close ,Add } from "./Icons";
const Accordionsection = () => {
        const [openAccordion, setOpenAccordion] = useState(null);
        const toggleAccordion = (index) => {
                setOpenAccordion(openAccordion === index ? null : index);
        };
        const accordionData = [
                {
                        title: "¿Cuáles son las ventajas de elegir Juegos Exclusivos para mis plataformas de juegos?",
                        content: "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar. ",
                },
                {
                        title: "¿Cómo garantizan la seguridad de las operaciones en sus juegos?",
                        content: "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15  de multiplataformas para juegos de azar.",
                },
                {
                        title: " ¿Cuáles son las opciones de juego disponibles en las versiones Silver, Luxury y Platinum?",
                        content: "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al  de azar.",
                },
                {
                        title: "¿Cuánto tiempo lleva crear una plataforma con Juegos Exclusivos?",
                        content: "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de .",
                },
                {
                        title: "¿Qué métodos de pago aceptan?",
                        content: "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multi.",
                },
                {
                        title: "¿Puedo probar sus juegos antes de comprometerme?",
                        content: "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para .",
                },
        ];
        return (
                <div className=" pt-[50px] sm:pt-[80px] md:pt-[150px] pb-[50px] sm:pb-[80px] md:pb-[150px] relative z-10">
                        <div className="max-w-[970px] px-3 mx-auto">
                        <h3 className=' font-Anton text-center  font-normal text-[30px] sm:text-[48px] leading-[35px] sm:leading-[57px] text-white pb-[40px] sm:pb-[60px]'>Preguntas más frecuentes</h3>
                                <div className="accordion">
                                        {accordionData.map((item, index) => (
                                                <div className="accordion-item px-[20px] py-[16px]" key={index}>
                                                        <div onClick={() => toggleAccordion(index)} className="flex justify-between items-center">
                                                                <div className="accordion-title font-Anton font-normal text-[15px] sm:text-[20px] leading-[26px] text-white" >{item.title}</div>
                                                                <p className="text-white font-sans text-4xl cursor-pointer">{openAccordion === index ? (<Close/>) : (<Add/>)}</p>
                                                        </div>
                                                        <div className={`accordion-content text-[#C8D0D1] font-Inter font-medium text-[14px] sm:text-[16px] leading-[25px] max-w-[880px] ${openAccordion === index ? "open" : ""}`} >
                                                                {item.content}
                                                        </div>
                                                </div>
                                        ))
                                        }
                                </div >
                        </div>
                        <span className=' w-full max-w-[394px] h-full max-h-[304px] bg-buttonbg flex absolute top-0 -left-[10%] opacity-50 rounded-full blur-[140px] -z-10 '></span>
                </div>
        );
};
export default Accordionsection;




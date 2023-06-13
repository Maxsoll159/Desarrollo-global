import Image from "next/image"
import { LuCalendarDays } from 'react-icons/lu'
import { BiAward } from 'react-icons/bi'
export const CardServicio = () => {
    return (
        <div className="bg-white w-full md:w-[350px] mx-auto">
            <Image src="/img/imgcardejemplo.webp" width={363} height={272} alt="Curso Demo" className="w-full" />
            <div className="shadow-lg flex px-5 py-2 justify-between">
                <p className="font-bold">Curso Especializado</p>
                <div className="bg-[#e8003f] rounded-md px-3 text-sm flex items-center gap-2 text-white font-semibold">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <p>En vivo</p>
                </div>
            </div>
            <div className="p-5 bg-[#f3f6ff] w-full">
                <p className="text-blue-desarrollo font-black text-2xl text-center">Administración Financiera y Gestión Gubernamental</p>
                <div className="shadow-lg rounded-md flex justify-center gap-3 p-2 mt-2 font-bold text-[#428DFF] bg-white border border-[#428DFF]">
                    <BiAward className="text-2xl" />
                    <p>Certificado Universitarios</p>
                </div>
                <div className="shadow-lg rounded-md flex justify-center items-center gap-3 p-2 mt-3 font-bold text-[#428DFF] bg-white border border-[#428DFF]">
                    <LuCalendarDays className="text-xl" />
                    <p>Incio 25 de Agosto 2023</p>
                </div>
                <div className="bg-[#ffe001] flex rounded-md justify-center gap-3 font-bold px-2 py-3 mt-5 w-full items-center">
                    <p className="text-[22px] leading-7">¡Aprovecha un de descuento!</p>
                    <p className="font-black text-[52px]">25%</p>
                </div>
                <button className="bg-blue-desarrollo text-white flex items-center justify-center gap-5 text-xl  p-4 w-full mt-5 rounded-lg"><i className="fi fi-rs-bullseye-pointer flex text-2xl"></i>Más Información</button>
            </div>
        </div>
    )
}

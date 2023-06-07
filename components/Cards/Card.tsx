import Image from "next/image"

export const Card = () => {
    return (
        <div className="bg-white w-full md:w-[350px]">
            <Image src="/img/imgcardejemplo.webp" width={363} height={272} alt="Curso Demo" />
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
                    <i className="fi fi-rr-diploma text-xl flex"></i>
                    <p>Certificado Universitarios</p>
                </div>
                <div className="shadow-lg rounded-md flex justify-center gap-3 p-2 mt-3 font-bold text-[#428DFF] bg-white border border-[#428DFF]">
                    <i className="fi fi-rr-calendar text-xl flex"></i>
                    <p>Certificado Universitarios</p>
                </div>
                <div className="bg-[#ffe001] flex rounded-md justify-center gap-3 font-bold px-2 py-3 mt-5 w-full items-center">
                    <p className="text-[24px] leading-7">¡Aprovecha un de descuento!</p>
                    <p className="font-black text-[52px]">25%</p>
                </div>
                <button className="bg-blue-desarrollo text-white flex items-center justify-center gap-5 text-xl  p-4 w-full mt-5 rounded-lg"><i className="fi fi-rs-bullseye-pointer flex text-2xl"></i>Más Información</button>
            </div>
        </div>
    )
}

import Image from "next/image"

export const Card = () => {
    return (
        <div className="bg-white w-[363px]">
            <Image src="/img/imgcardejemplo.webp" width={363} height={272} alt="Curso Demo" />
            <div className="shadow-lg flex px-5 py-2 justify-between">
                <p className="font-bold">Curso Especializado</p>
                <div className="bg-[#e8003f] rounded-md px-3 text-sm flex items-center gap-2 text-white font-semibold">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <p>En vivo</p>
                </div>
            </div>
            <div className="p-5">
                <p className="text-blue-desarrollo font-bold text-2xl text-center">Administración Financiera y Gestión Gubernamental</p>
                <div className="shadow-lg rounded-md flex justify-center gap-3 p-2 mt-2 font-bold text-blue-desarrollo">
                    <i className="fi fi-rr-diploma text-xl flex"></i>
                    <p>Certificado Universitarios</p>
                </div>
                <div className="shadow-lg rounded-md flex justify-center gap-3 p-2 mt-3 font-bold text-blue-desarrollo">
                    <i className="fi fi-rr-calendar text-xl flex"></i>
                    <p>Certificado Universitarios</p>
                </div>
                <div className="bg-blue-desarrollo rounded-md p-5 flex items-center justify-between mt-5">
                    <div>
                        <span className="text-white text-sm">PRECIO</span>
                        <p className="text-[#ffca00] font-semibold">Normal S/ <span className="line-through">397.00</span> </p>
                        <span className="text-white font-bold text-3xl">S/ 327.00</span>
                    </div>
                    <div className="bg-estrella w-[92px] h-[92px] flex flex-col justify-center items-center text-blue-desarrollo font-bold">
                        <span className="text-3xl">25%</span>
                        <span className="-mt-3 text-end">dsct</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

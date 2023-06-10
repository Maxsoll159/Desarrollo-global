import Link from "next/link"

import { RiBookOpenLine, RiAwardLine } from "react-icons/ri";
import { FiFileText, FiHome, FiVideo } from "react-icons/fi"
import { AiOutlinePlusCircle } from 'react-icons/ai'
export const Opciones = () => {
    return (
        <section className="">
            <article className="px-5 py-10 md:py-20 container mx-auto">
                <h3 className="text-3xl text-center text-[#374957] font-bold">Hola, ¿Qué estas buscando aprender hoy?</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-14 gap-2">
                    <Link href="/sd" className="group border-2 rounded-md p-5 md:p-10 flex flex-col justify-center items-center mx-auto hover:bg-[#2a50e4] w-full md:w-[240px]">
                        <RiBookOpenLine className="text-[60px] font-dark text-[#2a50e4] group-hover:text-white" />
                        <p className="text-[#7a8897] text-2xl font-bold group-hover:text-white">Cursos</p>
                        <div className="items-center gap-2 px-3 py-1 rounded-md mt-2 flex border bg-blue-desarrollo text-white">
                            <p className="font-semibold">Ver mas</p>
                            <AiOutlinePlusCircle className="font-bold text-xl" />
                        </div>
                    </Link>
                    <Link href="/sd" className="group border-2 rounded-md p-5 md:p-10 flex flex-col justify-center items-center mx-auto hover:bg-[#2a50e4] w-full md:w-[240px] ">
                        <RiAwardLine className="text-[60px] font-dark text-[#2a50e4] group-hover:text-white" />
                        <p className="text-[#7a8897] text-2xl font-bold group-hover:text-white">Diplomas</p>
                        <div className="items-center gap-2 px-3 py-1 rounded-md mt-2 flex border bg-blue-desarrollo text-white">
                            <p className="font-semibold">Ver mas</p>
                            <AiOutlinePlusCircle className="font-bold text-xl" />
                        </div>
                    </Link>
                    <Link href="/sd" className="group border-2 rounded-md p-5 md:p-10 flex flex-col justify-center items-center mx-auto hover:bg-[#2a50e4] w-full md:w-[240px] ">
                        <FiFileText className="text-[60px] font-dark text-[#2a50e4] group-hover:text-white" />
                        <p className="text-[#7a8897] text-2xl font-bold group-hover:text-white">Diplomados</p>
                        <div className="items-center gap-2 px-3 py-1 rounded-md mt-2 flex border bg-blue-desarrollo text-white">
                            <p className="font-semibold">Ver mas</p>
                            <AiOutlinePlusCircle className="font-bold text-xl" />
                        </div>
                    </Link>
                    <Link href="/sd" className="group border-2 rounded-md p-5 md:p-10 flex flex-col justify-center items-center mx-auto hover:bg-[#2a50e4] w-full md:w-[240px] ">
                        <FiHome className="text-[60px] font-dark text-[#2a50e4] group-hover:text-white" />
                        <p className="text-[#7a8897] text-2xl font-bold group-hover:text-white">In House</p>
                        <div className="items-center gap-2 px-3 py-1 rounded-md mt-2 flex border bg-blue-desarrollo text-white">
                            <p className="font-semibold">Ver mas</p>
                            <AiOutlinePlusCircle className="font-bold text-xl" />
                        </div>
                    </Link>
                    <Link href="/sd" className="group border-2 rounded-md p-5 md:p-10 flex flex-col justify-center items-center mx-auto hover:bg-[#2a50e4] w-full md:w-[240px] ">
                        <FiVideo className="text-[60px] font-dark text-[#2a50e4] group-hover:text-white" />
                        <p className="text-[#7a8897] text-2xl font-bold group-hover:text-white">Grabados</p>
                        <div className="items-center gap-2 px-3 py-1 rounded-md mt-2 flex border bg-blue-desarrollo text-white">
                            <p className="font-semibold">Ver mas</p>
                            <AiOutlinePlusCircle className="font-bold text-xl" />
                        </div>
                    </Link>
                </div>
            </article>
        </section>
    )
}

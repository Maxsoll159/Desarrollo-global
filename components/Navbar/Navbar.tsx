"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export const Navbar = () => {
    const [mostrar, setMostrar] = useState<boolean>(false)
    return (
        <header className="bg-white fixed w-full z-50">
            <nav className="container mx-auto">
                <div className="py-2">
                    <div className="flex justify-between w-full items-center">
                        <Image src="/img/DG-Logotipo.webp" alt="Desarrollo Global" width={226} height={56} />

                        <button className="p-2 lg:hidden" onClick={() => setMostrar(!mostrar)}>
                            <div className="bg-white h-0.5 w-6"></div>
                            <div className="bg-white h-0.5 w-6 mt-1"></div>
                            <div className="bg-white h-0.5 w-6 mt-1"></div>
                        </button>


                        <div className={`items-center gap-7 flex lg:justify-end flex-col lg:flex-row absolute lg:static top-full transition-all lg:!translate-x-0 lg:bg-transparent lg:pt-0 pt-5 bg-white w-full -translate-x-full ${mostrar && "translate-x-0"}`}>
                            <Link href="/" className="text-link font-semibold transition-all duration-300 ease-in-out hover:text-blue-desarrollo border-b-[#485bff] hover:border-b-white">Inicio</Link>
                            <Link href="/" className="text-link font-semibold transition-all duration-300 hover:text-blue-desarrollo border-b-[#485bff] hover:border-b-white">Cursos</Link>
                            <Link href="/" className="text-link font-semibold transition-all duration-300 hover:text-blue-desarrollo border-b-[#485bff] hover:border-b-white">Diplomas</Link>
                            <Link href="/" className="text-link font-semibold transition-all duration-300 hover:text-blue-desarrollo border-b-[#485bff] hover:border-b-white">Diplomados</Link>
                            <Link href="/" className="text-link font-semibold transition-all duration-300 hover:text-blue-desarrollo border-b-[#485bff] hover:border-b-white">InHouse</Link>
                            <Link href="/" className="text-link font-semibold transition-all duration-300 hover:text-blue-desarrollo border-b-[#485bff] hover:border-b-white">Seminarios</Link>
                            <Link href="/" className="text-link font-semibold transition-all duration-300 hover:text-blue-desarrollo border-b-[#485bff] hover:border-b-white">Contacto</Link>
                            <Link href="/" className="text-link font-semibold transition-all duration-300 hover:text-blue-desarrollo border-b-[#485bff] hover:border-b-white">Blog</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

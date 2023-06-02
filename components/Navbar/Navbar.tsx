import Image from "next/image"
import Link from "next/link"

export const Navbar = () => {
    return (
        <header className="bg-transparent">
            <nav className="container mx-auto w-full relative">
                <div className="absolute py-3 flex items-center justify-between w-full">
                    <Image src="/img/logoDesarrollo.webp" alt="Desarrollo Global" width={226} height={56} />
                    <div className="flex items-center gap-7">
                        <Link href="/" className="text-link font-semibold transition-all duration-300 ease-in-out hover:text-white border-2 border-t-0 border-l-0 border-r-0 border-b-[#485bff] hover:border-b-white">Inicio</Link>
                        <Link href="/" className="text-link font-semibold transition-all duration-300 hover:text-white border-2 border-t-0 border-l-0 border-r-0 border-b-[#485bff] hover:border-b-white">Cursos</Link>
                        <Link href="/" className="text-link font-semibold transition-all duration-300 hover:text-white border-2 border-t-0 border-l-0 border-r-0 border-b-[#485bff] hover:border-b-white">Diplomas</Link>
                        <Link href="/" className="text-link font-semibold transition-all duration-300 hover:text-white border-2 border-t-0 border-l-0 border-r-0 border-b-[#485bff] hover:border-b-white">Diplomados</Link>
                        <Link href="/" className="text-link font-semibold transition-all duration-300 hover:text-white border-2 border-t-0 border-l-0 border-r-0 border-b-[#485bff] hover:border-b-white">InHouse</Link>
                        <Link href="/" className="text-link font-semibold transition-all duration-300 hover:text-white border-2 border-t-0 border-l-0 border-r-0 border-b-[#485bff] hover:border-b-white">Seminarios</Link>
                        <Link href="/" className="text-link font-semibold transition-all duration-300 hover:text-white border-2 border-t-0 border-l-0 border-r-0 border-b-[#485bff] hover:border-b-white">Contacto</Link>
                        <Link href="/" className="text-link font-semibold transition-all duration-300 hover:text-white border-2 border-t-0 border-l-0 border-r-0 border-b-[#485bff] hover:border-b-white">Blog</Link>
                        <div className="h-10 w-0.5 bg-white"></div>
                        <i className="fi fi-rr-bell-ring text-white text-xl flex"></i>
                        <i className="fi fi-rr-shopping-cart text-xl flex text-white"></i>
                    </div>
                </div>
            </nav>
        </header>
    )
}

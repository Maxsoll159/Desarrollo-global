import Image from "next/image"
import Link from "next/link"

export const Navbar = () => {
    return (
        <header className="bg-transparent">
            <nav className="container mx-auto w-full relative">
                <div className="absolute py-3 flex items-center justify-between w-full">
                    <Image src="/img/logoDesarrollo.webp" alt="Desarrollo Global" width={226} height={56} />
                    <div className="flex items-center gap-7">
                        <Link href="/" className="text-link font-semibold">Inicio</Link>
                        <Link href="/" className="text-link font-semibold">Cursos</Link>
                        <Link href="/" className="text-link font-semibold">Diplomas</Link>
                        <Link href="/" className="text-link font-semibold">Diplomados</Link>
                        <Link href="/" className="text-link font-semibold">InHouse</Link>
                        <Link href="/" className="text-link font-semibold">Seminarios</Link>
                        <Link href="/" className="text-link font-semibold">Contacto</Link>
                        <Link href="/" className="text-link font-semibold">Blog</Link>
                        <div className="h-10 w-0.5 bg-white"></div>
                        <i className="fi fi-rr-bell-ring text-white text-xl flex"></i>
                        <i className="fi fi-rr-shopping-cart text-xl flex text-white"></i>
                    </div>
                </div>
            </nav>
        </header>
    )
}

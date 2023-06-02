import Link from "next/link"


export const Opciones = () => {
    return (
        <section className="bg-white">
            <article className="py-20 container mx-auto">
                <h3 className="text-3xl text-center text-[#374957] font-bold">Hola, ¿Qué estas buscando aprender hoy?</h3>
                <div className="grid grid-cols-5 mt-14">
                    <Link href="/sd" className="group border-2 rounded-md p-10 flex flex-col justify-center items-center mx-auto hover:bg-[#2a50e4] w-[240px] h-[190px]">
                        <i className="fi fi-rr-book-alt text-4xl font-bold text-[#2a50e4] transition-colors group-hover:text-white"></i>
                        <p className="text-[#7a8897] text-2xl font-bold group-hover:text-white">Cursos</p>
                        <div className="items-center gap-2 bg-white px-3 py-1 hidden rounded-md mt-2 group-hover:flex">
                            <div className="w-5 h-5 bg-red-500 rounded-full"></div>
                            <p className="font-semibold text-[#7a8897]">En Vivo</p>
                        </div>
                    </Link>
                    <Link href="/sd" className="group border-2 rounded-md p-10 flex flex-col justify-center items-center mx-auto hover:bg-[#2a50e4] w-[240px] h-[190px]">
                        <i className="fi fi-rr-diploma text-4xl font-bold text-[#2a50e4] group-hover:text-white"></i>
                        <p className="text-[#7a8897] text-2xl font-bold group-hover:text-white">Diplomas</p>
                        <div className="items-center gap-2 bg-white px-3 py-1 rounded-md mt-2 hidden group-hover:flex">
                            <div className="w-5 h-5 bg-red-500 rounded-full"></div>
                            <p className="font-semibold text-[#7a8897]">En Vivo</p>
                        </div>
                    </Link>
                    <Link href="/sd" className="group border-2 rounded-md p-10 flex flex-col justify-center items-center mx-auto hover:bg-[#2a50e4] w-[240px] h-[190px]">
                        <i className="fi fi-rr-graduation-cap text-4xl font-bold text-[#2a50e4] group-hover:text-white"></i>
                        <p className="text-[#7a8897] text-2xl font-bold group-hover:text-white">Diplomados</p>
                        <div className="items-center gap-2 bg-white px-3 py-1 rounded-md mt-2 hidden group-hover:flex">
                            <div className="w-5 h-5 bg-red-500 rounded-full"></div>
                            <p className="font-semibold text-[#7a8897]">En Vivo</p>
                        </div>
                    </Link>
                    <Link href="/sd" className="group border-2 rounded-md p-10 flex flex-col justify-center items-center mx-auto hover:bg-[#2a50e4] w-[240px] h-[190px]">
                        <i className="fi fi-rr-home text-4xl font-bold text-[#2a50e4] group-hover:text-white"></i>
                        <p className="text-[#7a8897] text-2xl font-bold group-hover:text-white">In House</p>
                        <div className="items-center gap-2 bg-white px-3 py-1 rounded-md mt-2 hidden group-hover:flex">
                            <div className="w-5 h-5 bg-red-500 rounded-full"></div>
                            <p className="font-semibold text-[#7a8897]">En Vivo</p>
                        </div>
                    </Link>
                    <Link href="/sd" className="group border-2 rounded-md p-10 flex flex-col justify-center items-center mx-auto hover:bg-[#2a50e4] w-[240px] h-[190px]">
                        <i className="fi fi-rr-video-camera text-4xl font-bold text-[#2a50e4] group-hover:text-white"></i>
                        <p className="text-[#7a8897] text-2xl font-bold group-hover:text-white">In House</p>
                        <div className="items-center gap-2 bg-white px-3 py-1 rounded-md mt-2 hidden group-hover:flex">
                            <div className="w-5 h-5 bg-red-500 rounded-full"></div>
                            <p className="font-semibold text-[#7a8897]">En Vivo</p>
                        </div>
                    </Link>
                </div>
            </article>
        </section>
    )
}

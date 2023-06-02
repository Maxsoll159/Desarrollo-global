import Link from "next/link"


export const Opciones = () => {
    return (
        <section className="bg-white">
            <article className="py-20 container mx-auto">
                <h3 className="text-3xl text-center text-[#374957] font-bold">Hola, ¿Qué estas buscando aprender hoy?</h3>
                <div className="grid grid-cols-5 mt-5 ">
                    <Link href="/sd" className="border-2 rounded-md p-10 flex flex-col items-center mx-auto">
                        <i className="fi fi-rr-book-alt text-4xl font-bold text-[#2a50e4]"></i>
                        <p className="text-[#7a8897] text-2xl font-bold">Cursos</p>
                    </Link>
                    <Link href="/sd" className="border-2 rounded-md p-10 flex flex-col items-center mx-auto">
                        <i className="fi fi-rr-diploma text-4xl font-bold text-[#2a50e4]"></i>
                        <p className="text-[#7a8897] text-2xl font-bold">Diplomas</p>
                    </Link>
                    <Link href="/sd" className="border-2 rounded-md p-10 flex flex-col items-center mx-auto">
                        <i className="fi fi-rr-graduation-cap text-4xl font-bold text-[#2a50e4]"></i>
                        <p className="text-[#7a8897] text-2xl font-bold">Diplomados</p>
                    </Link>
                    <Link href="/sd" className="border-2 rounded-md p-10 flex flex-col items-center mx-auto">
                        <i className="fi fi-rr-home text-4xl font-bold text-[#2a50e4]"></i>
                        <p className="text-[#7a8897] text-2xl font-bold">In House</p>
                    </Link>
                    <Link href="/sd" className="border-2 rounded-md p-10 flex flex-col items-center mx-auto">
                        <i className="fi fi-rr-video-camera text-4xl font-bold text-[#2a50e4]"></i>
                        <p className="text-[#7a8897] text-2xl font-bold">In House</p>
                    </Link>
                </div>
            </article>
        </section>
    )
}

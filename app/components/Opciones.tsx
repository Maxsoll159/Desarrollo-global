import Link from "next/link"

export const Opciones = () => {
    return (
        <section className="">
            <article className="px-5 py-10 md:py-20 container mx-auto">
                <h3 className="text-3xl text-center text-blue-desarrollo font-bold">Lista de Próximos inicios</h3>
                <p className="text-parrajos text-center mt-5 text-lg">"¡Mantente al tanto de nuestros próximos inicios y no te pierdas la oportunidad de formarte con los mejores!"</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-14 gap-2 bg-gray-200 rounded-md  md:rounded-full p-2">
                    <Link href="/" className="bg-blue-desarrollo text-white rounded-full py-3 text-center font-bold">Proximos Inicios</Link>
                    <Link href="/" className="g-transparent hover:bg-blue-desarrollo text-blue-desarrollo hover:text-white rounded-full py-3 text-center font-bold">Cursos</Link>
                    <Link href="/" className="bg-transparent hover:bg-blue-desarrollo text-blue-desarrollo hover:text-white rounded-full py-3 text-center font-bold">Diplomas</Link>
                    <Link href="/" className="bg-transparent hover:bg-blue-desarrollo text-blue-desarrollo hover:text-white rounded-full py-3 text-center font-bold">Diplomados</Link>
                    <Link href="/" className="bg-transparent hover:bg-blue-desarrollo text-blue-desarrollo hover:text-white rounded-full py-3 text-center font-bold">InHouse</Link>
                    <Link href="/" className="bg-transparent hover:bg-blue-desarrollo text-blue-desarrollo hover:text-white rounded-full py-3 text-center font-bold">Seninarios Gratuitos</Link>
                </div>
            </article>
        </section>
    )
}

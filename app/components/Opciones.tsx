import Link from "next/link"

export const Opciones = () => {
    return (
        <section className="">
            <article className="px-5 py-10 md:py-20 container mx-auto">
                <h3 className="text-3xl text-center text-[#374957] font-bold">Hola, ¿Qué estas buscando aprender hoy?</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-14 gap-2 bg-gray-200 rounded-full">
                    <Link href="//">sd </Link>
                </div>
            </article>
        </section>
    )
}

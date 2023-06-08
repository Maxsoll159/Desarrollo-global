import { BsWhatsapp} from "react-icons/Bs"
export const Contactenos = () => {
    return (
        <>
            <section className="bg-[#18248a] pt-20 pb-48">
                <article className="container mx-auto">
                    <p className="font-bold text-white text-xl text-center">¡Hablemos! Estamos aquí para ayudarte en lo que necesites.</p>
                </article>
            </section>
            <section>
                <article className="container mx-auto grid grid-cols-3">
                    <div className="bg-white w-full md:w-[446px] h-[417px] rounded-sm shadow-md mx-auto -m-20 p-10">
                        <div className="bg-blue-desarrollo text-white w-[140px] h-[140px] rounded-full mx-auto"></div>
                        <p className="mt-5 text-center text-blue-desarrollo font-bold text-2xl">DIRECCIÓN</p>
                        <p className="text-center font-bold text-xl mt-5">Av. Julio C. Tello 741 - Lince</p>
                        <p className="text-center font-bold underline mt-3 text-lg">Ver horario de atención</p>
                    </div>
                    <div className="bg-white w-full md:w-[446px] h-[417px] rounded-sm shadow-md mx-auto -m-20 p-10">
                        <div className="bg-blue-desarrollo text-white w-[140px] h-[140px] rounded-full mx-auto"></div>
                        <p className="mt-5 text-center text-blue-desarrollo font-bold text-2xl">ATENCIÓN ALUMNOS</p>
                        <button className="bg-[#10CE4F] text-white rounded-md px-5 py-3 w-full text-2xl mt-5 font-bold flex items-center justify-center gap-3"><BsWhatsapp className="text-3xl" /> 933 929 742</button>
                    </div>
                    <div className="bg-white w-full md:w-[446px] h-[417px] rounded-sm shadow-md mx-auto -m-20 p-10">
                        <div className="bg-blue-desarrollo text-white w-[140px] h-[140px] rounded-full mx-auto"></div>
                        <p className="mt-5 text-center text-blue-desarrollo font-bold text-2xl">EMAIL</p>
                    </div>
                </article>
            </section>
        </>
    )
}

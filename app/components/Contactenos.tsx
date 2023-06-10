import { BsWhatsapp} from "react-icons/Bs"
export const Contactenos = () => {
    return (
        <>
            <section className="bg-[#18248a] py-10 md:pt-20 md:pb-48">
                <article className="container mx-auto">
                    <p className="font-bold text-white text-xl text-center">¡Hablemos! Estamos aquí para ayudarte en lo que necesites.</p>
                </article>
            </section>
            <section className="bg-[#18248a] md:bg-white">
                <article className="container mx-auto flex flex-col md:flex-row gap-5 p-5">
                    <div className="bg-white w-full md:w-[227px] lg:w-[446px] md:h-[417px] rounded-sm shadow-md mx-auto p-10 m-0 md:-mt-20">
                        <div className="bg-blue-desarrollo text-white w-[140px] h-[140px] rounded-full mx-auto"></div>
                        <p className="mt-5 text-center text-blue-desarrollo font-bold text-2xl">DIRECCIÓN</p>
                        <p className="text-center font-bold text-xl mt-5">Av. Julio C. Tello 741 - Lince</p>
                        <p className="text-center font-bold underline mt-3 text-lg">Ver horario de atención</p>
                    </div>
                    <div className="bg-white w-full md:w-[227px] lg:w-[446px] md:h-[417px] rounded-sm shadow-md mx-auto p-10 m-0 md:-mt-20">
                        <div className="bg-blue-desarrollo text-white w-[140px] h-[140px] rounded-full mx-auto"></div>
                        <p className="mt-5 text-center text-blue-desarrollo font-bold text-2xl">ATENCIÓN ALUMNOS</p>
                        <button className="bg-[#10CE4F] text-white rounded-xl px-5 py-3 w-full text-2xl mt-5 font-bold flex items-center justify-center gap-3"><BsWhatsapp className="text-3xl" /> 933 929 742</button>
                    </div>
                    <div className="bg-white w-full md:w-[227px] lg:w-[446px] md:h-[417px] rounded-sm shadow-md mx-auto p-10 m-0 md:-mt-20">
                        <div className="bg-blue-desarrollo text-white w-[140px] h-[140px] rounded-full mx-auto"></div>
                        <p className="mt-5 text-center text-blue-desarrollo font-bold text-2xl">EMAIL</p>
                        <div className="bg-gray-100 rounded-lg p-5 mt-5 font-bold text-center">
                            asesoria@desarrolloglobal.pe
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}

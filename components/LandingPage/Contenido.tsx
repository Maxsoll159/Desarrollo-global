import { BsWifi } from "react-icons/bs"
import { GiBlackBook } from "react-icons/gi"
import { AccordionLayout } from "../componentsLayout"

export const Contenido = () => {
    return (
        <section>
            <article className="container mx-auto">
                <div className="w-full lg:w-[60%] mt-5 p-5 lg:p-0">
                    <p className="font-bold text-2xl">Contenido del Diploma</p>
                    <p className="flex items-center gap-2 my-3"><BsWifi className="text-lg" />Este diploma tiene en total 13 sesiones en vivo</p>
                    <div>
                        <div>
                            <div className="bg-black text-white px-5 lg:px-10 py-3 rounded-lg flex items-center justify-between">
                                <div className="flex items-center gap-5">
                                    <div className="w-[54px] h-[54px] bg-yellow-400 rounded-full hidden lg:block"></div>
                                    <p className="font-bold w-full lg:w-1/2">PREPARACIÓN PARA CERTIFICACIÓN OSCE DE ACUERDO A LA LEY</p>
                                </div>
                                <div className="gap-3 items-center hidden lg:flex">
                                    <GiBlackBook className="text-xl" />
                                    <p>07 Sesiones en Vivo</p>
                                </div>
                            </div>
                            <div className="p-5 shadow-md">
                                <p className="font-bold text-blue-desarrollo text-xl">Contenido de sesiones</p>
                                <div>
                                    <AccordionLayout title="Acordeon 1" index={1}>
                                        Hola
                                    </AccordionLayout> 
                                    <AccordionLayout title="Acordeon 2" index={3}>
                                        Hola
                                    </AccordionLayout> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

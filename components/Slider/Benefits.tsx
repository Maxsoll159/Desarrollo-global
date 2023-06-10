import Image from "next/image"
import { TbFileCertificate } from "react-icons/tb"
export const Benefits = () => {
    return (
        <section className="bg-white shadow-lg w-full h-auto">
            <article className="container mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 p-5">
                <div className="flex items-center gap-3 mx-auto">



                        <TbFileCertificate className="text-[#485BFF] text-6xl" />
                        <div>
                            <span className="text-base md:text-lg">Certificado de Calidad</span>
                            <p className="text-sm md:text-3xl font-bold text-[#485BFF]">ISO 9001-2015</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 mx-auto">
                        <Image src="/img/beneficios2.webp" alt="Desarrollo Global - Certificacion Universitaria" width={100} height={104} className="w-[50px] md:w-auto" />
                        <div>
                            <span className="text-base md:text-lg">Respaldo</span>
                            <p className="text-sm md:text-3xl font-bold text-[#485BFF]">Universitario</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 mx-auto">
                        <Image src="/img/beneficios3.webp" alt="Desarrollo Global - Mas de 50000 alumnos capacitados" width={100} height={104} className="w-[50px] md:w-auto" />
                        <div>
                            <span className="text-base md:text-lg">Alumnos Capacitados</span>
                            <p className="text-sm md:text-3xl font-bold text-[#485BFF]">+ 50,000</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 mx-auto">
                        <Image src="/img/beneficios4.webp" alt="Desarrollo Global - Mas de 12 años capacitando" width={100} height={104} className="w-[50px] md:w-auto" />
                        <div>
                            <span className="text-base md:text-lg">Capacitando</span>
                            <p className="text-sm md:text-3xl font-bold text-[#485BFF]">+ 12 años</p>
                        </div>
                    </div>
                </div>

            </article>
        </section>
    )
}

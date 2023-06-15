import Image from "next/image"
export const Benefits = () => {
    return (
        <section className="bg-blue-desarrollo shadow-lg w-full h-auto">
            <article className="container mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 p-5 text-white">
                    <div className="flex items-center gap-3 mx-auto">
                        <Image src="/img/IconBeneficios1.webp" alt="Desarrollo Global - Certificacion Universitaria" width={100} height={104} className="w-[40px] md:w-auto" />
                        <div>
                            <p className="text-sm md:text-2xl font-bold">ISO 9001-2015</p>
                            <p className="text-[13px] md:text-[17px]">Servicio educativo</p>
                            <p className="text-[13px] md:text-[17px]">de calidad internacional</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 mx-auto">
                        <Image src="/img/IconBeneficios2.webp" alt="Desarrollo Global - Certificacion Universitaria" width={100} height={104} className="w-[50px] md:w-auto" />
                        <div>
                            <p className="text-sm md:text-2xl font-bold">FCE-UNMSM</p>
                            <p className="text-[13px] md:text-[17px]">Certificación avalada por</p>
                            <p className="text-[13px] md:text-[17px]">prestigiosa Universidad</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 mx-auto">
                        <Image src="/img/IconBeneficios3.webp" alt="Desarrollo Global - Mas de 50000 alumnos capacitados" width={100} height={104} className="w-[50px] md:w-auto" />
                        <div>
                            <p className="text-sm md:text-2xl font-bold">Mas de 50, 000</p>
                            <p className="text-[13px] md:text-[17px]">Profesionales han mejorado</p>
                            <p className="text-[13px] md:text-[17px]">sus habilidades con nosotros</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 mx-auto">
                        <Image src="/img/IconBeneficios4.webp" alt="Desarrollo Global - Mas de 12 años capacitando" width={100} height={104} className="w-[50px] md:w-auto" />
                        <div>
                            <p className="text-sm md:text-2xl font-bold">Más de 12 años</p>
                            <p className="text-[13px] md:text-[17px]">de experiencia en</p>
                            <p className="text-[13px] md:text-[17px]">capacitación de alta calidad</p>
                        </div>
                    </div>
                </div>

            </article>
        </section>
    )
}

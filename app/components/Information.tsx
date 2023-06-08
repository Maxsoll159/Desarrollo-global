import Image from "next/image"


export const Information = () => {

    return (
        <section className="p-5 md:py-20">
            <article className="container mx-auto">
                <h2 className="text-center text-blue-desarrollo font-bold text-4xl">Somos tu mejor elección en Capacitación Virtual</h2>
                <p className="text-center text-parrajos text-base mt-5">Con más de 12 años de experiencia en la impartición de capacitaciones virtuales, <br />
                    nos hemos consolidado como el aliado ideal para satisfacer tus necesidades de formación.</p>
                <div className="grid grid-cols-2 gap-5 mt-10 md:grid-cols-3">
                    <div className="flex items-center gap-3 mx-auto">
                        <Image src="/img/Medal.webp" alt="" width={62} height={62} className="w-[45px] h-[45px] md:w-[62px] md:h-auto" />
                        <div className="text-sm md:text-xl font-semibold w-full md:w-[256px]">
                            <p>Certificación</p>
                            <p>ISO 9001 - 2015</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 mx-auto">
                        <Image src="/img/Winner.webp" alt="" width={62} height={62}  className="w-[45px] h-[45px] md:w-[62px] md:h-auto" />
                        <div className="text-sm md:text-xl font-semibold w-full md:w-[256px]">
                            <p>Respaldo</p>
                            <p>Universitario</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 col-span-2 mx-auto md:col-span-1">
                        <Image src="/img/Qr.webp" alt="" width={62} height={62}  className="w-[45px] h-[45px] md:w-[62px] md:h-auto" />
                        <div className="text-sm md:text-xl font-semibold w-full md:w-[256px]">
                            <p>Certificado</p>
                            <p>Digital y Físico (*)</p>
                        </div>
                    </div>
                </div>

                <Image src="/img/lapto.webp" width={975} height={549} alt="Desarrollo Global - Informacion" className="w-full h-full md:w-[975px] md:h-auto my-5 mx-auto" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="flex items-start gap-3 mx-auto">
                        <Image src="/img/live.webp" alt="" width={62} height={62} className="w-[50px] md:w-[62px] md-h-[62px]" />
                        <div className="text-xl font-semibold">
                            <p>Clases</p>
                            <p>100% en vivo</p>
                            <p className="text-base w-[256px] font-normal text-parrajos">Accede a nuestras sesiones en vivo, repasa clases, descarga materiales y resuelve evaluaciones desde cualquier dispositivo.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 mx-auto">
                        <Image src="/img/Rocket.webp" alt="" width={62} height={62} className="w-[50px] md:w-[62px] md-h-[62px]"  />
                        <div className="text-xl font-semibold">
                            <p>Moderna</p>
                            <p>Platadorma Educativa</p>
                            <p className="text-base w-[256px] font-normal text-parrajos">Acceso 24 horas del día.
                                Nuestros acceso está disponible durante un año para que puedas aprender a tu propio ritmo.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 mx-auto">
                        <Image src="/img/Option.webp" alt="" width={62} height={62}  className="w-[50px] md:w-[62px] md-h-[62px]" />
                        <div className="text-xl font-semibold">
                            <p>Atención y Soporte</p>
                            <p>Personalizado</p>
                            <p className="text-base w-[256px] font-normal text-parrajos">Te brindamos soporte personalizado para que puedas resolver todas tus dudas y no interrumpas tu aprendizaje.</p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

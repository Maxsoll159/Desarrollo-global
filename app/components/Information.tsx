import Image from "next/image"


export const Information = () => {

    return (
        <section className="p-5 md:py-20">
            <article className="container mx-auto">
                <h2 className="text-center text-blue-desarrollo font-bold text-4xl">Somos tu mejor elección en Capacitación Virtual</h2>
                <p className="text-center text-[#374957] text-base mt-5">Con más de 12 años de experiencia en la impartición de capacitaciones virtuales, <br />
                    nos hemos consolidado como el aliado ideal para satisfacer tus necesidades de formación.</p>
                <div className="flex flex-col md:flex-row justify-center gap-0 items-center md:justify-center md:gap-24 mt-10">
                    <div className="flex items-center gap-3">
                        <Image src="/img/Medal.webp" alt="" width={62} height={62} />
                        <div className="text-xl font-semibold w-[256px]">
                            <p>Certificación</p>
                            <p>ISO 9001 - 2015</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Image src="/img/Winner.webp" alt="" width={62} height={62} />
                        <div className="text-xl font-semibold w-[256px]">
                            <p>Respaldo</p>
                            <p>Universitario</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Image src="/img/Qr.webp" alt="" width={62} height={62} />
                        <div className="text-xl font-semibold w-[256px]">
                            <p>Certificado</p>
                            <p>Digital y Físico (*)</p>
                        </div>
                    </div>
                </div>

                <div className="w-full h-[500px] bg-gray-200 mt-5 bg-laptop bg-no-repeat bg-cover">

                </div>
                
                <div className="flex flex-col md:flex-row gap-0 items-center justify-center md:gap-24 mt-10">
                    <div className="flex items-start gap-3">
                        <Image src="/img/live.webp" alt="" width={62} height={62} />
                        <div className="text-xl font-semibold">
                            <p>Clases</p>
                            <p>100% en vivo</p>
                            <p className="text-sm w-[256px] font-normal">Accede a nuestras sesiones en vivo, repasa clases, descarga materiales y resuelve evaluaciones desde cualquier dispositivo.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <Image src="/img/Rocket.webp" alt="" width={62} height={62} />
                        <div className="text-xl font-semibold">
                            <p>Moderna</p>
                            <p>Platadorma Educativa</p>
                            <p className="text-sm w-[256px] font-normal">Acceso 24 horas del día.
                                Nuestros acceso está disponible durante un año para que puedas aprender a tu propio ritmo.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <Image src="/img/Option.webp" alt="" width={62} height={62} />
                        <div className="text-xl font-semibold">
                            <p>Atención y Soporte</p>
                            <p>Personalizado</p>
                            <p className="text-sm w-[256px] font-normal">Te brindamos soporte personalizado para que puedas resolver todas tus dudas y no interrumpas tu aprendizaje.</p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

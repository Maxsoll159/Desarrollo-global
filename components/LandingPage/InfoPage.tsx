import Image from "next/image"


export const InfoPage = () => {
  return (
    <section>
        <article className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 w-full lg:w-[60%] mt-0 lg:-mt-11 gap-3 xl:gap-0">
                <div className="bg-white shadow-md rounded-md py-5 w-full xl:w-[203px] mx-auto text-blue-desarrollo">
                    <Image src="/img/calendarCur.webp" width={51} height={48} alt="Desarrollo Global - Calendario" className="mx-auto" />
                    <p className="font-bold text-center mt-2">Fecha de Inicio:</p>
                    <p className="text-center">25 de Agosto 2022</p>
                </div>
                <div className="bg-white shadow-md rounded-md py-5 w-full xl:w-[203px] mx-auto text-blue-desarrollo">
                    <Image src="/img/certificateCur.webp" width={54} height={47} alt="Desarrollo Global - Certificate" className="mx-auto"/>
                    <p className="font-bold text-center mt-2">Certificado con:</p>
                    <p className="text-center">Respaldo Universitario</p>
                </div>
                <div className="bg-white shadow-md rounded-md py-5 w-full xl:w-[203px] mx-auto text-blue-desarrollo">
                    <Image src="/img/clockCur.webp" width={47} height={47} alt="Desarrollo Global - Reloj" className="mx-auto" />
                    <p className="font-bold text-center mt-2">Cantidad de sesiones:</p>
                    <p className="text-center">7 Clases en vivo</p>
                </div>
                <div className="bg-white shadow-md rounded-md py-5 w-full xl:w-[203px] mx-auto text-blue-desarrollo">
                    <Image src="/img/signalCur.webp" width={61} height={46} alt="Desarrollo Global - Live" className="mx-auto"/>
                    <p className="font-bold text-center mt-2">Modalidad:</p>
                    <p className="text-center">En vivo</p>
                </div>
            </div>
        </article>
    </section>
  )
}

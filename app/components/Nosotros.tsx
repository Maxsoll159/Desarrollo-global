import Image from "next/image"


export const Nosotros = () => {
    //PONER EL UTOPLAY
    return (
        <section className="bg-white py-20">
            <article className="container mx-auto p-5 md:p-0">
                <div className="grid grid-cols-1">
                    <div className="w-full">
                        <iframe src="https://s3-desarrollo-global.s3.us-west-2.amazonaws.com/pagina-web/desarrolloglobal_info.mp4" width="640" height="360" allow="fullscreen" className="block mx-auto rounded-md w-full md:w-[640px]"></iframe>
                        <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:w-1/2 items-center mx-auto mt-5">
                            <Image src="/img/iso27001.webp" alt="Desarrollo Global - Iso27001 2015" width={256} height={141} className="mx-auto" />
                            <p className="text-center md:text-left w-full mx-auto text-parrajos font-semibold">La certificación ISO 9001-2015 es un sello de calidad que garantiza que la Escuela Desarrollo Global cumple con los estándares internacionales de calidad en la gestión de sus procesos y servicios.</p>
                        </div>
                        <p className="text-center font-bold mt-5">cod: 0125689</p>
                    </div>
                </div>
            </article>
        </section>
    )
}

import Image from "next/image"


export const InformationInHouse = () => {
    return (
        <section className="bg-[#f5f5f5]">
            <article className="container mx-auto">
                <div className="flex flex-col-reverse md:flex-row items-center px-5 pt-5 md:p-0">
                    <Image src="/img/chicaInhouse.webp" alt="Desarrollo Global - InHouse" width={326} height={484} className="mx-auto md:block" />
                    <div className="space-y-4 w-full md:w-1/2">
                        <h5 className="font-bold text-xl md:text-4xl text-center md:text-left">¿Quieres asegurarte de que tu entidad cumpla con el PDP 2023?</h5>
                        <p className="text-lg md:text-xl text-center md:text-left">¡Los programas IN HOUSE son la solución</p>
                        <button className="bg-green-500 py-3 px-10 rounded-md text-white font-semibold text-xl flex items-center gap-3 mx-auto md:m-0">
                            <Image src="/icons/whatsapp.svg" alt="Desarrollo Global - WhatsApp" width={30} height={30} />
                            Solicitalo Aqui
                        </button>
                    </div>
                </div>
            </article>
        </section>
    )
}

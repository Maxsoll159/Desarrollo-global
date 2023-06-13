import Image from 'next/image'
import { BsPatchCheck } from 'react-icons/bs'
export const Banner = ({ title }: { title: string }) => {
    return (
        <section className="bg-services bg-no-repeat bg-cover">
            <article className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center h-[600px] md:h-[calc(690px)]">
                    <div className='px-10'>
                        <h1 className='text-celeste font-bold text-4xl md:text-6xl w-full md:w-1/2'>{title} Especializados</h1>
                        <p className='text-white font-bold mt-5'>¿Porqué aprender con nosotros?</p>
                        <div className='space-y-2 mt-5'>
                            <p className='text-white flex items-center gap-3'><BsPatchCheck className='text-[#04eb84]' />12 años dictando cursos virtuales</p>
                            <p className='text-white flex items-center gap-3'><BsPatchCheck className='text-[#04eb84]' />Certificación de Calidad ISO 9001-2015</p>
                            <p className='text-white flex items-center gap-3'><BsPatchCheck className='text-[#04eb84]' />Certificación Universitaria</p>
                            <p className='text-white flex items-center gap-3'><BsPatchCheck className='text-[#04eb84]' />Aula Virtual “Plataforma Exclusiva”</p>
                            <p className='text-white flex items-center gap-3'><BsPatchCheck className='text-[#04eb84]' />El Mejor soporte para alumnos</p>
                            <p className='text-white flex items-center gap-3'><BsPatchCheck className='text-[#04eb84]' />Docentes especializados</p>
                        </div>
                        <button className='bg-[#2a50e4] rounded-md text-white px-10 mt-5 py-4'>Registrate y comienza a estudiar</button>
                    </div>
                    <div className='relative w-full h-full hidden lg:block'>
                        {
                            title === "Cursos" ? 
                            (<Image src="/img/cursoImg.webp" alt='Servicios - Desarrollo Global' width={450} height={627} className='absolute  bottom-0 -translate-x-1/2 left-1/2' />) : 
                            title === "Diplomas" ? (<Image src="/img/diplomasImg.webp" alt='Servicios - Desarrollo Global' width={851} height={627} className='absolute  bottom-0 -translate-x-1/2 left-1/2' />) : 
                            (<Image src="/img/diplomadosImg.webp" alt='Servicios - Desarrollo Global' width={488} height={627} className='w-[600px] absolute  bottom-0 -translate-x-1/2 left-1/2' />
                            )
                        }
                    </div>
                </div>
            </article>
        </section>
    )
}

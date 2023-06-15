import Image from 'next/image'
import { BsPatchCheck } from 'react-icons/bs'
export const Banner = ({ title }: { title: string }) => {
    return (
        <section className="bg-services bg-no-repeat bg-cover">
            <article className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-[600px] md:h-[calc(690px)] pt-[71.61px]">
                    <div className='px-10 lg:mt-0'>
                        <h1 className='text-white bg-blue-desarrollo pr-10 pl-3 rounded-tr-3xl font-bold text-6xl w-auto inline uppercase mt-20'>{title}</h1>
                        <p className='text-blue-desarrollo text-4xl font-bold mt-6'>Certifícate y logra tus objetivos</p>
                        <div className='bg-white text-blue-desarrollo p-2 rounded-md mt-5 text-xl xl:w-[75%] 2xlw-[55%]'>
                            <p>Encuentra tu curso ideal con el apoyo de nuestros asesores expertos.</p>
                        </div>
                       <Image src="/img/imageCer.webp" width={565} height={289} alt='Desarrollo Global - Certificado' className='mt-5' />
                    </div>
                    <div className='relative w-full h-full hidden lg:block'>
                        {
                            title === "Cursos" ?
                                (<Image src="/img/imageCurso.webp" alt='Servicios - Desarrollo Global' width={1072} height={720} className='absolute  bottom-0 -translate-x-1/2 left-1/2 h-[600px] w-full' />) :
                                title === "Diplomas" ? (<Image src="/img/imageDiplomas.webp" alt='Servicios - Desarrollo Global' width={1089} height={720} className='absolute  bottom-0 -translate-x-1/2 left-1/2 h-[600px] w-full' />) :
                                (<Image src="/img/imageDiplomados.webp" alt='Servicios - Desarrollo Global' width={1019} height={679} className='absolute  bottom-0 -translate-x-1/2 left-1/2 h-[600px] w-full' /> )
                        }
                    </div>
                </div>
            </article>
        </section>
    )
}

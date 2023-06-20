import { DataProustaValor } from '@/helpers/DataProuestaValor';
import Image from 'next/image';
import { BsPeople, BsShieldCheck, BsStar, BsDisplay } from 'react-icons/bs';
import { AiOutlineSolution } from 'react-icons/ai'
import { FiHeadphones } from 'react-icons/fi'
export const PropuestasLanding = () => {
    const iconsMap: { [key: string]: JSX.Element } = {
        "docente": <BsPeople className='text-5xl text-blue-desarrollo' />,
        "garantia": <BsShieldCheck className='text-5xl text-blue-desarrollo' />,
        "respaldo": <AiOutlineSolution className='text-5xl text-blue-desarrollo' />,
        "experiencia": <BsStar className='text-5xl text-blue-desarrollo' />,
        "plataforma": <BsDisplay className='text-5xl text-blue-desarrollo' />,
        "soporte": <FiHeadphones className='text-5xl text-blue-desarrollo' />
    }

    return (
        <>
            <section>
                <article className="container mx-auto">
                    <div className="w-full lg:w-[60%]">
                        <h3 className="text-blue-desarrollo font-bold text-4xl mt-10 text-center">Nuestra propuesta de valor</h3>
                        <div className='flex items-center justify-center gap-3 w-full mt-5'>
                            <Image src="/img/feeback.webp" width={65} height={43} alt='Desarrollo Global - Feedback' />
                            <p className='text-blue-desarrollo text-xl'>que nos diferencia</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 p-5 lg:p-5">
                            {
                                DataProustaValor.map((res) => (
                                    <div className='border border-blue-desarrollo rounded-md flex py-5 px-4 gap-3 items-start'>
                                        <div className='w-1/2'>
                                            {iconsMap[res.icon]}
                                        </div>
                                        <div>
                                            <p className='text-xl text-blue-desarrollo font-bold'>{res.name}</p>
                                            <p className='text-justify text-parrajos mt-2 text-[14px]'>{res.description}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </article>
            </section>
            <section>
                <article className='container mx-auto'>
                    <div className='w-full lg:w-[60%]'>
                        <h3 className='text-blue-desarrollo text-center font-bold text-4xl mt-10'>Certificación</h3>
                        <p className='text-blue-desarrollo text-center w-full md:w-1/2 block mx-auto mt-5'>Obtén una certificación reconocida en el mercado que respalde tus habilidades y conocimientos</p>
                        <div className='relative bg-gray-50 mt-5'>
                            <Image src="/img/certificacion.webp" width={686} height={533} alt='Desarrollo Global - Certificacion' className='mx-auto' />
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}

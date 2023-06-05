
"use client"
import { useSlider } from '@/hooks/useSlider';
import Image from 'next/image';
import Slider from 'react-slick';

export const Teachers = () => {
    const [settings] = useSlider({ valor: 5 })
    return (
        <section className="bg-blue-desarrollo py-20">
            <article className="container mx-auto">
                <h3 className="text-center text-white text-3xl font-bold">Aprende de los mejores docentes</h3>
                <p className="text-center text-white text-lg mb-10">Aprende de la mano con expertos y alcanza tus metas profesionales</p>
                <Slider {...settings} className='py-3'>
                    <div>
                        <div className='w-[280px] bg-white rounded-md'>
                            <div className='w-[280px] h-[265px] bg-gray-200 rounded-t-md'>
                            </div>
                            <div className='py-10'>
                                <p className='text-center font-bold text-xl'>CPC Marlom Prieto</p>
                                <p className='text-center font-semibold mt-5'>Especialista en <br /> Finanzas Publicas</p>
                                <Image  src="/img/estrellas.webp" alt='Desarrollo Global - Estrellas' width={112} height={16} className='mx-auto mt-5'/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='w-[280px] bg-white rounded-md'>
                            <div className='w-[280px] h-[265px] bg-gray-200 rounded-t-md'>
                            </div>
                            <div className='py-10'>
                                <p className='text-center font-bold text-xl'>CPC Marlom Prieto</p>
                                <p className='text-center font-semibold mt-5'>Especialista en <br /> Finanzas Publicas</p>
                                <Image src="/img/estrellas.webp" alt='Desarrollo Global - Estrellas' width={112} height={16} className='mx-auto mt-5' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='w-[280px] bg-white rounded-md'>
                            <div className='w-[280px] h-[265px] bg-gray-200 rounded-t-md'>
                            </div>
                            <div className='py-10'>
                                <p className='text-center font-bold text-xl'>CPC Marlom Prieto</p>
                                <p className='text-center font-semibold mt-5'>Especialista en <br /> Finanzas Publicas</p>
                                <Image src="/img/estrellas.webp" alt='Desarrollo Global - Estrellas' width={112} height={16} className='mx-auto mt-5' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='w-[280px] bg-white rounded-md'>
                            <div className='w-[280px] h-[265px] bg-gray-200 rounded-t-md'>
                            </div>
                            <div className='py-10'>
                                <p className='text-center font-bold text-xl'>CPC Marlom Prieto</p>
                                <p className='text-center font-semibold mt-5'>Especialista en <br /> Finanzas Publicas</p>
                                <Image src="/img/estrellas.webp" alt='Desarrollo Global - Estrellas' width={112} height={16} className='mx-auto mt-5' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='w-[280px] bg-white rounded-md'>
                            <div className='w-[280px] h-[265px] bg-gray-200 rounded-t-md'>
                            </div>
                            <div className='py-10'>
                                <p className='text-center font-bold text-xl'>CPC Marlom Prieto</p>
                                <p className='text-center font-semibold mt-5'>Especialista en <br /> Finanzas Publicas</p>
                                <Image src="/img/estrellas.webp" alt='Desarrollo Global - Estrellas' width={112} height={16} className='mx-auto mt-5' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='w-[280px] bg-white rounded-md'>
                            <div className='w-[280px] h-[265px] bg-gray-200 rounded-t-md'>
                            </div>
                            <div className='py-10'>
                                <p className='text-center font-bold text-xl'>CPC Marlom Prieto</p>
                                <p className='text-center font-semibold mt-5'>Especialista en <br /> Finanzas Publicas</p>
                                <Image src="/img/estrellas.webp" alt='Desarrollo Global - Estrellas' width={112} height={16} className='mx-auto mt-5' />
                            </div>
                        </div>
                    </div>
                </Slider>
            </article>
        </section>
    )
}

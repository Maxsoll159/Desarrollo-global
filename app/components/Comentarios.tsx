"use client"
import { useSlider } from "@/hooks/useSlider"
import Image from "next/image"
import dynamic from 'next/dynamic';
const Slider = dynamic(() => import('react-slick'))

export const Comentarios = () => {
    const [settings] = useSlider({ valor: 3 })
    return (
        <section className="bg-comentarios py-20">
            <article className="container mx-auto">
                <h4 className="font-bold text-white text-center text-3xl">Opiniones de nuestros alumnos</h4>
                <p className="text-center text-white mt-5 mb-10">Alumnos satisfecho</p>
                <Slider {...settings} className='p-5 md:py-3'>
                    <div>
                        <div className='w-full md:w-[456px] bg-white rounded-sm p-5'>
                            <Image src="/img/estrellas.webp" alt="Desarrollo Global - Calificacion" width={184} height={24} />

                            <p className="mt-5 text-center mb-5">“Me encanta como los cursos en gestión pública de esta plataforma están diseñados de manera clara y accesible.
                                Los materiales de estudios son muy completos y los profesores son expertos en el tema. Ha sido una experiencia de aprendizaje gratificante que ha impulsado mi carrera profesional.”</p>
                            <hr></hr>
                            <div className="flex mt-5 items-center gap-5">
                                <div className="w-[50px] h-[50px] rounded-full bg-gray-100"></div>
                                <div>
                                    <span className="font-bold">Javier Gonzales</span>
                                    <p className="text-sm">ABOGADO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='w-full md:w-[456px] bg-white rounded-sm p-5'>
                            <Image src="/img/estrellas.webp" alt="Desarrollo Global - Calificacion" width={184} height={24} />

                            <p className="mt-5 text-center mb-5">“Me encanta como los cursos en gestión pública de esta plataforma están diseñados de manera clara y accesible.
                                Los materiales de estudios son muy completos y los profesores son expertos en el tema. Ha sido una experiencia de aprendizaje gratificante que ha impulsado mi carrera profesional.”</p>
                            <hr></hr>
                            <div className="flex mt-5 items-center gap-5">
                                <div className="w-[50px] h-[50px] rounded-full bg-gray-100"></div>
                                <div>
                                    <span className="font-bold">Javier Gonzales</span>
                                    <p className="text-sm">ABOGADO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='w-full md:w-[456px] bg-white rounded-sm p-5'>
                            <Image src="/img/estrellas.webp" alt="Desarrollo Global - Calificacion" width={184} height={24} />

                            <p className="mt-5 text-center mb-5">“Me encanta como los cursos en gestión pública de esta plataforma están diseñados de manera clara y accesible.
                                Los materiales de estudios son muy completos y los profesores son expertos en el tema. Ha sido una experiencia de aprendizaje gratificante que ha impulsado mi carrera profesional.”</p>
                            <hr></hr>
                            <div className="flex mt-5 items-center gap-5">
                                <div className="w-[50px] h-[50px] rounded-full bg-gray-100"></div>
                                <div>
                                    <span className="font-bold">Javier Gonzales</span>
                                    <p className="text-sm">ABOGADO</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='w-full md:w-[456px] bg-white rounded-sm p-5'>
                            <Image src="/img/estrellas.webp" alt="Desarrollo Global - Calificacion" width={184} height={24} />

                            <p className="mt-5 text-center mb-5">“Me encanta como los cursos en gestión pública de esta plataforma están diseñados de manera clara y accesible.
                                Los materiales de estudios son muy completos y los profesores son expertos en el tema. Ha sido una experiencia de aprendizaje gratificante que ha impulsado mi carrera profesional.”</p>
                            <hr></hr>
                            <div className="flex mt-5 items-center gap-5">
                                <div className="w-[50px] h-[50px] rounded-full bg-gray-100"></div>
                                <div>
                                    <span className="font-bold">Javier Gonzales</span>
                                    <p className="text-sm">ABOGADO</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </Slider>
            </article>
        </section>
    )
}

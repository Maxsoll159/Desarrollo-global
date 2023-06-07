"use client"

import dynamic from 'next/dynamic';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSlider } from "@/hooks/useSlider"
import { CardComentarios } from "@/components/Cards/CardComentarios";
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
                        <CardComentarios />
                    </div>
                    <div>
                        <CardComentarios />
                    </div>
                    <div>
                        <CardComentarios />
                    </div>
                    <div>
                        <CardComentarios />
                    </div>
                </Slider>
            </article>
        </section>
    )
}

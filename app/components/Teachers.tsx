"use client"

import dynamic from 'next/dynamic';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSlider } from '@/hooks/useSlider';
import { CardTeacher } from '@/components/Cards/CardTeacher';
const Slider = dynamic(() => import('react-slick'))

export const Teachers = () => {
    const [settings] = useSlider({ valor: 5 })
    return (
        <section className="bg-blue-desarrollo py-20">
            <article className="container mx-auto">
                <h3 className="text-center text-white text-3xl font-bold">Aprende de los mejores docentes</h3>
                <p className="text-center text-white text-lg mb-10">Aprende de la mano con expertos y alcanza tus metas profesionales</p>
                <Slider {...settings} className='p-5 md:py-3'>
                    <div>
                        <CardTeacher />
                    </div>
                    <div>
                        <CardTeacher />
                    </div>
                    <div>
                        <CardTeacher />
                    </div>
                    <div>
                        <CardTeacher />
                    </div>
                    <div>
                        <CardTeacher />
                    </div>
                    <div>
                        <CardTeacher />
                    </div>
                </Slider>
            </article>
        </section>
    )
}

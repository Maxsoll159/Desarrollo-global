"use client"
import dynamic from 'next/dynamic';
const Slider = dynamic(() => import('react-slick'))
import { Card } from "@/components/Cards/Card"
import { useSlider } from '@/hooks/useSlider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const LisrtarCursos = () => {
  const [settings] = useSlider({ valor: 4 })
  return (
    <section className="bg-blue-desarrollo">
      <article className="container mx-auto p-5 md:py-10">
        <p className="text-center text-white font-bold text-3xl">Lista de Próximos Inicios</p>
        <p className="text-center text-white mb-10">“¡Mantente al tanto de nuestros prócimos inicios y no te pierdas la oportunidad de formarte con los mejores!”</p>
        <Slider {...settings} className='p-5 md:py-3'>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
        </Slider>


      </article>
    </section>
  )
}

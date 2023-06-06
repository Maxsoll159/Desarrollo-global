"use client"
import Slider from 'react-slick';
import { Card } from "@/components/Cards/Card"
import { useSlider } from '@/hooks/useSlider';
export const LisrtarCursos = () => {
  const [settings] = useSlider({ valor: 4 })
  return (
    <section className="bg-blue-desarrollo">
      <article className="container mx-auto py-10">
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

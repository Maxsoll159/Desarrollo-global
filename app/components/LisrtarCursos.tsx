"use client"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "@/components/Cards/Card"


export const LisrtarCursos = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000
  };
  return (
    <section className="bg-blue-desarrollo">
      <article className="container mx-auto py-10">
        <p className="text-center text-white font-bold text-3xl">Lista de Próximos Inicios</p>
        <p className="text-center text-white mb-10">“¡Mantente al tanto de nuestros prócimos inicios y no te pierdas la oportunidad de formarte con los mejores!”</p>
        <Slider {...settings} className='py-3'>
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

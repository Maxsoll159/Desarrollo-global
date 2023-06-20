"use client"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSlider } from "@/hooks/useSlider"
import Image from "next/image"
import Slider from "react-slick"

export const ComentariosLading = () => {
  const [settings] = useSlider({ valor: 1, valor2: 1 })
  return (
    <section>
      <article className="container mx-auto">
        <div className="w-full lg:w-[60%] py-5">
          <h5 className="text-blue-desarrollo text-3xl font-bold text-center">Lo que nuestros alumnos dicen</h5>
          <div className="text-blue-desarrollo flex justify-center gap-3 items-center mt-5">
            <Image src="/img/feeback.webp" width={65} height={43} alt='Desarrollo Global - Feedback' />
            <p className="text-xl">Alumnos satisfechos</p>
          </div>
          <div className="bg-slate-100 p-10 mt-10">
            <Slider {...settings} className='py-3'>
              <div>
                <div className="bg-white rounded-md p-10 shadow-xl">
                  <Image src="/img/estrellas.webp" width={112} height={16} alt="Desarrollo Global - Calificacion" />
                  <p className="mt-5">Los cursos en gestión pública que encontré en esta página web han sido realmente enriquecedores. Gracias a ellos, he adquirido conocimientos sólidos y herramientas prácticas que me han ayudado a mejorar mi desempeño en mi trabajo. ¡Altamente recomendados!</p>
                  <div className="flex items-center gap-3 mt-5">
                    <div className="w-[60px] h-[60px] bg-slate-300 rounded-full"></div>
                    <div>
                      <p className="font-bold">Martin Valverde</p>
                      <p>Curso SIAF 2023</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white rounded-md p-10 shadow-xl">
                  <Image src="/img/estrellas.webp" width={112} height={16} alt="Desarrollo Global - Calificacion" />
                  <p className="mt-5">Los cursos en gestión pública que encontré en esta página web han sido realmente enriquecedores. Gracias a ellos, he adquirido conocimientos sólidos y herramientas prácticas que me han ayudado a mejorar mi desempeño en mi trabajo. ¡Altamente recomendados!</p>
                  <div className="flex items-center gap-3 mt-5">
                    <div className="w-[60px] h-[60px] bg-slate-300 rounded-full"></div>
                    <div>
                      <p className="font-bold">Martin Valverde</p>
                      <p>Curso SIAF 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </article>
    </section>
  )
}

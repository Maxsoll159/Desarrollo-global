"use client"
import { useSlider } from '@/hooks/useSlider';
import Image from 'next/image';
import Slider from 'react-slick';
export const Empresas = () => {
  const [settings] = useSlider({ valor: 5 })
  return (
    <section className="bg-[#0e2faa]">
      <article className="container mx-auto">
        <div className="p-5">
          <p className="text-center text-white font-semibold text-xl">La confianza de nuestros clientes es nuestra mayor satisfacción</p>
        </div>
        <Slider {...settings} className='py-3'>
          <div>
            <Image src="/img/empresa1.webp" alt="Desarrollo Global - Empresa 1" width={260} height={112} />
          </div>
          <div>
            <Image src="/img/empresa2.webp" alt="Desarrollo Global - Empresa 1" width={260} height={112} />
          </div>
          <div>
            <Image src="/img/empresa3.webp" alt="Desarrollo Global - Empresa 1" width={260} height={112} />
          </div>
          <div>
            <Image src="/img/empresa4.webp" alt="Desarrollo Global - Empresa 1" width={260} height={112} />
          </div>
          <div>
            <Image src="/img/empresa5.webp" alt="Desarrollo Global - Empresa 1" width={260} height={112} />
          </div>
          <div>
            <Image src="/img/empresa1.webp" alt="Desarrollo Global - Empresa 1" width={260} height={112} />
          </div>
          <div>
            <Image src="/img/empresa4.webp" alt="Desarrollo Global - Empresa 1" width={260} height={112} />
          </div>
        </Slider>
      </article>
    </section>
  )
}

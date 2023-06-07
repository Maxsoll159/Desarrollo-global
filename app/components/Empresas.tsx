"use client"

import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from 'next/dynamic';
import { useSlider } from '@/hooks/useSlider';
const Slider = dynamic(() => import('react-slick'))

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
            <Image src="/img/empresa1.webp" alt="Desarrollo Global - Empresa 1" width={260} height={112} className='mx-auto w-full md:w-auto' />
          </div>
          <div>
            <Image src="/img/empresa2.webp" alt="Desarrollo Global - Empresa 1" width={260} height={112} className='mx-auto w-full md:w-auto' />
          </div>
          <div>
            <Image src="/img/empresa3.webp" alt="Desarrollo Global - Empresa 1" width={260} height={112} className='mx-auto w-full md:w-auto' />
          </div>
          <div>
            <Image src="/img/empresa4.webp" alt="Desarrollo Global - Empresa 1" width={260} height={112} className='mx-auto w-full md:w-auto' />
          </div>
          <div>
            <Image src="/img/empresa5.webp" alt="Desarrollo Global - Empresa 1" width={260} height={112} className='mx-auto w-full md:w-auto' />
          </div>
          <div>
            <Image src="/img/empresa1.webp" alt="Desarrollo Global - Empresa 1" width={260} height={112} className='mx-auto w-full md:w-auto' />
          </div>
          <div>
            <Image src="/img/empresa4.webp" alt="Desarrollo Global - Empresa 1" width={260} height={112} className='mx-auto w-full md:w-auto' />
          </div>
        </Slider>
      </article>
    </section>
  )
}

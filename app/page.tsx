import dynamic from 'next/dynamic';
import Image from 'next/image'

const Opciones = dynamic(() => import('./components/Opciones'));
const LisrtarCursos = dynamic(() => import('./components/LisrtarCursos'));
const Information = dynamic(() => import('./components/Information'));
const Teachers = dynamic(() => import('./components/Teachers'));
const Nosotros = dynamic(() => import('./components/Nosotros'));
const Comentarios = dynamic(() => import('./components/Comentarios'));
const InformationInHouse = dynamic(() => import('./components/InformationInHouse'));
const Empresas = dynamic(() => import('./components/Empresas'));

import { Benefits } from '@/components/Slider/Benefits'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <>
      <main className='bg-fondo bg-no-repeat bg-cover'>
        <article className='container mx-auto h-[calc(100vh_-_145px)]'>
          <div className='grid grid-cols-1 md:grid-cols-2 items-center h-full w-full'>
            <div className='p-5 md:p-0'>
              <h1 className='text-[#ffca00] font-black text-xl md:text-left md:text-5xl w-full lg:w-[90%] xl:w-full'>OBTÉN LA CERTIFICACION QUE NECESITAS PARA</h1>
              <p className='text-white text-xl md:text-5xl mt-2 font-sans font-black'>TRABAJA EN EL ESTADO</p>
              <p className='text-white text-xl mt-2 w-[90%] font-sans'>“Únete a nuestra comunidad de más de 50.000 alumnos capacitados y certificados.”</p>
            </div>
            <div className='hidden md:block'>
              <div className='bg-rectangulo mx-auto w-[600px] h-[447px] 2xl:h-[557px] bg-contain bg-no-repeat relative'>
                <Image src="/img/icon1.webp" alt='SIAF - Desarrollo Global' width={82} height={82} className='absolute top-[26%] -left-2 flotante' />
                <Image src="/img/icon2.webp" alt='SIGA - Desarrollo Global' width={102} height={102} className='absolute top-1/2 -left-28 flotante' />
                <Image src="/img/icon3.webp" alt='SIAF - Desarrollo Global' width={96} height={96} className='absolute bottom-[10%] -left-10 flotante' />
                <Image src="/img/icon4.webp" alt='SIAF - Desarrollo Global' width={87} height={85} className='absolute top-[30%] right-[40%] flotante' />
                <Image src="/img/icon5.webp" alt='SIAF - Desarrollo Global' width={85} height={85} className='absolute top-1/2 right-[30%] flotante' />
                <Image src="/img/icon6.webp" alt='SIAF - Desarrollo Global' width={106} height={106} className='absolute top-[40%] right-0 flotante' />
                <Image src="/img/clasesVivo.webp" alt='SIAF - Desarrollo Global' width={204} height={42} className='absolute bottom-[25%] right-0' />
                <Image src="/img/icon7.webp" alt='SIAF - Desarrollo Global' width={74} height={74} className='absolute bottom-0 right-[20%] flotante' />
              </div>
            </div>
          </div>
        </article>
      </main>
      <Benefits />
      <Opciones />
      <LisrtarCursos />
      <Information />
      <Teachers />
      <Nosotros /> 
      <Comentarios />
      <InformationInHouse />
      <Empresas />
    </>
  )
}

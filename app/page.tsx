import Image from 'next/image'
import { Comentarios, Contactenos, Empresas, Information, InformationInHouse, LisrtarCursos, Nosotros, Opciones, Teachers } from './components'
import { Benefits } from '@/components/Slider/Benefits'
export default function Home() {
  return (
    <>
      <main className=''>
        <article className='container mx-auto  h-[600px] md:h-[calc(800px)]'>
          <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center h-full w-full'>
            <div className='p-5 lg:p-0'>
              <h1 className='text-blue-desarrollo font-black text-xl md:text-left md:text-5xl 2xl:text-6xl w-full lg:w-[100%]'>Obtén la <span className='text-[#1DD8FF]'>Certificación </span> que necesitas para trabajar en el estado</h1>
              <p className='text-blue-desarrollo text-2xl w-[70%] mt-5'>Únete a nuestra comunidad de más de 50,000 alumnos capacitados y certificados.</p>
              <div className='flex gap-2 mt-5'>
                <button className='bg-white text-blue-desarrollo rounded-sm text-lg px-5 py-2 hover:bg-blue-desarrollo hover:text-white'>Cursos</button>
                <button className='bg-white text-blue-desarrollo rounded-sm text-lg px-5 py-2 hover:bg-blue-desarrollo hover:text-white'>Diplomas</button>
                <button className='bg-white text-blue-desarrollo rounded-sm text-lg px-5 py-2 hover:bg-blue-desarrollo hover:text-white'>InHouse</button>
              </div>
            </div>
            <div className='hidden md:hidden lg:block relative w-full h-full'>
              <div className='rounded-full w-[496px] h-[496px] relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                <Image src="/img/ballFondo.webp" width={496} height={496} alt='Desarrollo Global - FondoBall' />
                <Image src="/img/icons1.webp" width={76} height={76} alt='Desarrollo Global - SEACE' className='absolute top-1/2 -left-6 z-50' />
                <Image src="/img/icons2.webp" width={76} height={76} alt='Desarrollo Global - SEACE' className='absolute top-[20%] -left-2 z-50' />
                <Image src="/img/icons3.webp" width={76} height={76} alt='Desarrollo Global - SEACE' className='absolute top-0 left-[20%] z-50' />
                <Image src="/img/icons4.webp" width={76} height={76} alt='Desarrollo Global - SEACE' className='absolute top-[10%] right-[10%] z-50' />
                <Image src="/img/icons5.webp" width={76} height={76} alt='Desarrollo Global - SEACE' className='absolute top-[30%] -right-2 z-50' />
                <Image src="/img/icons6.webp" width={76} height={76} alt='Desarrollo Global - SEACE' className='absolute top-1/2 -right-3 z-50' />
                <Image src="/img/icons7.webp" width={76} height={76} alt='Desarrollo Global - SEACE' className='absolute bottom-[15%] -right-0 z-50' />
              </div>
              <Image src="/img/fondoHombre.webp" width={954} height={703} alt='Desarrollo Global - FondoBall' className='absolute w-[754px] bottom-0 left-[60%] -translate-x-1/2 z-1' />
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
      <Empresas />
      <Contactenos />
    </>
  )
}

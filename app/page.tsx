import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-fondo bg-no-repeat bg-cover '>
      <article className='container mx-auto h-screen'>
        <div className='grid grid-cols-2 items-center h-full w-full'>
          <div className=''>
            <h1 className='text-[#1dd8ff] font-bold xl:text-5xl 2xl:text-6xl w-[90%]'>Obtén la certificación que necesitas para</h1>
            <p className='text-white xl:text-5xl 2xl:text-6xl mt-2 font-light font-sans'>Trabajar en el estado</p>
            <p className='text-white text-base mt-2 xl:w-[90%] 2xl:w-[75%] font-sans'>“Únete a nuestra comunidad de más de 50.000 alumnos capacitados y certificados.”</p>
          </div>
          <div className=''>
            <div className='bg-rectangulo mx-auto w-[600px] h-[447px] 2xl:h-[557px] bg-contain bg-no-repeat relative'>
              <Image src="/img/icon1.webp" alt='SIAF - Desarrollo Global' width={82} height={82} className='absolute top-[26%] -left-2 flotante' />
              <Image src="/img/icon2.webp" alt='SIGA - Desarrollo Global' width={102} height={102} className='absolute top-1/2 -left-28 flotante' />
              <Image src="/img/icon3.webp" alt='SIAF - Desarrollo Global' width={96} height={96} className='absolute bottom-[10%] -left-10 flotante' />
              <Image src="/img/12años.webp" alt='SIAF - Desarrollo Global' width={304} height={99} className='absolute -bottom-20 -left-24' />
              <Image src="/img/Alumnos.webp" alt='SIAF - Desarrollo Global' width={304} height={99} className='absolute top-0 right-0' />
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
  )
}

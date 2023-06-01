import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-fondo'>
      <article className='container mx-auto h-[80vh]'>
        <div className='grid grid-cols-2 items-center pt-20 h-full w-full'>
          <div className=''>
            <h1 className='text-[#1dd8ff] font-bold xl:text-5xl 2xl:text-6xl w-[90%]'>Obtén la certificación que necesitas para</h1>
            <p className='text-white xl:text-5xl 2xl:text-6xl mt-2 font-light font-sans'>Trabajar en el estado</p>
            <p className='text-white text-base mt-2 xl:w-[90%] 2xl:w-[75%] font-sans'>“Únete a nuestra comunidad de más de 50.000 alumnos capacitados y certificados.”</p>
          </div>
          <div className='relative'>
            <div className='bg-rectangulo xl:w-[340px] 2xl:w-[370px] h-[520px] bg-contain bg-no-repeat mx-auto'>
              <Image src="/img/chica.webp" alt='Chica - Desarrollo Global' width={748} height={465} className='absolute bottom-0 xl:-left-3 2xl:left-0' />
              <Image src="/img/icon1.webp" alt='SIAF - Desarrollo Global' width={82} height={82} className='absolute top-20 left-44 animate-bounce' />
              <Image src="/img/icon2.webp" alt='SIGA - Desarrollo Global' width={102} height={102} className='absolute top-52 left-16 animate-bounce' />
              <Image src="/img/icon3.webp" alt='SIAF - Desarrollo Global' width={96} height={96} className='absolute bottom-20 left-32 animate-bounce' />
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}

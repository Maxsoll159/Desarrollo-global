import Image from 'next/image';
export const CardTeacher = () => {
    return (
        <div className='w-full md:w-[280px] bg-white rounded-md'>
            <div className='w-full md:w-[280px] h-[265px] bg-gray-200 rounded-t-md'>
            </div>
            <div className='py-10'>
                <p className='text-center font-bold text-xl'>CPC Marlom Prieto</p>
                <p className='text-center font-semibold mt-5'>Especialista en <br /> Finanzas Publicas</p>
                <Image src="/img/estrellas.webp" alt='Desarrollo Global - Estrellas' width={112} height={16} className='mx-auto mt-5' />
            </div>
        </div>
    )
}

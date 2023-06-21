
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BsCreditCard, BsWhatsapp } from 'react-icons/bs'
import {MdAdsClick} from 'react-icons/md'
export const CardInfo = () => {
    return (
        <div className="w-full md:w-[430px] mx-auto static lg:fixed mt-0 lg:mt-10 shadow-md rounded-tl-lg rounded-tr-lg">
            <div className="w-full h-[252px] bg-yellow-300 rounded-tl-lg rounded-tr-lg  ">
            </div>
            <div className="bg-white p-5">
                <div className='flex items-center gap-3'>
                    <AiOutlineClockCircle className='text-6xl' />
                    <div>
                        <p className='font-bold text-2xl'>Matriculate AHORA</p>
                        <p>con un descuento especial</p>
                    </div>
                </div>
                <div className='flex items-center justify-between mt-3'>
                    <div>
                        <p className='font-semibold'>PRECIO OFERTA</p>
                        <p className='font-extrabold text-[#428dff] text-4xl'>S/ 397<span className='font-normal text-lg'>.00</span></p>
                        <p className='font-normal text-xs md:text-base'>PRECIO NORMAL: S/ 490.00</p>
                    </div>
                    <div className='bg-yellow-300 rounded-md p-4'>
                        <p className='font-black text-4xl'>25%</p>
                        <p className='text-end text-sm'>Descuento</p>
                    </div>
                </div>
                <form action="" className='space-y-3 mt-5'>
                    <input type="text" className='px-3 py-2 border rounded-md placeholder:font-light w-full' placeholder='Nombre completo' />
                    <input type="text" className='px-3 py-2 border rounded-md placeholder:font-light w-full' placeholder='Ingresa tu correo electrónico' />
                    <input type="text" className='px-3 py-2 border rounded-md placeholder:font-light w-full' placeholder='Ingresa tu numero de WhatsApp' />
                    <div className="flex items-center mb-4">
                        <input type="checkbox" className="text-blue-600 border border-red-500 focus:ring-blue-500 rounded-full" />
                        <label className="ml-2 text-sm font-light">Acepto política privacidad y datos</label>
                    </div>
                    <button className='bg-blue-desarrollo flex items-center justify-center text-white rounded-md w-full py-3 mt-2 gap-2 text-lg'><MdAdsClick className='text-2xl' />Solicitar Informacion</button>
                </form>
                <div className='mt-5 font-semibold grid grid-cols-2 gap-5'>
                    <button className='border border-[#44BF71] text-[#44BF71] flex items-center justify-center rounded-md py-3 w-full gap-2 hover:bg-[#44BF71] hover:text-white transition-all'><BsWhatsapp className='text-xl' />WhatsApp</button>
                    <button className='border text-parrajos flex items-center justify-center rounded-md py-3 px-5 w-full text-center gap-2 hover:bg-parrajos hover:text-white transition-all'><BsCreditCard className='text-xl'/>Pagar</button>
                </div>
            </div>
        </div>
    )
}


import Image from 'next/image'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { BsWhatsapp, BsCreditCard } from 'react-icons/bs'
import {FiLock} from 'react-icons/fi'
export const FormasPago = () => {
    return (
        <section>
            <article className="container mx-auto">
                <div className="w-full lg:w-[60%]">
                    <h4 className="text-center font-bold text-4xl text-blue-desarrollo mt-10">Inversión y Formas de Pago</h4>
                    <p className="text-blue-desarrollo text-center w-full lg:w-1/2 mt-5 block mx-auto">Descubre cómo puedes financiar tu capacitación y hacer una inversión en tu futuro profesional</p>
                    <div className="bg-gray-100 rounded-md border grid grid-cols-1 md:grid-cols-2 p-5 mt-5">
                        <div className='p-5 border md:border-r-2 md:border-black border-t-0 border-s-0 border-b-0'>
                            <p className="font-bold text-2xl text-blue-desarrollo">Invierta en su futuro y</p>
                            <p className="font-bold text-2xl ">ahorre hasta un 25% con el precio pronto pago</p>
                            <span className="block my-3 text-lg">Precio para persona natural</span>
                            <div className="bg-[#ffe001] p-5 rounded-md border border-black">
                                <div className='flex gap-2 font-bold items-center text-2xl'>
                                    <AiOutlineDollarCircle className='w-8 h-8' />
                                    <div className='flex justify-between w-full'>
                                        <p className='text-lg lg:text-xl'>Pronto pago:</p>
                                        <p className='text-lg lg:text-xl'>S/ 397.00</p>
                                    </div>
                                </div>
                                <span className='ms-0 lg:ms-10'>Disponible hasta el 05 de junio</span>
                            </div>
                            <div className="bg-white text-blue-desarrollo p-5 rounded-md border mt-5">
                                <div className='flex gap-2 font-bold items-center text-2xl'>
                                    <AiOutlineDollarCircle className='w-8 h-8' />
                                    <div className='flex justify-between w-full'>
                                        <p className='text-lg lg:text-xl'>Precio Normal:</p>
                                        <p className='text-lg lg:text-xl'>S/ 397.00</p>
                                    </div>
                                </div>
                                <span className='ms-0 lg:ms-10'>Después del 06 de junio</span>
                            </div>
                            <p className='mt-3 text-lg'>Contáctenos para obtener información sobre por tarifas corporativas e inscripción con O/S.</p>
                            <button className='bg-[#44bf71] text-white flex items-center rounded-md p-5 w-full text-xl justify-center gap-3 mt-3 '>
                                <BsWhatsapp className='text-2xl' />
                                <p>Contactar con asesor</p>
                            </button>
                        </div>
                        <div className='p-5'>
                            <p className='font-bold text-2xl'>Pago por Aplicativo</p>
                            <p className='text-blue-desarrollo mt-2'>Puedes pagar usando medios digitales como yape, plin o transferencia.</p>
                            <div className='flex gap-3 mt-3'>
                                <Image src="/img/yape.webp" width={86} height={86} alt='Desarrollo Global - Yape' />
                                <Image src="/img/plin.webp" width={86} height={86} alt='Desarrollo Global - Plin' />
                            </div>
                            <p className='font-bold text-2xl mt-3'>Pago en linea con tarjeta crédito y/o debito</p>
                            <p className='text-parrajos text-justify mt-3'>Aceptamos IZIPAY y PAGO EFECTIVO, dos opciones confiables y seguras para que puedas realizar tus transacciones con total tranquilidad</p>

                            <button className='bg-blue-desarrollo text-white w-full p-5 rounded-md flex items-center justify-center gap-3 font-bold text-lg mt-3'>
                                <BsCreditCard className='text-3xl' />
                                <p>Pagar con tarjeta</p>
                            </button>

                            <div className='flex gap-3 items-center mt-3'>
                                <FiLock className='text-3xl' />
                                <p className='text-parrajos'>Pagos seguros encriptados con seguridad SSL</p>
                            </div>
                            <div className='flex items-center mt-3 justify-center gap-3'>
                                <Image src="/img/visa.webp" width={59} height={19} alt='Desarrollo Global - Visa' />
                                <Image src="/img/mastercard.webp" width={31} height={19} alt='Desarrollo Global - Visa' />
                                <Image src="/img/americaexpress.webp" width={32} height={19} alt='Desarrollo Global - Visa' />
                                <Image src="/img/dinnersClub.webp" width={74} height={19} alt='Desarrollo Global - Visa' />
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

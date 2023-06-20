
import {BsWhatsapp} from 'react-icons/bs'
export const AtencionPage = () => {
  return (
    <section>
        <article className="container mx-auto">
            <div className="text-white w-full lg:w-[60%] bg-blue-desarrollo my-10 p-5 rounded-md">
                <h4 className="font-bold text-3xl text-center">¿Prefieres hablar por Whatsapp?</h4>
                <p className="text-center w-full lg:w-1/2 block mx-auto mt-3">Nuestros asesores están disponibles para brindarte asesoría personalizada. ¡Comunicate con nosotros ahora mismo!</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
                    <div className="bg-white rounded-md p-5 flex items-center gap-5 justify-center">
                        <div className="w-[93px] h-[93px] bg-slate-300 rounded-full"></div>
                        <div>
                            <div className="bg-blue-desarrollo text-white rounded-full font-bold px-3">
                                <span>Laura Centeno</span>
                            </div>
                            <p className="text-black mt-1 font-bold">Asesora Académica</p>
                            <div className='flex text-[#25D366] font-bold items-center text-2xl gap-2'>
                                <BsWhatsapp />
                                <p>933 179 895</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-md p-5 flex items-center gap-5 justify-center">
                        <div className="w-[93px] h-[93px] bg-slate-300 rounded-full"></div>
                        <div>
                            <div className="bg-blue-desarrollo text-white rounded-full font-bold px-3">
                                <span>Laura Centeno</span>
                            </div>
                            <p className="text-black mt-1 font-bold">Asesora Académica</p>
                            <div className='flex text-[#25D366] font-bold items-center text-2xl gap-2'>
                                <BsWhatsapp />
                                <p>933 179 895</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <p className='text-center font-semibold'>Horario de atención: </p>
                    <p className='text-center font-semibold'>Lunes a viernes de 9:00 am - 18:30 pm</p>
                    <p className='text-center font-semibold'>Sàbados de 9:00 am - 1:30 pm</p>
                </div>
            </div>
        </article>
    </section>
  )
}

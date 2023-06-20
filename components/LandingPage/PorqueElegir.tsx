
import { TfiBook } from 'react-icons/tfi'
export const PorqueElegir = () => {
    return (
        <section>
            <article className="container mx-auto">
                <div className="w-full lg:w-[60%]">
                    <div className="border rounded-lg p-6 mt-10">
                        <p className="font-bold text-xl mb-3">¿Por qué elegir nuestro programa de capacitación?</p>
                        <p className="text-justify">Te capacitamos con temas actualizados, para que apruebes con éxito tu exámen de certificación por niveles. Así mismo te brindamos las pautas necesarias para renovar tu certificado a un nivel superior. Te ofrecemos el desarrollo del curso con una metodología a base de: SIMULACROS Y PRUEBAS DE SALIDA EN CADA SESIÓN ADEMÁS DE SIMULACRO FINAL TIPO OSCE EN VIVO.</p>
                    </div >
                    <div className="grid grid-cols-2 lg:grid-cols-4 mt-5">
                        <div className='flex p-5 gap-5 items-center justify-center w-full bg-slate-100 hover:bg-[#428dff] hover:text-white rounded-tl-xl rounded-bl-xl'>
                            <div className='w-[52px] h-[52px] bg-gray-200 rounded-md'></div>
                            <p className='font-semibold'>Contenido Tematico</p>
                        </div>
                        <div className='flex p-5 gap-5 items-center justify-center w-full bg-slate-100 hover:bg-[#428dff] hover:text-white '>
                            <div className='w-[52px] h-[52px] bg-gray-200 rounded-md'></div>
                            <p className='font-semibold'>Nuestos Profesores</p>
                        </div>
                        <div className='flex p-5 gap-5 items-center justify-center w-full bg-slate-100 hover:bg-[#428dff] hover:text-white '>
                            <div className='w-[52px] h-[52px] bg-gray-200 rounded-md'></div>
                            <p className='font-semibold'>Beneficios Exclusivos</p>
                        </div>
                        <div className='flex p-5 gap-5 items-center justify-center w-full bg-slate-100 hover:bg-[#428dff] hover:text-white rounded-tr-xl rounded-br-xl'>
                            <div className='w-[52px] h-[52px] bg-gray-200 rounded-md'></div>
                            <p className='font-semibold'>Como pagar <br /> en Linea</p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

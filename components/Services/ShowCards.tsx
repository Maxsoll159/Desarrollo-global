import { BsSearch } from 'react-icons/bs'
import { CardServicio } from './CardServicio'
export const ShowCards = () => {
    return (
        <section>
            <article className="container mx-auto">
                <div className="w-full py-10">
                    <h2 className="text-blue-desarrollo text-center font-bold text-xl">
                        ¿EN QUÉ DIPLOMA DESEAS ESPECIALIZARTE?
                    </h2>
                    <p className="text-center text-parrajos">Tenemos más de 50,000 alumnos capacitados</p>
                    <div className="border flex items-center justify-between flex-col md:flex-row p-5 mt-10 gap-5">

                        <div className='flex items-center gap-5 flex-col lg:flex-row'>
                            <p className="font-bold">Mostrando 1-12 de 64 resultados</p>
                            <form action="">
                                <div className='flex text-parrajos items-center p-2 gap-2 border rounded-md'>
                                    <BsSearch />
                                    <input type="text" className='outline-none' placeholder='Buscar' />
                                </div>
                            </form>
                        </div>
                        <div>
                            <form action="">
                                <div className='flex text-parrajos items-center gap-3'>
                                    <p>ORDENAR POR</p>
                                    <select name="" id="" className='border-none appearance-none outline-none text-blue-desarrollo font-bold'>
                                        <option value="" disabled>Elegir</option>
                                        <option value="" >Menor precio</option>
                                        <option value="" >Mayor Precio</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className='p-3'>
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-10 gap-5'>
                            <CardServicio />
                            <CardServicio />
                            <CardServicio />
                            <CardServicio />
                            <CardServicio />
                            <CardServicio />
                            <CardServicio />
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

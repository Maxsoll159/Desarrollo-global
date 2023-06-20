import { CardInfo } from "./CardInfo"

export const LandigPrincipal = () => {
    return (

            <section className="bg-cursos bg-no-repeat bg-cover">
                <article className="container mx-auto pt-[71.61px]">
                    <div className="flex items-center h-[500px]">
                        <div className="w-full lg:w-[60%] space-y-5 px-10">
                                <h1 className="text-celeste font-bold text-lg md:text-xl">CURSO ESPECIALIZADO</h1>
                                <h2 className="text-white font-black text-2xl md:text-5xl">Administración Financiera y Gestión Gubernamental</h2>
                                <p className="text-white text-justify w-full lg:w-[80%]">El curso tiene como objetivo, implementar y aplicar los procedimientos de control previo y concurrente como herramienta de eficiencia en la Gestión Pública. Aplicar los procedimientos de control previo como mecanismo de prevención de observaciones por parte del Organismo de Control Institucional para el Ejercicio Fiscal.</p>
                        </div>
                        <div className="w-[40%] h-full px-10 hidden lg:block">
                            <CardInfo />
                        </div>
                    </div>
                </article>
            </section>


    )
}

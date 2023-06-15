import Image from "next/image"


export const CardComentarios = () => {
    return (
        <div className='w-full md:w-[325px] mx-auto lg:w-[456px]  bg-white rounded-md p-5'>
            <Image src="/img/estrellas.webp" alt="Desarrollo Global - Calificacion" width={184} height={24} />
            <p className="mt-5 text-center mb-5">“Me encanta como los cursos en gestión pública de esta plataforma están diseñados de manera clara y accesible.
                Los materiales de estudios son muy completos y los profesores son expertos en el tema. Ha sido una experiencia de aprendizaje gratificante que ha impulsado mi carrera profesional.”</p>
            <hr></hr>
            <div className="flex mt-5 items-center gap-5">
                <div className="w-[50px] h-[50px] rounded-full bg-gray-100"></div>
                <div>
                    <span className="font-bold">Javier Gonzales</span>
                    <p className="text-sm">ABOGADO</p>
                </div>
            </div>
        </div>
    )
}

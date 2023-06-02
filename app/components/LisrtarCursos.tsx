import { Card } from "@/components/Cards/Card"


export const LisrtarCursos = () => {
  return (
    <section className="bg-blue-desarrollo">
        <article className="container mx-auto py-10">
            <p className="text-center text-white font-bold text-3xl">Lista de Próximos Inicios</p>
            <p className="text-center text-white mb-10">“¡Mantente al tanto de nuestros prócimos inicios y no te pierdas la oportunidad de formarte con los mejores!”</p>
            <Card />
        </article>
    </section>
  )
}

import Image from "next/image"
import Link from "next/link"
import { AcordeonFooter } from "../componentsLayout/AcordeonFooter"

export const Footer = () => {
    return (
        <footer className="bg-slate-50">
            <article className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 py-10">
                    <div className="p-5">
                        <Image src="/img/LogoDesarrolloGlobalCo.webp" alt="Desarrollo Global - Logo" width={250} height={75} className="mx-auto lg:m-0" />
                        <div className="mt-5 space-y-2">
                            <p className="font-bold text-sm text-center lg:text-left">ESCUELA DE GESTIÓN PÚBLICA DESARROLLO GLOBAL</p>
                            <p className="text-parrajos text-center lg:text-left">Más de 10 años Capacitando para Funcionarios y Servidores Publicos.</p>
                        </div>
                    </div>
                    <div className="py-5 px-5 xl:px-20">

                        <AcordeonFooter title="PROGRAMAS" index={2}>
                            <div className="flex flex-col gap-2 mt-5 text-parrajos">
                                <Link href="/cursos">Cursos</Link>
                                <Link href="/diplomas">Diplomas</Link>
                                <Link href="/diplomados">Diplomados</Link>
                                <Link href="/inhouse">In House</Link>
                                <Link href="/seminarios">Seminarios</Link>
                            </div>
                        </AcordeonFooter>

                        <div className="hidden xl:block">
                            <p className="font-bold">PROGRAMAS</p>
                            <div className="flex flex-col gap-2 mt-5 text-parrajos">
                                <Link href="/cursos">Cursos</Link>
                                <Link href="/diplomas">Diplomas</Link>
                                <Link href="/diplomados">Diplomados</Link>
                                <Link href="/inhouse">In House</Link>
                                <Link href="/seminarios">Seminarios</Link>
                            </div>
                        </div>
                    </div>
                    <div className="py-5 px-5 xl:px-10">
                        <AcordeonFooter title="LEGAL" index={3}>
                            <div className="flex flex-col gap-2 mt-5 text-parrajos">
                                <Link href="/cursos">Políticas de Datos</Link>
                                <Link href="/diplomas">Términos de Servicios</Link>
                                <Link href="/diplomados">Políticas de Cookies</Link>
                                <Link href="/inhouse">Políticas de la Calidad</Link>
                                <Link href="/seminarios">Libro de Reclamaciones</Link>
                            </div>
                        </AcordeonFooter>



                        <div className="hidden lg:block">
                            <p className="font-bold">LEGAL</p>
                            <div className="flex flex-col gap-2 mt-5 text-parrajos">
                                <Link href="/cursos">Políticas de Datos</Link>
                                <Link href="/diplomas">Términos de Servicios</Link>
                                <Link href="/diplomados">Políticas de Cookies</Link>
                                <Link href="/inhouse">Políticas de la Calidad</Link>
                                <Link href="/seminarios">Libro de Reclamaciones</Link>
                            </div>
                        </div>
                    </div>
                    <div className="p-5">

                        <AcordeonFooter title="CERTIFICADO" index={4}>
                            <p className="text-parrajos mt-3">Verifica la validez de tu certificado a través de este botón.</p>
                            <button className="bg-blue-desarrollo text-white p-4 rounded-md mt-3">Verificar Certificado</button>
                        </AcordeonFooter>

                        <div className="hidden xl:block">
                            <p className="font-bold">CERTIFICADO</p>
                            <p className="text-parrajos mt-3">Verifica la validez de tu certificado a través de este botón.</p>
                            <button className="bg-blue-desarrollo text-white p-4 rounded-md mt-3">Verificar Certificado</button>
                        </div>
                    </div>
                    <div className="p-5">

                        <AcordeonFooter title="LA EMPRESA" index={5}>
                            <div className="flex flex-col gap-2 mt-5 text-parrajos">
                                <Link href="/cursos">Nosotros</Link>
                                <p>Certificación ISO 9001-2015</p>
                                <div className="flex items-center gap-3">
                                    <Image src="/img/facebook.webp" width={32} height={32} alt="Desarrollo Global - Facebook" />
                                    <Image src="/img/youtube.webp" width={32} height={32} alt="Desarrollo Global - Youtube" />
                                    <Image src="/img/tiktok.webp" width={32} height={32} alt="Desarrollo Global - Instagram" />
                                    <Image src="/img/twitter.webp" width={32} height={32} alt="Desarrollo Global - Twitter" />
                                </div>
                                <p className="font-bold">Visítanos en:</p>
                                <p>Av. Julio Cesar Tello 741 - Lince</p>
                                <p><span className="font-bold">Fijo: </span>(01) 555 6005</p>
                            </div>
                        </AcordeonFooter>



                        <div className="hidden xl:block">
                            <p className="font-bold">LA EMPRESA</p>
                            <div className="flex flex-col gap-2 mt-5 text-parrajos">
                                <Link href="/cursos">Nosotros</Link>
                                <p>Certificación ISO 9001-2015</p>
                                <div className="flex items-center gap-3">
                                    <Image src="/img/facebook.webp" width={32} height={32} alt="Desarrollo Global - Facebook" />
                                    <Image src="/img/youtube.webp" width={32} height={32} alt="Desarrollo Global - Youtube" />
                                    <Image src="/img/tiktok.webp" width={32} height={32} alt="Desarrollo Global - Instagram" />
                                    <Image src="/img/twitter.webp" width={32} height={32} alt="Desarrollo Global - Twitter" />
                                </div>
                                <p className="font-bold">Visítanos en:</p>
                                <p>Av. Julio Cesar Tello 741 - Lince</p>
                                <p><span className="font-bold">Fijo: </span>(01) 555 6005</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </footer>
    )
}
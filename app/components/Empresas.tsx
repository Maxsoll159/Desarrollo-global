"use client"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

export const Empresas = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplaySpeed: 1000
    };
    return (
        <section className="bg-[#1b2a7a]">
            <article className="container mx-auto">
                <h2 className="text-white text-center font-bold text-2xl py-6">La confianza de nuestros clientes es nuestra mayor satisfacción</h2>
                <Slider {...settings} className='py-3'>
                    <div>
                        <Image src="/img/empresa1.webp" alt='Empresa - Desarrollo Gloval' width={260} height={112} />
                    </div>
                    <div>
                        <Image src="/img/empresa2.webp" alt='Empresa - Desarrollo Gloval' width={260} height={112} />
                    </div>
                    <div>
                        <Image src="/img/empresa3.webp" alt='Empresa - Desarrollo Gloval' width={260} height={112} />
                    </div>
                    <div>
                        <Image src="/img/empresa4.webp" alt='Empresa - Desarrollo Gloval' width={260} height={112} />
                    </div>
                    <div>
                        <Image src="/img/empresa5.webp" alt='Empresa - Desarrollo Gloval' width={260} height={112} />
                    </div>
                    <div>
                        <Image src="/img/empresa5.webp" alt='Empresa - Desarrollo Gloval' width={260} height={112} />
                    </div>
                </Slider>
            </article>
        </section>
    )
}

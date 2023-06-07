import Image from "next/image"


export const Nosotros = () => {
    return (
        <section className="bg-white py-20">
            <article className="container mx-auto p-5 md:p-0">
                <div className="grid grid-cols-1">
                    <div className="w-full">
                        <iframe src="https://s3-desarrollo-global.s3.us-west-2.amazonaws.com/pagina-web/desarrolloglobal_info.mp4" width="640" height="360"  allow="autoplay; fullscreen"  className="block mx-auto rounded-md w-full md:w-[640px]"></iframe>
                        <p className="text-center w-1/2 mx-auto mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque cursus nunc sit amet dignissim. Morbi quis justo ut nibh tincidunt</p>
                        <Image src="/img/iso27001.webp" alt="Desarrollo Global - Iso27001 2015" width={256} height={141} className="mx-auto" />
                    </div>
                </div>
            </article>
        </section>
    )
}

import Image from "next/image"


export const Nosotros = () => {
    return (
        <section className="bg-white py-20">
            <article className="container mx-auto">
                <div className="grid grid-cols-2">
                    <div>
                        <h4 className="font-bold text-blue-desarrollo text-3xl mb-5">Acerca de Nosotros</h4>
                        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque cursus nunc sit amet dignissim. Morbi quis justo ut nibh tincidunt tristique. Quisque pellentesque augue sit amet nisi tempus, id porttitor odio fermentum. Quisque non sapien tincidunt urna finibus elementum quis ac metus. Ut cursus dignissim molestie. Sed efficitur a erat eu dignissim. Vivamus fringilla leo id lacinia tincidunt. Quisque vulputate, nisl nec elementum tristique, turpis dui congue neque, vel aliquet nisl felis ut felis. Sed auctor convallis mauris, eget consequat turpis consequat non. Sed vehicula tincidunt sapien, ac eleifend enim pulvinar eu. Maecenas lacinia, neque in pellentesque iaculis, neque tortor dapibus neque, eu volutpat arcu ante vitae eros. Donec a volutpat mauris, et molestie justo. Quisque in egestas quam, a blandit ipsum. Morbi nisl massa, pulvinar vel enim et, faucibus aliquam eros. Cras mattis sed ante sit amet rutrum.</p>
                        <Image src="/img/iso27001.webp" alt="Desarrollo Global - ISO 27001 - 2015" width={258} height={141} />
                        <a href="" className="text-[#428dff] font-bold">Haz clic en el video y conoce quienes somos</a>
                    </div>
                    <div>
                        <iframe src="https://player.vimeo.com/video/728721225?loop=false&autoplay=false&muted=false&gesture=media&playsinline=true&byline=false&portrait=false&title=false&speed=true&transparent=false&customControls=true" width="640" height="360"  allow="autoplay; fullscreen"  className="mx-auto h-full rounded-md"></iframe>
                    </div>
                </div>
            </article>
        </section>
    )
}

import { useState } from "react";

export function useSlider({ valor }: {valor: Number}) {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: Number(valor),
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000
    };
    return [settings]
}
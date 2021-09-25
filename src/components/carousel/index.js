import React from 'react'
import Card from '../card'
import Slider from 'react-slick'

import './carousel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerPadding: '60px',
        arrows: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    }

    return (
        <Slider {...settings}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Slider>
    )
}

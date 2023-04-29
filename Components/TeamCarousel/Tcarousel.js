import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './Card';
import Image from 'next/image';
import { Roboto } from 'next/font/google';


const roboto = Roboto({
    subsets: ['latin'],
    weight: ['500']
})
const Tcarousel = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='px-20'>
            <h1 className={`text-white text-4xl mr-4 pl-12 ${roboto.className}`}>Team</h1>
                <Image
                    className='mb-6'
                    src="/aboutUnderline.svg"
                    alt="biglogo"
                    width={250}
                    height={250}
                />
            <Slider {...settings} className='my-20'>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>


            </Slider>
        </div>
    )
}

export default Tcarousel
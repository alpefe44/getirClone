import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import bannerData from "../api/banners.json"
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export default function Campaigns() {


    const [banners, setBanners] = useState([])

    useEffect(() => {
        setBanners(bannerData)
    }, [])

    function NextButton({ onClick, className }) {
        return (
            <button className={`${className} !text-purple-700`} onClick={onClick}>
                <IoIosArrowForward size={22} />
            </button>
        )
    }
    function PrevButton({ onClick, className }) {
        return (
            <button className={`${className} !text-purple-700`} onClick={onClick}>
                <IoIosArrowBack size={22} />
            </button>
        )
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextButton />,
		prevArrow: <PrevButton />,
    
    };

    return (
        <div className='container mx-auto'>
            <h3 className='p-3 font-semibold text-lg'>Kampanyalar</h3>
            <Slider {...settings}>
                {
                    banners.length && banners.map((banner, index) => (
                        <div className='px-2 ' key={index}>
                            <img src={banner.image} className="w-full sm:rounded-lg shadow-lg shadow-black"></img>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

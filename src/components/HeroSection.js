import React, { useState } from 'react'
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";

export default function HeroSection() {

    const [selected, setSelected] = useState('TR');

    const phones = {
        US: '+1',
        DE: '+50',
        TR: '+90',
        IT: '+7',
        IN: '+15'
    }
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 relative before:z-10'>
            <Slider {...settings}>
                <div>
                    <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg" />
                </div>
                <div>
                    <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg" />
                </div>
            </Slider>

            <div className='container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 z-20 h-full w-full'>
                <div>
                    <img src='https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg'></img>
                    <h3 className='mt-4 font-semibold text-4xl text-white'>
                        Dakikalar içinde <br></br> kapınızda
                    </h3>
                </div>

                <div className='w-[400px] bg-white rounded-lg p-6 '>
                    <h3 className='text-center mb-4'>Giriş yap veya kayıt ol</h3>
                    <div className='flex gap-x-2'>
                        <div className='flex'>
                            <ReactFlagsSelect
                                countries={Object.keys(phones)}
                                customLabels={phones}
                                onSelect={code => setSelected(code)}
                                selected={selected}
                                className="flag-select"
                            />
                        </div>
                        <div className='flex-1 relative cursor-pointer'>
                            <input className='h-14 px-4 rounded-lg border-2 border-gray-200 w-full hover:top-0 text-sm hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer'></input>
                            <span className='pointer-events-none absolute h-full top-0 left-0 items-center px-4 text-gray-400 flex transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs '>Telefon Numarası</span>
                        </div>
                    </div>
                    <div className= 'bg-yellow-200 rounded-lg hover:bg-brand-color transition-all'>
                        <button className='p-2 w-full text-brand-color font-bold hover:text-white'>Telefon numarası ile devam</button>
                    </div>
                </div>


            </div>
        </div>
    )
}
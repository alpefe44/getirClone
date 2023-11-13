import React from 'react'

export default function MobileApp() {
    return (
        <div className='bg-primary-brand-color h-50 flex container m-auto rounded-lg'>
            <div className='flex flex-col container justify-center gap-y-5 px-8'>
                <h3 className='text-4xl font-semibold text-white '>Getir'i indirin!</h3>
                <p className='font-semibold text-white'>İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.</p>
                <nav className='flex flex-row gap-x-2'>
                    <img src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg'></img>
                    <img src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg'></img>
                    <img src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg'></img>
                </nav>
            </div>
            <div>
                <img className='object-contain xl:w-full h-full' src='https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png'></img>
            </div>
        </div>
    )
}

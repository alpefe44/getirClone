import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className='container m-auto mt-5 p-2'>
            <div className='flex justify-between'>
                <div>
                    <p className='text-sm'>© 2023 Getir Bilgi Toplumu Hizmetleri</p>
                </div>
                <div className='flex gap-x-5'>
                    <a href='#'><FaFacebook size={22} color='grey'></FaFacebook></a>
                    <a href='#'><FaTwitter size={22} color='grey'></FaTwitter></a>
                    <a href='#'><FaInstagram size={22} color='grey'></FaInstagram></a>
                </div>
            </div>
        </div>
    )
}

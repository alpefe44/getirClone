import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

export default function Product({ product, index }) {
    return (
        <div key={index} className='p-3 relative'>
            <picture>
                <img className='w-[150px] h-[150px]' src={product.image}></img>
                <button onClick={() => alert("tıklandı")} className='absolute top-0 right-0 rounded-lg border-gray-200 p-2 border shadow-md items-center justify-center flex hover:bg-purple-200 transition-colors'>
                    <AiOutlinePlus></AiOutlinePlus>
                </button>
            </picture>

            <div className='flex flex-col items-center text-center'>
                <h4 className='font-semibold text-gray-500'>{product.title}</h4>
                <h4 className='font-semibold text-gray-500'>{product.alt}</h4>
                <h4 className='font-semibold text-gray-500'>{product.price}</h4>
            </div>
        </div>
    )
}

import React from 'react'

export default function Category({ category }) {
    return (
        <a className='flex group justify-center items-center rounded p-4 flex-col' href='#'>
            <img src={category.image}  className="w-12 h-12 rounded-lg border border-gray-200 object-cover"></img>
            <span className="font-semibold transition-colors group-hover:text-purple-700 whitespace-nowrap block mt-2 text-sm">{category.title}</span>
        </a>
    )
}

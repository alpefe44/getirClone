import React, { useEffect, useState } from 'react'
import categoryData from '../api/categories.json'
import Category from './ui/Category';

export default function Categories() {

    const [categories, setCategories] = useState([]);


    useEffect(() => {
        setCategories(categoryData)
    }, [])

    return (
        <div className='container m-auto p-8 bg-white'>
            <div>
                <h3 className='p-3 font-semibold text-lg'>Kategoriler</h3>
                <div className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10'>
                    {categories && categories.map((item, index) => <Category category={item} index={index}></Category>)}
                </div>
            </div>
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import productData from '../api/product.json'
import Product from './ui/Product';

export default function Products() {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        setProduct(productData)
    }, [])

    return (
        <div className='container m-auto mt-5'>
            <div className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10'>
                {
                    product.length && product.map((item, index) => (<Product product={item} index={index}></Product>))
                }
            </div>
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/Shopcontext'
import Title from './Title'
import { products } from '../assets/assets'
import ProductItem from './ProductItem'

const LatestCollection = () => {

    // Get products data from Context API
    const { products } = useContext(ShopContext)

    // State to store latest products
    const [latestProduct, setLatestProduct] = useState([])

    // Runs when component mounts
    useEffect(() => {

        // Store first 10 products as latest collection
        setLatestProduct(products.slice(0, 10))

    }, [])

    // Display products in browser console
    console.log(products)

    return (
        <div className="my-10 flex flex-col  items-center">

            {/* Section Title */}
            <Title text1="Latest " text2="Collection" />

            {/* Section Description */}
            <p className='w-3/4 m-auto whitespace-nowrap text-xs text-gray-600 justify-center text-#001F3F'>
                “Browse through our latest collection and find stylish,
                high-quality pieces that redefine your everyday look.”
            </p>

            {/* Products Grid */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 py-5'>

                {/* Display latest products */}
                {latestProduct.map((item, index) => (

                    <ProductItem
                        key={index}
                        id={item._id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                    />

                ))}

            </div>

        </div>
    )
}

export default LatestCollection
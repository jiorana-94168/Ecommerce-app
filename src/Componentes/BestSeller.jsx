import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/Shopcontext'
import Title from './Title';
import ProductItem from './ProductItem';

function BestSeller() {

    // Products data from Context API
    const { products } = useContext(ShopContext);

    // State to store best seller products
    const [bestseller, setBestSeller] = useState([]);

    // Runs once when component mounts
    useEffect(() => {

        // Filter products whose bestseller property is true
        const bestProduct = products.filter((item) => (item.bestseller))

        // Store only first 5 bestseller products
        setBestSeller((bestProduct.slice(0, 5)))

    }, [])

    return (
        <div className='my-2'>

            {/* Section Heading */}
            <div className=' flex flex-col items-center  text-3xl py-8'>
                <Title text1={"BEST"} text2={"SELLERS"} />

                {/* Section Description */}
                <p className='w-3/4  text-center m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                          Discover our most popular products loved by customers.

                </p>
            </div>

            {/* Best Seller Products Grid */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>

                {/* Display bestseller products */}
                {bestseller.map((item, index) => (
                    <ProductItem
                        key={index}
                        id={item._id}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                    />
                ))}

            </div>

        </div>
    )
}

export default BestSeller
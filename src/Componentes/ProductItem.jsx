import React, { useContext } from 'react'
import { ShopContext } from '../Context/Shopcontext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {

    // Get Currency Symbol from Context API
    const { currency } = useContext(ShopContext)

    return (

        // Product Card Link
        <Link
            className='text-gray-700 cursor-pointer block'
            to={`/product/${id}`}
        >

            {/* Product Image */}
            <div className='overflow-hidden'>
                <img
                    className='hover:scale-110transition ease-in-out'
                    src={image[0]}
                    alt=""
                />
            </div>

            {/* Product Name */}
            <p className='pt-3 pb-1 text-sm'>
                {name}
            </p>

            {/* Product Price */}
            <p className='text-sm font-medium'>
                {currency}{price}
            </p>

        </Link>
    )
}

export default ProductItem
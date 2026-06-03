import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/Shopcontext'
import Title from './Title';
import ProductItem from './ProductItem';

function RelatedProduct({ category, subCategory }) {

    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    // Filter products having same category and subCategory
    useEffect(() => {
        if (products.length > 0) {

            let productCopy = products.slice();

            productCopy = productCopy.filter(
                (item) => category === item.category
            );

            productCopy = productCopy.filter(
                (item) => subCategory === item.subCategory
            );

            setRelated(productCopy.slice(0, 5));
        }

    }, [products, category, subCategory]);

    return (
        <div className='my-24 cursor-pointer'>

            {/* Related Products Section */}
            <div className='text-center text-3xl py-2'>
                <Title text1={"RELATED"} text2={"PRODUCTS"} />
            </div>

            {/* Display Related Products */}
            <div className='my-5 cursor-pointer'>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 py-2'>

                    {related.map((item, index) => (
                        <ProductItem
                            key={index}
                            id={item._id}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                        />
                    ))}

                </div>
            </div>

        </div>
    )
}

export default RelatedProduct
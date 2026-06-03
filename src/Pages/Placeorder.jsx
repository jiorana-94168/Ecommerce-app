import React, { useContext } from 'react'
import { ShopContext } from '../Context/Shopcontext'
import Title from '../Componentes/Title'

const Order = () => {
  const { products, currency } = useContext(ShopContext)

  return (
    <div className='border-t pt-16 text-center'>

      {/* Orders Heading */}
      <div className='text-2xl'>
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <div className='flex gap-4 flex-col mt-8'>
        {
          products.slice(1,4).map((item,index)=>{
            return(
              <div
                key={index}
                className='border-t w-full flex flex-col md:flex-row justify-between items-center gap-4'
              >
                <div className="mt-4">
                  <img
                    src={item.image[0]}
                    className='w-16 sm:w-20'
                    alt=""
                  />
                </div>

                <div>
                  <p className='sm:font-base text-medium'>{item.name}</p>

                  <div className='flex gap-3'>
                    <p>{currency}{item.price}</p>
                    <p>Quantity:1</p>
                    <p>Size:1</p>
                  </div>

                  <p className='text-sm items-start flex mt-2'>
                    Date:
                    <span className='text-gray-600'>
                      1, June, 2026
                    </span>
                  </p>
                </div>

                {/* Order Status & Track Button */}
                <div className='flex justify-between w-full md:w-1/2'>
                  <div className='flex items-center gap-2 ml-10'>
                    <p className='rounded-full bg-green-500 h-2 w-2'></p>
                    <p className='text-base'>Ready to ship</p>
                  </div>

                  <button className='border px-4 py-2 bg-black text-white ml-auto'>
                    Track Order
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Order
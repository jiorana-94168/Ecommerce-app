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

      <div className='flex flex-col items-center gap-4 mt-8 justify-between'>
        {
          products.slice(1,5).map((item,index)=>{
            return(
             <div
  key={index}
  className='border-t w-full flex flex-col md:flex-row justify-between gap-4 py-4 '
>
  <img
    src={item.image[0]}
    className='w-16 sm:w-20'
    alt=""
  />

  <div className='flex-1 text-left'>
    <p className='font-medium'>{item.name}</p>

    <div className='flex gap-3 mt-1'>
      <p>{currency}{item.price}</p>
      <p>Quantity: 1</p>
      <p>Size: M</p>
    </div>

    <p className='text-sm mt-2'>
      Date:
      <span className='text-gray-600'> 1, June, 2026</span>
    </p>
  </div>

  <div className='flex items-center gap-5 ml-auto'>
    <p className='rounded-full bg-green-500 h-2 w-2'></p>
    <p>Ready to ship</p>


  <button className='border w-30 h-10 px-2 py-2 bg-black text-white '>
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
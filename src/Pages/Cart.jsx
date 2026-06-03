import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/Shopcontext'
import Title from '../Componentes/Title'
import { assets } from '../assets/assets'
import Carttotal from '../Componentes/Carttotal'

export const Cart = () => {

  const { products, cartItems, currency, updateQuantity, navigate } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempdata = [];

    for (const items in cartItems) {
      for (const item in cartItems[items]) {

        if (cartItems[items][item] > 0) {
          tempdata.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          });
        }

      }
    }

    setCartData(tempdata);

  }, [cartItems]);

  return (
    <div className='border-t pt-14'>

      <div className='text-4xl mb-3'>
        <Title className="text-left" text1={"YOUR"} text2={"CART"} />
      </div>

      <div>

        {cartData.map((item, index) => {

          const productdata = products.find((product) => product._id === item._id);

          if (!productdata) return null;

          return (
            <div
              key={index}
              className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'
            >

              <div className='flex items-start gap-2'>
                <img className="w-16 sm:w-20" src={productdata.image[0]} alt="" />

                <div>
                  <p className='text-xs font-medium'>{productdata.name}</p>

                  <div className='flex items-center gap-3 mt-3'>
                    <p>{currency}{productdata.price}</p>
                    <p className='bg-gray-200 sm:px-3 sm:py-1 border text-xs'>{item.size}</p>
                  </div>
                </div>
              </div>

              {/* Quantity Input FIXED */}
              <input
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value > 0) {
                    updateQuantity(item._id, item.size, value);
                  }
                }}
                className="border w-8 px-1 h-6 text-xs"
                type="number"
                min={1}
                value={item.quantity}
              />

              {/* Delete */}
              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className="w-5 mr-4 cursor-pointer"
                src={assets.bin_icon}
                alt=""
              />

            </div>
          );

        })}

      </div>

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>

          <Carttotal />

          <div className='w-full text-end'>
            <button
              onClick={() => navigate("/Placeorder")}
              className='bg-black text-white px-2 py-2 rounded mt-4'
            >
              PROCEED TO CHECKOUT
            </button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Cart
import React, { useContext } from 'react'
import { ShopContext } from '../Context/Shopcontext'
import Title from './Title'

const Carttotal = () => {

    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

    const subtotal = Number(getCartAmount()) || 0;
    const shipping = Number(delivery_fee) || 0;
    const total = subtotal + shipping;

    return (
        <div className='w-full'>

            <div>
                <Title text1={"CART"} text2={"TOTAL"} />
            </div>

            <div>

                <div className='flex justify-between'>
                    <p>Subtotal</p>
                    <p>{currency}{subtotal.toFixed(2)}</p>
                </div>

                <hr />

                <div className='flex justify-between'>
                    <p>Shipping Fee</p>
                    <p>{currency}{shipping.toFixed(2)}</p>
                </div>

                <hr />

                <div className='flex justify-between'>
                    <b>Total</b>
                    <b>{currency}{total.toFixed(2)}</b>
                </div>

            </div>

        </div>
    )
}

export default Carttotal
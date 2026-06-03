import React from 'react'
import { assets } from '../assets/assets'

function OurproductPolicy() {
  return (

    // Policy Section Container
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-around items-center text-center py-20'>

      {/* Exchange Policy */}
      <div>
        <img
          src={assets.exchange_icon}
          className='w-12 m-auto mb-5'
          alt=""
        />

        <p className='font-semibold'>
          Quick & easy swaps
        </p>

        <p className='text-gray-400'>
          We offer hassle free policy
        </p>
      </div>

      {/* Return Policy */}
      <div>
        <img
          src={assets.quality_icon}
          className='w-12 m-auto mb-5'
          alt=""
        />

        <p className='font-semibold'>
          7 Days Fast Return Policy
        </p>

        <p className='text-gray-400'>
          Easy returns within 7 days
        </p>
      </div>

      {/* Customer Support */}
      <div>
        <img
          src={assets.quality_icon}
          className='w-12 m-auto mb-5'
          alt=""
        />

        <p className='font-semibold'>
          Reliable Support
        </p>

        <p className='text-gray-400'>
          We provide 24/7 customer support
        </p>
      </div>

    </div>
  )
}

export default OurproductPolicy
import React from 'react'
import { assets } from '../assets/assets'

function Hero() {
  return (
    // Main Hero Section
    <div className='flex flex-col sm:flex-row border border-gray-400'>

      {/* Left Content Section */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10'>

        {/* Hero Text Container */}
        <div className='max-w-md flex flex-col items-center gap-4 text-center'>

          {/* Top Heading Line */}
          <div className='flex items-center gap-2 text-gray-500'>
            <span className='w-8 md:w-11 h-[2px] bg-blue-900'></span>
            <p className='font-medium text-sm md:text-base'>
              EXCLUSIVE COLLECTION
            </p>
            <span className='w-8 md:w-11 h-[2px] bg-blue-900'></span>
          </div>

          {/* Main Hero Title */}
          <h1 className='text-3xl lg:text-5xl prata-regular'>
            Trending Styles
          </h1>

          {/* Explore Section */}
          <div className='flex items-center gap-2'>
            <p className='text-sm md:text-base font-medium'>
              EXPLORE NOW
            </p>
            <span className="w-8 md:w-11 h-[1px] bg-blue-900"></span>
          </div>

        </div>

      </div>

      {/* Right Hero Image */}
      <img
        src={assets.hero_img}
        alt=""
        className='w-full sm:w-1/2'
      />

    </div>
  )
}

export default Hero
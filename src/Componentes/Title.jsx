import React from 'react'

const Title = ({ text1, text2, className }) => {
  return (

    // Reusable Section Title Component
    <div className={`flex items-center gap-2 ${className}`}>

      {/* Title Text */}
      <p className='text-gray-500 text-2xl'>

        {/* First Part of Title */}
        {text1}

        {/* Highlighted Second Part of Title */}
        <span className='text-gray-700 font-medium text-2xl'>
          {text2}
        </span>

      </p>

      {/* Decorative Horizontal Line */}
      <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>

    </div>
  )
}

export default Title
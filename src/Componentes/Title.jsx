import React from 'react'

const Title = ({ text1, text2, className }) => {
  return (
    // Reusable title component used across pages
    <div className={`flex items-center gap-2 ${className}`}>
      
      <p className='text-gray-500 text-2xl'>
        {text1}
        <span className='text-gray-700 font-medium text-2xl'>
          {text2}
        </span>
      </p>

      {/* Decorative line */}
      <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>

    </div>
  )
}

export default Title
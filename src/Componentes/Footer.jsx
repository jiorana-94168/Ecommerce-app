import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10'>

      {/* Logo and About Section */}
      <div>
        <img src={assets.logo} className="mb-5 w-30" alt="" />

        <p className='w-full md:w-2/3 text-gray-600'>
           StyleNext brings you the latest fashion and lifestyle products
           at affordable prices. Our mission is to provide a smooth,
           reliable, and enjoyable shopping experience for every customer.
        </p>
      </div>

      {/* Company Links Section */}
      <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>

        <ul className='flex flex-col gap-1 text-gray-600'>
          <li>Dashboard</li>
          <li>About Us</li>
          <li>Our Delivery</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      {/* Contact Information Section */}
      <div>
        <p className='text-xl font-medium mb-5'>Connect With Us</p>

        <ul className='flex flex-col gap-1 text-gray-600'>
          <li>+91 98765 43210</li>
          <li>ranajyoti99@gmail.com</li>
        </ul>
      </div>

      {/* Copyright Section */}
      <div className='col-span-full'>
        <hr className='w-full' />

        <p className='text-center py-5 text-sm'>
          Copyright © 2026 StyleNext — Designed With Style
        </p>
      </div>

    </div>
  )
}

export default Footer
import React from 'react'
import Title from '../Componentes/Title'
import { assets } from '../assets/assets'
import Newsletterbox from '../Componentes/Newsletterbox'

const Contact = () => {
  return (
    <div className='justify-center'>

      {/* Contact Page Heading */}
      <div className='flex justify-center'>
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      {/* Store Information */}
      <div className='flex justify-center flex-col md:flex-row items-center mt-8 gap-6'>
        <img className='w-80' src={assets.contact_img} alt="" />

        <div className='flex flex-col'>
          <b>Our Store</b>

          <p>
            StyleNest Fashion Hub<br />
            123 Fashion Street,<br />
            New Delhi, India 110001
          </p>

          <p className='mt-6'>Tel: +91 98765 43210</p>
          <p>Email: support@stylenest.com</p>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className='mt-8'>
        <Newsletterbox />
      </div>

    </div>
  )
}

export default Contact
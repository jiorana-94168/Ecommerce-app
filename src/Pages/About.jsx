import React from 'react'
import Title from '../Componentes/Title'
import { assets } from '../assets/assets'
const About = () => {
  return (
    <div className='mb-16'>
      <div className=' text-2xl  pt-8 border-t justify-center flex '>
        <Title text1={"ABOUT"} text2={"US"}/>
      </div >
      <div className=' flex mt-8 gap-4 flex-col md:flex-row'>
        <img className=" mr-12 w-full sm:w-100 "src={assets.about_img} alt="" />
    <div className='flex flex-col gap-6 mt-14'>
   
        <p>Welcome to StyleNest, your one-stop destination for trendy and stylish fashion. We bring you carefully selected clothing and accessories that combine quality, comfort, and modern design.</p>
        <p>Customer satisfaction is our top priority. From secure payments to fast delivery and dedicated support, we strive to provide a seamless shopping experience from start to finish.</p>
        <b>Our Mission</b>
        <p>Our mission is to make fashion accessible, affordable, and enjoyable for everyone. We strive to offer high-quality products that combine comfort, style, and the latest trends. Through excellent service and a seamless shopping experience, we aim to earn our customers' trust every day.</p>
      </div>   </div></div>
    
  )
}

export default About
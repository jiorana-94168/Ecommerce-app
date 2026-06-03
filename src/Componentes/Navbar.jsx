import React, { useContext } from 'react'
import {assets} from "../assets/assets"
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { ShopContext } from '../Context/Shopcontext'
const Navbar = () => {
  const[Visible,SetVisible]=useState(false)
  const{setshowSearch,getCartCount}=useContext(ShopContext)
  return (
<div className='flex items-center justify-between py-5 font-medium'>
  <Link to="/"><img src={assets.logo} alt="logo" className="w-38" /></Link>
<ul className='hidden sm:flex gap-5 text-sm text-grey-700'>
<NavLink  to="/"className="flex flex-col items-center gap-1">
    <p>HOME</p>
    <hr className='w-2/4 border-none h-[1.5px] bg-gray-500 hidden'/>
  </NavLink>
  <NavLink  to="/collection"className="flex flex-col items-center gap-1">
    <p>COLLECTION</p>
    <hr className='w-2/4 border-none h-[1.5px] bg-gray-500 hidden '/>
  </NavLink>
  <NavLink  to="about/"className="flex flex-col items-center gap-1">
    <p>ABOUT</p>
    <hr className='w-2/4 border-none h-[1.5px] bg-gray-500 hidden'/>
  </NavLink>
  <NavLink  to="contact/"className="flex flex-col items-center gap-1">
    <p>CONTACT</p>
    <hr className='w-2/4 border-none h-[1.5px] bg-gray-500 hidden'/>
  </NavLink>
  
  
</ul>
<div className='flex  items-center gap-5'>
  <img onClick={()=>setshowSearch(true)}src={assets.search_icon} className='w-4 cursor-pointer' alt="" />
  <div className='relative group'>
    <Link to="/login"><img src={assets.profile_icon}className='w-5 ' alt="" /></Link>
    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
      <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100'>
        <p className='cursor-pointer hover:text-black'>My Profile</p>
        <p className='cursor-pointer hover:text-black'>Orders</p>
        <p className='cursor-pointer hover:text-black'>LogOut</p>
      </div>
    </div>
  </div>
  <Link to="/cart" className='relative'>
<img src={assets.cart_icon} className='w-5 cursor-pointer min-w-5' alt="" />
  <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white  rounded-full text-[8px]' >{getCartCount()}</p>
  </Link>
  <img  onClick={()=>SetVisible(true)}src={assets.menu_icon}className='w-5 cursor-pointer sm:hidden' alt="" />
    </div>
  <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-gray-100  transition-all ${Visible?'w-full':'w-0'}`}>
<div className='flex flex-col text-gray-600'>
  <div onClick={()=>SetVisible(false)} className='flex items-center gap-4 p-3'>
    <img src={assets.dropdown_icon} alt="" className='h-4 rotate-180' />
    <p>Back</p>
  </div>
  <NavLink  onClick={()=>SetVisible(false)}className=" pl-6 py-2 border-b" to="/">HOME</NavLink>
    <NavLink  onClick={()=>SetVisible(false)}className=" pl-6 py-2 border-b " to="/collection">COLLECTION</NavLink>
    <NavLink onClick={()=>SetVisible(false)} className=" pl-6 py-2 border-b " to="/about">ABOUT</NavLink>
  <NavLink  onClick={()=>SetVisible(false)}className=" pl-6 py-2 border-b " to="/contact">CONTACT</NavLink>

</div>

</div>
</div>
  )
}

export default Navbar
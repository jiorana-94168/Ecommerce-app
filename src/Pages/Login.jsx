import React, { useState } from 'react'

const Login = () => {
  const [currentstatus,setCurrentstatus]=useState("Sign Up")
  const onsubmithandler=async(e)=>{
e.preventefault();
  }
  return (
    <form onSubmit={onsubmithandler}>
      <div className='m-auto flex flex-col w-[90%] sm:max-w-96 items-center mt-8 mb-20'>
        <div className='inline-flex items-center gap-2  mt-10'>
        <p className='prata-regular text-2xl'>{currentstatus}</p>
        <hr className='h-[2px] w-8 border-none bg-gray-800' />
      </div>
      {currentstatus==="Login"?"":<input className='w-full px-2 py-2 border mt-4' type="text" placeholder=' Name' required/>}
            <input className='w-full px-2 py-2 border mt-4' type="email" placeholder=' Email' required />
                        <input className='w-full px-2 py-2 border mt-4' type="password" placeholder='Password' required/>
<div className='  w-full flex justify-between mt-2 gap-4'>
 <p >Forget your Password ?</p>
 {
  currentstatus==="Login"
  ?<p  className="cursor-pointer "onClick={()=>setCurrentstatus("Sign Up")}>Create Account</p>:
  <p className=" cursor-pointer" onClick={()=>setCurrentstatus("Login")}>Login Here</p>
 }
      </div>
      <button className='bg-black text-white font-light px-4 py-2 mt-4'>{currentstatus==="Login"?"Sign In":"Sign Up"}</button></div>
   
    </form>
  )
}

export default Login
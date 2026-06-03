import React, { useEffect, useState ,useContext} from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/Shopcontext';
import { assets } from '../assets/assets';
import RelatedProduct from '../Componentes/RelatedProduct';

const Product = () => {
  const {productId}=useParams();
const {products,currency, addtoCart}=useContext(ShopContext)
const [productData,setProductData]=useState(false);
const[image,setimage]=useState("");
const [size,setSize]=useState("")
const fecthproductData=async()=>{
products.map((item)=>{
  if(item._id===productId)
  {
    setProductData(item)
setimage(item.image[0])
console.log(item);
    return null;
  }
})
}
useEffect(()=>{
fecthproductData();
},[productId,products])
  return productData? (
<div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>

  <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

    <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>

      {/* Small Images */}
      <div className='flex sm:flex-col  sm:w-[18%] w-full justify-between'>

        {productData.image.map((item,index)=>(

          <img
            src={item}
            key={index}
            onClick={()=>setimage(item)}
            className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
          />

        ))}

      </div>

      {/* Big Image */}
      <div className='w-full sm:w-[80%]'>

        <img src={image} className='w-full h-auto' alt="" />


      </div>      </div>
      <div className='flex-1'>
                <h1 className='font-medium text-2xl items-center mt-2'>{productData.name}</h1>
                <div className='flex flex-row gap-1 mt-2 '>
     <img src={assets.star_icon} className='w-3.5 h-3.5' alt="" />
          <img src={assets.star_icon} className='w-3.5 h-3.5' alt="" />

     <img src={assets.star_icon} className='w-3.5 h-3.5' alt="" />

     <img src={assets.star_dull_icon} className='w-3.5 h-3.5' alt="" />

     <img src={assets.star_dull_icon} className='w-3.5 h-3.5' alt="" />
     <p className=''>(3)</p>

</div>
<p className='text-3xl font-medium'>{currency}{productData.price}</p>
<p className='w-3/4  text-gray-800'>{productData.description}</p>
<div className='mt-4' >
  <p className='font-medium text-base'>Select Size</p>
  <div className='flex gap-2 mt-2'>
    {productData.sizes.map((item,index)=>(
      <button onClick={()=>setSize(item)} className={`border py-1 px-3 bg-gray-100 ${item===size?'border-orange-600':""}`}  key={index}>{item}</button>
    ))}
  </div>
</div>
<button onClick={()=>addtoCart(productData._id,size)} className='bg-black px-4 py-3 mt-5 text-white text-sm active:bg-gray-700'>ADD TO CART</button>
<hr className='mt-8 sm:w-4/5 text-gray-400' />
<div className='text-sm mt-3 gap-1 flex flex-col text-gray-800'> 
 <p>Guaranteed 100% authentic and genuine product</p>
<p>Cash on delivery available for eligible orders</p>
<p>Hassle-free return and exchange within 7 days</p>
</div>

    </div>
    

  </div>

    <div className='flex mt-12  text-sm '>
    <button className='border px-3 py-2 font-bold'>Description</button>
    <button className='border px-3 py-2 '>Reviews(122)</button>


</div>
<div className='flex flex-col  text-gray-800 gap-3 px-2 py-2 border'>
  <p>
Our eCommerce platform offers a smooth and user-friendly shopping experience with a wide range of high-quality products for men, women, and kids. Customers can easily browse collections, filter products by category, select sizes, and view detailed product information with multiple images. The website includes secure shopping features such as add to cart functionality, cash on delivery, easy returns and exchanges, and personalized product recommendations based on user interests. With responsive design and fast performance, the platform provides a seamless experience across desktop and mobile devices.
</p>
<p>Modern eCommerce web application with product filtering, dynamic product pages, cart functionality, and personalized product recommendations.</p>
</div>
<RelatedProduct 
  category={productData.category}
  subCategory={productData.subCategory}
/>
</div>
  ):<div className='opacity-0'></div>
}

export default Product
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Collection from './Pages/Collection'
import Navbar from './Componentes/Navbar'
import Order from './Pages/Order'
import Login from './Pages/Login'
import Product from './Pages/Product'
import Placeorder from './Pages/Placeorder'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Footer from './Componentes/Footer'
import Searchbar from './Componentes/Searchbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      {/* Global Layout */}
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>

        <ToastContainer />
        <Navbar />
        <Searchbar />

        {/* Application Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="collection" element={<Collection />} />
          <Route path="cart" element={<Cart />} />
          <Route path="order" element={<Order />} />
          <Route path="login" element={<Login />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="placeorder" element={<Placeorder />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </>
  )
}

export default App
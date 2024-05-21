import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Admin from './pages/Admin/Admin'
import Customer from './pages/Customer/Customer'
import Navbar from './components/Navbar/Navbar'
import Login from './pages/Home/Login_Register/Login'
import AllProduct from './pages/Home/AllProduct/AllProduct'
import Product from './pages/Home/Product/Product'
import ProductDetails from './pages/Home/ProductDetails/ProductDetails'




const App = () => {

  return (
    <>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/customer' element={<Customer/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/navbar' element={<Navbar/>}/>
        <Route path='/all' element={<AllProduct/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/details' element={<ProductDetails/>}/>
      </Routes>
    </>
  )
}

export default App

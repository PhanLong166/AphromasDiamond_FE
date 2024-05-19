import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Admin from './pages/Admin/Admin'
import Order from './pages/Admin/Order'
import Customer from './pages/Customer/Customer'
import Navbar from './components/Navbar/Navbar'

const App = () => {

  return (
    <>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/customer' element={<Customer/>}/>

        <Route path="/order" element={<Order/>}/>
      </Routes>
    </>
  )
}

export default App

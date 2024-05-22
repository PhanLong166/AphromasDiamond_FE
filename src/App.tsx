import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Admin from './pages/Admin/Admin'
import OrderAdmin from './pages/Admin/Order'
import Customer from './pages/Customer/Customer'
import Login from './pages/Home/Login_Register/Login'
import AllProduct from './pages/Home/AllProduct/AllProduct'
import Product from './pages/Home/Product/Product'
import ProductDetails from './pages/Home/ProductDetails/ProductDetails'
import Headers from './components/Headers/Headers'
import Footer from './components/Footer/Footer'

const App = () => {

  return (
    <>
      <Headers/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/customer' element={<Customer/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/all' element={<AllProduct/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/details' element={<ProductDetails/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/orderAdmin" element={<OrderAdmin/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App

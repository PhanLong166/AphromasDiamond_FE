import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Admin from './pages/Admin/Admin'
import OrderAdmin from './pages/Admin/OrderPage/Order'
import ConfirmedOrder from './pages/Admin/OrderPage/Confirmed'
import ProductAdmin from './pages/Admin/ProductPage/Product'
import Customer from './pages/Customer/Customer'
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

        <Route path="/orderAdmin" element={<OrderAdmin/>}/>
        <Route path="/orderAdmin/confirmed" element={<ConfirmedOrder/>}/>
        <Route path="/productAdmin" element={<ProductAdmin/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App

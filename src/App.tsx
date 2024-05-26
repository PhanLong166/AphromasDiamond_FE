import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Admin from './pages/Admin/Admin'
import OrderAdmin from './pages/Admin/OrderPage/Order'
import ConfirmedOrder from './pages/Admin/OrderPage/Confirmed'
import DeliveringOrder from './pages/Admin/OrderPage/Delivering'
import CompletedOrder from './pages/Admin/OrderPage/Completed'
import CancelledOrder from './pages/Admin/OrderPage/Cancelled'
import ProductAdmin from './pages/Admin/ProductPage/Product'
import RingShell from './pages/Admin/ProductPage/RingShell'
import Customer from './pages/Customer/Customer'
import Login from './pages/Home/Login_Register/Login'
import AllProduct from './pages/Home/AllProduct/AllProduct'
import Product from './pages/Home/Product/Product'
import ProductDetails from './pages/Home/ProductDetails/ProductDetails'
import Headers from './components/Headers/Headers'
import Footer from './components/Footer/Footer'
import Cart from './pages/Customer/Cart/Cart'
import Checkout from './pages/Customer/Checkout/Checkout'
import OrderList from './pages/Customer/OderList/OderList'
import Account from './pages/Customer/AccountDetail/AccountDetail'




const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <Headers />
            <Home />
            <Footer />
          </>
        } />
        <Route path='/admin' element={<Admin />} />
        <Route path='/customer' element={
          <>
            <Headers />
            <Customer />
            <Footer />
          </>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/all' element={
          <>
            <Headers/>
            <AllProduct />
            <Footer/>
          </>
        } />
        <Route path='/product' element={
          <>
            <Headers/>
            <Product />
            <Footer />
          </>
        } />
        <Route path='/details' element={
          <>
            <Headers/>
            <ProductDetails />
            <Footer/>
          </>
        } />
        <Route path='/Cart' element={
          <>
            <Headers/>
            <Cart />
            <Footer/>
          </>
        } />
        <Route path='/Checkout' element={
          <>
            <Headers/>
            <Checkout />
            <Footer/>
          </>
        } />
        <Route path='/OrderList' element={
          <>
            <Headers/>
            <OrderList />
            <Footer/>
          </>
        } />
        <Route path='/Account' element={
          <>
            <Headers/>
            <Account />
            <Footer/>
          </>
        } />
        <Route path="/orderAdmin" element={<OrderAdmin />} />
        <Route path="/orderAdmin/confirmed" element={<ConfirmedOrder />} />
        <Route path="/orderAdmin/delivering" element={<DeliveringOrder />} />
        <Route path="/orderAdmin/completed" element={<CompletedOrder />} />
        <Route path="/orderAdmin/cancelled" element={<CancelledOrder />} />

        <Route path="/productAdmin" element={<ProductAdmin />} />
        <Route path="/productAdmin/ringShell" element={<RingShell />} />
      </Routes>
    </>
  )
}

export default App

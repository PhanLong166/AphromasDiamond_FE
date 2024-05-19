import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Admin from './pages/Admin/Admin'
import Customer from './pages/Customer/Customer'
import Headers from './components/Headers/Headers'

const App = () => {

  return (
    <>
      <Headers/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/customer' element={<Customer/>}/>
      </Routes>
    </>
  )
}

export default App

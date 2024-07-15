import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import ProductPage from './Components/ProductPage'
import Signup  from './Components/Signup'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import Addproductpage from './Components/Addproductpage'
import UpdateProductPage from './Components/UpdateProductPage'

function App() {
  return (
    <>
    <Navbar/>
      <Routes>

          <Route path='/' element ={<ProductPage/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/addproduct' element={<Addproductpage/>}/>
          <Route path='/update/:id' element={<UpdateProductPage/>}/>

      </Routes>
    </>
  )
}

export default App

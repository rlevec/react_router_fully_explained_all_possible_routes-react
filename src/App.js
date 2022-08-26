import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Error from './pages/Error'
import SharedLayout from './pages/SharedLayout'
import SingleProduct from './pages/SingleProduct'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

const App = () => {
  const [user, setUser] = useState(null)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}> 
          <Route index element={<Home/>}/>{/* index always mathes the path of the parent element*/}
          <Route path='about' element={<About />}/> {/*element refers to the path end point in this case the component is the end point*/}
          <Route path='products' element={<Products />}/>
          {/*path refers to anything that we have in url, '/' is for home*/}
          <Route path='products/:productId' element={<SingleProduct/>}></Route>
          <Route path='login' element={<Login setUser={setUser}></Login>}></Route>
          <Route path='dashboard' element={<Dashboard user={user}></Dashboard>}></Route>
          <Route path='*' element={<Error />}/> {/* * targets all URL-s that are not the path*/}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Course from './pages/CoursePage'
import SingleCourse from './pages/SingleCourse'
import Cart from './pages/Cart'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Course/>}/>
      <Route path='/singlecourse/:id' element={<SingleCourse/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
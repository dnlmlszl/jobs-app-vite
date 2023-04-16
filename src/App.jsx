import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Register, Dashboard, Edit, PrivateRoute, Error } from './pages'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/edit/:id' element={<Edit />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </Router>
      
  )
}

export default App

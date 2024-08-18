import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Nav from './Components/Nav.jsx'
import Addproduct from './Components/Addproduct.jsx'

import Update from './Components/Update.jsx'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <div><Nav /><Addproduct /></div>
    },
    {
      path: '/update',
      element: <div><Nav /><Update /></div>
    },
  ])

  return (
    <div >
      <RouterProvider router={router} />
    </div>

  )
}

export default App

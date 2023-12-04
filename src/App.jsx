import { useState } from 'react'
import './App.css'
import React from 'react'
import { LandingPage } from './components/LandingPage/LandingPage'
import { MyRoutes } from './components/routers/routes'
import { Navbar } from './components/LandingPage/Navbar'
import { NavBar2 } from './components/LandingPage/NavBar2'
import 'bootstrap/dist/css/bootstrap.min.css';

{/* <NavBar2 /> */}
{/* <Navbar />  */}

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <MyRoutes />
    </div>
  )
}

export default App

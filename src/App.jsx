import { useState } from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom'

import './App.css'
import Anasayfa from './components/anasayfa'
import Fotohobi from './components/FotografHobi/fotohobi'

import Nav from './components/Navbar/Nav'
import Foot from './components/Footer/Foot'
import Kamphobi from './components/KampHobi/Kamphobi'
import Satranchobi from './components/SatrancHobi/Satranchobi'
import Iletisim from './components/Iletisim/Iletisim'
import Page404 from './components/Page404/Page404'


function App() {
  return (
    <>
      <div className='h-auto bg-cover mx-auto bg-cover bg-center bg-[url("https://images.unsplash.com/photo-1550001437-281dcb39e26d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
        <Nav/>
        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/fotohobi" element={<Fotohobi/>}/>
          <Route path="/kamphobi" element={<Kamphobi/>}/>
          <Route path="/satranchobi" element={<Satranchobi/>}/>
          <Route path="/iletisim" element={<Iletisim/>}/>
          <Route path="*" element={<Page404/>}/>

        </Routes>
        <Foot/>
      </div>
    </>
  )
}

export default App

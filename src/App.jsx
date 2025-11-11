import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Booking from './pages/Booking.jsx'
import Contact from './pages/Contact.jsx'
export default function App(){return(<div className="app-shell"><Navbar/><main><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/booking" element={<Booking/>}/><Route path="/contact" element={<Contact/>}/></Routes></main><Footer/></div>)}

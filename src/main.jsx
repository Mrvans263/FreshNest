import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'
import './styles/main.css'
const root = createRoot(document.getElementById('root'))
root.render(<React.StrictMode><LanguageProvider><BrowserRouter><App/></BrowserRouter></LanguageProvider></React.StrictMode>)

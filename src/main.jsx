import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom"
import { ResultContextProvider } from './context/resultContextProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
<ResultContextProvider>
        <App />
</ResultContextProvider>

)

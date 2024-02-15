import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Results from './components/Results';
import Search from './components/Search';
import Layout from './components/Layout';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="images" element={<Results />}/>
            <Route path="news" element={<Results />}/>
            <Route path="videos" element={<Results />}/>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App

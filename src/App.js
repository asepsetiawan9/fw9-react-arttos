import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';

import ListCharacter from './pages/ListCharacter'
import DetailCharacter from './pages/DetailCharacter'
import Home from './pages/Home'
import HomeLanding from './pages/HomeLanding'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="tes" element={<ListCharacter />} />
        <Route path="/" element={<HomeLanding />} />
        <Route path="home" element={<Home />} />
        <Route path="details/:id" element={<DetailCharacter />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
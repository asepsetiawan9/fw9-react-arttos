import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';

// import ListCharacter from './pages/ListCharacter'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import HomeLanding from './pages/HomeLanding'
import CreatePin from './pages/CreatePin';
import CreatePinSuccess from './pages/CreatePinSuccess';
import PassForgot from './pages/PassForgot';
import PassNew from './pages/PassNew';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="tes" element={<Home />} />
        <Route path="/" element={<HomeLanding />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="createpin" element={<CreatePin />} />
        <Route path="createpinsuccess" element={<CreatePinSuccess />} />
        <Route path="forgot" element={<PassForgot />} />
        <Route path="passnew" element={<PassNew />} />
        
        {/* <Route path="details/:id" element={<DetailCharacter />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
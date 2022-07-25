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
import NavbarDash from './components/NavbarDash';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import TransHistory from './pages/TransHistory';
import TransSearch from './pages/TransSearch';
import TransInput from './pages/TransInput';
import TransConfirm from './pages/TransConfirm';
import Topup from './pages/Topup';
import Profile from './pages/Profile';
import PersonalInfo from './pages/PersonalInfo';
import PassChange from './pages/PassChange';
import PinChange from './pages/PinChange';
import PhoneAdd from './pages/PhoneAdd';
import PhoneManage from './pages/PhoneManage';
import TransSuccess from './pages/TransSuccess';
import TransFail from './pages/TransFail';

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
        <Route path="header" element={<Header />} />
        <Route path="navbardash" element={<NavbarDash />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="transhistory" element={<TransHistory />} />
        <Route path="transsearch" element={<TransSearch />} />
        <Route path="transinput" element={<TransInput />} />
        <Route path="confirm" element={<TransConfirm />} />
        <Route path="topup" element={<Topup />} />
        <Route path="profile" element={<Profile />} />
        <Route path="personalinfo" element={<PersonalInfo />} />
        <Route path="passchange" element={<PassChange />} />
        <Route path="pinchange" element={<PinChange />} />
        <Route path="phoneadd" element={<PhoneAdd />} />
        <Route path="phonemanage" element={<PhoneManage />} />
        <Route path="transsuccess" element={<TransSuccess />} />
        <Route path="transfail" element={<TransFail />} />
        
        {/* <Route path="details/:id" element={<DetailCharacter />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
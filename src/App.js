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
import PrivateRoute from "./components/PrivateRoute";
import TesRedux from './pages/TesRedux';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="header" element={<PrivateRoute><Header /></PrivateRoute>} />
        <Route path="navbardash" element={<NavbarDash />} />
        <Route path="tes" element={<Home />} />
        <Route path="/" element={<HomeLanding />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} /> 
        <Route path="forgot" element={<PassForgot />} />
        <Route path="passnew" element={<PassNew />} />
        <Route path="tesredux" element={<TesRedux />} />

        <Route path="createpin" 
               element={<PrivateRoute><CreatePin /></PrivateRoute>} />
        <Route path="createpinsuccess" 
               element={<PrivateRoute><CreatePinSuccess /></PrivateRoute>} />
        <Route path="dashboard" 
               element={
                <PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="transhistory" 
               element={
                <PrivateRoute><TransHistory /></PrivateRoute>} />
        <Route path="transsearch" 
               element={
                <PrivateRoute><TransSearch /></PrivateRoute>} />
        <Route path="transinput" 
               element={
                <PrivateRoute><TransInput /></PrivateRoute>} />
        <Route path="confirm" 
               element={
                <PrivateRoute><TransConfirm /></PrivateRoute>} />
        <Route path="topup" 
               element={
                <PrivateRoute><Topup /></PrivateRoute>} />
        <Route path="profile" 
               element={
                <PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="personalinfo" 
               element={
                <PrivateRoute><PersonalInfo /></PrivateRoute>} />
        <Route path="passchange" 
               element={
                <PrivateRoute><PassChange /></PrivateRoute>} />
        <Route path="pinchange" 
               element={
                <PrivateRoute><PinChange /></PrivateRoute>} />
        <Route path="phoneadd" 
               element={
                <PrivateRoute><PhoneAdd /></PrivateRoute>} />
        <Route path="phonemanage" 
               element={
                <PrivateRoute><PhoneManage /></PrivateRoute>} />
        <Route path="transsuccess" 
               element={
                <PrivateRoute><TransSuccess /></PrivateRoute>} />
        <Route path="transfail" 
               element={
                <PrivateRoute><TransFail /></PrivateRoute>} />
        
        {/* <Route path="details/:id" element={<DetailCharacter />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
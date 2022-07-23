import React from 'react'
import '../assets/css/pagestyle.css'
import {Navbar, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import phonelogin from '../assets/images/phonelogin.png'
//icon
import { FiEye } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiLock } from "react-icons/fi";

function Login() {
  const style = { color: "#1A374D", fontSize: "1.5em" }
  return (
    <>
    <Row className='w-100 mh-100'>
        <Col className='parent' md={7} >
        <Navbar>
              <Link className='navbar-brand titleapp' to='/home'>ART-TOS</Link>
        </Navbar>
          <div className="d-flex flex-column align-items-center">
              <div>
                  <img src={phonelogin} alt="phonelogin"/>
              </div>
              <div >
                  <h1>App that Covering Banking Needs</h1>
                  <p>Zwallet is an application that focussing in banking needs for all users
                      in the world. Always updated and always following world trends.
                      5000+ users registered in Zwallet everyday with worldwide
                      users coverage.</p>
              </div>
          </div>
        </Col>

        <Col className='d-flex flex-column gap-3 form-login1' md={5}>
            <Link className='secTitle' to={"/login/"}>ART-TOS</Link>

            <h3>Start Accessing Banking Needs
                With All Devices and All Platforms
                With 30.000+ Users</h3>
            <p>Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
          
          <div className='d-flex flex-column gap-5' >
            <div class="input-group">
                <div class="input-group-text">
                <FiMail style={style} />
                </div>
                <input placeholder="Enter Your Email" type="text" class="form-control" aria-label="Text input with checkbox"/>
                
              </div>

            <div className="input-group mb-3">
                <div className="input-group-text">
                <FiLock style={style} /> 
                </div>
                <input placeholder="Enter Your Password" type="password" className="form-control" aria-label="Text input with checkbox"/>
                <span className="input-group-text togglePassword" id="">
                <FiEye style={style} />
                  </span>
            </div>
            
            <div className="text-end" style={{marginTop: '-50px'}}>
                 <Link style={{textDecoration: 'none', color: '#406882'}}  to={"/forgot/"}>Forgot Password?</Link>
            </div>
            <div className="d-grid ">
                <Link className='btn btn-fw9' to={"/createpin/"}>Login</Link>
            </div>
            <div className="text-center">
                Don't have an account? Let's 
                <Link style={{textDecoration:'none',  color: '#406882' }} to={"/signup/"}> Sign Up</Link>
               
            </div>
          </div>
        </Col>
    </Row>
    </>
  )
}

export default Login
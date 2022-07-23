import React from 'react'
import '../assets/css/pagestyle.css'
import {Navbar, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import phonelogin from '../assets/images/phonelogin.png'
//icon

import { FiMail } from "react-icons/fi";


function PassForgot() {
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

            <h3>Did You Forgot Your Password?
                Don’t Worry, You Can Reset Your
                Password In a Minutes.</h3>
            <p>To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</p>
          
          <div className='d-flex flex-column gap-5' >
            <div class="input-group">
                <div class="input-group-text">
                <FiMail style={style} />
                </div>
                <input placeholder="Enter Your Email" type="text" class="form-control" aria-label="Text input with checkbox"/>
                
            </div>

           
            <div className="d-grid ">
                <Link className='btn btn-fw9' to={"/passnew/"}>Reset Password</Link>
            </div>
            
          </div>
        </Col>
    </Row>
    </>
  )
}

export default PassForgot
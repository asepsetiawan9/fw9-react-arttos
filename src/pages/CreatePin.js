import React from 'react'
import '../assets/css/pagestyle.css'
import {Navbar, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import phonelogin from '../assets/images/phonelogin.png'

function CreatePin() {
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
            
            <h3>Secure Your Account, Your Wallet,
                and Your Data With 6 Digits PIN
                That You Created Yourself.</h3>
            <p>Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don’t tell anyone about your Zwallet account password and the PIN.</p>
          
          <div className='wraper-pin' >

            <div className="pin-input-wrapper ">

                <div className="pin-form-wrap">
                    <input type="text" className="pin-form-input"/>
                </div>

                <div className="pin-form-wrap">
                    <input type="text" className="pin-form-input"/>
                </div>

                <div className="pin-form-wrap">
                    <input type="text" className="pin-form-input"/>
                </div>

                <div className="pin-form-wrap">
                    <input type="text" className="pin-form-input"/>
                </div>

                <div className="pin-form-wrap">
                    <input type="text" className="pin-form-input"/>
                </div>

                <div className="pin-form-wrap">
                    <input type="text" className="pin-form-input"/>
                </div>
            </div>
            <div className='wraper-pin' >
                <div className="d-grid ">
                    <Link className='btn btn-fw9' to={"/createpinsuccess/"}>Confirm</Link>
                </div>
            </div>
            
          </div>
        </Col>
    </Row>
    </>
  )
}

export default CreatePin
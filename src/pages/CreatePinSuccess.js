import React from 'react'
import '../assets/css/pagestyle.css'
import {Navbar, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import phonelogin from '../assets/images/phonelogin.png'
//icon
import success from '../assets/images/success.png'


function CreatePinSuccess() {
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
            <img style={{height: '50px', width: '50px'}} src={success} alt='success'/>
            <h3>Your PIN Was Successfully Created</h3>
            <p>Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!</p>
          
          <div className='wraper-pin' >

            
            <div className="d-grid ">
                <Link className='btn btn-fw9' to={"/dashboard/"}>Login Now</Link>
            </div>
            
          </div>
        </Col>
    </Row>
    </>
  )
}

export default CreatePinSuccess
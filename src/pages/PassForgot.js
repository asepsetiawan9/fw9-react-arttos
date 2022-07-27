import React from 'react'
import '../assets/css/pagestyle.css'
import {Navbar, Row, Col, Form} from 'react-bootstrap'
import {Formik} from 'formik'
import * as Yup from 'yup'
import {Link} from 'react-router-dom'
import phonelogin from '../assets/images/phonelogin.png'
//icon

import { FiMail } from "react-icons/fi";


const forgotPassSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address format').required('Required')
})

const EmailForm = ({errors, handleSubmit, handleChange})=> {
  const style = { color: "#1A374D", fontSize: "1.5em" }
  console.log(errors)
  return(
    <>
      <Form  noValidate onSubmit={handleSubmit}>
        <Form.Group className="input-group mb-3">
          <div className="input-group-text">
            <FiMail style={style} /> 
          </div>    
          <Form.Control name="email" onChange={handleChange} type="email" placeholder="Enter email" isInvalid={!!errors.email} /> 
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <div className="d-grid ">
            <Link className='btn btn-fw9' to={"/passnew/"}>Reset Password</Link>
        </div>
      </Form>
    </>
  )
}
function PassForgot() {
  return (
    <>
    <Row className='mh-100'>
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
          <Formik
            // onSubmit={onLoginRequest}
            initialValues={{email: '', password: ''}}
            validationSchema={forgotPassSchema}>
            {(props)=><EmailForm {...props} />}
          </Formik>
            
          </div>
        </Col>
    </Row>
    </>
  )
}

export default PassForgot
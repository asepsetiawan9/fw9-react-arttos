import React from 'react'
import '../assets/css/pagestyle.css'
import {Navbar, Row, Col, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import phonelogin from '../assets/images/phonelogin.png'
import {Formik} from 'formik'
import * as Yup from 'yup'
//icon
import { FiEye, FiLock } from "react-icons/fi";

const passNewSchema = Yup.object().shape({
  password: Yup.string().min(6).required('Password is required'),
  passwordConfirmation: Yup.string().min(6)
     .oneOf([Yup.ref('password'), null], 'Passwords must match')
})

const PassNewForm = ({errors, handleSubmit, handleChange})=> {
  const style = { color: "#1A374D", fontSize: "1.5em" }
  console.log(errors)
  return(
    <>
      <Form className='d-flex flex-column gap-3' noValidate onSubmit={handleSubmit}>

        <Form.Group className="input-group mb-3">
          <div className="input-group-text">
            <FiLock style={style} /> 
          </div>    
          <Form.Control name="password" onChange={handleChange} type="password"  placeholder="Password" isInvalid={!!errors.password} />
          <div className="input-group-text">
          <FiEye style={style} />
          </div>
          <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="input-group mb-3">
          <div className="input-group-text">
            <FiLock style={style} /> 
          </div>    
          <Form.Control name="passwordConfirmation" onChange={handleChange} type="password"  placeholder="Password Confirmation" isInvalid={!!errors.passwordConfirmation} />
          <div className="input-group-text">
          <FiEye style={style} />
          </div>
          <Form.Control.Feedback type="invalid">{errors.passwordConfirmation}</Form.Control.Feedback>
        </Form.Group>
        
        <div className="d-grid ">
            <Link className='btn btn-fw9' to={"/login/"}>Reset Password</Link>
        </div>
      </Form>
    </>
  )
}

function PassNew() {
  
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
            validationSchema={passNewSchema}>
            {(props)=><PassNewForm {...props} />}
          </Formik>
           
          </div>
        </Col>
    </Row>
    </>
  )
}

export default PassNew
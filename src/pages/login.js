import React from 'react'
import '../assets/css/pagestyle.css'
import {Navbar, Row, Col, Form, Button, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import phonelogin from '../assets/images/phonelogin.png'
import {Formik} from 'formik'
import * as Yup from 'yup'
//icon
import { FiMail } from "react-icons/fi";
import { FiLock } from "react-icons/fi";

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address format').required('Required'),
  password: Yup.string().min(6).required('Required')
})

const AuthForm = ({errors, handleSubmit, handleChange})=> {
  const style = { color: "#1A374D", fontSize: "1.5em" }
  console.log(errors)
  return(
    <>
      <Form className='d-flex flex-column gap-2' noValidate onSubmit={handleSubmit}>
        <Form.Group className="input-group mb-3">
          <div className="input-group-text">
            <FiMail style={style} /> 
          </div>    
          <Form.Control name="email" onChange={handleChange} type="email" placeholder="Enter email" isInvalid={!!errors.email} /> 
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="input-group mb-3">
          <div className="input-group-text">
            <FiLock style={style} /> 
          </div>    
          <Form.Control name="password" onChange={handleChange} type="password"  placeholder="Password" isInvalid={!!errors.password} />
          <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
        </Form.Group>

          <div className="text-end" style={{marginTop: '-10px',marginBottom: '10px'}}>
                <Link style={{textDecoration: 'none', color: '#406882'}}  to={"/forgot/"}>Forgot Password?</Link>
          </div>
        
        <div className="d-grid ">
            <Link className='btn btn-fw9' to={"/createpin/"}>Login</Link>
        </div>
        <div className="text-center" style={{marginTop: '10px'}}>
                Don't have an account? Let's 
                <Link style={{textDecoration:'none',  color: '#406882' }} to={"/signup/"}> Sign Up</Link>
               
        </div>
      </Form>
    </>
  )
}

function Login() {
  
  return (
    <>
    {/* <Container className="container-fluid"> */}
    <Row className='mh-100 '>
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

          <Formik
            // onSubmit={onLoginRequest}
            initialValues={{email: '', password: ''}}
            validationSchema={loginSchema}>
            {(props)=><AuthForm {...props} />}
          </Formik>

          </div>
        </Col>
    </Row>
    </>
  )
}

export default Login
import React from 'react';
import '../assets/css/pagestyle.css'
import {Alert, Navbar, Row, Col, Form, Button} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import phonelogin from '../assets/images/phonelogin.png';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { login } from "../redux/asyncActions/auth";
//icon
import { FiMail } from "react-icons/fi";
import { FiLock } from "react-icons/fi";

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address format').required('Required'),
  password: Yup.string().min(6).required('Required')
})

const LoginForm = (props)=> {
  const successMsg = useSelector((state) => state.auth.successMsg);
  const errorMsg = useSelector((state) => state.auth.errorMsg);

  const style = { color: "#1A374D", fontSize: "1.5em" }

  return(
    <>
      <Form className='d-flex flex-column gap-2' 
      noValidate 
      onSubmit={props.handleSubmit}>
       {successMsg && <Alert variant="success">{successMsg}</Alert>}
          {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
        <Form.Group className="input-group mb-3">
          <div className="input-group-text"><FiMail style={style} /> </div>    
          {/* form input */}
          <Form.Control 
          name="email" 
          type="email" 
          placeholder="Enter email" 
          onChange={props.handleChange} 
          value={props.values.email}
          isInvalid={!!props.errors.email} />  
          <Form.Control.Feedback type="invalid">{props.errors.email}</Form.Control.Feedback> {/* form validasi */}
        </Form.Group>

        <Form.Group className="input-group mb-3">
          <div className="input-group-text">
            <FiLock style={style} /> 
          </div>    
          <Form.Control 
          type="password"  
          placeholder="Password" 
          name="password" 
          value={props.values.password}
          onChange={props.handleChange} 
          isInvalid={!!props.errors.password} />
          <Form.Control.Feedback type="invalid">{props.errors.password}</Form.Control.Feedback>
        </Form.Group>

          <div className="text-end" style={{marginTop: '-10px',marginBottom: '10px'}}>
                <Link style={{textDecoration: 'none', color: '#406882'}}  to={"/forgot/"}>Forgot Password?</Link>
          </div>
        
        <div className="d-grid ">
            <Button type="submit" className='btn btn-fw9'>Login</Button>
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
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  const onLogin = (value) => {
    const data = { email: value.email, password: value.password };
    // console.log(data);
    dispatch(login(data));
    // console.log('sadsadsasda');
  };

  React.useEffect(()=>{
    if (token) {
      navigate('/dashboard')
    }
  }, [navigate, token])

  return (
    <>
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
            onSubmit={onLogin}
            initialValues={{email: '', password: ''}}
            validationSchema={loginSchema}
            >
            
            {(props)=><LoginForm {...props} />}
          </Formik>

          </div>
        </Col>
    </Row>
    </>
  )
}

export default Login

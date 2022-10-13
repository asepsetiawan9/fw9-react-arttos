import React from 'react'
import '../assets/css/dashstyle.css'
import NavbarDash from '../components/NavbarDash'
import Header from '../components/Header'
import { Row, Col, Form} from 'react-bootstrap'
import {Formik} from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updatePassword } from '../redux/asyncActions/profile';

import { FiEye } from "react-icons/fi";
import { FiLock } from "react-icons/fi";

const passNewSchema = Yup.object().shape({
    password: Yup.string().min(6).required('Password is required'),
    passwordConfirmation: Yup.string().min(6)
       .oneOf([Yup.ref('password'), null], 'Passwords must match')
  })
  
  const PassNewForm = ({errors, handleSubmit, handleChange})=> {
    const style = { color: "#1A374D", fontSize: "1.5em" }
    return(
      <>
        <Form className='d-flex flex-column gap-3' noValidate onSubmit={handleSubmit}>
          <Form.Group className="input-group mb-3">
            <div className="input-group-text">
              <FiLock style={style} /> 
            </div>    
            <Form.Control name="password" onChange={handleChange} type="password"  placeholder="New Password" isInvalid={!!errors.password} />
            <div className="input-group-text">
            <FiEye style={style} />
            </div>
            <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
          </Form.Group>
  
          <Form.Group className="input-group mb-3">
            <div className="input-group-text">
              <FiLock style={style} /> 
            </div>    
            <Form.Control name="passwordConfirmation" onChange={handleChange} type="password"  placeholder="Repeat New Password" isInvalid={!!errors.passwordConfirmation} />
            <div className="input-group-text">
            <FiEye style={style} />
            </div>
            <Form.Control.Feedback type="invalid">{errors.passwordConfirmation}</Form.Control.Feedback>
          </Form.Group>
          
          <div className="d-grid ">
              <button className='btn btn-fw9' type='submit'>Change Password</button>
          </div>
        </Form>
      </>
    )
  }
  

function PassChange() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const msgEdit = useSelector((state) => state.profile.msgUpdate);
  
  const onUpdatePassword = (value) => {
    const data = { passsword: value.password};
    // console.log('ini datanya', data);
    dispatch(updatePassword({data, token}));
    // alert(msgEdit)
    // navigate('/profile');
  };
  return (
    <>
    <section className='headerDashboard'>
      <Header/>
    </section>

    <section style={{padding:'20px 150px', backgroundColor: '#1A374D', color: '#1A374D'}} className='mainSection'>
      <Row className='min-vh-100 mw-100'>
          <NavbarDash/>
          <Col md={9} className='px-4 d-flex flex-column'>
        <div className='d-flex flex-column transferTo' style={{background: '#B1D0E0', borderRadius: '20px'}}>
            <div className="d-flex flex-column" style={{justifyContent: 'space-between', padding:'30px 25px'}} >
                <div>
                  <p style={{fontSize: '18px', fontWeight: 'bold'}}>Change Password</p>
                </div> 
            </div>
            <div className="wrapTrasn">
                <div>
                  <p style={{fontSize: '16px'}}>You must enter your current password and then <br/> type your new password twice.</p>
                </div>

                <div className='d-flex flex-column gap-4 passChange'>
                <Formik
                    onSubmit={onUpdatePassword}
                    initialValues={{currentpassword: '', password: '', passwordConfirmation: ''}}
                    validationSchema={passNewSchema}>
                    {(props)=><PassNewForm {...props} />}
                </Formik>
                </div>
            </div>
      
    </div>

    </Col>
  
      </Row>
      
    </section>
           
    <footer >
        <div className="d-flex flex-row footerDekstop" style={{justifyContent: 'space-between'}}>
            <div><p>2022 Art-Tos. All right reserved.</p></div>
            <div><p>+62 5637 8882 9901 &nbsp;&nbsp;&nbsp;&nbsp;contact@art-Tos.com</p></div>
        </div>
    </footer>

    </>
  )
}

export default PassChange
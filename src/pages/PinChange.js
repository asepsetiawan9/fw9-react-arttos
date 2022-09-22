import React, { useState } from 'react'
import '../assets/css/dashstyle.css'
import NavbarDash from '../components/NavbarDash'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Row, Col, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updatePin } from '../redux/asyncActions/profile';

const PinForm = (props)=>{
  return(
  <Form className='wraper-pin' >
    <div className="pin-input-wrapper ">
        <div className="pin-form-wrap">
            <input name="first"
            value={props.values.first}
            initialValues={{first: ''}}
          onChange={props.handleChange} type="text" className="pin-form-input"/>
        </div>

        <div className="pin-form-wrap">
            <input name="sec"
            value={props.values.sec}
            initialValues={{sec: ''}}
          onChange={props.handleChange} type="text" className="pin-form-input"/>
        </div>

        <div className="pin-form-wrap">
            <input name="third"
            value={props.values.third}
            initialValues={{third: ''}}
          onChange={props.handleChange} type="text" className="pin-form-input"/>
        </div>

        <div className="pin-form-wrap">
            <input name="fourth"
            value={props.values.fourth}
            initialValues={{fourth: ''}}
          onChange={props.handleChange} type="text" className="pin-form-input"/>
        </div>

        <div className="pin-form-wrap">
            <input name="fiveth"
            value={props.values.fivth}
            initialValues={{fivth: ''}}
          onChange={props.handleChange} type="text" className="pin-form-input"/>
        </div>

        <div className="pin-form-wrap">
            <input name="sixth"
            value={props.values.sixth}
            initialValues={{sixth: ''}}
          onChange={props.handleChange} type="text" className="pin-form-input"/>
        </div>
    </div>

    <div className="d-grid fw9BtnChange">
        <button className='btn btn-fw9' type='submit'>Change Password</button>
    </div>
  </Form> 
  )
}


function PinChange() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const msgEdit = useSelector((state) => state.profile.msgUpdate);

  const onUpdatePin = (value) => {
    const pinValue = { first: value.first, sec: value.sec, third: value.third, fourth: value.fourth, fifth: value.fifth, sixth: value.sixth }
    const pin = Object.values(pinValue).join('');
    console.log('ini pinnya', pin);
    // const data = { pin };
    // dispatch(updatePin({data, token}));
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
                  <p style={{fontSize: '18px', fontWeight: 'bold'}}>Change PIN</p>
                </div> 
            </div>
            <div className="wrapTrasn">
                <div>
                  <p style={{fontSize: '16px'}}>Enter your current 6 digits Zwallet PIN below to <br/> continue to the next steps.</p>
                </div>
              <div
              onSubmit={onUpdatePin}
              
              >
                {(props)=><PinForm {...props}/>}
              </div>
            </div>
      
    </div>

    </Col>
  
      </Row>
      
    </section>
           
    <footer >
        <Footer/>
    </footer>

    </>
  )
}

export default PinChange
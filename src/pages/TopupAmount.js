import React, {useState} from 'react';
import '../assets/css/dashstyle.css'
import NavbarDash from '../components/NavbarDash'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Row, Col, Form, Button } from 'react-bootstrap'
import {Formik} from 'formik'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {topup} from '../redux/asyncActions/transactions';
import { getProfile } from '../redux/asyncActions/profile';
import {getTransactionsLimit} from '../redux/asyncActions/transactions';
import * as Yup from 'yup'
//photo
import p1 from '../assets/images/p1.png'

const amountSchema = Yup.object().shape({
  amount: Yup.number().positive("Must be more than 0")
  .integer("Must be more than 0")
  .required("This field is required")
  .max(10000000, 'Max Amount is 10.000.000')
})

const AmountForm = (props)=> {
    const profile = useSelector((state) => state.profile.data);
  return(
    <>
        <Form  
        noValidate 
        onSubmit={props.handleSubmit}>
          <div className="inputAmount">
            <div>
              <Form.Control className="form-control wrap-amount text-center" style={{borderBottom:'none', fontSize: '42px', color:'#1A374D', paddingTop: '40px', fontWeight: '900'}} 
                name="balance" 
                type="number" 
                placeholder="0.00" 
                onChange={props.handleChange} 
                value={props.values.balance}
                isInvalid={!!props.errors.balance}
                
            /> 
                <Form.Control.Feedback className="wrap-amount text-center" type="invalid">{props.errors.balance}</Form.Control.Feedback>
            </div>

            <div>
                <p style={{fontSize: '16px', color:'#1A374D', fontWeight: '700'}}>Rp {profile.balance? profile.balance : '0'} Available</p>
            </div>

          </div>
          <div style={{textAlign:  'center', paddingBottom: '50px'}}>
          {/* style={{ padding: '10px 100px'}} 
          className='btn btn-fw9' */}
            {/* <Button onClick={onTopup}> pencett</Button> */}
            <Button style={{ padding: '10px 100px'}} 
                    className='btn btn-fw9' 
                    type="submit">Confirm</Button>
          </div>
        </Form>
    </>
  )
}

function TopupAmount() {
    const profile = useSelector((state) => state.profile.data);
    const token = useSelector(state => state.auth.token);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // const onTopup = () => {
    //     console.log('ababababababbab');
    // // const data = { balance: value.balance };
    // // dispatch(topup(data));
    // // dispatch(getProfile(token));
    // // dispatch(getTransactionsLimit(token));
    // // navigate('/dashboard')
    // };
    const onTopup = (value) => {
      // const data = { email: value.email, password: value.password };
      // console.log(data);
      // dispatch(login(data));
      console.log('sadsadsasda');
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
        <div className='d-flex flex-column gap-2' style={{background: '#B1D0E0', borderRadius: '20px'}}>
            <div className="d-flex flex-column gap-3" style={{justifyContent: 'space-between', padding:'30px 25px'}} >
                <div>
                  <p style={{fontSize: '18px', fontWeight: 'bold'}}>Topup</p>
                </div>
            </div>
        <div className="wrapTrasn">
            <div className='cardSearchTrans'>
              <div className="d-flex flex-row gap-4" style={{padding: '0px 20px'}}>
              {profile.picture? 
                <img style={{width:'50px', height: '50px'}} src={profile.picture } alt="user1"/>
                : <img style={{width:'50px', height: '50px'}} src={p1} alt="user1"/>
              }
                  <div className="d-flex flex-column">
                      <p style={{fontSize:'16px',  fontWeight: 'bold'}}>{profile.fullname? profile.fullname : 'your name'}</p>
                      <p style={{fontSize:'14px', marginTop: '-15px'}}>{profile.phone? profile.phone : 'your phone'}</p>
                  </div>
              </div>
            </div>
        </div>

        <div>
            <p style={{fontSize: '16px', color:'#7A7886', paddingLeft: '30px'}}>Type the amount you want to transfer and then <br/>
                press continue to the next steps.</p>
        </div>
        <div>
          <Formik
              onSubmit={onTopup}
              initialValues={{balance: ''}}
              validationSchema={amountSchema}>
              {(props)=><AmountForm {...props} />}
          </Formik>
        </div>
    </div>
        </Col>
      </Row>
    </section>
           
    <footer >
        <>
        <Footer/>
        </>
    </footer>

    </>
  )
}

export default TopupAmount
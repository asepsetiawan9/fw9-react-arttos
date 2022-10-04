import React from 'react'
import '../assets/css/dashstyle.css'
import NavbarDash from '../components/NavbarDash'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Row, Col, Form} from 'react-bootstrap'
import * as Yup from 'yup'
import {Formik} from 'formik'
import { FiPhone } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updatePhone } from '../redux/asyncActions/profile';
import { resetMsg } from "../redux/reducers/profile";

const phoneSchema = Yup.object().shape({
  phone: Yup.string().matches(new RegExp('[0-9]{7}'))
})

const PhoneForm = (props)=>{

  return(
    <Form
    noValidate onSubmit={(props.handleSubmit)} className='d-flex flex-column gap-4 addPhone' >
      <div className="input-group " >
          <div className="input-group-text">
              <div style={{color: '#1A374D'}}>
              <FiPhone/> +62
              </div>
            
          </div>
          <Form.Control 
          name="phone"
          value={props.values.phone}
          onChange={props.handleChange}
          isInvalid={!!props.errors.phone}
          type="number" className="form-control" placeholder="Enter your phone number"  />
          <Form.Control.Feedback className="wrap-amount text-center" type="invalid">{props.errors.phone}</Form.Control.Feedback>
      </div>

      <div className="d-grid " >
          <button className='btn btn-fw9' type="submit">Add Phone Number</button>
      </div>
  </Form>
  )
}

function PhoneAdd() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const successMsg = useSelector((state) => state.profile.successMsg);
  const errMsg = useSelector((state) => state.profile.errorMsg);
  
  const onUpdatePhone = (value) => {
    const phoneForm = String('0' + value.phone)
    const data = { phone: phoneForm};
    dispatch(updatePhone({data, token}));
  };

  React.useEffect(() => {
    if (successMsg) {
      alert(successMsg)
      navigate("/profile", { state: { successMsg } });
      setTimeout(()=> dispatch(resetMsg()), 3000)
    }else{
      alert(errMsg)
      setTimeout(()=> dispatch(resetMsg()), 3000)
    }
  }, [navigate, successMsg]);

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
                  <p style={{fontSize: '18px', fontWeight: 'bold'}}>Add Phone Number</p>
                </div> 
            </div>
            <div className="wrapTrasn ">
                <div>
                  <p style={{fontSize: '16px'}}>Add at least one phone number for the transfer <br/> ID so you can start transfering your money to <br/> another user.</p>
                </div>

                <Formik
            onSubmit={onUpdatePhone}
            initialValues={{phone: ''}}
            validationSchema={phoneSchema}>
            {(props)=><PhoneForm {...props} />}
          </Formik>
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

export default PhoneAdd
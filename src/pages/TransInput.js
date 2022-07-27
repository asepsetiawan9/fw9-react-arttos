import React from 'react'
import '../assets/css/dashstyle.css'
import NavbarDash from '../components/NavbarDash'
import Header from '../components/Header'
import { Row, Col, Form } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {Formik} from 'formik'
import * as Yup from 'yup'
//photo
import p1 from '../assets/images/p1.png'

const amountSchema = Yup.object().shape({
  amount: Yup.number().positive("Must be more than 0")
  .integer("Must be more than 0")
  .required("This field is required")
  .max(10000000, 'Max Amount is 10.000.000')
})

const AmountForm = ({errors, handleSubmit, handleChange})=> {

  console.log(errors)
  return(
    <>
        <Form  noValidate onSubmit={handleSubmit}>
          <div className="inputAmount">
            <div>
              <Form.Control className="form-control wrap-amount text-center" style={{borderBottom:'none', fontSize: '42px', color:'#1A374D', paddingTop: '40px', fontWeight: '900'}} name="amount" onChange={handleChange} type="number" placeholder="0.00" isInvalid={!!errors.amount} /> 
                <Form.Control.Feedback className="wrap-amount text-center" type="invalid">{errors.amount}</Form.Control.Feedback>
                
            </div>

            <div>
                <p style={{fontSize: '16px', color:'#1A374D', fontWeight: '700'}}>Rp120.000 Available</p>
            </div>
            <div className="input-group" style={{paddingLeft: '150px', paddingRight:'150px'}}>
                <div className="input-group-text"><i data-feather="edit-2"></i>
                </div>
                <input type="text" className="form-control" placeholder="Add some notes" />
            </div>
            
          </div>
          <div style={{textAlign:  'right',  padding: '20px 50px 30px 0px'}}>
              <Link  className='regis' to={"/confirm/"}>continue</Link>
          </div>
        </Form>
    </>
  )
}

function TransSearch() {
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
                  <p style={{fontSize: '18px', fontWeight: 'bold'}}>Transfer Money</p>
                </div>
                <div>
                    <input class="form-control form-control-lg" type="text" placeholder="Search" aria-label=".form-control-lg example" style={{background: '#6998AB',
                borderRadius: '12px', border: 'unset', color: '#fff'}}/>
                </div>  
            </div>
        <div className="wrapTrasn">
            <div className='cardSearchTrans'>
              <div className="d-flex flex-row gap-4" style={{padding: '0px 20px'}}>
                <img style={{width:'50px', height: '50px'}} src={p1} alt="user1"/>
                  <div className="d-flex flex-column">
                      <p style={{fontSize:'16px',  fontWeight: 'bold'}}>Samuel Suhei</p>
                      <p style={{fontSize:'14px', marginTop: '-15px'}}>+62 813-8492-9994</p>
                  </div>
              </div>
            </div>
        </div>

        <div>
            <p style={{fontSize: '16px', color:'#7A7886', paddingLeft: '30px'}}>Type the amount you want to transfer and then <br/>
                press continue to the next steps.</p>
        </div>

        <Formik
            // onSubmit={onLoginRequest}
            initialValues={{amount: ''}}
            validationSchema={amountSchema}>
            {(props)=><AmountForm {...props} />}
          </Formik>
      
      
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

export default TransSearch
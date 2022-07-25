import React from 'react'
import '../assets/css/dashstyle.css'
import NavbarDash from '../components/NavbarDash'
import Header from '../components/Header'
import { Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { FiPhone } from "react-icons/fi";



function PhoneAdd() {
    
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

                <div className='d-flex flex-column gap-4 addPhone' >
                    <div className="input-group " >
                        <div className="input-group-text">
                            <div style={{color: '#1A374D'}}>
                            <FiPhone/> +62
                            </div>
                          
                        </div>
                        <input type="number" className="form-control" placeholder="Enter your phone number" />
                    </div>

                    <div className="d-grid " >
                        <Link className='btn btn-fw9'  to={"/profile/"}>Add Phone Number</Link>
                    </div>

                    

                   
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

export default PhoneAdd
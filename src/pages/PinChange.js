import React from 'react'
import '../assets/css/dashstyle.css'
import NavbarDash from '../components/NavbarDash'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'



function PinChange() {
    const style = { color: "#1A374D", fontSize: "1.5em" }
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

            <div className='wraper-pin' >

            <div className="pin-input-wrapper ">

                <div className="pin-form-wrap">
                    <input type="text" className="pin-form-input"/>
                </div>

                <div className="pin-form-wrap">
                    <input type="text" className="pin-form-input"/>
                </div>

                <div className="pin-form-wrap">
                    <input type="text" className="pin-form-input"/>
                </div>

                <div className="pin-form-wrap">
                    <input type="text" className="pin-form-input"/>
                </div>

                <div className="pin-form-wrap">
                    <input type="text" className="pin-form-input"/>
                </div>

                <div className="pin-form-wrap">
                    <input type="text" className="pin-form-input"/>
                </div>
            </div>
            
            <div className="d-grid fw9BtnChange">
                <Link className='btn btn-fw9' to={"/profile/"}>Change Password</Link>
            </div>
            
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
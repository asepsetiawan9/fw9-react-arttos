import React from 'react'
import '../assets/css/dashstyle.css'
import NavbarDash from '../components/NavbarDash'
import Header from '../components/Header'
import { Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
//photo
import p1 from '../assets/images/p1.png'

function TransConfirm() {
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
                  <p style={{fontSize: '18px', fontWeight: 'bold'}}>Transfer To</p>
                </div> 
            </div>
            <div className="wrapTrasn">
                <div className='cardSearchTrans'>
                    <div className="d-flex flex-row gap-4" style={{padding: '5px 20px'}}>
                        <img style={{width:'50px', height: '50px'}} src={p1} alt="user1"/>
                        <div className="d-flex flex-column">
                            <p style={{fontSize:'16px',  fontWeight: 'bold'}}>Samuel Suhei</p>
                            <p style={{fontSize:'14px', marginTop: '-15px'}}>+62 813-8492-9994</p>
                        </div>
                    </div>
                </div>

                <div>
                  <p style={{fontSize: '18px', fontWeight: 'bold'}}>Details</p>
                </div>

                <div className='cardSearchTrans'>
                    <div className="d-flex flex-column" style={{padding: '20px 0px 0px 20px'}}>
                        <p style={{fontSize:'14px', marginTop: '-10px'}}>Amount</p>
                        <p style={{fontSize:'16px',  fontWeight: 'bold'}}>Rp100.000</p>
                    </div>
                </div>
                <div className='cardSearchTrans'>
                    <div className="d-flex flex-column" style={{padding: '20px 0px 0px 20px'}}>
                        <p style={{fontSize:'14px', marginTop: '-10px'}}>Balance Left</p>
                        <p style={{fontSize:'16px',  fontWeight: 'bold'}}>Rp20.000</p>
                    </div>
                </div>
                <div className='cardSearchTrans'>
                    <div className="d-flex flex-column" style={{padding: '20px 0px 0px 20px'}}>
                        <p style={{fontSize:'14px', marginTop: '-10px'}}>Date & Time</p>
                        <p style={{fontSize:'16px',  fontWeight: 'bold'}}>May 11, 2020 - 12.20</p>
                    </div>
                </div>
                <div className='cardSearchTrans'>
                    <div className="d-flex flex-column" style={{padding: '20px 0px 0px 20px'}}>
                        <p style={{fontSize:'14px', marginTop: '-10px'}}>Notes</p>
                        <p style={{fontSize:'16px',  fontWeight: 'bold'}}>For buying some socks</p>
                    </div>
                </div>
            </div>
        <div className='btnTransConfirm btn-close' style={{textAlign:  'right',  padding: '20px 50px 30px 0px'}}>
            <button type="button" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        {/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="d-flex flex-column">
                            <h5 className="modal-title" id="exampleModalLabel" style={{fontWeight: 'bold'}}>Enter PIN to Transfer</h5>
                            <p> Enter your 6 digits PIN for confirmation to <br/> continue transferring money. </p>
                        </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="modalPinWrap">
                            <div className="modalPinFormWrap">
                                <input type="text" className="modalPinForm"/>
                            </div>
                        </div>
                    </div>
                </div>
                                               
            </div>
        </div> */}
      
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

export default TransConfirm
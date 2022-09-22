import React, { useState } from 'react'
import '../assets/css/dashstyle.css'
import NavbarDash from '../components/NavbarDash'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Row, Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
//photo
import p1 from '../assets/images/p1.png'
import success from '../assets/images/success.png'
//icon
import { FiShare2 } from "react-icons/fi";

function TransSuccess() {
    const detailInput = useSelector(state => state.transactions.dataTransfer);
    const dataRecipient = useSelector(state => state.transactions.dataRecipient);
    const profile = useSelector((state) => state.profile.data);

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

            <div className="wrapTrasn">

                <div className='d-flex flex-column gap-2 img-fluid' style={{padding: '60px 0px 10px 0px' , textAlign: 'center', alignItem: 'center'}}>
                    <div><img style={{width:'50px', height: '50px'}} src={success} alt="success"/></div>
                    <div><p> Transfer Success</p></div>
                </div>

                <div className='cardSearchTrans'>
                    <div className="d-flex flex-column" style={{padding: '20px 0px 0px 20px'}}>
                        <p style={{fontSize:'14px', marginTop: '-10px'}}>Amount</p>
                        <p style={{fontSize:'16px',  fontWeight: 'bold'}}>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' })
                .format(parseInt(detailInput?.amount ||0))}</p>
                    </div>
                </div>
                <div className='cardSearchTrans'>
                    <div className="d-flex flex-column" style={{padding: '20px 0px 0px 20px'}}>
                        <p style={{fontSize:'14px', marginTop: '-10px'}}>Balance Left</p>
                        <p style={{fontSize:'16px',  fontWeight: 'bold'}}>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' })
                .format(parseInt(profile?.balance||0))}</p>
                    </div>
                </div>
                <div className='cardSearchTrans'>
                    <div className="d-flex flex-column" style={{padding: '20px 0px 0px 20px'}}>
                        <p style={{fontSize:'14px', marginTop: '-10px'}}>Date & Time</p>
                        <p style={{fontSize:'16px',  fontWeight: 'bold'}}>{detailInput?.date} {detailInput?.time}</p>
                    </div>
                </div>
                <div className='cardSearchTrans'>
                    <div className="d-flex flex-column" style={{padding: '20px 0px 0px 20px'}}>
                        <p style={{fontSize:'14px', marginTop: '-10px'}}>Notes</p>
                        <p style={{fontSize:'16px',  fontWeight: 'bold'}}>{detailInput?.note}</p>
                    </div>
                </div>
                
                <div>
                  <p style={{fontSize: '18px', fontWeight: 'bold'}}>Transfer to</p>
                </div>

                <div className='cardSearchTrans'>
                    <div className="d-flex flex-row gap-4 img-fluid" style={{padding: '5px 20px'}}>
                        {dataRecipient.picture? 
                        <img style={{width:'50px', height: '50px'}} src={dataRecipient.picture} alt="user1"/>:
                        <img style={{width:'50px', height: '50px'}} src={p1} alt="user1"/>}
                        <div className="d-flex flex-column">
                            <p style={{fontSize:'16px',  fontWeight: 'bold'}}>{dataRecipient?.fullname || 'recipient name'} </p>
                            <p style={{fontSize:'14px', marginTop: '-15px'}}>{dataRecipient?.phone || 'recipient phone'} </p>
                        </div>
                    </div>
                </div>

                <div className='d-flex flex-row gap-2' style={{justifyContent: 'flex-end', textAlign:  'right',  padding: '20px 50px 30px 0px'}}>
                    <Button className='btn btn-fw9' style={{ background:'#1A374D', padding: '10px'}}><FiShare2/></Button>
                    <Button className='btn btn-fw9' style={{ background:'#406882', padding: '10px'}} >Download PDF</Button>
                    <Link to={'/dashboard'} className='btn btn-fw9' style={{ padding: '10px'}} >Back to Home</Link>
                </div>
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

export default TransSuccess
import React from 'react'
import '../assets/css/dashstyle.css'
import NavbarDash from '../components/NavbarDash'
import Header from '../components/Header'
import { Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
//photo
import p1 from '../assets/images/p1.png'

function Topup() {
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
                  <p style={{fontSize: '18px', fontWeight: 'bold'}}>How To Top Up</p>
                </div> 
            </div>
            <div className="wrapTrasn">
                <div className='cardSearchTrans'>
                    <div className="d-flex flex-row gap-2" style={{padding: '20px 0px 0px 20px'}}>
                        <p style={{fontSize:'17px',  fontWeight: 'bold'}}>1. </p>
                        <p >Go to the nearest ATM or you can use E-Banking.</p>
                    </div>
                </div>
                <div className='cardSearchTrans'>
                    <div className="d-flex flex-row gap-2" style={{padding: '20px 0px 0px 20px'}}>
                        <p style={{fontSize:'17px',  fontWeight: 'bold'}}>2. </p>
                        <p >Type your security number on the ATM or E-Banking.</p>
                    </div>
                </div>
                <div className='cardSearchTrans'>
                    <div className="d-flex flex-row gap-2" style={{padding: '20px 0px 0px 20px'}}>
                        <p style={{fontSize:'17px',  fontWeight: 'bold'}}>3. </p>
                        <p >Select “Transfer” in the menu</p>
                    </div>
                </div>
                <div className='cardSearchTrans'>
                    <div className="d-flex flex-row gap-2" style={{padding: '20px 0px 0px 20px'}}>
                        <p style={{fontSize:'17px',  fontWeight: 'bold'}}>4. </p>
                        <p >Type the virtual account number that we provide you at the top.</p>
                    </div>
                </div>
                <div className='cardSearchTrans'>
                    <div className="d-flex flex-row gap-2" style={{padding: '20px 0px 0px 20px'}}>
                        <p style={{fontSize:'17px',  fontWeight: 'bold'}}>5. </p>
                        <p >Type the amount of the money you want to top up.</p>
                    </div>
                </div>
                <div className='cardSearchTrans'>
                    <div className="d-flex flex-row gap-2" style={{padding: '20px 0px 0px 20px'}}>
                        <p style={{fontSize:'17px',  fontWeight: 'bold'}}>6. </p>
                        <p >Read the summary details</p>
                    </div>
                </div>
                <div className='cardSearchTrans'>
                    <div className="d-flex flex-row gap-2" style={{padding: '20px 0px 0px 20px'}}>
                        <p style={{fontSize:'17px',  fontWeight: 'bold'}}>7. </p>
                        <p >Press transfer / top up</p>
                    </div>
                </div>
                <div className='cardSearchTrans'>
                    <div className="d-flex flex-row gap-2" style={{padding: '20px 0px 0px 20px'}}>
                        <p style={{fontSize:'17px',  fontWeight: 'bold'}}>8. </p>
                        <p >You can see your money in Zwallet within 3 hours.</p>
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

export default Topup
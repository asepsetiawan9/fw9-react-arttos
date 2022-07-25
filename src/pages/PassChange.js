import React from 'react'
import '../assets/css/dashstyle.css'
import NavbarDash from '../components/NavbarDash'
import Header from '../components/Header'
import { Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { FiEye } from "react-icons/fi";
import { FiLock } from "react-icons/fi";


function PassChange() {
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
                  <p style={{fontSize: '18px', fontWeight: 'bold'}}>Change Password</p>
                </div> 
            </div>
            <div className="wrapTrasn">
                <div>
                  <p style={{fontSize: '16px'}}>You must enter your current password and then <br/> type your new password twice.</p>
                </div>

                <div className='d-flex flex-column gap-4 passChange'>
                    <div className="input-group mb-3">
                        <div className="input-group-text">
                            <FiLock style={style} /> 
                        </div>
                            <input placeholder="Current password" type="password" className="form-control" aria-label="Text input with checkbox"/>
                            <span className="input-group-text togglePassword" id="">
                            <FiEye style={style} />
                            </span>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-text">
                            <FiLock style={style} /> 
                        </div>
                            <input placeholder="new password" type="password" className="form-control" aria-label="Text input with checkbox"/>
                            <span className="input-group-text togglePassword" id="">
                            <FiEye style={style} />
                        </span>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-text">
                            <FiLock style={style} /> 
                        </div>
                            <input placeholder="Repeat new password" type="password" className="form-control" aria-label="Text input with checkbox"/>
                            <span className="input-group-text togglePassword" id="">
                            <FiEye style={style} />
                        </span>
                    </div>

                    <div className="d-grid " >
                        <Link className='btn btn-fw9'  to={"/profile/"}>Change Password</Link>
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

export default PassChange
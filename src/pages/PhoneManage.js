import React from 'react'
import '../assets/css/dashstyle.css'
import NavbarDash from '../components/NavbarDash'
import Header from '../components/Header'
import { Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux';
//photo
import { FiTrash2 } from "react-icons/fi";

function PersonalInfo() {
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
            <div className="d-flex flex-column" style={{justifyContent: 'space-between', padding:'30px 25px'}} >
                <div>
                  <p style={{fontSize: '18px', fontWeight: 'bold'}}>Manage Phone Number</p>
                </div> 
            </div>
            <div className="wrapTrasn">
                <div>
                  <p style={{fontSize: '16px'}}>You can only delete the phone number and then <br/> you must add another phone number.</p>
                </div>

                <div className='cardSearchTrans'>
                    <div className="d-flex flex-column" style={{padding: '20px 0px 0px 20px'}}>
                        <p style={{fontSize:'14px', marginTop: '-10px'}}>Primary</p>
                        <p style={{fontSize:'16px',  fontWeight: 'bold'}}>{profile?.phone || 'SetUp Your Phone'}</p>
                    </div>
                    <div style={{padding: '10px 0px'}}>
                        <Link to={'/phoneadd'} ><FiTrash2 style={{color: '#1A374D'}} size={25}/></Link>
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

export default PersonalInfo
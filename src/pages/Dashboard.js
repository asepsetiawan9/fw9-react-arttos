import React from 'react'
import '../assets/css/dashstyle.css'
import NavbarDash from '../components/NavbarDash'
import Header from '../components/Header'
import {Navbar, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import statistic from '../assets/images/statistic.png'
//icon
import { FiArrowDown } from "react-icons/fi";
 import { FiArrowUp } from "react-icons/fi";
// import { FiLock } from "react-icons/fi";

function Dashboard() {
  return (
    <>
    <header >
      <Header/>
    </header>

    <section style={{padding:'20px 150px', backgroundColor: '#1A374D'}}>
      <Row className='min-vh-100 mw-100'>
          <NavbarDash/>
          <Col md={9} className='px-3 d-flex flex-column gap-4'>
            <div style={{backgroundColor: '#6379F4', borderRadius: '20px'}}>
                <div className="mainDashTf">
                        <div className="tfDash">
                            <div><p>Balance</p></div>
                            <div><p style={{fontSize:'40px', fontWeight:'700'}}>Rp120.000</p></div>
                            <div><p>+62 813-9387-7946</p></div>
                        </div>
                        
                        <div className="btnTfMain" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',  gap: '20px', padding: '30px',color: '#FFFFFF'}}>
                          <div> <Link className='btntry' to={"/signup/"}>Try It Free</Link></div>
                          <div> <Link className='btntry' to={"/signup/"}>Try It Free</Link></div>
                            {/* <a href="/searchreciver.html" class="fw9-btn"><i data-feather="plus"></i>Transfer</a>
                            <a href="/howtotopup.html" class="fw9-btn"><i data-feather="arrow-up"></i>Top Up</a> */}
                        </div>                    
                </div>
            </div>

          {/* <div style={{backgroundColor: '#E5E5E5', borderRadius: '20px'}}>
                <div className="mainWrapper">
                    <Col md={7} className='d-flex flex-column' style={{backgroundColor: '#fff',  borderRadius: '25px'}}>
                        <div className="mainDashboard">
                            <div className="d-flex flex-column gap-2">
                                <FiArrowDown/>
                                <p>income</p>
                                <p style={{color: '#3A3D42', fontSize: '18px', fontWeight: 'bold'}}>Rp2.120.000</p>
                            </div>
                            <div class="d-flex flex-column gap-2">
                                <FiArrowUp/>
                                <p>expanse</p>
                                <p style={{color: '#3A3D42', fontSize: '18px', fontWeight: 'bold'}}>Rp2.120.000</p>
                            </div>
                        </div>
                        <div className="mainDashboardImg">
                            <img src={statistic} alt="imagestat"/>
                        </div>
                    
                    </Col> */}

                    {/* <div class="col-12 col-md-5 d-flex flex-column gap-4" style="background-color: #fff; border-radius: 25px; padding: 30px;">
                        <div class=" d-flex flex-row" style="justify-content: space-between; padding-bottom: 30px;">
                            <div>
                                <p style="font-size: 17px; font-weight: bold;">Transaction History</p>
                            </div>

                            <div>
                                <a style="font-size: 14px; text-decoration: none;" href="/history.html">See all</a>
                            </div>
                        </div>
                        <div class="d-flex flex-row" style="justify-content: space-between;">
                            <div class="d-flex flex-row gap-2">
                                <img style="width:56px;" src="./assets/imghome/p1.png" alt="">
                                <div class="d-flex flex-column" >
                                    <p style="font-size:16px;  font-weight: bold;">Samuel Suhei</p>
                                    <p style="font-size:14px; margin-top: -15px;">Transfer</p>
                                </div>
                            </div>

                            <div>  <p style="font-size:16px;  font-weight: bold; color: green;">+50.000</p>
                            </div>
                        </div>

                        <div class="d-flex flex-row" style="justify-content: space-between;">
                            <div class="d-flex flex-row gap-2">
                                <img style="width:56px;" src="./assets/imghome/p1.png" alt="">
                                <div class="d-flex flex-column" >
                                    <p style="font-size:16px;  font-weight: bold;">Samuel Suhei</p>
                                    <p style="font-size:14px; margin-top: -15px;">Transfer</p>
                                </div>
                            </div>

                            <div>  <p style="font-size:16px;  font-weight: bold; color: green;">+50.000</p>
                            </div>
                        </div>

                        <div class="d-flex flex-row" style="justify-content: space-between;">
                            <div class="d-flex flex-row gap-2">
                                <img style="width:56px;" src="./assets/imghome/p1.png" alt="">
                                <div class="d-flex flex-column" >
                                    <p style="font-size:16px;  font-weight: bold;">Samuel Suhei</p>
                                    <p style="font-size:14px; margin-top: -15px;">Transfer</p>
                                </div>
                            </div>

                            <div>  <p style="font-size:16px;  font-weight: bold; color: green;">+50.000</p>
                            </div>
                        </div>

                        <div class="d-flex flex-row" style="justify-content: space-between;">
                            <div class="d-flex flex-row gap-2">
                                <img style="width:56px;" src="./assets/imghome/p1.png" alt="">
                                <div class="d-flex flex-column" >
                                    <p style="font-size:16px;  font-weight: bold;">Samuel Suhei</p>
                                    <p style="font-size:14px; margin-top: -15px;">Transfer</p>
                                </div>
                            </div>

                            <div>  <p style="font-size:16px;  font-weight: bold; color: green;">+50.000</p>
                            </div>
                        </div>
                    </div>*/}
                  {/* </div>
                </div>   */}
 
            </Col>                 
      </Row>
    </section>
    </>
  )
}

export default Dashboard
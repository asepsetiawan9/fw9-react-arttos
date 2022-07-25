import React from 'react'
import '../assets/css/dashstyle.css'
import {Link} from 'react-router-dom'
import user from '../assets/images/u3.png'
import {Navbar, Dropdown} from 'react-bootstrap'
//icon
import { FiBell } from "react-icons/fi";
import { FiArrowDown } from "react-icons/fi";
import { FiArrowUp } from "react-icons/fi";

function Header() {
  return (
    <>
    <Navbar className='Navbar'>
        <Link className='titleapp' to='/dashboard'>ART-TOS</Link>
    <div className="navWrap">
        <img style={{height:'60px'}} src={user} alt="user"/> 
        <div className="dashUser">
            <p className="userDashName">Robert Chandler</p> 
            <p style={{fontSize: '16px', color: '#406882'}}>+62 8139 3877 7946</p> 
        </div>
    <Dropdown>
        <Dropdown.Toggle className='dropdownIcon' id="dropdown-menu-align-start" align="start"
      title="Dropdown start">
            <FiBell size={30} />
        </Dropdown.Toggle>

        <Dropdown.Menu className="custom_nav_link">
            {/* <Col md={5}> */}
            <div className="notifDropdown" >
                <div>
                    <p className="notifDay">Today</p>
                </div>
            
                <div className="d-flex flex-row gap-3">
                    <div><FiArrowDown style={{color: 'green'}} /></div>
                    <div>
                        <div><p>Transfered from Joshua Lee</p></div>
                        <div><p>Rp220.000</p></div>
                    </div>
                </div>
                <div className="d-flex flex-row gap-3" >
                    <div><FiArrowUp style={{color: 'red'}} /></div>
                    <div>
                        <div><p>Netflix subscription</p></div>
                        <div><p>Rp220.000</p></div>
                    </div>
                </div>
                <div>
                    <p className='notifDay'>This Week</p>
                </div>
                
                <div className="d-flex flex-row gap-3">
                    <div><FiArrowDown style={{color: 'green'}} /></div>
                    <div>
                        <div><p>Transfered from Joshua Lee</p></div>
                        <div><p>Rp220.000</p></div>
                    </div>
                </div>
                <div className="d-flex flex-row gap-3" >
                    <div><FiArrowUp style={{color: 'red'}} /></div>
                    <div>
                        <div><p>Netflix subscription</p></div>
                        <div><p>Rp220.000</p></div>
                    </div>
                </div>
            </div>
            {/* </Col> */}
        </Dropdown.Menu>
    </Dropdown>
        </div>
    </Navbar>
    </>
  )
}

export default Header

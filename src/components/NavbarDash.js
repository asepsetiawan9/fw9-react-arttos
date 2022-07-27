import React from 'react'
import '../assets/css/dashstyle.css'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import {Button, Col} from 'react-bootstrap'

//icon
import { FiGrid } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiArrowUp } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";


function NavbarDash() {
    // const location = useLocation();
    const navigate = useNavigate();
    const onLogout = () => {
      localStorage.removeItem("auth");
      navigate("/login");
    };
  return (
    <>
    <Col md={3} className='sideBar'>
        <div className="sideBarMenu">
            <div className="itemMenu">
                <FiGrid/>
                <Link style={{textDecoration: 'none', color: '#3A3D42CC'}} to='/dashboard'>Dashboard</Link>
            </div>
            <div className="itemMenu">
                <FiArrowUp/>
                <Link style={{textDecoration: 'none', color: '#3A3D42CC'}} to='/transsearch'>Transfer</Link>
            </div>
            <div className="itemMenu">
                <FiPlus/>
                <Link style={{textDecoration: 'none', color: '#3A3D42CC'}} to='/topup'>Top Up</Link>
            </div>
            <div className="itemMenu">
                <FiUser/>
                <Link style={{textDecoration: 'none', color: '#3A3D42CC'}} to='/profile'>Profile</Link>
            </div>
        </div>

        <div className="itemMenu d-flex" style={{paddingBottom: '30px', justifyContent: 'flex-start'}}>
                <FiLogOut/>
                <Button style={{textDecoration: 'none', color: '#3A3D42CC', background: 'none', border: 'none'}} onClick={onLogout}>Logout</Button>
        </div>
        
    </Col>

    
    </>
  )
}

export default NavbarDash

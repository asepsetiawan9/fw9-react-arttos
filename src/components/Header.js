import React from 'react'
import '../assets/css/dashstyle.css'
import {Link, useNavigate} from 'react-router-dom'
import user from '../assets/images/u3.png'
import {Navbar, Dropdown} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../redux/asyncActions/profile'
import { logout } from "../redux/reducers/auth";

//icon
import { FiBell, FiGrid, FiLogOut, FiPlus, FiUser, FiArrowDown, FiArrowUp, FiMenu } from "react-icons/fi";


function Header() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogout = () => {
        dispatch(logout());
        navigate("/login");
      };

    const token = useSelector((state) => state.auth.token)
    const profile = useSelector((state) => state.profile.data);

    React.useEffect(()=>{
        dispatch(getProfile(token))
  },[dispatch, token])

  return (
    <>
    <Navbar className='Navbar'>
        <Link className='titleapp' to='/dashboard'>ART-TOS</Link>
    <div className="navWrap">
        {profile.picture?
        <img className='imgProfile' src={profile.picture} alt="user"/>:
        <img style={{height:'60px'}} src={user} alt="user"/>
        }
        <div className="dashUser">
            <p className="userDashName">{profile.fullname? profile.fullname: 'Your Name' }</p> 
            <p style={{fontSize: '16px', color: '#406882'}}>{profile.phone? profile.phone: 'Your Phone' }</p> 
        </div>
        <div>
            <div>
                <Dropdown  className="custom_nav_link">
                    <Dropdown.Toggle className='dropdownIcon' id="dropdown-menu-align-start" align="start" title="Dropdown start">
                        <FiBell size={30} />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
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
            <div>
            <Dropdown className='dropDownMenuMobile'>
            <Dropdown.Toggle id="dropdown-basic">
                <FiMenu/>
            </Dropdown.Toggle>
            
                <Dropdown.Menu >
                <div className='menuDropDown'>
                    <Dropdown.Item href="/dashboard"><FiGrid/> Dashboard</Dropdown.Item>
                    <Dropdown.Item href="/transsearch"><FiArrowUp/> Transfer</Dropdown.Item>
                    <Dropdown.Item href="/topup"><FiPlus/> Top Up</Dropdown.Item>
                    <Dropdown.Item href="/profile"><FiUser/> Profile</Dropdown.Item>
                    <Dropdown.Item onClick={onLogout} href="/login"><FiLogOut/> Logout</Dropdown.Item >
                </div>
                </Dropdown.Menu>
            
            </Dropdown>
            </div>
            </div>
        </div>
    </Navbar>
    </>
  )
}

export default Header

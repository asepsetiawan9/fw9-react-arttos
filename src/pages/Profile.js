import React from 'react'
import '../assets/css/dashstyle.css'
import NavbarDash from '../components/NavbarDash'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../redux/asyncActions/profile';
//icon
import { FiEdit2 } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
//photo
import p1 from '../assets/images/p1.png'

function Profile() {
const profile = useSelector((state) => state.profile.data);
const token = useSelector((state) => state.auth.token);
// console.log('ini ini ini', profile);
const dispatch = useDispatch();
React.useEffect(() => {
dispatch(getProfile(token));
      }, []);
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
            <div className="d-flex flex-column gap-1" style={{justifyContent: 'center', padding:'50px 25px', alignItems: 'center'}} >
                <div>
                    {profile.picture?
                    <img className='imgProfile' src={profile.picture} alt='useredit'></img>:
                    <img src={p1} alt='useredit'></img>}
                </div>
                <div>
                    <FiEdit2/> Edit
                </div>
                <div>
                  <p style={{fontSize: '18px', fontWeight: 'bold'}}>{profile?.fullname || 'User Name'}</p>
                </div> 
                <div>
                  <p style={{fontSize: '16px'}}>{profile?.phone || 'Phone User'}</p>
                </div>
            </div>
        <div>
            <Link className="wrapTrasn personalInfo"  to='/personalinfo' style={{textDecoration: 'none', color: '#1A374D'}}>
                <div className='cardProfile'>
                    <div><p style={{fontSize:'17px',  fontWeight: 'bold'}}>Personal Information</p></div>
                    <div><FiArrowRight/></div>
                </div>
            </Link>

            <Link className="wrapTrasn"  to='/passchange' style={{textDecoration: 'none', color: '#1A374D'}}>
                <div className='cardProfile'>
                    <div><p style={{fontSize:'17px',  fontWeight: 'bold'}}>Change Password</p></div>
                    <div><FiArrowRight/></div>
                </div>
            </Link>

            <Link className="wrapTrasn"  to='/pinchange' style={{textDecoration: 'none', color: '#1A374D'}}>
                <div className='cardProfile'>
                    <div><p style={{fontSize:'17px',  fontWeight: 'bold'}}>Change PIN</p></div>
                    <div><FiArrowRight/></div>
                </div>
            </Link>

            <Link className="wrapTrasn"  to='/topup' style={{textDecoration: 'none', color: '#1A374D'}}>
                <div className='cardProfile'>
                    <div><p style={{fontSize:'17px',  fontWeight: 'bold'}}>Logout</p></div>
                    <div><FiArrowRight/></div>
                </div>
            </Link>
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

export default Profile
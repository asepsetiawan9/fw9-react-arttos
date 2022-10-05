/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../assets/css/dashstyle.css'
import NavbarDash from '../components/NavbarDash'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Row, Col, Button, Modal, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, editPic } from '../redux/asyncActions/profile';

//icon
import { FiEdit2 } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
//photo
import p1 from '../assets/images/p1.png'

function Profile() {
    const [modalShow, setModalShow] = React.useState(false);
    const [selectedImage, setSelectedImage] = React.useState(null);
    const profile = useSelector((state) => state.profile.data);
    const successMsg = useSelector((state) => state.profile.successMsg);
    const errMsg = useSelector((state) => state.profile.errorMsg);
    const token = useSelector((state) => state.auth.token);

    const dispatch = useDispatch();

    const handleChange = (event) => {
        setSelectedImage(event.target.files[0]);
      };

    React.useEffect(() => {
    dispatch(getProfile(token));
      }, []);
    
    const onEdit = (event) => {
        event.preventDefault();
        dispatch(editPic({ picture: selectedImage, token }));

        setTimeout(()=> 
            alert(successMsg), 
            dispatch(getProfile(token))
            , 3000);
        
    };
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
                <a onClick={() => setModalShow(true)}>
                    <div>
                        {profile.picture?
                        <img className='imgProfile' src={profile.picture} alt='useredit'></img>:
                        <img src={p1} alt='useredit'></img>}
                    </div>
                    <FiEdit2/> Edit
                </a>
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
    
    <Modal
    show={modalShow}
    onHide={() => setModalShow(false)}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    style={{color: '#1A374D'}}
    >
    <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Update Picture
        </Modal.Title>
    </Modal.Header>
    <Form onSubmit={onEdit}>
        <Modal.Body>
            <Form.Control name="picture" type="file" className="text-secondary  text-center" onChange={handleChange} />
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={() => setModalShow(false)} type="submit" >
                Submit
            </Button>
            <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
    </Form>
    </Modal>
    <footer >
        <Footer/>
    </footer>

    </>
  )
}

export default Profile
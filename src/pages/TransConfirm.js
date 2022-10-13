import React, { useState } from 'react'
import '../assets/css/dashstyle.css'
import NavbarDash from '../components/NavbarDash'
import Header from '../components/Header'
import { Row, Col, Form} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {transferMoney} from '../redux/asyncActions/transactions';
//photo
import p1 from '../assets/images/p1.png'
import Footer from '../components/Footer'

const ModalPin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const pinUser = useSelector(state => state.auth.pin);
    const token = useSelector((state) => state.auth.token);
    const detailInput = useSelector(state => state.transactions.dataTransfer);
    console.log('ini detail', pinUser);

    const [form, setForm] = useState({ first: '', sec: '', third: '', fourth: '', fifth: '', sixth: '' });
    const date_time = `${detailInput.date} ${detailInput.time}`;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChangeText = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };
    

    const onInputPin = (value) => {
        const pin = Object.values(form).join('');
         if (pin === pinUser) {
            console.log('trans Success');
            const data = {
                amount: detailInput.amount,
                recipient_id: detailInput.recipient_id,
                note: detailInput.note,
                time_date: date_time,
              };
            dispatch(transferMoney({data, token}));
            navigate('/transsuccess');
          } else {
             navigate('/transfail');
          }
      };

    return(
        <>
        <div style={{textAlign:  'right',  padding: '20px 50px 30px 0px'}}>
            <Button className='btn btn-fw9' style={{padding: '10px 26px'}} onClick={handleShow}>
                Confirm
            </Button>
        </div>

        <Modal show={show} onHide={handleClose} style={{color: '#1A374D'}}>
            <Modal.Header style={{borderBottom: 'unset'}} closeButton>
                <Modal.Title>
                    <div>
                    <p style={{fontSize: '16px', fontWeight: 'bold'}}>Enter PIN to Transfer</p>
                    </div>
                    <div>
                    <p style={{fontSize: '16px'}}>Enter your 6 digits PIN for confirmation to <br/> continue transferring money. </p>
                    </div>
                </Modal.Title>
                </Modal.Header>
            <Modal.Body>
            <Form  noValidate >
            <div className="pin-input-wrapper ">

                <div className="pin-form-wrap">
                    <input type="text" className="pin-form-input" 
                    name="first" 
                    onChange={handleChangeText}
                    />
                </div>

                <div className="pin-form-wrap">
                    <input type="text" className="pin-form-input" 
                    name="sec" 
                    onChange={handleChangeText}
                    />
                </div>

                <div className="pin-form-wrap">
                    <input type="text" className="pin-form-input" 
                    name="third" 
                    onChange={handleChangeText}
                    />
                </div>

                <div className="pin-form-wrap">
                    <input type="text" className="pin-form-input" 
                    name="fourth" 
                    onChange={handleChangeText}
                    />
                </div>

                <div className="pin-form-wrap">
                    <input type="text" className="pin-form-input" 
                    name="fifth" 
                    onChange={handleChangeText}
                    />
                </div>

                <div className="pin-form-wrap">
                    <input type="text" className="pin-form-input" 
                    name="sixth" 
                    onChange={handleChangeText}
                    />
                </div>
            </div>
            </Form>
            </Modal.Body>
            <Modal.Footer style={{borderTop: 'unset'}}>
                <Button  type="submit"
                // to={'/transsuccess'} 
                onClick={onInputPin}
                style={{padding: '10px 26px'}}  className='btn btn-fw9' >
                    Confrim
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

function TransConfirm() {
   
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
            <div className="d-flex flex-column" style={{justifyContent: 'space-between', padding:'30px 25px'}} >
                <div>
                  <p style={{fontSize: '18px', fontWeight: 'bold'}}>Transfer To</p>
                </div> 
            </div>
            <div className="wrapTrasn">
                <div className='cardSearchTrans'>
                    <div className="d-flex flex-row gap-4" style={{padding: '5px 20px'}}>
                        {dataRecipient.picture? 
                        <img style={{width:'50px', height: '50px'}} src={dataRecipient.picture} alt="user1"/>:
                        <img style={{width:'50px', height: '50px'}} src={p1} alt="user1"/>}
                        <div className="d-flex flex-column">
                            <p style={{fontSize:'16px',  fontWeight: 'bold'}}>{dataRecipient.fullname? dataRecipient.fullname : 'Recipient Name' }</p>
                            <p style={{fontSize:'14px', marginTop: '-15px'}}>{dataRecipient.phone? dataRecipient.phone : 'phone' }</p>
                        </div>
                    </div>
                </div>

                <div>
                  <p style={{fontSize: '18px', fontWeight: 'bold'}}>Details</p>
                </div>

                <div className='cardSearchTrans'>
                    <div className="d-flex flex-column" style={{padding: '20px 0px 0px 20px'}}>
                        <p style={{fontSize:'14px', marginTop: '-10px'}}>Amount</p>
                        <p style={{fontSize:'16px',  fontWeight: 'bold'}}>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' })
                        .format(parseInt(detailInput?.amount||0))}</p>
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
                        <p style={{fontSize:'16px',  fontWeight: 'bold'}}>{detailInput.date} {detailInput.time}</p>
                    </div>
                </div>
                <div className='cardSearchTrans'>
                    <div className="d-flex flex-column" style={{padding: '20px 0px 0px 20px'}}>
                        <p style={{fontSize:'14px', marginTop: '-10px'}}>Notes</p>
                        <p style={{fontSize:'16px',  fontWeight: 'bold'}}>{detailInput.note? detailInput.note: 'note transfer'}</p>
                    </div>
                </div>
                <ModalPin/>
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

export default TransConfirm
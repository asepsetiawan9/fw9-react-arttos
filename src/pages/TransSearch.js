import React, { useState } from 'react'
import '../assets/css/dashstyle.css'
import NavbarDash from '../components/NavbarDash'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Row, Col, Form} from 'react-bootstrap'
import { getUsers} from '../redux/asyncActions/transactions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {selectRecipient} from '../redux/reducers/transactions';
//photo
import p1 from '../assets/images/p1.png'

function DataUsers( {id, phone, fullname, picture} ) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return(
    <div 
    onClick={() => {
      dispatch(selectRecipient(id));
      navigate('/transinput');
    }}
    className='cardSearchTrans'>
      <div className="d-flex flex-row gap-4" style={{padding: '0px 20px'}}>
      {picture? 
        <img style={{width:'50px', height: '50px'}} src={picture} alt={p1}/> :
        <img style={{width:'50px', height: '50px'}} src={p1} alt={p1}/>}
          <div class="d-flex flex-column">
              <p style={{fontSize:'16px',  fontWeight: 'bold'}}>{fullname? fullname : 'User Name'}</p>
              <p style={{fontSize:'14px', marginTop: '-15px'}}>{phone? phone : 'Phone User'}</p>
          </div>
      </div>
    </div>
  )
}

function TransSearch() {
  const token = useSelector((state) => state.auth.token);
  const [search, setSearch] = useState({ search: '' });
  const handleChangeText = (e) => {

    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const data = {
    search: search.search,
    token,
  };

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUsers(token));
    }, []);

  const allUsers = useSelector((state) => state.transactions?.dataUser);

  return (
    <>
    <section className='headerDashboard'>
      <Header/>
    </section>

    <section style={{padding:'20px 150px', backgroundColor: '#1A374D', color: '#1A374D'}} className='mainSection'>
      <Row className='min-vh-100 mw-100'>
          <NavbarDash/>
          <Col md={9} className='px-4 d-flex flex-column'>
        <Form onSubmit={async (event) => {
              event.preventDefault();
              await dispatch(getUsers(data));
            }}
              className='d-flex flex-column gap-2' 
              style={{background: '#B1D0E0', borderRadius: '20px'}}>
            <div className="d-flex flex-column gap-3" style={{justifyContent: 'space-between', padding:'30px 25px'}} >
                <div>
                  <p style={{fontSize: '18px', fontWeight: 'bold'}}>Search Reciver</p>
                </div>
                <div>
                    <input name='search' onChange={handleChangeText} class="form-control form-control-lg" type="text" placeholder="Search" aria-label=".form-control-lg example" style={{background: '#6998AB',
                borderRadius: '12px', border: 'unset', color: '#fff'}}/>
                </div>  
            </div>
            <div className="wrapTrasn">
            {allUsers.result?.map(o => {
                return(
                <React.Fragment key={o.id}>
                    <DataUsers 
                    recipient_id={o.recipient_id} 
                    id={o.id} 
                    phone={o.phone} 
                    fullname={o.fullname} 
                    picture={o.picture} />
                </React.Fragment>
                  )
              })}
            </div>
        </Form>
        </Col>
      </Row>
    </section>
    <footer >
      <Footer/>
    </footer>
    </>
  )
}

export default TransSearch
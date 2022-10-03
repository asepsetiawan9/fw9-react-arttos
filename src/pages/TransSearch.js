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
  const allUsers = useSelector((state) => state.transactions?.dataUser);
  const pageInfo = useSelector(state => state.transactions.tabelInfo);
  console.log('ini page info', pageInfo);
  const [search, setSearch] = React.useState('');
  const [limit, setLimit] = React.useState(5);
  const [page, setPage] = React.useState(1);

  const data = {
    search: search.search,
    token,
  };

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUsers({token, search, limit, page}));
    }, [search, limit, page]);
  
    const onNext = () => dispatch(
      getUsers({token, limit: pageInfo.limit, page: pageInfo.nextPage})
    )
  
    const onPrev = () => dispatch(
      getUsers({token, limit: pageInfo.limit, page: pageInfo.prevPage})
    )

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
                <div className="custom-select">
                  <select name='limit' onChange={(e)=>{setLimit(e.target.value);}} style={{textAlign: 'center' ,alignItem: 'center', background: '#6998AB', borderRadius: '10px', width: '50px', height: '30px'}}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5} selected>5</option>
                  </select>
                </div>
                <div>
                    <input onChange={(e)=>{setSearch(e.target.value);}} name='search' className="form-control form-control-lg" type="text" placeholder="Search" aria-label=".form-control-lg example" style={{background: '#6998AB',
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
            <div className='d-flex flex-row gap-3' style={{paddingTop: '20px', justifyContent: 'center' ,alignItems: 'center'}}>
              <button
                // onClick={(e)=>{setPage({e.target.value, });}} 
                onClick={onPrev} 
                // disabled={pageInfo?.currPage<2} 
                style={{background: 'blue', color: 'white', borderRadius: '10px'}}>Prev</button>
              <div> {pageInfo?.currPage} </div>
              <button 
                onClick={onNext} 
                // disabled={pageInfo?.nextPage<2} 
                style={{background: 'blue', color: 'white', borderRadius: '10px'}}>Next</button>
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
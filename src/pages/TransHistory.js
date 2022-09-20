import React from 'react';
import '../assets/css/dashstyle.css';
import NavbarDash from '../components/NavbarDash';
import Header from '../components/Header';
import { Row, Col} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import { getTransactions} from '../redux/asyncActions/transactions';
//photo
import p1 from '../assets/images/p1.png'

function DataHistoryTrans( {recipient_id, sender_id, phone, fullname, recipientpic, amount} ) {
  return(
    <div className="d-flex flex-row" style={{justifyContent: 'space-between'}}>
      <div className="d-flex flex-row gap-4">
        <img style={{width:'50px', height: '50px'}} src={p1} alt={p1}/>
          <div className="d-flex flex-column">
              <p style={{fontSize:'16px',  fontWeight: 'bold'}}>{fullname}</p>
              <p style={{fontSize:'14px', marginTop: '-15px'}}>{phone}</p>
          </div>
      </div>
      <div className="d-flex flex-row " style={{justifyContent: 'flex-end'}}>
          <div >
            { recipient_id === sender_id?
              <p style={{paddingRight: '30px', color: 'red'}}>-Rp{amount}</p>:
              <p style={{paddingRight: '30px', color: 'green'}}>+Rp{amount}</p>
            }
          </div>
      </div>
    </div>
  )
}

function TransHistory() {
  const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const historyTransactions = useSelector(state => state.transactions.data);

    React.useEffect(() => {
      dispatch(getTransactions(token));
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
        <div className='d-flex flex-column gap-4' style={{background: '#B1D0E0', borderRadius: '20px'}}>
            <div className="d-flex flex-column" style={{justifyContent: 'space-between', padding:'30px 25px'}} >
              <div>
                  <p style={{fontSize: '18px', fontWeight: 'bold'}}>Transaction History</p>
              </div>
                    
            </div>
          <div className="wrapTrasn">
              <div>
                  <p style={{fontSize: '16px', color: '#406882'}}>This Week</p>
              </div>
              {historyTransactions.result?.map(o => {
                  return(
                  <React.Fragment key={o.id}>
                      <DataHistoryTrans recipient_id={o.recipient_id} sender_id={o.sender_id} phone={o.recipient_phone}fullname={o.recipient_fullname} recipientpic={o.recipientpic} amount={o.amount}/>
                  </React.Fragment>
                  )
              })}
          </div>
          </div>
        </Col>
      </Row>
    </section>
           
    <footer >
        <div className="d-flex flex-row footerDekstop" style={{justifyContent: 'space-between', padding: '30px 0px 20px 0px'}}>
            <div><p>2022 Art-Tos. All right reserved.</p></div>
            <div><p>+62 5637 8882 9901 &nbsp;&nbsp;&nbsp;&nbsp;contact@art-Tos.com</p></div>
        </div>
    </footer>

    </>
  )
}

export default TransHistory
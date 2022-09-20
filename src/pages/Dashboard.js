import React from 'react'
import '../assets/css/dashstyle.css'
import NavbarDash from '../components/NavbarDash'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import statistic from '../assets/images/statistic.png'
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../redux/asyncActions/profile';
import {getTransactionsLimit} from '../redux/asyncActions/transactions';

//icon
import { FiArrowDown } from "react-icons/fi";
import { FiArrowUp } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
//photo
import p1 from '../assets/images/p1.png'


function Dashboard() {
    const profile = useSelector((state) => state.profile.data);
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const historyTransactions = useSelector(state => state.transactions.dataLimit);
    console.log(historyTransactions);

    React.useEffect(() => {
      dispatch(getTransactionsLimit(token));
      dispatch(getProfile(token));
      }, []);
    
  return (
    <>
    <section className='headerDashboard'>
      <Header/>
    </section>

    <section style={{padding:'20px 150px', backgroundColor: '#1A374D'}} className='mainSection'>
      <Row className='min-vh-100 mw-100'>
          <NavbarDash/>
          <Col md={9} className='px-3 d-flex flex-column gap-4'>
            <div style={{backgroundColor: '#406882', borderRadius: '20px'}} className='mainDashTfWrap'>
                <div className="mainDashTf">
                        <div className="tfDash">
                            <div><p>Balance</p></div>
                            <div><p style={{fontSize:'40px', fontWeight:'700'}}>Rp {profile.balance? profile.balance : '0'}</p></div>
                            <div><p>{profile.phone? profile.phone : 'Your Phone'}</p></div>
                        </div>
                        
                        <div className="btnTfMain" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', gap: '20px', padding: '30px',color: '#FFFFFF'}}>
                          <div> <Link className='regis' to={"/transsearch/"}><FiPlus />Transfer</Link></div>
                          <div> <Link className='regis' to={"/topup/"}><FiArrowUp/> Top Up</Link></div>
                           
                        </div>                    
                </div>
            </div>

                <div className="d-flex flex-row gap-3 mainstat">
                    <Col md={7} className='d-flex flex-column' style={{borderRadius: '25px', background: '#B1D0E0'}}>
                        <div className="mainDashboard">
                            <div className="d-flex flex-column gap-2">
                                <FiArrowDown/>
                                <p>income</p>
                                <p style={{color: '#3A3D42', fontSize: '18px', fontWeight: 'bold'}}>Rp2.120.000</p>
                            </div>
                            <div className="d-flex flex-column gap-2">
                                <FiArrowUp/>
                                <p>expanse</p>
                                <p style={{color: '#3A3D42', fontSize: '18px', fontWeight: 'bold'}}>Rp2.120.000</p>
                            </div>
                        </div>
                        <div className="mainDashboardImg img-fluid">
                            <img style={{padding:'5px 30px', maxWidth: '100%', height: 'auto'}} src={statistic} alt="imagestat"/>
                        </div>
                    
                    </Col> 
                    <Col md={5} className='d-flex flex-column transhistorydahsboard' style={{background: '#B1D0E0',  borderRadius: '25px'}}>
                        <div className=" d-flex flex-row" style={{justifyContent: 'space-between', paddingBottom: '30px'}}>
                            <div >
                                <p style={{fontSize: '17px', fontWeight: 'bold'}}>Transaction History</p>
                            </div>

                            <div>
                                <Link style={{fontSize: '14px', textDecoration: 'none', color: '#1A374D'}} to={"/transhistory"}>See all</Link>
                            </div>
                        </div>
                        {historyTransactions.result?.map(o => {
                            return(
                            <React.Fragment key={o.id}>
                                <DataHistoryTrans recipient_id={o.recipient_id} sender_id={o.sender_id} phone={o.recipient_phone}fullname={o.recipient_fullname} recipientpic={o.recipientpic} amount={o.amount}/>
                            </React.Fragment>
                            )
                        })}
                    </Col>
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

function DataHistoryTrans( {recipient_id, sender_id, phone, fullname, recipientpic, amount} ) {
  return(
    <div className="d-flex flex-row" style={{justifyContent: 'space-between'}}>
      <div className="d-flex flex-row gap-4">
        {recipientpic? 
        <img style={{width:'50px', height: '50px'}} src={recipientpic} alt={p1}/> :
        <img style={{width:'50px', height: '50px'}} src={p1} alt={p1}/>}
          <div className="d-flex flex-column">
              <p style={{fontSize:'16px',  fontWeight: 'bold'}}>{fullname}</p>
              <p style={{fontSize:'14px', marginTop: '-15px'}}>{phone? phone : 'User Phone'}</p>
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


export default Dashboard
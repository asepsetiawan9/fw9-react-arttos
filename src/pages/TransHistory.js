import React from 'react'
import '../assets/css/dashstyle.css'
import NavbarDash from '../components/NavbarDash'
import Header from '../components/Header'
import { Row, Col} from 'react-bootstrap'
//photo
import p1 from '../assets/images/p1.png'
import p2 from '../assets/images/p2.png'
import p3 from '../assets/images/p3.png'

function DataHistoryTrans( {sender_id, name, phone, amount} ) {
  return(
    <div className="d-flex flex-row" style={{justifyContent: 'space-between'}}>
      <div className="d-flex flex-row gap-4">
        <img style={{width:'50px', height: '50px'}} src={p1} alt={p1}/>
          <div className="d-flex flex-column">
              <p style={{fontSize:'16px',  fontWeight: 'bold'}}>{name}</p>
              <p style={{fontSize:'14px', marginTop: '-15px'}}>{phone}</p>
          </div>
      </div>
      <div className="d-flex flex-row " style={{justifyContent: 'flex-end'}}>
          <div >
            { sender_id?
              <p style={{paddingRight: '30px', color: 'red'}}>-Rp{amount}</p>:
              <p style={{paddingRight: '30px', color: 'green'}}>+Rp{amount}</p>
            }
          </div>
      </div>
    </div>
  )
}

function TransHistory() {
  const [data] = React.useState({
    success: true,
    massage: 'List User',
    results: [
        {
            "id": 1,
            "name": "Zepsi",
            "phone": "082216115722",
            "amount": "100000",
            "sender_id": null
        },
        {
          "id": 2,
          "name": "ica",
          "phone": "0822112331",
          "amount": "500000",
          "sender_id": null
        },
        {
          "id": 3,
          "name": "sri",
          "phone": "0892316312",
          "amount": "5000000",
          "sender_id": 1
        },
        {
          "id": 4,
          "name": "Marisa",
          "phone": "0892312112",
          "amount": "1000000",
          "sender_id": 2
        }
    ]
})
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

            {data.results.map(o => {
                return(
                  <React.Fragment key={o.id}>
                    <DataHistoryTrans sender_id={o.sender_id} name={o.name} phone={o.phone} amount={o.amount}/>
                    </React.Fragment>
                )
            })}
            
            {/* <div className="d-flex flex-row" style={{justifyContent: 'space-between'}}>
              <div className="d-flex flex-row gap-4">
                <img style={{width:'50px', height: '50px'}} src={p1} alt="user1"/>
                  <div class="d-flex flex-column">
                      <p style={{fontSize:'16px',  fontWeight: 'bold'}}>Samuel Suhei</p>
                      <p style={{fontSize:'14px', marginTop: '-15px'}}>+62 813-8492-9994</p>
                  </div>
              </div>
              <div className="d-flex flex-row " style={{justifyContent: 'flex-end'}}>
                  <div >
                      <p style={{paddingRight: '30px', color: 'green'}}>+Rp50.000</p>
                  </div>
              </div>
            </div>

            <div className="d-flex flex-row" style={{justifyContent: 'space-between'}}>
              <div className="d-flex flex-row gap-4">
                <img style={{width:'50px', height: '50px'}} src={p2} alt="user1"/>
                  <div class="d-flex flex-column">
                      <p style={{fontSize:'16px',  fontWeight: 'bold'}}>Musael Suhei</p>
                      <p style={{fontSize:'14px', marginTop: '-15px'}}>+62 813-8492-9994</p>
                  </div>
              </div>
              <div className="d-flex flex-row " style={{justifyContent: 'flex-end'}}>
                  <div >
                      <p style={{paddingRight: '30px', color: 'red'}}>-Rp50.000</p>
                  </div>
              </div>
            </div>
        </div>

        <div className="wrapTrasn">
            
            <div>
                <p style={{fontSize: '16px', color: '#406882'}}>This Month</p>
            </div>
            
            <div className="d-flex flex-row" style={{justifyContent: 'space-between'}}>
              <div className="d-flex flex-row gap-4">
                <img style={{width:'50px', height: '50px'}} src={p1} alt="user1"/>
                  <div class="d-flex flex-column">
                      <p style={{fontSize:'16px',  fontWeight: 'bold'}}>Samuel Suhei</p>
                      <p style={{fontSize:'14px', marginTop: '-15px'}}>+62 813-8492-9994</p>
                  </div>
              </div>
              <div className="d-flex flex-row " style={{justifyContent: 'flex-end'}}>
                  <div >
                      <p style={{paddingRight: '30px', color: 'green'}}>+Rp50.000</p>
                  </div>
              </div>
            </div>

            <div className="d-flex flex-row" style={{justifyContent: 'space-between'}}>
              <div className="d-flex flex-row gap-4">
                <img style={{width:'50px', height: '50px'}} src={p3} alt="user1"/>
                  <div class="d-flex flex-column">
                      <p style={{fontSize:'16px',  fontWeight: 'bold'}}>Musael Suhei</p>
                      <p style={{fontSize:'14px', marginTop: '-15px'}}>+62 813-8492-9994</p>
                  </div>
              </div>
              <div className="d-flex flex-row " style={{justifyContent: 'flex-end'}}>
                  <div >
                      <p style={{paddingRight: '30px', color: 'red'}}>-Rp50.000</p>
                  </div>
              </div>
            </div> */}
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
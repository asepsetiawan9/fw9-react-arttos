import React from 'react'
import '../assets/css/dashstyle.css'
import NavbarDash from '../components/NavbarDash'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Row, Col, Form } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {Formik} from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {getUserById} from '../redux/asyncActions/transactions';
import {inputAmount} from '../redux/reducers/transactions';
//photo
import p1 from '../assets/images/p1.png'

const amountSchema = Yup.object().shape({
  amount: Yup.number().positive("Must be more than 0")
  .integer("Must be more than 0")
  .required("This field is required")
  .max(10000000, 'Max Amount is 10.000.000')
})

const AmountForm = (props) => {
  const profile = useSelector((state) => state.profile.data);
 
  return(
    <>
        <Form  noValidate onSubmit={props.handleSubmit}>
          <div className="inputAmount">
            <div>
              <Form.Control className="form-control wrap-amount text-center" 
              style={{borderBottom:'none', fontSize: '42px', color:'#1A374D', paddingTop: '40px', fontWeight: '900'}} 
              name="amount" 
              value={props.values.password}
              onChange={props.handleChange} 
              type="number" 
              placeholder="0.00" 
              isInvalid={!!props.errors.amount}
              /> 
                <Form.Control.Feedback className="wrap-amount text-center" type="invalid">{props.errors.amount}</Form.Control.Feedback>
                
            </div>

            <div>
                <p style={{fontSize: '16px', color:'#1A374D', fontWeight: '700'}}>Rp {profile.balance? profile.balance: '0'} Available</p>
            </div>
            <div className="input-group" style={{paddingLeft: '150px', paddingRight:'150px'}}>
                <div className="input-group-text"><i data-feather="edit-2"></i>
                </div>
                <input type="text" className="form-control" placeholder="Add some notes" name="note" 
                value={props.values.note}
                onChange={props.handleChange}  />
            </div>
            
          </div>
          <div style={{textAlign:  'right',  padding: '20px 50px 30px 0px'}}>
              <button type="submit" className='regis' >continue</button>
          </div>
        </Form>
    </>
  )
}

function TransSearch() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const recipient_id = useSelector(state => state.transactions.dataTransfer);
  const recipient = useSelector(state => state.transactions.dataRecipient);
  // console.log('recipientnya', recipient);
  const today = new Date();
  var currentdate = new Date();
  var date =
    currentdate.getDate() +
    '-' +
    (currentdate.getMonth() + 1) +
    '-' +
    currentdate.getFullYear();

  var time =
    currentdate.getHours() +
    ':' +
    currentdate.getMinutes() +
    ':' +
    currentdate.getSeconds();

    const onInputAmount = (value) => {
      const data = { amount: value.amount, note: value.note, date, time };
      //  console.log(data);
      dispatch(inputAmount(data));
      navigate('/confirm');
    };


  React.useEffect(() => {
    dispatch(getUserById(recipient_id.recipient_id));
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
        <div className='d-flex flex-column gap-2' style={{background: '#B1D0E0', borderRadius: '20px'}}>
            <div className="d-flex flex-column gap-3" style={{justifyContent: 'space-between', padding:'30px 25px'}} >
                <div>
                  <p style={{fontSize: '18px', fontWeight: 'bold'}}>Transfer Money</p>
                </div>
                <div>
                    <input className="form-control form-control-lg" type="text" placeholder="Search" aria-label=".form-control-lg example" style={{background: '#6998AB',
                borderRadius: '12px', border: 'unset', color: '#fff'}}/>
                </div>  
            </div>
        <div className="wrapTrasn">
            <div className='cardSearchTrans'>
              <div className="d-flex flex-row gap-4" style={{padding: '0px 20px'}}>
                {recipient.picture? 
                <img style={{width:'50px', height: '50px'}} src={recipient.picture} alt="user1"/>:
                <img style={{width:'50px', height: '50px'}} src={p1} alt="user1"/>
                }
                  <div className="d-flex flex-column">
                      <p style={{fontSize:'16px',  fontWeight: 'bold'}}>{recipient.fullname? recipient.fullname: 'recipient name'}</p>
                      <p style={{fontSize:'14px', marginTop: '-15px'}}>{recipient.phone? recipient.phone: 'recipient phone'}</p>
                  </div>
              </div>
            </div>
        </div>

        <div>
            <p style={{fontSize: '16px', color:'#7A7886', paddingLeft: '30px'}}>Type the amount you want to transfer and then <br/>
                press continue to the next steps.</p>
        </div>

        <Formik
            onSubmit={onInputAmount}
            initialValues={{amount: '', note: ''}}
            validationSchema={amountSchema}>
            {(props)=><AmountForm {...props} />}
          </Formik>
      
      
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

export default TransSearch
// import React from 'react';
// import '../assets/css/pagestyle.css';
// import {Navbar, Row, Col, Form, Alert, Button} from 'react-bootstrap';
// import { useDispatch, useSelector } from "react-redux";
// import {Link, useNavigate} from 'react-router-dom';
// import phonelogin from '../assets/images/phonelogin.png';
// //import { createpin } from "../redux/asyncActions/auth";
// import {Formik} from 'formik';
// import * as Yup from 'yup';


// const CreatePinForm = (props)=> {
//     const navigate = useNavigate();
//     const successMsg = useSelector((state) => state.auth.successMsg);
//     const errorMsg = useSelector((state) => state.auth.errorMsg);
  
//     React.useEffect(() => {
//       if (successMsg) {
//         navigate("/createpinsuccess", { state: { successMsg } });
//       }
//     }, [navigate, successMsg]);
  
//     return(
//       <>
//         <Form className='pin-input-wrapper3' noValidate onSubmit={props.handleSubmit}>
//         {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}

//                 <Form.Group className="pin-form-wrap">
//                     <Form.Control className="pin-form-input"
//                     name="pin1" 
//                     onChange={props.handleChange} 
//                     type="number" 
//                     value={props.values.pin1} 
//                     // isInvalid={!!props.errors.username}
//                     />

//                     <Form.Control className="pin-form-input"
//                     name="pin2" 
//                     onChange={props.handleChange} 
//                     type="number" 
//                     value={props.values.pin2} 
//                     // isInvalid={!!props.errors.username}
//                     />

//                     <Form.Control className="pin-form-input"
//                     name="pin3" 
//                     onChange={props.handleChange} 
//                     type="number" 
//                     value={props.values.pin3} 
//                     // isInvalid={!!props.errors.username}
//                     />

//                     <Form.Control className="pin-form-input"
//                     name="pin4" 
//                     onChange={props.handleChange} 
//                     type="number" 
//                     value={props.values.pin4} 
//                     // isInvalid={!!props.errors.username}
//                     />

//                     <Form.Control className="pin-form-input"
//                     name="pin5" 
//                     onChange={props.handleChange} 
//                     type="number" 
//                     value={props.values.pin5} 
//                     // isInvalid={!!props.errors.username}
//                     />

//                     <Form.Control className="pin-form-input"
//                     name="pin6" 
//                     onChange={props.handleChange} 
//                     type="number" 
//                     value={props.values.pin6} 
//                     // isInvalid={!!props.errors.username}
//                     />
//                 </Form.Group>
//                 <div className='wraper-pin' >
//                 <div className="d-grid ">
//                     <Button className='btn btn-fw9' type='submit'>Confirm</Button>
//                 </div>
//             </div>
//         </Form>
//       </>
//     )
//   }

// function CreatePin() {

//     const dispatch = useDispatch();
//     const token = useSelector((state) => state.auth.token);
//     const navigate = useNavigate();

//   const onCreatePin = (value) => {
//     const data = { email: value.email, password: value.password };
//     dispatch(createpin(data));
//   };

//   React.useEffect(()=>{
//     if (token) {
//       navigate('/createpin')
//     }
//   }, [navigate, token])
//   return (
//     <>
//     <Row className='mh-100'>
//         <Col className='parent' md={7} >
//         <Navbar>
//               <Link className='navbar-brand titleapp' to='/home'>ART-TOS</Link>
//         </Navbar>
//           <div className="d-flex flex-column align-items-center">
//               <div>
//                   <img src={phonelogin} alt="phonelogin"/>
//               </div>
//               <div >
//                   <h1>App that Covering Banking Needs</h1>
//                   <p>Zwallet is an application that focussing in banking needs for all users
//                       in the world. Always updated and always following world trends.
//                       5000+ users registered in Zwallet everyday with worldwide
//                       users coverage.</p>
//               </div>
//           </div>
//         </Col>

//         <Col className='d-flex flex-column gap-3 form-login1' md={5}>
//             <Link className='secTitle' to={"/login/"}>ART-TOS</Link>
            
//             <h3>Secure Your Account, Your Wallet,
//                 and Your Data With 6 Digits PIN
//                 That You Created Yourself.</h3>
//             <p>Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don’t tell anyone about your Zwallet account password and the PIN.</p>
          
//           <div className='wraper-pin' >

//           <Formik
//             onSubmit={onCreatePin}
//             initialValues={{email: '', password: ''}}
//             //validationSchema={loginSchema}
//             >
            
//             {(props)=><CreatePinForm {...props} />}
//           </Formik>
            
//           </div>
//         </Col>
//     </Row>
//     </>
//   )
// }

// export default CreatePin
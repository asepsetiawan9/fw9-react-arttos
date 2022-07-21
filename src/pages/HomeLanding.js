import React from 'react'
import {Link} from 'react-router-dom'

import phone from '../assets/images/phone.png'

function HomeLanding() {
  return (
    <>
      <header > 
        <nav>
            <div className="titleapp">ART-TOS </div>
            <div className="gap-2 fw9-btn">
                <Link className='login' to={"/details/"}>Login</Link>
                <Link className='regis' to={"/details/"}>Sign Up</Link>
            </div>
            <div class="fw9-sec-btn">
                <a className="login" href="/login.html" target="_blank">Login</a>
                <a className="regis" href="/signup.html" target="_blank">Register</a>
            </div>
        </nav>
      </header>
      <section>
      <div className="main1">
            <div className="maintry">
                <div className="gap-3 maintry1">
                    <h1>Awesome App For Saving <span style={{color: '#6998AB'}}> Time.</span></h1>
                    <p>We bring you a mobile app for banking problems that often wasting much of your time.</p>
                    
                    <a className="btntry" href="/signup.html" target="_blank">Try It Free</a>
                </div>
            </div>
            <div className="imgtry">
                <div className="bgbg">
                    <img src={phone} alt="" />
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default HomeLanding
import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/css/mystyle.css'

import phone from '../assets/images/phone.png'
import hp from '../assets/images/hp.png'
import lock from '../assets/images/lock.png'
import dw from '../assets/images/dw.png'
import sponsor from '../assets/images/sponsor.png'
import phonestat from '../assets/images/phonestat.png'
import u1 from '../assets/images/u1.png'
import u2 from '../assets/images/u2.png'
import u3 from '../assets/images/u3.png'

function HomeLanding() {
  return (
    <>
      <section className='landingHeader'> 
        <nav>
            <div className="titleapp">ART-TOS</div>
            <div className="gap-2 fw9-btn1">
                <Link className='login' to={"/login/"}>Login</Link>
                <Link className='regis' to={"/signup/"}>Sign Up</Link>
            </div>
            <div class="fw9-sec-btn">
            <Link className='login' to={"/login/"}>Login</Link>
                <Link className='regis' to={"/signup/"}>Sign Up</Link>
            </div>
        </nav>
      </section>
      <section>
      <div className="main1">
            <div className="maintry">
                <div className="maintry1">
                    <h1>Awesome App For Saving <span style={{color: '#6998AB'}}> Time.</span></h1>
                    <p>We bring you a mobile app for banking problems that often wasting much of your time.</p>
                    
                    <Link className='btntry' to={"/signup/"}>Try It Free</Link>
                </div>
            </div>
            <div className="imgtry">
                <div className="bgbg">
                    <img src={phone} alt="Phone" />
                </div>
            </div>
        </div>
      </section>
      <section>
      <div className="about" >
            <div className="aboutmargin">
                <p className="abouttitle">
                <span style={{color: '#1A374D'}}>About</span> the Application.</p>
                <p className='aboutdecs'>We have some great features from the application and its totally free <br/> to use by all users around the world.</p>
                <div className="blokabout gap-3">
                    <div className="blok1">
                        <img style={{width: '150px;'}} src={hp} alt="Hp"/>
                        <h1>24/7 Support</h1>
                        <p>We have 24/7 contact support so you can contact us whenever you want and we will respond it.</p>
                    </div>
                    <div className="blok1">
                        <img style={{width: '150px;'}}  src={lock} alt="lock" />
                        <h1>Data Privacy</h1>
                        <p>We make sure your data is safe in our database and we will encrypt any data you submitted to us.</p>
                    </div>
                    <div className=" blok1">
                        <img style={{width: '150px;'}} src={dw} alt="download"/>
                        <h1>Easy Download</h1>
                        <p>Zwallet is 100% totally free to use its now available on Google Play Store and App Store.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section>
      <div className="sponsor">
                <div>
                    <h1>100+ <span style={{color: '#6998AB+'}}>Trusted</span> Partners.</h1>
                    <p>We have reached global level and have 100+ <br/> brand partners around the globe.</p>
                </div>
                <div>
                    <img style={{marginLeft: '100px;'}} src={sponsor} alt="sponsor" />
                </div>
            </div>
            <div className="feature">
                <div className="feature1">
                    <div style={{alignItems: 'center'}}>
                        <img className='imgfeature' src={phonestat} alt="phonestat"/>
                    </div>
                    <div className="featfeat" style={{textAlign: 'left'}}>
                        <h1>All The <span style={{color: '#1A374D'}}>Great</span> <br/> Zwallet Features.</h1>
                        <div className="d-flex flex-column">
                            <div className="blockfeat">
                                <h3><span style={{color: '#6379F4;'}}>1.</span> Small Fee</h3>
                                <p>We only charge 5% of every success transaction done in Zwallet app.</p>
                            </div>
                            <div className="blockfeat">
                                <h3><span style={{color: '#6379F4;'}}>2.</span> Data Secured</h3>
                                <p>All your data is secured properly in our system and its encrypted.</p>
                            </div>
                            <div className="blockfeat">
                                <h3><span style={{color: '#6379F4;'}}>3.</span> User Friendly</h3>
                                <p>Zwallet come up with modern and sleek design and not complicated.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>
      <section>
        <div className="testi">
            <h1> What Users are <span style={{color: '#406882'}}>Saying.</span></h1>
            <p style={{marginBottom: '70px', fontSize: '18px'}}>We have some great features from the application and it’s totally <br/> free to use by all users around the world.</p>
            <div className="gap-3 testiuser" style={{justifyContent: 'Center'}}>
                <div className=" block11">
                    <img src={u1} alt="user1" srcset=""/>
                    <h3>Sherina Chaw</h3>
                    <p style={{fontWeight: '400',
                        fontSize: '18px'}} >“I use this app since 2 years ago and this is the best app that Ive ever use in my entire life”</p>
                </div>
                <div className=" block11">
                    <img src={u2} alt="user2" srcset=""/>
                    <h3>Jessica Mera</h3>
                    <p style={{fontWeight: '400',
                    fontSize: '18px'}} >“I use Zwallet to manage all financial needs. Its super easy to use and its 100% free app”</p>
                </div>
                <div className=" block11">
                    <img src={u3} alt="user3" srcset=""/>
                    <h3>Robert Chandler</h3>
                    <p style={{fontWeight: '400',
                    fontSize: '18px'}}>“Since Im using this app, Im not going to move to another similar app. Thank you Zwallet!”</p>
                </div>
            </div>
        </div>
      </section>
        <footer>
            <h1>ART-TOS</h1>
            <p>Simplify financial needs and saving <br/> much time in banking needs with <br/> one single app.</p>
            <hr style={{borderTop: '3px solid white'}}/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>
                <p>2020 Zwallet. All right reserved.</p>
                </div>
                
                <div style={{marginLeft: '40px'}}>
                    <p>+62 5637 8882 9901 contact@zwallet.com</p>
                    
                </div>
            </div>
        </footer>
    </>
  )
}

export default HomeLanding
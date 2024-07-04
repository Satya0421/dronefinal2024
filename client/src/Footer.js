import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap-grid.css';
import './critical.css';
import './font-awesome.min.css';
import './index.css';
import './slick.min.css';
import './style.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer, toast } from 'react-toastify';
import API from './Api';

function Footer() {
  const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false)};
  const handleShow = () => setShow(true);

  const Subscriber=async(e)=>{
    e.preventDefault();
    const Subscriber = e.target.subscriber.value;
    let objectOb = {
            
            email: Subscriber,
           

          }
    //alert(Subscriber);
    await axios
                .post(API+'/subscribe', objectOb)
                .then((response) => {
                  //console.log(response);
                  //console.log(objectOb);
                  toast.success("Successfully subscribed.",{position: "top-center",});
                 e.target.subscriber.value= " ";
                })
                .catch((error) => {
                 // console.log(objectOb);
                 // console.log(error.response.data)
                  toast.error(error.response.data,{position: "top-center",});
                 })
  }

  return (
<div className="">                          

          
        <footer style={{margin:"0px"}}>
    
      <div className="row " style={{margin:"5px",marginTop:"20px"}}>
        <div className="col-12 col-sm-12 col-lg-3 col-md-6 footer-info blok-link" >
          <h6 style={{color:"#fff"}}>contact us</h6>
          <p style={{color:"#fff"}}><i className="fa fa-map-marker" style={{float:"left",padding:"0px",width:"25px",}}></i><span><a href="https://www.google.com/maps/place/Multiplex+Drone+Pvt+Ltd/@12.9616582,77.516885,15z/data=!4m12!1m6!3m5!1s0x0:0xb5274ccd5d4d87ed!2sMultiplex+Drone+Pvt+Ltd!8m2!3d12.9609916!4d77.5168571!3m4!1s0x0:0xb5274ccd5d4d87ed!8m2!3d12.9609916!4d77.5168571?hl=en" 
           target="_blank" style={{color:"inherit",textDecoration:"none",marginBottom:"25px"}}>No.50/1,Manasanagar,
            <br /><span style={{paddingLeft:"25px",}}>Nagarbhavi,Bangalore-560072</span></a></span>
            <br />
            
           
            <i className="fa fa-envelope" aria-hidden="true" style={{float:"left",padding:"0px",width:"25px",}}></i><span style={{width:"auto",}} onClick={(e) => {window.location.href ='mailto:corporate@multiplexdrone.com';}}>corporate@multiplexdrone.com</span>
            <br />
            <i className="fa fa-phone" aria-hidden="true" style={{float:"left",padding:"0px",width:"25px",}}></i><span>+91-80-23497464</span>
            <br />
            <i className="fa fa-phone" aria-hidden="true" style={{float:"left",padding:"0px",width:"25px",}}></i><span>+91-6362900041</span>
          <br />
          {/* <span><a href="/infrastructure" className='infra_link' style={{paddingLeft:'25px'}}>Infrastructure</a></span> */}
          </p>
          
          
            
         
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6  blok-link footer-link" style={{margin:"0px",padding:"0px"}}>
          <div className="row" style={{margin:"0px"}}>
          <ul className="col-4 col-sm-4 col-lg-4 col-md-4 support-pages">
          <h6 style={{color:"#fff"}}>Pages</h6>
            <li ><a href="/">Home</a></li>
            <li><a href="/about">About us</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/services">Services</a></li>
          </ul>
      
          
          <ul className="col-4 col-sm-4 col-lg-4 col-md-4 support-foot">
          <h6 style={{color:"#fff"}}>information</h6>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/newsandevent">News & Events</a></li>
            <li><a href="/career">Careers</a></li>
            <li style={{visibility:"visible"}}><a href="/training">Training</a></li>
          </ul>
        
          <ul className="col-4 col-sm-4 col-lg-3 col-md-4 support-foot" >
          <h6 style={{color:"#fff"}}>support</h6>
            <li><a href="#" data-bs-toggle="modal" data-bs-target="#terms-conditions">Terms & Conditions</a></li>
            <li><a href="#" data-bs-toggle="modal" data-bs-target="#refund-policy">Refund Policy</a></li>
            <li><a href="#" data-bs-toggle="modal" data-bs-target="#shipping-policy">Shipping Policy</a></li>
            <li ><a href="#" data-bs-toggle="modal" data-bs-target="#privacy-policy">Privacy Policy</a></li>
          </ul>
          </div>

        </div>
        
        <div className="col-12 col-sm-12 col-md-6 col-lg-3  footer-subscribe">
          <h6 style={{color:"#fff"}}>subscribe</h6>
          <form className="subscribe-form" onSubmit={Subscriber}>
            <div className="input-group mb-3">
              <input type="email" className="form-control" name="subscriber" placeholder="subscribe" aria-label="Username" aria-describedby="basic-addon1" required/>
              <button className="input-group-text text-light" style={{backgroundColor: "#1da912"}}>send</button>
            </div>
          </form>
          
        </div>
      </div>
      <br />
      <div className="" style={{textAlign:"center",padding:"0px",paddingRight:"0%",width:"100%",margin:"0px"}}>
            <a href="#" className="logo-disappear" style={{textAlign:"center",padding:"0px"}}><img src="img/mainlogo.png" alt="logo" style={{height:"60px",width:"300px",textAlign:"center",paddingRight:"0%"}} /></a>
          </div>
      <div className="footer-bottom" style={{margin:"0px",padding:"0px"}}>
        
          
         <div className="row justify-content-between copyright" style={{margin:"0px"}}>
            <div className="col-12 col-md-4 copyRightHolder v-II text-center pt-md-2 pb-md-2 py-2">
              <p className="mb-0">
                &#169; Copyright : <a>Multiplex Drone Private Limited.</a>
              </p>
            </div>
            <div
              className="col-12 col-md-3 mt-2"
              style={{ marginTop: "20px !important", color: " #fff" }}
            >
              <p className="text-center">
                Powered by : <a href="https://www.techraven.live" target="_blank">
                  <img src="img/TRlogo.png" height="12px" alt="" />
                </a>
                
              </p>
            </div>
          </div>
        
      </div>
    
  </footer>


  

<div className="modal fade" id="privacy-policy" tabindex="-1" aria-labelledby="" aria-hidden="true" style={{minWidth:"60%",}}>
  <div className="modal-dialog modal-dialog-scrollable" style={{minWidth:"50%"}}>
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="heading-main">Privacy Policy</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body main">
                      <p><h6 style={{color:"black",textAlign:"center"}}>Welcome to www.multiplexdrone.com</h6></p>

        <p className="text-dark"> Multiplex Drone PVT. ltd. values all information which is stored or used on this website through transactions. We follow best practices in the industry to keep all information safe and secure. We urge all users of this website to go through our privacy policy to learn more about our practices.

</p><p>We publish this in accordance with rule (3)(1) of the information technology (intermediary guidelines) rules,2011.</p>

<p className="text-dark font-weight-bold">Note:</p>
<p>
Our privacy policy is subject to change at any time without notice. To make sure you are aware of any changes, please review this policy periodically.
</p>
<p>By visiting this website you agree to be bound by the terms and conditions of this Privacy Policy. If you do not agree please do not use or access our website.
</p>
<p>By mere use of the Website, you expressly consent to our use and disclosure of your personal information in accordance with this Privacy Policy. This Privacy Policy is incorporated into and subject to the Terms of Use.
</p>  
<div className="row">
<div className="col-12">

            <div className="">
            <div className="li-num" >1</div>
            <div className="policy-description" ><b>Collection of personally identifiable information and other information</b><br /><br />
            <p>When you use our website, we collect and store your personal information which is provided by you from time to time. Our primary goal in doing so is to provide you a safe, efficient, smooth and customized experience. This allows us to provide services and features that most likely meet your needs, and to customize our website to make your experience safer and easier. More importantly, while doing so we collect personal information from you that we consider necessary for achieving this purpose.
            </p>
            <p>We use data collection devices such as "cookies" on certain pages of the website to help analyse our web page flow, measure promotional effectiveness, and promote trust and safety. "Cookies" are small files placed on your hard drive that assist us in providing our services. We offer certain features that are only available through the use of a "cookie".
            </p>
            <p>We also use cookies to allow you to enter your password less frequently during a session. Cookies can also help us provide information that is targeted to your interests. Most cookies are "session cookies," meaning that they are automatically deleted from your hard drive at the end of a session. You are always free to decline our cookies if your browser permits, although in that case you may not be able to use certain features on the Website and you may be required to re-enter your password more frequently during a session.
            </p>
            <p>Additionally, you may encounter "cookies" or other similar devices on certain pages of the Website that are placed by third parties. We do not control the use of cookies by third parties.
            </p>
            <p>If you subscribe to services offered on our Website, we collect information such as a billing address, a credit / debit card number and a credit / debit card expiration date and/ or other payment instrument details and tracking information from cheques or money orders.
            </p>
            <p>If you choose to post messages on our message boards, chat rooms or other message areas or leave feedback, we will collect that information you provide to us. We retain this information as necessary to resolve disputes, provide customer support and troubleshoot problems as permitted by law.
            </p>
            <p>If you send us personal correspondence, such as emails or letters, or if other users or third parties send us correspondence about your activities or postings on the Website, we may collect such information into a file specific to you.
            </p>
            <p>We collect personally identifiable information (email address, name, phone number, credit card / debit card / other payment instrument details, etc.) from you when you set up an account with us. While you can browse some sections of our Website without being a registered member, certain activities (such as using our premium services) do require registration. We do use your contact information to send you offers related to our services or any other third-party services.
            </p>
            </div>
            <div style={{clear:'both'}}></div>
            </div><br />


            <div>
            <div className="li-num">2</div>
            <div className="policy-description"><b>Use of Demographic / Profile Data / Your Information</b><br /><br />
            <p>We use personal information to provide the services you request. To the extent we use your personal information to market to you, we will provide you the ability to opt-out of such uses. We use your personal information to resolve disputes; troubleshoot problems; help promote a safe service; collect money; measure consumer interest in our products and services, inform you about online and offline offers, products, services, and updates; customize your experience; detect and protect us against error, fraud and other criminal activity; enforce our terms and conditions; and as otherwise described to you at the time of collection.</p>
            <p>In our efforts to continually improve our product and service offerings, we collect and analyse demographic and profile data about our users' activity on our Website.</p>
            <p>COOKIES</p><p>A "cookie" is a small piece of information stored by a web server on a web browser so it can be later read back from that browser. Cookies are useful for enabling the browser to remember information specific to a given user. We place both permanent and temporary cookies in your computer's hard drive. The cookies do not contain any of your personally identifiable information.</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div><br />

            <div>
            <div className="li-num">3</div>
            <div className="policy-description"><b>Sharing of personal information</b><br /><br />
            <p>We may share personal information with our other corporate entities and affiliates. These entities and affiliates may market to you as a result of such sharing unless you explicitly opt-out.</p>
            <p>We may disclose personal information to third parties. This disclosure may be required for us to provide you access to our Services, to comply with our legal obligations, to enforce our User Agreement, to facilitate our marketing and advertising activities, or to prevent, detect, mitigate, and investigate fraudulent or illegal activities related to our Services. We do not disclose your personal information to third parties for their marketing and advertising purposes without your explicit consent.</p>
            <p>We may disclose personal information if required to do so by law or in the good faith belief that such disclosure is reasonably necessary to respond to subpoenas, court orders, or other legal process. We may disclose personal information to law enforcement offices, third party rights owners, or others in the good faith belief that such disclosure is reasonably necessary to: enforce our Terms or Privacy Policy; respond to claims that an advertisement, posting or other content violates the rights of a third party; or protect the rights, property or personal safety of our users or the general public.</p>
            <p>We and our affiliates will share / sell some or all of your personal information with another business entity should we (or our assets) plan to merge with, or be acquired by that business entity, or re- organization, amalgamation, restructuring of business. Should such a transaction occur that other business entity (or the new combined entity) will be required to follow this privacy policy with respect to your personal information.</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div><br />

            <div>
            <div className="li-num">4</div>
            <div className="policy-description"><b>Links to other sites</b><br /><br />
            <p>Our Website links to other Websites that may collect personally identifiable information about you. Multiplex Drone Pvt. Ltd. is not responsible for the privacy practices or the content of those linked Websites.</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div><br />

            <div>
            <div className="li-num">5</div>
            <div className="policy-description"><b>Security precautions</b><br /><br />
            <p>Our Website has stringent security measures in place to protect the loss, misuse, and alteration of the information under our control. Whenever you change or access your account information, we offer the use of a secure server. Once your information is in our possession, we adhere to strict security guidelines, protecting it against unauthorized access.</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div><br />

            <div>
            <div className="li-num">6</div>
            <div className="policy-description"><b>Choice/Opt-Out</b><br /><br />
            <p>We provide all users with the opportunity to opt-out of receiving non-essential (promotional, marketing-related) communications from us on behalf of our partners, and from us in general, after setting up an account.</p>
            <p>If you want to remove your contact information from the Website’s services’ lists and newsletters, please contact: corporate@multiplexdrone.com</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div><br />

            <div>
            <div className="li-num">7</div>
            <div className="policy-description"><b>Advertisements</b><br /><br />
            <p>We do not serve ads on our Website.</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div><br />  

            <div>
            <div className="li-num">8</div>
            <div className="policy-description"><b>Your consents</b><br /><br />
            <p>By using the Website and/ or by providing your information, you consent to the collection and use of the information you disclose on the Website in accordance with this Privacy Policy, including but not limited to your consent for sharing your information as per this privacy policy.</p>
            <p>If we decide to change our privacy policy, we will post those changes on this page so that you are always aware of what information we collect, how we use it, and under what circumstances we disclose it.</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div><br />  


            <div>
            <div className="li-num">9</div>
            <div className="policy-description"><b>Grievance officer</b><br /><br />
            <p>In accordance with Information Technology Act 2000 and rules made there under, the name and contact details of the Grievance Officer are provided below:</p>
            <p>shivakumar.hg@multiplexdrone.com <br />
                Head (Technical & Operations)<br />
                Multiplex Drone Pvt.Ltd.<br />
                No. 180, 1st Main Road, Mahalakshmi Layout<br />
                Bangalore-560086
            </p>
            </div>
            <div style={{clear:'both'}}></div>

            </div><br /> 

</div>

</div>


      
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{background:"#1da912",border:"none"}}>Close</button>
        
      </div>
    </div>
  </div>
</div>


<div className="modal fade" id="shipping-policy" tabindex="-1" aria-labelledby="" aria-hidden="true" style={{minWidth:"60%"}}>
  <div className="modal-dialog modal-dialog-scrollable" style={{minWidth:"50%"}}>
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="heading-main">Shipping Policy</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body main">
                <p><h6 style={{color:"black",textAlign:"center"}}>Welcome to www.multiplexdrone.com</h6></p>

<div className="row">
<div className="col-12">

            <div className="">
            <div className="li-num" >1</div>
            <div className="policy-description" >
            <p>We guarantee to provide accurate descriptions and high quality product as mentioned in the website. If product shipped is found damaged, mismatched or faulty then the customer needs to inform within 5 days after receiving the consignment.</p>
            </div>
            <div style={{clear:'both'}}></div>
            </div>


            <div>
            <div className="li-num">2</div>
            <div className="policy-description">
            <p>No warranty will apply if the product has been subjected to misuse, static discharge, neglect, accident, modification, or has been soldered or altered in any way.</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div>

            <div>
            <div className="li-num">3</div>
            <div className="policy-description">
            <p>After the full payment, product will be dispatched within 2 working days and tracking number will be given to the customers.</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div>

</div>

</div>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{background:"#1da912",border:"none"}}>Close</button>
        
      </div>
    </div>
  </div>
</div>



<div className="modal fade" id="refund-policy" tabindex="-1" aria-labelledby="" aria-hidden="true" style={{minWidth:"60%",}}>
  <div className="modal-dialog modal-dialog-scrollable" style={{minWidth:"50%"}}>
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="heading-main refund-policy">Payment & Refund Policy</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body main">
        <p><h6 style={{color:"black",textAlign:"center"}}>Welcome to www.multiplexdrone.com</h6></p>
        <div className="row">
<div className="col-12">

            <div className="">
            <div className="li-num" >1</div>
            <div className="policy-description" >
            <p>Training course registrations will not be confirmed until registration is complete and billing information is received in full.</p>
            </div>
            <div style={{clear:'both'}}></div>
            </div>


            <div>
            <div className="li-num">2</div>
            <div className="policy-description">
            <p>Upon the special request, training can be rescheduled to future drone training.</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div>

            <div>
            <div className="li-num">3</div>
            <div className="policy-description">
            <p>In order to reschedule a confirmed training please submit an email request to training@multiplexdrone.com .</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div>
            
            <div className="">
            <div className="li-num" >4</div>
            <div className="policy-description" >
            <p>Please submit reschedule requests atleast one week before the commencement of drone training.</p>
            </div>
            <div style={{clear:'both'}}></div>
            </div>


            <div>
            <div className="li-num">5</div>
            <div className="policy-description">
            <p>If a training class is cancelled due to any unforeseen circumstances such as weather or natural disaster, candidate is entitled to reschedule for a future training course.</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div>

            <div>
            <div className="li-num">6</div>
            <div className="policy-description">
            <p>Online convenience fees is chargeable to the customers</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div>

</div>

</div>


      
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{background:"#1da912",border:"none"}}>Close</button>
        
      </div>
    </div>
  </div>
</div>



<div className="modal fade" id="terms-conditions" tabindex="-1" aria-labelledby="" aria-hidden="true" style={{minWidth:"60%",}}>
  <div className="modal-dialog modal-dialog-scrollable" style={{minWidth:"50%"}}>
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="heading-main">Terms and Conditions</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body main">
      <div><h6 style={{color:"black",textAlign:"center"}}>Welcome to www.multiplexdrone.com</h6></div>
        <p style={{textAlign:"justify",wordSpacing:"0px",whiteSpace: "nowrap"}}>These terms and conditions outline the rules and regulations for the use of www.multiplexdronecom.</p>
        <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use www.multiplexdrone.com if you do not agree to take all of the terms and conditions stated on this page.</p>

<p className="text-dark font-weight-bold">Payment</p>
<p>
In case of any payment transfer for requested legal services delivered through the website, Personal Cheque, Net Banking Transfer, are all acceptable methods of payment. Returned cheques will incur charge to cover banking fees and administrative costs. In an instance of a second Returned cheque, we reserve the right to terminate the arrangement and if agreed to, we shall insist on future cash transactions or through Demand Draft only. Consequently, all bookings and/or transactions and agreements entered will cease with immediate effect until such time as any and all outstanding monies are recovered in full.</p>
<p>The service is provided using a payment gateway service provider through a secure website. However, neither the payment gateway service provider nor the Multiplex Drone Pvt. Ltd. gives any assurance, that the information so provided online by a user is secured or may be read or intercepted by a third party. Multiplex Drone Pvt. Ltd. does not accept or assume any liability in the event of such unauthorized interception, hacking or other unauthorized access to information provided by a user of the service</p>
<p>Multiplex Drone Pvt. Ltd. and/or the Payment Service Providers shall not be liable for any inaccuracy, error or delay in, or omission of (a) any data, information or message, or (b) the transmission or delivery of any such data, information or message; or (c) any loss or damage arising from or occasioned by any such inaccuracy, error, delay or omission, non-performance or interruption in any such data, information or message. Under no circumstances shall the Multiplex Drone Pvt. Ltd. and/or the Payment Service Providers, its employees, directors, and its third party agents involved in processing, delivering or managing the Services, be liable for any direct, indirect, incidental, special or consequential damages, or any damages whatsoever, including punitive or exemplary arising out of or in any way connected with the provision of or any inadequacy or deficiency in the provision of the Services or resulting from unauthorized access or alteration of transmissions of data or arising from suspension or termination of the Service.</p>  

<p className="text-dark font-weight-bold">Availability</p>
<p>
You are solely responsible for evaluating the fitness for a particular purpose of any downloads, programs and text available through this site. Redistribution or republication of any part of this site or its content without permission is prohibited, by any means, without the express written consent of the author of the website.</p>

<p className="text-dark font-weight-bold">Links from this Website</p>
<p>
We do not monitor or review the content of other party’s websites which are linked to from this website. Opinions expressed or material appearing on such websites are not necessarily shared or endorsed by us and should not be regarded as the publisher of such opinions or material. Please be aware that we are not responsible for the privacy practices, or content, of these sites. We encourage our users to be aware when they leave our site & to read the privacy statements of these sites. You should evaluate the security and trustworthiness of any other site connected to this site or accessed through this site yourself, before disclosing any personal information to them. This Company will not accept any responsibility for any loss or damage in whatever manner, howsoever caused, resulting from your disclosure to third parties of personal information.</p>

<p className="text-dark font-weight-bold">Copyright Notice</p>
<p>
Copyright and other relevant intellectual property rights exist on all text relating to the full content of this website. This logo is a word logo of the website alone and is subject to Indian Trade Mark Law.</p>

<p className="text-dark font-weight-bold">General</p>
<p>
The laws of India would govern these terms and conditions. By accessing this website and using our services you consent to these terms and conditions and to the exclusive jurisdiction of the Indian courts at Delhi in all disputes arising out of such access.</p>


      
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{background:"#1da912",border:"none"}}>Close</button>
        
      </div>
    </div>
  </div>
</div>



<ToastContainer />

</div>     
  );
}

export default Footer;





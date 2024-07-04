import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap-grid.css';
import './critical.css';
import './font-awesome.min.css';
import './index.css';
import './slick.min.css';
import './style.css';
import Collapse from 'react-bootstrap/Collapse';
import ResponsiveAppBar from './AppBar'; 
import Footer from './Footer';

import {TestimonialCarousel} from './Carousels/testimonial_carousel/Testimonial';
import {Videos_Carousel} from './Carousels/NewsAndEvents_Carousel';

// import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import API from './Api';

  const style = {
};
    

function Home() {


  // const [inputs, setInputs] = useState({});
  const [err,setErr] =useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false);setErr([])};
  const handleShow = () => setShow(true);

const [spraysererr,setSprayserErr] =useState([]);
  const [showspray, setShowspray] = useState(false);
  const handleClosespray = () => {setShowspray(false);setSprayserErr([])};

  const handleShowspray = () => setShow(true);

  const navigate = useNavigate();


  
          const sendSprayServicesDetails=async(e)=>{
          e.preventDefault();
          let objectOb = {
            name: e.target.yourname.value,
            contactnumber: e.target.yourphone.value,
            email: e.target.youremail.value,
            message: e.target.yourtext.value,
            place: e.target.yourplace.value,
            crop: e.target.yourcrop.value,
            acre: e.target.youracres.value
          }
          //console.log(objectOb);
          await axios
                .post(API+'/sprayservicesenquiry', objectOb)
                .then((response) => {
                  navigate(`/`);
                  toast.success("Successfully Enquiry Submitted.",{position: "top-center",});
                  setShowspray(false);
                  //console.log(typeof response.data.contactnumber);
                  setSprayserErr([]);
                    //.log(err);
                    
                })
                .catch((error) => {
                  //console.log("err",error.response.data.replace("enquiries validation failed:", "").split(",",20));
                 // console.log(error.response)
                  //setSprayserErr(error.response.data.replace("enquiries validation failed:", "").split(",",20))
                 })
                .finally(()=>{
                  
                })
          }

          const sendEnquiryDetails=async(e)=>{
          e.preventDefault();
          let objectOb = {
            name: e.target.yourname.value,
            contactnumber: e.target.yourphone.value,
            email: e.target.youremail.value,
            message: e.target.yourtext.value,
            place: e.target.yourplace.value,

          }
          console.log(objectOb);
          await axios
                .post(API+'/enquiry', objectOb)
                .then((response) => {
                  navigate(`/`);
                  toast.success("Successfully Enquiry Submitted.",{position: "top-center",});
                  setShow(false);
                  //console.log(typeof response.data.contactnumber);
                  setErr([]);
                    //.log(err);
                })
                .catch((error) => {
                  //console.log("err",error.response.data.replace("enquiries validation failed:", "").split(",",20));
                  //console.log(error.response)
                  //setErr(error.response.data.replace("enquiries validation failed:", "").split(",",20))
                 })
                .finally(()=>{
                  
                })


          }
 


  return (
<div >                           
 <div style={{marginTop:"0px"}}><ResponsiveAppBar /> </div> 



  <div className="col-12" style={{padding:"0px"}} >
      <div style={{}}>
   
<video className="video-box" autoPlay loop muted width="100%" style={{}}>
          <source src="landing-video.mp4" type="video/mp4"></source>
        </video>
        </div>
    </div> <br />
          {<section className="s-shop" style={{padding:"0px",height:"inherit",}}>






                <div className="container " style={{padding:"0px",}}>
                   { //<h2  style={{padding:"0px"}}>INFOGRAPHICS</h2>
              }
          
            <div className="info-span container" style={{width:"100%",textAlign:"center",}}>
              <div className="row" style={{}}>
                        <div className="block-icons col-3" style={{margin:"10px",textAlign:"center",paddingBottom:"0px"}}>
                          <img src="img/icon-tab-2.svg" alt="img" style={{height:"35%"}} />
                          <div style={{color:"#fff",fontWeight:"bold",fontSize:"10px",}}>3+</div><h6 style={{fontWeight:"bold",fontSize:"10px",color:"#fff",}}>Branches</h6>
                        </div>

                        <div className="block-icons col-3" style={{margin:"10px",textAlign:"center",paddingBottom:"0px"}}>
                          <img src="img/icon-tab-111.svg" alt="img" style={{height:"33%"}} />
                          <div style={{color:"#fff",fontWeight:"bold",fontSize:"10px"}}>8+</div><h6 style={{fontWeight:"bold",fontSize:"10px",color:"#fff",}}>Drone Variants</h6>
                        </div>

                        <div className="block-icons col-3" style={{margin:"10px",textAlign:"center",paddingBottom:"0px"}}>
                          <img src="img/icon-tab-6t.svg" alt="img" style={{height:"35%"}} />
                          <div style={{color:"#fff",fontWeight:"bold",fontSize:"10px"}}>30+</div>
                          <h6 style={{fontWeight:"bold",fontSize:"10px",color:"#fff",}}>Pilots</h6>
                        </div>
              </div>

              

              <div className="row" style={{}}>

                        <div className="block-icons col-3" style={{margin:"10px",textAlign:"center",paddingBottom:"0px"}}>
                          <img src="img/icon-tab-3.svg" alt="img" style={{height:"35%"}} />
                          <div style={{color:"#fff",fontWeight:"bold",fontSize:"10px"}}>5+</div>
                          <h6 style={{fontWeight:"bold",fontSize:"10px",color:"#fff",}}>Technicians</h6>
                        </div>

                        <div className="block-icons col-3" style={{margin:"10px",textAlign:"center",paddingBottom:"0px"}}>
                           <img src="img/icon-tab-4.svg" alt="img" style={{height:"33%"}} />
                          <div style={{color:"#fff",fontWeight:"bold",fontSize:"10px"}}>10000+</div>
                          <h6 style={{fontWeight:"bold",fontSize:"10px",color:"#fff",}}>acres sprayed</h6>
                        </div>

                        <div className="block-icons col-3" style={{margin:"10px",textAlign:"center",paddingBottom:"0px"}}>
                          <img src="img/icon-tab-6.svg" alt="img" style={{height:"35%"}} />
                          <div style={{color:"#fff",fontWeight:"bold",fontSize:"10px"}}>5000+</div>
                          <h6 style={{fontWeight:"bold",fontSize:"10px",color:"#fff",}}>farmers</h6>
                        </div>
              </div>
                                  
</div>
                  <div className="tab-wrap" style={{padding:"0px",margin:"0px",}}>

                    <ul className="tab-nav prod-tabs" style={{padding:"10px",paddingBottom:"0px",}}>
                      <li className="item" rel="tab1" >
                        <div className="block-icon" >
                          <img src="img/icon-tab-2.svg" alt="img" />
                          <h4 style={{color:"#fff",}}>3+</h4><h6 style={{color:"#fff",fontWeight:"bold",fontSize:"small"}}>Branches</h6>
{             //            <div className="info-span" style={{color:"white",width:"100%",textAlign:"left",paddingLeft:"30%"}}><span style={{display:"inline",textAlign:"left",}}><h4 style={{display:"inline",}}>3+</h4></span> <span style={{display:"inline"}}><h6 style={{display:"inline"}}>Branches</h6></span></div>
           }          
            
                        </div>
          
                      </li>




                      <li className="item" rel="tab2">
                        <div className="block-icon">
                          <img src="img/icon-tab-111.svg" alt="img" />
                          <h4 style={{color:"#fff",fontWeight:"bold",}}>8+</h4>
                          <h6 style={{color:"#fff",fontWeight:"bold",fontSize:"small"}}>Drone Variants</h6>



{  //                        <div className="info-span" style={{color:"white",width:"100%",textAlign:"left",paddingLeft:"30%"}}><span style={{display:"inline",textAlign:"justify"}}><h4 style={{display:"inline"}}>8+</h4></span> <span style={{display:"inline"}}><h6 style={{display:"inline"}}>Drone Variants</h6></span></div>
          }          
                        </div>
                      </li>
                      <li className="item" rel="tab3">
                        <div className="block-icon">
                          <img src="img/icon-tab-6t.svg" alt="img" />
                          <h4 style={{color:"#fff",}}>30+</h4>
                          <h6 style={{color:"#fff",fontSize:"small"}}>Pilots</h6>
{
         //                 <div className="info-span" style={{color:"white",width:"100%",textAlign:"left",paddingLeft:"30%"}}><span style={{display:"inline"}}><h4 style={{display:"inline"}}>30+</h4></span> <span style={{display:"inline"}}><h6 style={{display:"inline"}}>Pilot</h6></span></div>
          }
                        </div>
                      </li>
                      <li className="item" rel="tab4">
                        <div className="block-icon">
                          <img src="img/icon-tab-3.svg" alt="img" />
                          <h4 style={{color:"#fff",}}>5+</h4>
                          <h6 style={{color:"#fff",fontSize:"small"}}>Technicians</h6>
        {                  
               //                   <div className="info-span" style={{color:"white",width:"100%",textAlign:"left",paddingLeft:"30%"}}><span style={{display:"inline"}}><h4 style={{display:"inline"}}>5+</h4></span> <span style={{display:"inline"}}><h6 style={{display:"inline"}}>Technicians</h6></span></div>
                  }
                        </div>
                      </li>
                      <li className="item" rel="tab5">
                        <div className="block-icon">
                          <img src="img/icon-tab-4.svg" alt="img" />
                          <h4 style={{color:"#fff",}}>10000+</h4>
                          <h6 style={{color:"#fff",fontSize:"small"}}>acres sprayed</h6>
          {          //      <div className="info-span" style={{color:"white",width:"100%",textAlign:"left",paddingLeft:"30%"}}><span style={{display:"inline"}}><h4 style={{display:"inline"}}>10000+</h4></span> <span style={{display:"inline"}}><h6 style={{display:"inline"}}>acres</h6></span></div>
                    }
                        </div>
                      </li>
                      <li className="item" rel="tab6">
                        <div className="block-icon">
                          <img src="img/icon-tab-6.svg" alt="img" />
                          <h4 style={{color:"#fff",}}>5000+</h4>
                          <h6 style={{color:"#fff",fontSize:"small"}}>farmers</h6>
          {    //            <div className="info-span" style={{color:"white",width:"100%",textAlign:"left",paddingLeft:"30%"}}><span style={{display:"inline"}}><h4 style={{display:"inline"}}>5000+</h4></span> <span style={{display:"inline"}}><h6 style={{display:"inline"}}>farmers</h6></span></div>
                                    }               
                        </div>
                      </li>




                    </ul>


          </div>
              </div> 
              </section>}
    
    <section className="spray-drone" style={{padding:"10px",}}>

      <div className="box" style={{padding:"0px",}}>
        <div className="row align-items-center" style={{paddingTop:"0px",margin:"0px",}}>
          <div className="price-img-block col-md-6" style={{padding:"0px",marginTop:"0px",marginRight:"0px",height:"fit-content"}}>
            <div className="price-img-cover" style={{padding:"0px",width:"100%"}}>
              <img className="lazy animating-drone-backImg" src="img/best-img.jpg"  alt="img"  width="100%" />
              <img className="price-drone animating-drone" src="img/drone-1.png"  alt="img" style={{padding:"0px",margin:"0px"}}/>
            </div>
          </div>
          <div className=" col-md-6" style={{textAlign: "left",height:"100%",padding:"0px",marginTop:"0px",}}>
            <div className="price-info" style={{textAlign: "justify",padding:"20px",}} >
              <h1 style={{color:"#1da912",}} className="title-left t">For Spray Services</h1>
              <p  className='sprayed' style={{color:"#fff",}}>Finding a problem to find skilled Labour?
                <br />
                Difficult to manage the pest control?
                <br />
                Difficult to give spray at correct time?
                <br />
                Don't worry!
                Multiplex Drone Pvt Ltd is eager to make farmers happy.
              </p>
             
            <button className="quiry-btn" onClick={() => setShowspray(true)}>book now</button>
            </div>
           
            <div className="price-info" style={{textAlign: "left",padding:"20px"}}>
              <h1 style={{color:"#1da912"}} className="title-left t">For Customized Drones</h1>
              <p className='sprayed' style={{color:"#fff"}}>Every drone is manufactured with carbon fibers and aerospace-grade materials with high precision and controlled with industrial-grade flight controllers. Enquire now for customized/agricultural drones.</p>
             
            <button className="quiry-btn" onClick={() => setShow(true)}>enquire</button>
            </div>
          </div>
        </div>
      </div>
    </section>

<div className="container " style={{width:"100%",textAlign:"center",paddingTop:"0px",marginBottom:"0px",paddingBottom:"20px",}}>
        <h2 style={{paddingTop:"10px",}}>our proucts</h2>
       

         <section className="serv-block" style={{margin:"0%",width:"100%",}}> 
        
          <a href="/md5q" className="serv-block-item" style={{margin:"10px",width:"150%",height:"90%"}}>
            <span className="border-item"></span>
            <img className="lazy" src="img/img-1.png" alt="img" />
            <div className="serv-block-info">
              <h3>md 5q</h3>
              
              <span>read more</span>
            </div>
          </a>
          <a href="/md10q" className="serv-block-item" style={{margin:"10px",width:"150%",height:"90%"}}>
            <span className="border-item"></span>
            <img className="lazy" src="img/img-22.png" alt="img" />
            <div className="serv-block-info">
              <h3>md 10q</h3>
              
              <span>read more</span>
            </div>
          </a>
          <a href="/md10hv3" className="serv-block-item" style={{margin:"10px",width:"150%",height:"90%"}}>
            <span className="border-item"></span>
            <img className="lazy" src="img/img-33.png" alt="img" />
            <div className="serv-block-info">
              <h3>MD-10H V3</h3>
              <span>read more</span>
            </div>
          </a>
          <a href="/md10h" className="serv-block-item" style={{margin:"10px",width:"150%",height:"90%"}}>
            <span className="border-item"></span>
            <img className="lazy" src="img/img-44.png" alt="img" />{
              //img/img-44.png
            }
            <div className="serv-block-info">
              <h3>md 10h</h3>
              <span>read more</span>
            </div>
          </a>

          </section>

          <section className="serv-block" style={{margin:"0%",width:"100%"}}> 
        
          <a href="/ikshana" className="serv-block-item" style={{margin:"10px",width:"150%",height:"90%"}}>
            <span className="border-item"></span>
            <img className="lazy" src="img/img-ikshan.png" alt="img" />
            <div className="serv-block-info">
              <h3>Ikshana</h3>
              
              <span>read more</span>
            </div>
          </a>
          <a href="/chotabheem" className="serv-block-item" style={{margin:"10px",width:"150%",height:"90%"}}>
            <span className="border-item"></span>
            <img className="lazy" src="img/chotabheem1.png" alt="img" />
            <div className="serv-block-info">
              <h3>ChotaBheem</h3>
              
              <span>read more</span>
            </div>
          </a>
          <a href="/fogstar" className="serv-block-item" style={{margin:"10px",width:"150%",height:"90%"}}>
            <span className="border-item"></span>
            <img className="lazy" src="img/fogstar.png" alt="img" />
            <div className="serv-block-info">
              <h3>FogStar</h3>
              <span>read more</span>
            </div>
          </a>
          <a href="/md16hv2" className="serv-block-item" style={{margin:"10px",width:"150%",height:"90%"}}>
            <span className="border-item"></span>
            <img className="lazy" src="img/MD16H_V2.png" alt="img" />
            <div className="serv-block-info">
              <h3>MD-16H V2</h3>
              <span>read more</span>
            </div>
          </a>
          
          </section>

        </div>


<section className="s-blog" style={{padding: "0px",}}>
      <div className="container ">
        <h2 style={{padding:" 0px",marginTop:"10px",}}>Our Clients</h2>
        <div className="row">
          <img className="clients" src="img/clients.png" alt="img" style={{padding: "5px", marginTop:  "20px", width: "90%"}} />
    </div>
    </div>
    </section>

<br />

<section className="" >
      <div className=" container " style={{}}>
        <h2 style={{padding:"0px",margin:"0px",}}>News & Events </h2>
       { //<div className="row" style={{padding:"1%",margin:"0px",width:"inherit",}}>
        
                
        //           <div className="col-12 col-md-4 col-sm-10 post-item" style={{padding:"1%",margin:"0px"}}>
        //             <div className="prod-thumbnail" style={{padding:"5%",margin:"10px"}}>
        //               <a><iframe className="lazy" src="https://www.youtube.com/embed/l1OVENpxFkM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></a>
        //             </div>
                    
        //           </div>
                
        //           <div className="col-12 col-md-4 col-sm-10 post-item" style={{padding:"1%",margin:"0px"}}>
        //             <div className="prod-thumbnail" style={{padding:"5%",margin:"10px"}}>
        //               <a><iframe className="lazy" src="https://www.youtube.com/embed/LiafM_WhQok" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></a>
        //             </div>
                    
        //           </div>
        
        //           <div className="col-12 col-md-4 col-sm-10 post-item" style={{padding:"1%",margin:"0px"}}>
        //             <div className="prod-thumbnail" style={{padding:"5%",margin:"10px"}}>
        //               <a><iframe className="lazy" src="https://www.youtube.com/embed/ZJUriaB6_3g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></a>
        //             </div>
                    
        //           </div>
        //         </div>
       }


      

        <Videos_Carousel page={"home"} />
        


      </div>
      
      

    </section><br />

        <section style={{padding:"10px",paddingTop:"0px",marginBottom:"10px"}} >
          <div className="container">
            <h2 style={{padding:"0px",margin:"0px",}}>testimonials</h2>
            <TestimonialCarousel page={"home"} />
          </div>
        </section>
<section style={{}}>
         <Footer />
        </section>
        <a
        href="https://wa.me/919591999044"
        target="_blank"
        rel="noopener noreferrer"
                  style={{ position: "fixed", bottom: 90, right: "10px", zIndex: 1000 }}

      >
                  <img className="whatsapp-icon" src="img/whatsapp.png" width="40px" />

      </a> 
<Modal
      show={showspray} onHide={handleClosespray}
      style={{paddingTop:'0px'}}
    > 
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Spray Services
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        
        
          <form  className=""  name="contactform" onSubmit={sendSprayServicesDetails}>
            <label>Full Name</label>
            <input  type="text" name="yourname" placeholder="Name" style={{color:"black",padding:"5px"}} pattern="^[a-zA-z]+([\s][a-zA-Z]+)*$" required title="Please Enter only Alphabets without any numbers and special characters"/>         
            <lable>Contact Number</lable><br/>
            <input type="tel" name="yourphone" placeholder="Phone"  style={{color:"black",padding:"5px"}} pattern="[0-9]{10}" required title="Please Enter Valid Contact Number"/>
            <lable>Email</lable><br/>
            <input  type="email" name="youremail" placeholder="Email" style={{color:"black",padding:"5px"}} required />
            <lable>Place</lable><br/>
            <input  type="text" name="yourplace" placeholder="Place" style={{color:"black",padding:"5px"}} required/>         
            <lable>Your Crop</lable><br/>
            <input  type="text" name="yourcrop" placeholder="Crop" style={{color:"black",padding:"5px"}} required/>
            <lable>Acres</lable><br/>
            <input type="text" name="youracres" placeholder=""  style={{color:"black",padding:"5px",}} required/>         
            <lable>Description</lable>
            <textarea  name="yourtext" placeholder="Message" style={{color:"black",padding:"5px"}} required></textarea>


            <button className="btn"  style={{marginTop:"10px",background:"#1da912",color:"#fff"}}>SUBMIT</button>
        </form>
                         
      </Modal.Body>
         
    </Modal>
 

<Modal
      show={show} onHide={handleClose}
      style={{paddingTop:'5px'}}
    > 
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Enter Enquiry Details
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        
          <form  className=""  name="contactform" onSubmit={sendEnquiryDetails}>
            <label>Full Name</label>
            <input  type="text" name="yourname" placeholder="Name" style={{color:"black",padding:"5px"}} pattern="^[a-zA-z]+([\s][a-zA-Z]+)*$" required title="Please Enter only Alphabets without any numbers and special characters"/>         
            <lable>Contact Number</lable><br/>
            <input type="tel" name="yourphone" placeholder="Phone"  style={{color:"black",padding:"5px"}} pattern="[0-9]{10}"   required title="Please Enter Valid Contact Number"/>
            <lable>Email</lable><br/>
            <input  type="email" name="youremail" placeholder="Email" style={{color:"black",padding:"5px"}} required />
            <lable>Place</lable><br/>
            <input  type="text" name="yourplace" placeholder="Place" style={{color:"black",padding:"5px"}} required/>         
              
            <lable>Description</lable>
            <textarea  name="yourtext" placeholder="Message" style={{color:"black",padding:"5px"}} required></textarea>


            <button className="btn"  style={{marginTop:"10px",background:"#1da912",color:"#fff"}}>SUBMIT</button>
        </form>
                         
      </Modal.Body>
         
    </Modal>
      <ToastContainer />  
         

</div>
  );
}

export default Home;




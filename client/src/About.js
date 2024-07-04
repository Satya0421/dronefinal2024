import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap-grid.css';
import './critical.css';
import './font-awesome.min.css';
import './index.css';
import './slick.min.css';
import './style.css';
import ResponsiveAppBar from './AppBar'; 
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



function About() {
  const [modalShowMGS, setModalShowMGS] = React.useState(false);
  const [modalShowNMS, setModalShowNMS] = React.useState(false);
  
  return (
<div style={{margin:"0px"}}>                           
 <div style={{marginTop:"0px"}}><ResponsiveAppBar /> </div>                       
<br />

<section className="about-top" style={{textAlign:" justify",paddingTop:"0px",paddingBottom:"0px"}}>
      <div className="container">
        <div className="row about-top-cover" style={{textAlign:" justify",paddingTop:"0px",paddingBottom:"0px"}}>
           {
        // <div className="col-10 ">
                    //   <img src="img/img-about-top.jpg" alt="img"   style={{width:"100%", height:"inherit",padding: "5px"}} className="" />
                    // </div>
      }
          <div className="col-10 about-info">
            <h2 className="title-center">Who We Are</h2>     
             <p>Multiplex Drone Private Limited is subsidiary of Multiplex Group of Companies, which holds a legacy in agriculture from past 4 decades.
              <br />
              <br />
              Multiplex drone private limited was established with a motto of aerial crop spraying solution for farmer community. Our innovative drone solutions are custom tailored to meet agriculture requirements for farmers.
              <br />
              <br />
              Multiplex drone is committed towards excellence in Drone technology to deliver quality drone pilot training with best quality products to customers. We bring complete end to end engineering solutions, circumstantial services and support solutions for our customers.
            </p>
          </div>
          </div>
        </div>
    </section>

<section className="s-team" style={{width:"inherit",height: "inherit",padding:"0px",marginTop:"0px",textAlign: "justify",}}>
      <div className="container">
        <div className="visiontitle">
          <p style={{color: "#1da912"}}>OUR VISION</p>
          <img src="img/vision.svg" alt="img" />
        </div>
        <div className="visioninfo">
          <h6 style={{color:"#000",textTransform:"capitalize"}}>Our purpose is to provide drone technology and training for farmer’s community</h6>
        </div>
        <div className="visiontitle">
          <p style={{color: "#1da912",textAlign: "center"}}>OUR MISSION</p>
          <img src="img/mission.svg" alt="img" />
        </div>
        <div className="visioninfo">
          <h6 style={{color:"#000",textTransform:"capitalize"}}>To harness aerial technologies for precision Farming and promote self-employment initiatives by educating to fly UAV's</h6>
        </div>
      </div>
    </section>

<br />
<section className="" style={{ width:"inherit",height: "inherit",padding:"0px",margin:"0px",textAlign: "center",}}>
      <div className="" style={{padding:"0px",textAlign:"justify-all",}}>
      <h2 style={{paddingTop:"0px",}}> management</h2>
        {/* <p className="slogan">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmmpor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p> */}
        <div className="row" style={{display:"flex",padding:"0px",margin:"0px 0px",height: "inherit",width:"inherit"}}>

          <div className="col-sm-10 col-md-3 col-xl-3 col-lg-3 col-xs-5 pointer" style={{padding:"10px",margin:"inherit",width:"inherit",height: "inherit",cursor:"pointer"}} onClick={() => setModalShowMGS(true)}>
            <div style={{width:"inherit"}} id="myBtn1">
              <img src="img/MGS.jpg" height="inherit" alt=""style={{width:"80%",height: "inherit",}} />
            </div>
            <div className="team-info">
              <h5 style={{color: "#1da912", paddingTop:"10px"}} className=" name"> Mr. Mahesh G Shetty </h5>
              <div style={{color: "#282b32",fontSize:"14px"}} className="prof">Managing Director</div>
            </div>
          </div>
          

          <div className="col-sm-10 col-md-3 col-xl-3 col-lg-3 col-xs-5 pointer" style={{padding:"10px",margin:"inherit",width:"inherit",height: "inherit",cursor:"pointer"}} onClick={() => setModalShowNMS(true)}>
            <div style={{width:"inherit"}} id="myBtn1">
              <img src="img/NMS.jpg" height="inherit" alt=""style={{width:"80%",height: "inherit"}} />
            </div>
            <div className="team-info">
              <h5 style={{color: "#1da912", paddingTop:"10px"}} className=" name"> Mrs. Nishchita M Shetty </h5>
              <div style={{color: "#282b32",fontSize:"14px"}} className="prof">Director</div>
            </div>
          </div>

        </div>
      </div>


    </section>

      <MGSCenteredModal
        show={modalShowMGS}
        onHide={() => setModalShowMGS(false)}
      />
<NMSCenteredModal
        show={modalShowNMS}
        onHide={() => setModalShowNMS(false)}
      />

<section >
        <Footer />  
        </section>



<a
        href="https://wa.me/919591999044"
        target="_blank"
        rel="noopener noreferrer"
                  style={{ position: "fixed", bottom: 90, right: 10, zIndex: 1000 }}

      >
                  <img className="whatsapp-icon" src="img/whatsapp.png" width="40px" />

      </a>

</div>
  );
}

export default About;



function MGSCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      style={{paddingTop:'10px',backgroundColor:"#282b32"}}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Mr. Mahesh G Shetty
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Mr. Mahesh G. Shetty is the “Managing Director of Multiplex Drone Private Limited”,
            Former President of “Indian micro fertilizers manufacturers association” & 
             also the “Managing Director of Multiplex Group of Companies” who are pioneers in Agribusiness in India since 1974.
              With over 25 years of experience in the field of agronomy,
              Mr. Mahesh G. Shetty has played a crucial role in bringing up the facility into an organization of status,
             deeply embedded in production and marketing of micronutrients, especially fertilizers, organic manure, Bio-Fertilizer, Bio-Pesticides, Bio-Activators & Pesticides across India.
              <br />
              <br />
              Recognizing his contribution, the “International Competence Centre for Organic Agriculture (ICCOA)” has awarded Mr. Mahesh G. Shetty the title of “Young Industrial Entrepreneur” & under his authority, 
              the “Multiplex Group” has received the “Fertilizer Association of India (FAI) award” for “Production, Promotion, and Marketing of Bio Fertilizers”.
              <br />
              <br />
              On 27th January 2018, a destructive article was published in print media stating that twenty one farmers and farm labourers died and around 1000 others were infected between August to November,
               2017 due to direct exposure of pesticides, 
              this ignited his mind to initiate Multiplex Drone Private Limited.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} style={{backgroundColor:"#1da912",border:"none"}}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
function NMSCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      style={{paddingTop:'10px',backgroundColor:"#282b32"}}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Mrs. Nishchita M Shetty
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Mrs. Nishchita M Shetty is an independent thinker and a graduate of science. 
          With the constant support she received from her husband and father-in-law, she envisioned completing the long-cherished vision of Dr. G.P. Shetty; 
          that is, to provide chemical residue free food to the urbanites. 
          Her personal vision is to create joy in growing & nurturing of vegetables and fruits and flowers in urban homes by providing organic and eco-friendly products, 
          kits & services. She actively engages herself in the “Go Green, Grow Green” initiative.
                        <br />
                        <br />
                        She is also a director in all the subsidiaries of Multiplex
                        Group. Today she is an acclaimed entrepreneur in her own
                        right.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} style={{backgroundColor:"#1da912",border:"none"}}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


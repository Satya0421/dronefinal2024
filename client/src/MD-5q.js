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
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css'; // import first
import { ToastContainer, toast } from 'react-toastify'; // then this
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import API from './Api';

function MD5q() {
const [err,setErr] =useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false);setErr([])};
  const handleShow = () => setShow(true);

      const navigate = useNavigate();

const sendEnquiryDetails=async(e)=>{
          e.preventDefault();
          let objectOb = {
            name: e.target.yourname.value,
            contactnumber: e.target.yourphone.value,
            email: e.target.youremail.value,
            message: e.target.yourtext.value,

          }
          // console.log(objectOb);
          await axios
                .post(API+'/contactusenquiry', objectOb)
                .then((response) => {
                  //navigate(`/`);
                  toast.success("Successfully Enquiry Submitted.",{position: "top-center",});
                                  
                    e.target.yourname.value="";
                    e.target.yourphone.value='';
                    e.target.youremail.value="";
                    e.target.yourtext.value='';

                })
                .catch((error) => {
                  //console.log("err",error.response.data.replace("enquiries validation failed:", "").split(",",20));
                  //console.log(error.response);
                  //setErr(error.response.data.replace("contact validation failed:","").split(",",50));
                  const Err = error.response.data.replace("contact validation failed:","").replace("contactnumber","Contact Number");
                         //console.log(Err)
                  toast.error(Err,{position: "top-center",});

                 })
                .finally(()=>{
                  
                })


          }


const downloadCatlog=async(e)=>{
          e.preventDefault();
          let objectOb = {
            name: e.target.name.value,
            contactnumber: e.target.phone.value,
            email: e.target.email.value,
            productname:"MD5Q",

          }
           //console.log(objectOb);
          await axios
                .post(API+'/catlogdownload', objectOb,{
    
    responseType: "blob",
    
  })
                
                .then((res) => {
                  //console.log(res.data)
                  const file = new Blob(
                       [res.data], 
                       {type: 'application/pdf'});
                  //console.log(file)
                  const fileURL = URL.createObjectURL(file);
                  //console.log(fileURL)
                  let alink = document.createElement('a');
                  //console.log(alink)
                alink.href = fileURL;
                alink.download = 'MD5q.pdf';
                alink.click();
                  toast.success("Successfully Enquiry Submitted.",{position: "top-center"});
                  setShow(false);
                })
                 //getPdf();
                //})
                .catch((error) => {
                  //console.log("err",error.response.data.replace("enquiries validation failed:", "").split(",",20));
                  console.log(error.response);
                  //setErr(error.response.data.replace("contact validation failed:","").split(",",50));
                  //const Err = error.response.data.replace("contact validation failed:","").replace("contactnumber","Contact Number");
                         //console.log(Err)
                  //toast.error({position: "top-center",});

                 })
                .finally(()=>{
                  
                })


          }

           



  
  return (
<div>                           
 <div style={{marginTop:"0px"}}><ResponsiveAppBar /> </div>                       

  <section className="" style={{margin:"0px",padding:"0px auto"}}>
      <div className="container" style={{marginTop:"0px",padding:"0px auto"}}>
        <h2>MD 5Q</h2>
        <div className="productinfo" style={{marginBottom:"20px"}}>
          <h6 className="des" style={{color: "#1da912", fontWeight:"bold"}}>12 Minute Endurance | 1 Kilometere Range | 15 Kg MTOW</h6>
        </div>
        <p className="productinfo-p"  style={{textAlign:"justify"}}>MD-5Q series agricultural drone is quad type configuration drone manufactured indigenously with high grade aerospace materials such as carbon fiber and aluminum material. MD-5Q agri drone is a 5 kg payload drone specially designed for
          spraying
          agricultural inputs in small farming land. For safety purpose, this drone is equipped with terrain and obstacle RADAR that can adapt for terrain regions and as well as enclosed space with obstacles.</p>
        
       
        <div className="row we-offer-cover">
          <div className="col-12 col-sm-6 we-offer-item">
            <div className="offer-item-img">
              <img src="img/img-serv-1.jpg" alt="img" />
            </div>
          </div>
          <div className="col-12 col-sm-6 we-offer-item">
            <div className="offer-item-img">
              <img src="img/img-serv-2.jpg" alt="img" />
            </div>
          </div>
        </div>
        <div className="row we-offer-bottom">
          <div className="col-6 col-md-4 col-xl-2">
            <div className="block-icon">
              <img src="img/icon-tab-111.svg" alt="img" />
              <h6>takeoff Weight <br /> 15kg</h6>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-2">
            <div className="block-icon">
              <img src="img/icon-tab-2.svg" alt="img" />
              <h6>Endurance <br /> 7minutes</h6>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-2">
            <div className="block-icon">
              <img src="img/icon-tab-3.svg" alt="img" />
              <h6>flying speed <br /> 10m/s</h6>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-2">
            <div className="block-icon">
              <img src="img/icon-tab-4.svg" alt="img" />
              <h6>tank volume <br /> 5liters</h6>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-2">
            <div className="block-icon">
              <img src="img/icon-tab-5.svg" alt="img" />
              <h6>power backup <br /> 24hrs</h6>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-2">
            <div className="block-icon">
              <img src="img/icon-tab-6.svg" alt="img" />
              <h6>transmission <br /> 1000m</h6>
            </div>
          </div>
        </div>
      </div>
    </section>

 <section className="techspecs">
      <div className="container">
        <h2>Specifications</h2>
      </div>
    </section>
    <table id="customers">
      <tr>
        <td>Dimension</td>
        <td>775x775x445 mm (arm unfolded, without propellers)</td>
      </tr>
      <tr>
        <td>Maximum Takeoff weight (MTOW)</td>
        <td>15 kg</td>
      </tr>
      <tr>
        <td>Endurance</td>
        <td>7 min (with full payload)</td>
      </tr>
      <tr>
        <td>Maximum flying speed</td>
        <td>10 m/s</td>
      </tr>
      <tr>
        <td>Tank volume</td>
        <td>5 L</td>
      </tr>
      <tr>
        <td>Spray swath</td>
        <td>1.5 - 2 m</td>
      </tr>
      <tr>
        <td>Maximum Transmission Range</td>
        <td>1000 m</td>
      </tr>
      <tr>
        <td>Power Backup</td>
        <td>24 hrs</td>
      </tr>
      <tr>
        <td>Operating frequency</td>
        <td>2.4 GHz</td>
      </tr>
    </table>

 <section className="overview" >
      <div className="container" >
        <h2>overview</h2>
        <div className="overviewtitle">
          <p className="" style={{color:"#1da912",textAlign:"center"}}><img src='producticons/fordablestructures.svg'  style={{marginBottom:"10px",width:"8%"}}/><br />Foldable Structure </p>
          
        </div>
        <div className="overviewinfo">
          <p className="">MD-5Q drone comes with foldable structure which will be convenient for transportation, and consumes 50% less space. Motor arms can be folded horizontally right swing or in downward direction and this will not weak the original structure.
          </p>
        </div>
        <div className="overviewtitle">
          <p className="" style={{color:"#1da912",textAlign:"center"}}><img src='producticons/highly-efficient-spraying-systems.svg'  style={{marginBottom:"10px",width:"8%"}}/><br />High Efficient Spraying System</p>
        </div>
        <div className="overviewinfo">
          <p>MD-5Q series drone spraying system equips a 5L capacity of tank, efficient water pump rate is 2L/min with two nozzles. Spray swath is 1.5-2 m of agri drone which is based on the actual tests conducted on the fields. Scientific placement
            of
            nozzles can decrease pesticides drift in the air and economize spraying operations.
            <br />
            <br />
            The function of intelligent spraying flow can be controlled which is associated with the flight speed, the faster the speed, the greater the flow, Speed is lower than 0.5 m/s, pump will shut off independently. It ensures the uniformity of
            spray while also conserving agricultural inputs.
          </p>
        </div>
        <div className="overviewtitle">

          <p className="" style={{color:"#1da912",textAlign:"center"}}><img src='producticons/dronefeatures.svg'  style={{marginBottom:"10px",width:"8%"}}/><br />Drone Features</p>
        </div>
                
        <div className="overviewinfo">
        
        <p>• MD-5Q series drone made with high quality aerospace grade materials and carbon fibers
            <br />
            • MD-5Q series agricultural drone will fit in the trunk of a small car
            <br />
            • Better Spray Quality: MD-5Q series agricultural drone is equipped with ultra low volume technology and 80% of the water can be saved compared to traditional spraying method
            <br />
            • Obstacle RADAR: Drone equipped with RADAR can detect any obstacles within the sight of 120 deg angle
            <br />
            • Terrain RADAR: Drone equipped with RADAR can detect and automatically align the height upto 20 m.
          </p>
        </div>
        <div className="overviewtitle">
          <p className="" style={{color:"#1da912",textAlign:"center"}}><img src='producticons/safetyfeatures.svg'  style={{marginBottom:"10px",width:"8%"}}/><br />Safety Features</p>
        </div>
        <div className="overviewinfo">
          <p> If the medicine tank gets empty, low voltage and signal loss, drone will automatically come back to home location and land
            <br />
            • Has inbuilt detect and avoid technology
            <br />
            • Breakpoint intelligent record
          </p>
          
        </div>
      </div>
    </section>

  { //<section className=" container" >{
   //   //backgroundImage:"url(img/bg-4.jpg)"
   // }
   //       <div className="s-discount-program container" style={{backgroundImage: "url(background-img.png)",backgroundPosition:"center",
   //   backgroundRepeat:"no-repeat",
   //   backgroundSize:"cover",
   //   position: "relative",}}>
   //   <div>
   //         <h2 className="catlog-div" style={{color: "#fff",}}>know more about MD 5Q</h2>
   //         <button className="quiry-btn"onClick={() => setShow(true)}>Download Catalog</button></div><br />
   //       </div>
   //     </section>
  }
    
    <div className="container " style={{padding:"10px"}}>
    <section className="s-discount-program" style={{padding:"20px",backgroundImage: "url(background-img.png)",backgroundSize:"100% 100%",backgroundAttachment: "fixed",
   backgroundPosition:"center",
   backgroundRepeat: "no-repeat",
   backgroundSize: "cover"}}>{
  //backgroundImage:"url(img/bg-4.jpg)"
}
      <div className="container" style={{}}>
        <h2 className="catlog-div" style={{color: "#fff",}}>know more about MD 5Q</h2>
        <button className="quiry-btn"onClick={() => setShow(true)}>Download Catalog</button>
      </div>
    </section>
    </div>
  



<div className="container" style={{marginBottom:"1%",textAlign:"center",}}>
      <h2 style={{paddingTop:"0px",}} >Related proucts</h2>
      {/* <p className="slogan">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}

      <section className="serv-block" style={{padding:"5px 5%",width:"100%"}}> 
        
          <a href="/md5q" className="serv-block-item" style={{margin:"10px",width:"100%",height:"90%"}}>
            <span className="border-item"></span>
            <img className="lazy" src="img/img-1.png" alt="img" />
            <div className="serv-block-info">
              <h3>md 5q</h3>
              
              <span>read more</span>
            </div>
          </a>
          <a href="/md10q" className="serv-block-item" style={{margin:"10px",width:"100%",height:"90%"}}>
            <span className="border-item"></span>
            <img className="lazy" src="img/img-22.png" alt="img" />
            <div className="serv-block-info">
              <h3>md 10q</h3>
              
              <span>read more</span>
            </div>
          </a>
          </section>
        <section className="serv-block" style={{padding:"5px 5%",width:"100%"}}>
          <a href="/md10hv3" className="serv-block-item" style={{margin:"10px",width:"100%",height:"90%"}}>
            <span className="border-item"></span>
            <img className="lazy" src="img/img-33.png" alt="img" />
            <div className="serv-block-info">
              <h3>MD-10H V3 </h3>
              <span>read more</span>
            </div>
          </a>
          <a href="/md10h" className="serv-block-item" style={{margin:"10px",width:"100%",height:"90%"}}>
            <span className="border-item"></span>
            <img className="lazy" src="img/img-44.png" alt="img" />
            <div className="serv-block-info">
              <h3>md 10h</h3>
              <span>read more</span>
            </div>
          </a>
        </section>



       <section className="serv-block" style={{padding:"5px 5%",width:"100%"}}> 
        
         <a href="/ikshana" className="serv-block-item" style={{margin:"10px",width:"100%",height:"90%"}}>
            <span className="border-item"></span>
            <img className="lazy" src="img/img-ikshan.png" alt="img" />
            <div className="serv-block-info">
              <h3>ikshana</h3>
              
              <span>read more</span>
            </div>
          </a>
          <a href="/chotabheem" className="serv-block-item" style={{margin:"10px",width:"100%",height:"90%"}}>
            <span className="border-item"></span>
            <img className="lazy" src="img/chotabheem1.png" alt="img" />
            <div className="serv-block-info">
              <h3>ChotaBheem</h3>
              
              <span>read more</span>
            </div>
          </a>
          </section>
          
           <section className="serv-block" style={{padding:"5px 5%",width:"100%"}}> 
          <a href="/fogstar" className="serv-block-item" style={{margin:"10px",width:"100%",height:"90%"}}>
            <span className="border-item"></span>
            <img className="lazy" src="img/fogstar.png" alt="img" />
            <div className="serv-block-info">
              <h3>FogStar</h3>
              <span>read more</span>
            </div>
          </a>
          <a href="/md16hv2" className="serv-block-item" style={{margin:"10px",width:"100%",height:"90%"}}>
            <span className="border-item"></span>
            <img className="lazy" src="img/MD16H_V2.png" alt="img" />
            <div className="serv-block-info">
              <h3>MD-16H V2 </h3>
              <span>read more</span>
            </div>
          </a>
        </section>

      </div>




<section className="s-contacts s-main-contacts" >
      <div className="container s-anim">
        <h2 style={{paddingTop:"0px"}}>Contact us</h2>
        <form id='contactform' name="contactform" onSubmit={sendEnquiryDetails}>
          <ul className="form-cover" style={{padding:"0px"}}>
            <li className="inp-name"><input  type="text" name="yourname" placeholder="Name" style={{color:"black"}} pattern="^[a-zA-z]+([\s][a-zA-Z]+)*$" required title="Please Enter only Alphabets without any numbers and special characters" /></li>
            <li className="inp-phone"><input  type="tel" name="yourphone" placeholder="Phone"  style={{color:"black"}} pattern="[0-9]{10}"  required title="Please Enter Valid Contact Number" /></li>
            <li className="inp-email"> <input type="email" name="youremail" placeholder="Email" style={{color:"black"}}required /></li>
            <li className="inp-text"><textarea  name="yourtext" placeholder="Message" style={{color:"black"}} required></textarea></li>
          </ul>
          <div className="checkbox-wrap">
            <div className="checkbox-cover">
              <input type="checkbox" required/>
              <p style={{color: "#000"}}>I agree to use this information with the website.</p>
            </div>
          </div>
          <div className="btn-form-cover">
            <button className="quiry-btn">Submit</button>
          </div>
        </form>
        <div id="message"></div>
      </div>
    </section>
<section >
        <Footer />  
        </section>
<Modal
      show={show} onHide={handleClose}
      style={{paddingTop:'5px',maxWidth:"300px",position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",}}
    > 
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Enter  Details
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        
        
       <form  className=""  name="contactform" onSubmit={downloadCatlog}>
            <label>Full Name</label>
            <input  type="text" name="name" placeholder="Name" style={{color:"black",padding:"5px"}} pattern="^[a-zA-z]+([\s][a-zA-Z]+)*$" required title="Please Enter only Alphabets without any numbers and special characters"/>         
            <lable>Contact Number</lable><br/>
            <input type="tel" name="phone" placeholder="Phone"  style={{color:"black",padding:"5px"}} pattern="[0-9]{10}"  required title="Please Enter Valid Contact Number"/>
            <lable>Email</lable><br/>
            <input  type="email" name="email" placeholder="Email" style={{color:"black",padding:"5px"}} required />
            <button className="btn"  style={{marginTop:"10px",background:"#1da912",color:"#fff"}}>Download</button>
        </form>
                         
      </Modal.Body>
         
    </Modal>
 <ToastContainer />


<a
        href="https://wa.me/916362900041"
        target="_blank"
        rel="noopener noreferrer"
                  style={{ position: "fixed", bottom: 90, right: 10, zIndex: 1000 }}

      >
                  <img className="whatsapp-icon" src="img/whatsapp.png" width="40px" />

      </a>

</div>
  );
}

export default MD5q;




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

function MD10HV3() {
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
                  //alert("Successfully")
                  toast.success("Successfully Enquiry Submitted.",{position: "top-center"});
                      //console.log(objectOb)

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
            productname:"MD16P",

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
                alink.download = 'MD16p.pdf';
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
// const getPdf=async()=>{
//   await axios
//                 .get('http://localhost:4003/catlogdownload/download', {
    
//     responseType: "blob",
    
//   })
                
//                 .then((res) => {
//                   console.log(res.data);
//         //           const link = document.createElement('a');
//         // link.href = "data:application/pdf," + res.data;
//         // link.download = 'file.pdf';
//         // link.click();
//                    const file = new Blob(
//                        [res.data], 
//                        {type: 'application/pdf'});
//                   //console.log(file)
//                   const fileURL = URL.createObjectURL(file);
//                   //window.open(fileURL)
//                   console.log(fileURL)
//                   let alink = document.createElement('a');
//                   //console.log(alink)
//                 alink.href = fileURL;
//                 alink.download = fileURL;
//                 alink.click();
//                   toast.success("Successfully Enquiry Submitted.",{position: "top-center"});
//                   setShow(false);
//                 })
//                  //getPdf();
//                 //})
//                 .catch((error) => {
//                   //console.log("err",error.response.data.replace("enquiries validation failed:", "").split(",",20));
//                   console.log(error.response);
//                   //setErr(error.response.data.replace("contact validation failed:","").split(",",50));
//                   //const Err = error.response.data.replace("contact validation failed:","").replace("contactnumber","Contact Number");
//                          //console.log(Err)
//                   //toast.error({position: "top-center",});

//                  })
//                 .finally(()=>{
                  
//                 })


          

// }

  return (
<div>                           
 <div style={{marginTop:"0px"}}><ResponsiveAppBar /> </div>   

 

  <section className="" style={{margin:"0px",padding:"0px auto"}}>
      <div className="container" style={{marginTop:"0px",padding:"0px auto"}}>
        <h2>MD-10H V3</h2>
        <div className="productinfo" style={{marginBottom:"20px"}}>
          <h6 className="des" style={{color: "#1da912",textAlign:"center",fontWeight:"bold"}}>15 Minute Endurance | 5 Kilometere Range | 25 Kg MTOW</h6>
        </div>
        <p className="productinfo-p" style={{textAlign:"justify"}} >MD-10HV3 series agricultural drone is a Hex-copter drone manufactured indigenously with high strength carbon fibers, and aerospace grade aluminum materials. MD-10HV3 series agriculture drone, specially designed for agricultural spraying, integrated advanced depth customization flight controller, efficient spray system, portable folding fuselage and simple professional remote control to provide users with efficient, safe and convenient plant protection service.</p>        
        
        <div><br />
        <img src="img/madein_india.png" alt="img" width="60%"/>
        <br /><br />
        <p><b>“This product is proudly made in India”</b></p>
        </div>

        <div className="row we-offer-cover">
          <div className="col-12 col-sm-6 we-offer-item">
            <div className="offer-item-img">
              <img src="img/MD10HV3-img-1.jpg" alt="img"  loading="lazy"/>
            </div>
          </div>
          <div className="col-12 col-sm-6 we-offer-item">
            <div className="offer-item-img">
              <img src="img/MD10HV3-img-2.jpg" alt="img"  loading="lazy"/>
            </div>
          </div>
        </div>
        
        <div className="row we-offer-bottom">
          <div className="col-6 col-md-4 col-xl-2">
            <div className="block-icon">
              <img src="img/icon-tab-111.svg" alt="img" />
              <h6>takeoff Weight <br /> 25kg</h6>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-2">
            <div className="block-icon">
              <img src="img/icon-tab-2.svg" alt="img" />
              <h6>Endurance <br /> 15minutes</h6>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-2">
            <div className="block-icon">
              <img src="img/icon-tab-3.svg" alt="img" />
              <h6>flyingspeed <br /> 6m/s</h6>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-2">
            <div className="block-icon">
              <img src="img/icon-tab-4.svg" alt="img" />
              <h6>tank volume <br /> 10liters</h6>
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
              <h6>transmission <br /> 5000m</h6>
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
    <table id="customers" >
      <tr>
        <td>Dimension</td>
        <td>1335×1175×570 mm (arm unfolded, without propellers)</td>
      </tr>

      <tr >
      <td colspan="2" style={{textAlign:"center"}}><b>Drone Characteristics</b></td>
      </tr>

      <tr>
        <td>Maximum Takeoff weight (MTOW)</td>
        <td>25 kg</td>
      </tr>
      <tr>
        <td>Endurance</td>
        <td>15 min</td>
      </tr>
      <tr>
        <td>Maximum flying speed</td>
        <td>6 m/s</td>
      </tr>
      {/* <tr>
        <td>Weight</td>
        <td>7.7 kg</td>
      </tr>
      <tr>
        <td>Power</td>
        <td>5 kw</td>
      </tr> */}
      
      <tr >
      <td colspan="2" style={{textAlign:"center"}}><b>Spray Characteristics</b></td>
      </tr>

      <tr>
        <td>Pump Discharge Rate</td>
        <td>5 L/h</td>
      </tr>
      <tr>
        <td>Tank volume</td>
        <td>10 L</td>
      </tr>
      <tr>
        <td>Spray swath</td>
        <td>4 – 5 m</td>
      </tr>
      {/* <tr>
        <td>Pump</td>
        <td>7 L/min</td>
      </tr> */}
      <tr >
      <td colspan="2" style={{textAlign:"center"}}><b>Transmitter Characteristics</b></td>
      </tr>
      <tr>
        <td>Maximum Transmission Range</td>
        <td>5000 m</td>
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

 <section className="overview">
      <div className="container">
        <h2>overview</h2>

        
        <div className="overviewtitle">

          <p className="" style={{color:"#1da912",textAlign:"center"}}>MD-10H V3 drone is available in different colors: Pearl White and Canary Yellow</p>
        </div>
        <div className="overviewinfo" style={{textAlign:"center"}}>
          {/* <p>Hybrid power system does not rely on external startup equipment and engine will be ignited very quickly. Engine vibration is reduced with the scientific placements of the rubber dampeners and temperature of the engine is controlled by the heat fins, due to this engine performance is increased. Hybrid power system requires a backup batteries with anti spark connectors and those batteries will be charged in the mid air. Fuel tank capacity of 3L is installed in the drone.</p>         */}
          <img src="img/md10hv3color.jpg" alt="img" width="80%" loading="lazy"/>
          
          </div>

          <div className="overviewtitle">
          <p className="" style={{color:"#1da912",textAlign:"center"}}><img src='producticons/fordablestructures.svg'  style={{marginBottom:"10px",width:"8%"}}/><br />Foldable Structure </p>
          
        </div>
        <div className="overviewinfo">
          <p className="">Arms of the MD-10H V3 agricultural spraying drone is made up of CFRP and those clamps are made up of Aluminium – 7075, which will hold the arms rigid. The arms of the drone can be folded sideways thereby avoiding the swing.
          </p>
        </div>
        <div className="overviewtitle">
          <p className="" style={{color:"#1da912",textAlign:"center"}}><br />Canopy Design </p>
          
        </div>
        <div className="overviewinfo">
          <p className="">MD-10HV3 series canopy design that is made up of Nylon material. Canopy is designed aerodynamically shape for better performance. It houses all the electronics inside. 
          </p>
        </div>
        <div className="overviewtitle">
          <p className="" style={{color:"#1da912",textAlign:"center"}}><img src='producticons/highly-efficient-spraying-systems.svg'  style={{marginBottom:"10px",width:"8%"}}/><br />High Efficient Spraying System</p>
        </div>
        <div className="overviewinfo">
          <p>MD-10HV3 series drone spraying system equips a 10L capacity of wave-proof tank, efficient water pump, four nozzles. Based on the actual tests, spray width is 4-5 m and operating efficiency is 5L/min. Scientific placement of nozzles can decrease pesticides drift in the air and economize spraying operations.
            <br />
            <br />
            The function of intelligent spraying flow can be controlled which is associated with the flight speed: the faster the speed, the greater the flow; Speed is lower than 0.5 m/s, pump will shut off independently. It not only ensures the uniformity of spray, but also save agricultural inputs.
          </p>
        </div>
        <div className="overviewtitle">

          <p className="" style={{color:"#1da912",textAlign:"center"}}><img src='producticons/dronefeatures.svg'  style={{marginBottom:"10px",width:"8%"}}/><br />Drone Features</p>
        </div>
                
        <div className="overviewinfo">
        
        <p>• MD-10HV3 series drone body is made up of high-strength and aerospace grade aluminum materials.
            <br />
            •	MD-10HV3 series canopy design that is made up of Nylon material.
            <br />
            •	Multi Operation Mode: Drone can be flown in autonomous, semi-autonomous and manual mode.
            <br />
            •	Camera Mount Design: Camera is fixed to the front side plate from inside only camera and strobe light is visible. 
            <br />
            •	Better Spray Quality: MD-10HV3 series agricultural drone is equipped with ultra-low volume technology and 80% of the water can be saved compared to traditional spraying method.
            <br />
            • Obstacle RADAR: Drone equipped with RADAR can detect any obstacles within the sight of 120 deg angle.
            <br />
            • Terrain RADAR: Drone equipped with RADAR can detect and automatically align the height upto 20 m.
          </p>
        </div>
        <div className="overviewtitle">
          <p className="" style={{color:"#1da912",textAlign:"center"}}><img src='producticons/safetyfeatures.svg'  style={{marginBottom:"10px",width:"8%"}}/><br />Safety Features</p>
        </div>
        <div className="overviewinfo">
          <p>•	If the medicine tank gets empty, low voltage and signal loss, drone will automatically come back to home location and land.
            <br />
            • Has inbuilt detect and avoid technology
            <br />
            • Breakpoint intelligent record
          </p>
          
        </div>
      </div>
    </section>

   {/* {<div className="container" style={{padding:"10px"}}>
    <section className="s-discount-program mask" style={{padding:"20px",backgroundImage: "url(background-img.png)",backgroundSize:"100% 100%",backgroundAttachment: "fixed",
   backgroundPosition:"center",
   backgroundRepeat: "no-repeat",
   backgroundSize: "cover"}}>{
  //backgroundImage:"url(img/bg-4.jpg)"
}
      <div className="container">
        <h2 className="catlog-div" style={{color: "#fff",}}>know more about MD 16P</h2>
        <button className="quiry-btn"onClick={() => setShow(true)}>Download Catalog</button>
      </div>
    </section>
    </div>} */}
  

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
              <p style={{color: "#000"}}>I agree to use this information with the website..</p>
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

export default MD10HV3;




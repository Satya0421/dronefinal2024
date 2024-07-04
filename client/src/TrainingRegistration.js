import React,{useState,useEffect,useCallback} from 'react';
import './App.css';
import './bootstrap-grid.css';
import './critical.css';
import './font-awesome.min.css';
import './index.css';
import './slick.min.css';
import './style.css';
import ResponsiveAppBar from './AppBar'; 
import Footer from './Footer';

import Button from 'react-bootstrap/Button';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css'; // import first
import { ToastContainer, toast } from 'react-toastify'; // then this
import { useNavigate } from 'react-router-dom';
import API from './Api';
import {makeStyles} from "@material-ui/styles";
import { ClassNames } from '@emotion/react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Form from 'react-bootstrap/Form';
import FormHelperText from '@mui/material/FormHelperText';
import Modal from 'react-bootstrap/Modal';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CircularStaticLoader from './Admin/CircularLoaders';
import Loaders from './loader/preloader';

const useStyles = makeStyles(theme => ({
    con:{
        backgroundColor: '#fff !important',
        width:"100%",
        '&:hover': {
      backgroundColor: 'green !important',
      color: '#fff'
    },
        '&:checked':{
            backgroundColor: 'green !important',
      color: '#fff'
        }
    },
    select: {
      backgroundColor:"#fff",
      marginBottom:"0px",
      borderRadius:"0px",
      '& > fieldset': { border: 'none',marginBottom:"0px" },
      "& .MuiSelect-select": {
      padding: "10px",
      boxShadow:"0px"
    }
  },
   }));

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}


function TrainingRegistration() {
    const classes = useStyles();
 const [file,setfile]=useState([])
 const [item, setItem] = useState(null);

 const [email,setEmail] = useState();
 const [name,setName] = useState();
 const [traininglevel, setTraininglevel] =useState();
 const [num,setNum] = useState();
 const [passportnumber,setPassportnumber] = useState();
 const [qualification, setQualification] =useState();
 const [address,setAddress]=useState()
 const [passportcopy,setPassportCopy]= useState();

 const [coursefee,setCourseFees] = useState();

 const [showNote,setShowNote] = useState(true);
 const [indian,setIndian] = useState(false);
 const [eligibility,setEligibility] = useState(false);

 const [show, setShow] = useState(false);
 const handleClose = () => {setShow(false)};
 const handleShow = () => setShow(true);
 const [err,setError] = useState();

 const [objectids,setobjectids] = useState();
 const [registeredEmail,setregisteredEmail] = useState();

 const [loading, setLoading] = useState(false);

useEffect(() => {
    
      window.scrollTo(0, 0);
      
      
   
  }, []);

const encodeImageFileAsURL=(e)=> {
    e.preventDefault();
    
     let file = e.target.files[0];
    let reader = new FileReader();
    
    reader.onloadend = function() {
        ////console.log(typeof reader.result)
        setItem(reader.result);

    }
    reader.readAsDataURL(file);
    //console.log(item)
}
const RegisteredDetails=async(e)=>{
  e.preventDefault(0);
  let Axios;
  let objectOb={
    name:e.target.name.value,
    email:e.target.email.value ,
    contactnumber:e.target.phone.value ,
    address:e.target.address.value,
    qualification:e.target.qualification.value ,
    passportnumber:e.target.passportNumber.value.toUpperCase(),
    traininglevel:traininglevel,
    passportcopy:item,
   
    // date:new Date().toLocaleDateString(),
    // time:new Date().toLocaleTimeString(),
  }
 // console.log(e.target.file1.value);
setfile([item])
//console.log(item)
  console.log(objectOb);
  // alert("got it");
  //console.log(registeredEmail);
  //console.log(email)
  setLoading(true);
if(registeredEmail==email){
            //alert(objectids)     
        await axios.put(API+`/trainingregistration/registeredOne/${objectids}`, objectOb)
                .then((response) => {
                  //seteditIds(response.data._id);
                  toast.success("Successfully Saved.",{position: "top-center",});
                  console.log(response.data);
                  setfile([response.data.passportcopy]);
                    e.target.name.value = "" ;
                    e.target.email.value = "" ;
                    e.target.phone.value = "" ;
                    e.target.address.value= "" ;
                    e.target.qualification.value = "" ;
                    e.target.passportNumber.value= "" ;
                    e.target.training_level.value= "" ;
                    e.target.specialization.value= "" ;
                    e.target.file1.value = "";

                  // setEmail("");
                  //setName("");
                  //setNum("");
                  //setAddress("");
                  //setQualification("");
                 // setPassportnumber("");
                  //setTraininglevel('');
                 // setPassportCopy("");
                   //setobjectids(response.data._id);
                    //alert("id",response.data._id)
                    //setLoading(true); 
                  handlePayment(objectids);
                })
                .catch((error) => {
                    setLoading(false);
                  ////console.log(error.response.data.replace("TrainingRegistration validation failed:", "").split("`",20));
                  console.log(error.response)
                  //setError(error.response.data.replace("TrainingRegistration validation failed:", "").split("`",20));
                  toast.error("Please Fill All the fields",{position:"top-center"})
                 })
                .finally(()=>{
                  
                })
     
    } 
    else{
       
                await axios.post(API+'/trainingregistration', objectOb)
                .then((response) => {
                  //seteditIds(response.data._id);
                  toast.success("Successfully Saved.",{position: "top-center",});
                  //console.log(response.data);
                  setfile([response.data.passportcopy]);
                    e.target.name.value = "" ;
                    e.target.email.value = "" ;
                    e.target.phone.value = "" ;
                    e.target.address.value= "" ;
                    e.target.qualification.value = "" ;
                    e.target.passportNumber.value= "" ;
                    e.target.training_level.value= "" ;
                    e.target.specialization.value= "" ;
                    e.target.file1.value = "";
                  // setEmail("");
                  // setName("");
                  // setNum("");
                  // setAddress("");
                  // setQualification("");
                  // setPassportnumber("");
                  // //setTraininglevel('');
                  // setPassportCopy("");
                   //seteditIds(response.data._id);
                   //alert(response.data._id)
                    //setLoading(true);
                   handlePayment(response.data._id);
                })
                .catch((error) => {
                    setLoading(false);
                  ////console.log(error.response.data.replace("TrainingRegistration validation failed:", "").split("`",20));
                 console.log(error.response)
                  //setError(error.response.data.replace("TrainingRegistration validation failed:", "").split("`",20));
                  toast.error("Please Fill All the fields",{position:"top-center"})
                 })
                .finally(()=>{
                  
                })
       
    }
  
}


const GetRegisteredDetails=(email)=>{
   //e.preventDefault();
  //console (e.target.email.value);
  axios
                .get(API+`/trainingregistration/${email}`)
                .then((response) => {
                    let data = response.data;
                    ////console.log(data[0].email)
                    //localStorage.setItem("registered", JSON.stringify(data[0].email));
                  setregisteredEmail(data[0].email);
                  //alert(registeredEmail)
                  //console.log(data[0]);
                  ////console.log(data[0]._id)
                  setobjectids(data[0]._id);
                  setName(data[0].name);
                  setNum(data[0].contactnumber);
                  setAddress(data[0].address);
                  setQualification(data[0].qualification);
                  setPassportnumber(data[0].passportnumber);
                  setTraininglevel(data[0].traininglevel);
                  setPassportCopy(data[0].passportNumber);

                  
                })
                .catch((error) => {
                  ////console.log("err",error.response.data.replace("enquiries validation failed:", "error").split(",",20));
                  ////console.log(error.response)
                  
                 })
                .finally(()=>{
                  
                })
}

const initPayment = (data,editids) => {
    ////console.log(data)
    //setLoading(false);
        const options = {
            key: "rzp_live_tqUVg8MSt3Qsni", //rzp_test_gKya8BaqHgWeFK
            amount:data.amount,
            currency: data.currency,
            order_id: data.id,
            handler: async (response) => {
                try {

                   // const verifyUrl = "http://localhost:8080/api/payment/verify";
                    const { data } = await axios.post(API+`/razorpay/verification`, response);
                   //alert("successfully paid");
                    handlePayment1(response.razorpay_payment_id,editids);
        //             //console.log(data);
        //             //console.log("heelo"+response.razorpay_payment_id)
        //             alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature)
                } catch (error) {
                    alert("failed")
                    ////console.log(error);
                }
            },
            "prefill": {
        "contact": num,
        "email": email,
      },
            theme: {
                color: "#1da912",
            },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    const handlePayment = async (editids) => {
        try {
           
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?')
            return
        } else
            {
                        //const orderUrl = "http://localhost:8080/api/payment/orders";
               
                        const { data } = await axios.post(API+`/razorpay/payment/${coursefee}`, );//49000
                        //console.log(data);
                        //console.log(editids)
                        // seteditIds(editids)
                         setLoading(false);
                        initPayment(data,editids);}
        } catch (error) {
            ////console.log(error);
        }
    };


const handlePayment1 = async (response,editids) => {
    //alert(editids)
    const Id = editids;
    let objectOb={
        payment_id:response,
        payment_Date:new Date().toLocaleDateString(),
        payment_Time:new Date().toLocaleTimeString(),
        
    }
    ////console.log(objectOb)

        try {
            const orderUrl = API+`/trainingregistration/${Id}`;
            ////console.log(orderUrl)
            await axios.patch(API+`/trainingregistration/${Id}`,objectOb)
            .then((res)=>{
                ////console.log(res.data)
                toast.success("Successfully Registered.",{position: "top-center",});
                setIndian(false);
                setEligibility(false);
            })
            
            
        } catch (error) {
            ////console.log(error);
        }
    };


  return (
    <div className="">
    <ResponsiveAppBar/>


<div className="container">
             
           
{indian & eligibility?
 
                loading?<div><Loaders /></div>:<div className="row py-4 justify-content-center">
                                    <div className="col-lg-11">
                                        <div className="featured-box featured-box-primary text-left mt-0" style={{backgroundColor: "gainsboro",paddingBottom:"10px"}}>
                                            <div className="box-content">
                
                                                <div className="overflow-hidden mb-1">
                                                    <h2 className="font-weight-normal text-7 mt-2 mb-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="200"><strong className="font-weight-extra-bold">Register For Training</strong></h2>
                                                </div>
                
                                                <form id="contactForm" className="contact-form" onSubmit={RegisteredDetails}  encType="multipart/form-data" style={{margin:"20px",textAlign:"justify",color:"black",padding:"10px"}}>
                                                    
                
                                                    <div className="form-row row">
                                                    <div className="form-group col-sm-4 col-md-4 col-lg-4">
                                                            <label className="required font-weight-bold text-dark text-2">Email Address</label>
                                                            <input type="email"    maxLength="100" className="form-control" name="email" id="email" required style={{color:"black",padding:"10px",backgroundColor:"#fff"}}  onChange={(e)=>{GetRegisteredDetails(e.target.value);setEmail(e.target.value)}} />
                                                        </div>
                                                      <div className="form-group col-sm-4 col-md-4 col-lg-4">
                                                            <label className="required font-weight-bold text-dark text-2" style={{}}>Full Name</label>
                                                            <input type="text"   maxLength="100" className="form-control" name="name" id="name" pattern="^[a-zA-z]+([\s][a-zA-Z]+)*$" required title="Please Enter only Alphabets without any numbers and special characters" defaultValue={name} style={{color:"black",padding:"10px",backgroundColor:"#fff"}} />
                                                        </div>
                                                        
                                                        <div className="form-group  col-sm-4 col-md-4 col-lg-4">
                                                            <label className="required font-weight-bold text-dark text-2">Phone</label>
                                                            <input type="tel"   maxLength="10"  className="form-control" name="phone" id="phone" pattern="[0-9]{10}"  required title="Please Enter Valid Number" defaultValue={num} style={{color:"black",padding:"10px",backgroundColor:"#fff"}} onChange={(e)=>{setNum(e.target.value)}}/>
                                                        </div>
                                                    </div>
                                                    <div className="form-row row">
                                                        <div className="form-group col-12">
                                                            <label className="required font-weight-bold text-dark text-2">Address</label>
                                                            <textarea maxLength="5000" rows="8" className="form-control" name="address" id="address" required defaultValue={address} style={{color:"black",padding:"10px",backgroundColor:"#fff"}}></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="form-row row">
                                                        <div className="form-group col-sm-6 col-md-6 col-lg-6">
                                                            <label className="required font-weight-bold text-dark text-2">Highest Qualification</label>
                                                            <input type="text"   maxLength="100" className="form-control" name="qualification" id="qualification" required defaultValue={qualification} style={{color:"black",padding:"10px",backgroundColor:"#fff"}}/>
                                                        </div>
                                                       <div className="form-group col-sm-6 col-md-6 col-lg-6">
                                                            <label className="required font-weight-bold text-dark text-2">Specialization</label>
                                                            <input type="text"   maxLength="100" className="form-control" name="specialization" id="specialization"   style={{color:"black",padding:"10px",backgroundColor:"#fff"}}/>
                                                        </div>
                                                    </div>
                                                    <div className="form-row row">
                                                        <div className="form-group col-sm-6 col-md-6 col-lg-6">
                                                            <label className="required font-weight-bold text-dark text-2">Passport Number</label>
                                                            <input type="text"  maxLength="100" className="form-control" name="passportNumber" id="passportnumber"  required defaultValue={passportnumber} style={{color:"black",padding:"10px",backgroundColor:"#fff",textTransform:"uppercase"}}/>
                                                        </div>
                                                         <div className="form-group col-sm-6 col-md-6 col-lg-6">
                                                            <label className="required font-weight-bold text-dark text-2">Upload Your Passport Copy</label><br />
                                                            
                                                              <input type="file" id ="inputFileToLoad" className="form-control" name="file1" defaultValue={passportcopy} onInput={encodeImageFileAsURL} required/>
                                                              <a href="https://egazette.nic.in/WriteReadData/2021/229221.pdf" className="" target="_blank" style={{textDecoration:"none",fontStyle:"italic"}}><h6 className="passportmandatory"><b style={{color:"black"}}>Indian Passport is mandatory as per Drone Rules 2021</b></h6></a>
                                                              
                                                        </div>
                                                           
                                                    </div>
                 {
                
                //                                     <div className="form-row row">
                //                                         <div className="form-group col">
                //                                             <label className="required font-weight-bold text-dark text-2">Training Level</label>
                //                                             <select className="form-control selector"  id="training_level" style={{backgroundColor:"#fff",padding:"0px"}} required >
                //                                                 <option disabled selected>Select a Training Level</option>
                //                                                 <option defaultValue="Multirotor Drone Pilot Course" className={classes.con}>Multirotor Drone Pilot Course </option>
                //                                                 <option defaultValue="Agriculture Drone Pilot Course" className="training-level-option" style={{visibility:"hidden"}}> Agriculture drone pilot course </option>
                //                                             </select>
                //                                         </div>
                //                                     </div>
                                                }
                
                                                     <div className="form-row row">
                                                        <div className="form-group col">
                                                        <label className="required font-weight-bold text-dark text-2">Training Course</label>
                                                    <Select
                                                        className={classes.select} style={{backgroundColor:"#fff",padding:"0px",height:"50px",border:"none",borderRadius:"0px",width:"inherit"}} 
                                                        name="training_level"
                                                        value={traininglevel}
                                                        onChange={e => {setTraininglevel(e.target.value)}}
                                                        displayEmpty
                                                        required
                                                            >
                                                            <MenuItem disabled><em>Select a Training Course</em></MenuItem>
                                                            <MenuItem value="Multirotor Drone Pilot Course" className={classes.con} onClick={e =>{setCourseFees(49000)}}>Multirotor Drone Pilot Course </MenuItem>
                                                            <MenuItem value="Multirotor Drone Engineering Course" className={classes.con} onClick={e =>{setCourseFees(41300)}}>Multirotor Drone Engineering Course </MenuItem>
                                                            <MenuItem value="Multirotor Drone Technician Course" className={classes.con} onClick={e =>{setCourseFees(38940)}}>Multirotor Drone Technician Course </MenuItem>
                                                            <MenuItem value="Agricultural Drone Pilot Course" className={classes.con} onClick={e =>{setCourseFees(76700)}}>Agricultural Drone Pilot Course </MenuItem>
                                                    </Select></div>
                                                    </div>
                                                      <br />
                                                    <div className="form-row row">
                                                        <div className="form-group col">
                                                            <button type="submit" name="submit" className="quiry-btn" value="Book Now" data-loading-text="Loading...">Save And Continue</button>
                                                        </div>
                                                        
                                                    </div>
                                                </form>
                
                                                 
                                                  
                                              
                
                                                <div className="mt-4" style={{textAlign:"justify",margin:"20px"}}>
                                                    <h5 className="required  text-dark text-1">Eligibility :</h5>
                                                    <ul style={{listStyleType: "decimal"}} className="productinfo-p">
                                                        <li className="text-dark">Age should be 18 -65 Years </li>
                                                        <li className="text-dark">Should have completed 10th from recognized university </li>
                                                    </ul>
                                                </div>
                                                <div className="" style={{textAlign:"justify",margin:"20px"}}>
                                                                                    <h5 className="required  text-dark text-1">Accommodation :</h5>
                                                                                 <ul style={{listStyleType: "decimal"}} className="productinfo-p">
                                                                                        <li className="text-dark">Accommodation available (350 INR/head) <a href="#" className=""  data-bs-toggle="modal" data-bs-target="#viewroom" style={{textDecoration:"none",color:"green",fontStyle:"italic"}}><b><i>View Rooms</i></b></a></li>
                                                                                        <li className="text-dark">Any valid government ID card is compulsory (ex: aadhar, voter ID, passport etc.)</li>
                                                                                    </ul>
                                                                                </div>
                
                                            </div>
                
                                        </div>
                                    </div>
                                </div>
                :
                <div className="row py-4 justify-content-center">
            <div className="col-lg-11" style={{backgroundColor: "gainsboro",paddingBottom:"10px"}}>
            <div className="container">
        <h2>training registration</h2>
        

        <div className="overviewtitle">
          <h5 style={{color: '#1da912', align: 'center'}}>Eligibility : </h5 >
          
        </div>
<div className="" style={{textAlign:"justify"}}>
<ul className="productinfo-p" style={{listStyleType: "decimal"}}>
                                        <li className="text-dark">Age should be 18 -65 Years </li>
                                        <li className="text-dark">Should have completed 10th from recognized university </li>
                                        <li className="text-dark"><b>Indian Passport is mandatory as per Drone Rules 2021</b><br />
                                        <a href="https://egazette.nic.in/WriteReadData/2021/229221.pdf" className="" target="_blank" style={{textDecoration:"none",color:"green",fontStyle:"italic"}}>(https://egazette.nic.in/WriteReadData/2021/229221.pdf)</a>
                                        
                                        </li>
 </ul>         
</div>        


<div className="overviewtitle">
          <h5 style={{color: '#1da912', align: 'center'}}>Training Queries</h5 >
          
        </div>
<div className="" style={{textAlign:"justify"}}>
<ul className="productinfo-p" style={{listStyleType: "decimal"}}>
                                        <li className="text-dark">Are you a citizen of India?</li>
                                        <input type="radio"  name="indiancitizen"  value="Yes" onClick={(e)=>{setIndian(true)}}/>
                                         <label >Yes</label><br />
                                         <input type="radio"  name="indiancitizen" value="No" onClick={(e)=>{setIndian(false);setShow(true)}}/>
                                         <label >No</label><br />
                                        <li className="text-dark">Do you have the <b>Indian Passport</b>?</li>
                                        <input type="radio"  name="eligibility" value="Yes" onClick={(e)=>{setEligibility(true)}}/>
                                         <label >Yes</label><br />
                                         <input type="radio"  name="eligibility" value="No" onClick={(e)=>{setEligibility(false);setShow(true)}}/>
                                         <label >No</label><br />

 </ul>         
</div>     
                                                  
        
             </div>

             </div>
            </div>



}




               
                


            </div>
        

 <div id="dummy">
    </div>

   { loading?<></>:
        <Footer />
   }


     <div className="modal fade" id="viewroom" tabindex="-1" aria-labelledby="" aria-hidden="true" style={{minWidth:"60%",backgroundColor:"hsl(0, 0%, 0%, 0)",borderRadius:"0px"}}>
  <div className="modal-dialog modal-dialog-scrollable" style={{maxWidth:"400px",minWidth:"100px",borderRadius:"0px"}}>//#efefef
    <div className="modal-content" style={{borderRadius:"0px"}}>
      <div className="modal-header" style={{borderRadius:"0px"}}>
        <h4 className="heading-main">Rooms</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body main">
                
                <img src='img/room.png' height = "300px" width="100%" alt="" />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{background:"#1da912",borderRadius:"0px",border:"none"}}>Close</button>
        
      </div>
    </div>
  </div>
</div>




<Modal
      show={show} onHide={handleClose}
      style={{paddingTop:'5px'}}
    > 
     
      <Modal.Body >
        
        <Card sx={{ maxWidth: 500,border:"solid green 2px" }} id="card-container" >
     
    
      <CardContent sx={{ maxWidth: 500}}>
      <div style={{color:"black",textAlign:"center"}}>
        Please contact Admin for further Details...
        </div>
        <p style={{color:"black",textAlign:"center"}}>
        <b>training@multiplexdrone.com</b>
        <br />
        <b>6362900034</b>(WhatsApp)
        </p>

      </CardContent>
              
<ToastContainer />
   </Card>
         
                         
      </Modal.Body>
         
    </Modal>


<ToastContainer /> 

      </div>
   
  );
}

export default TrainingRegistration;







        //            <img className="lazy" src="img/img-2.jpg" alt="img" />

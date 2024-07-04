import * as React from 'react';
import {useState,useEffect,useRef} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
 import axios from "axios";
 import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer, toast } from 'react-toastify';
import AdminAppbar from './AdminAppbar' ;
import CircularStatic from './CircularLoaders';
import Modal from 'react-bootstrap/Modal';
import API from '../Api';


const departments = [
      "Accounts",
      "Admin",
      "Marketing",
      "Human Resources",
      "Purchase",
      "Others",
    ];


const states = [
      { code: "AN", name: "Andaman and Nicobar Islands" },
      { code: "AP", name: "Andhra Pradesh" },
      { code: "AR", name: "Arunachal Pradesh" },
      { code: "AS", name: "Assam" },
      { code: "BR", name: "Bihar" },
      { code: "CG", name: "Chandigarh" },
      { code: "CH", name: "Chhattisgarh" },
      { code: "DH", name: "Dadra and Nagar Haveli" },
      { code: "DD", name: "Daman and Diu" },
      { code: "DL", name: "Delhi" },
      { code: "GA", name: "Goa" },
      { code: "GJ", name: "Gujarat" },
      { code: "HR", name: "Haryana" },
      { code: "HP", name: "Himachal Pradesh" },
      { code: "JK", name: "Jammu and Kashmir" },
      { code: "JH", name: "Jharkhand" },
      { code: "KA", name: "Karnataka" },
      { code: "KL", name: "Kerala" },
      { code: "LD", name: "Lakshadweep" },
      { code: "MP", name: "Madhya Pradesh" },
      { code: "MH", name: "Maharashtra" },
      { code: "MN", name: "Manipur" },
      { code: "ML", name: "Meghalaya" },
      { code: "MZ", name: "Mizoram" },
      { code: "NL", name: "Nagaland" },
      { code: "OR", name: "Odisha" },
      { code: "PY", name: "Puducherry" },
      { code: "PB", name: "Punjab" },
      { code: "RJ", name: "Rajasthan" },
      { code: "SK", name: "Sikkim" },
      { code: "TN", name: "Tamil Nadu" },
      { code: "TS", name: "Telangana" },
      { code: "TR", name: "Tripura" },
      { code: "UK", name: "Uttarakhand" },
      { code: "UP", name: "Uttar Pradesh" },
      { code: "WB", name: "West Bengal" },
    ];

export default function AddJobVacancies(props) {

const navigate = useNavigate();

const [item, setItem] = useState(null);
const [userData,setData] = useState();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [val, setVal] = useState();
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editId,setEditId]=useState();
  const handleClose = () => {setShow(false);setShowEdit(false)};
  const handleShow = () => setShow(true);
  const [state,setStates] = useState();
  const [department,setDepartment] = useState();
  const [position,setPosition] = useState();
  const [qualification,setQualification] = useState();
  const [num,setNum] = useState();


useEffect(()=>{
    if(!sessionStorage.regtoken){
      navigate(`/mdadmin`);
    } 

  },[]);

useEffect(()=>{
    
getposts();

  },[]);

//let tableBody;

const deletePost= async(id)=>{
const Id = id;
   axios.delete(API+`/careervacancy/${Id}`)
                .then((response) => {
                  //console.log(response.data);
                 

                  toast.success("Successfully Deleted.",{position: "top-center",});
                  getposts()
                })
                .catch((error) => {
                  //console.log("err",error.response.data.replace("enquiries validation failed:", "").split(",",20));
                  //console.log(error.response)
                  //setErr(error.response.data.replace("enquiries validation failed:", "").split(",",20))
                 })

}

const updatePost= async(e)=>{
  e.preventDefault();
const Id = editId;
    let objectOb = {
            state:  e.target.editstate.value,
                    position: e.target.editposition.value,
                    department: e.target.editdepartment.value,
                    num: e.target.editnum.value,
                    qualification: e.target.editqualification.value 
                     }
   axios.patch(API+`/careervacancy/${Id}`,objectOb)
                .then((response) => {
                  //console.log(response.data);
                 

                  toast.success("Successfully Edited.",{position: "top-center",});
                  getposts();
                  setShowEdit(false);
                })
                .catch((error) => {
                  //console.log("err",error.response.data.replace("enquiries validation failed:", "").split(",",20));
                  //console.log(error.response)
                  //setErr(error.response.data.replace("enquiries validation failed:", "").split(",",20))
                 })

}

const getposts = async()=>{

     await axios
      .get(API+"/careervacancy")
      .then((response) => {
       // console.log(response)
        let data = response.data;
         //console.log(data.data)
        setData(data
          .filter((valu) => {
            //console.log(search)
            //console.log(typeof valu.email)
        if (search === "") {
         
          return valu;
        } else if (
          valu.name.toLowerCase().includes(search.toLowerCase())

          //valu.name.toLowerCase() == search.toLowerCase()
          //valu.email.toLowerCase() === search.toLowerCase()
          // valu.email.toLowerCase().includes(search.toLowerCase())
        ) {

           //console.log("search");
          return valu;
        }
        //else{alert(`The result for the search value ${search} is not found`)}
      })
          .map((val,index)=>{
            const id = val._id;
            //console.log(id);
              
            return(
            <tr key={index} >
            <td className="td">{index + 1}</td>
            <td className="td">{val.state}</td>
            <td className="td">{val.department}</td>
            <td className="td">{val.position}</td>
            <td className="td">{val.qualification}</td>
            <td className="td">{val.num}</td>
            <td className="td">{val.date}</td>
            <td className="td">{val.time}</td>
            <td style={{padding:"10px"}}><button className="quiry-btn" onClick={()=>deletePost(id)}>Delete</button> </td>
            <td style={{padding:"10px"}}><button className="quiry-btn" onClick={()=>{setShowEdit(true);
              setStates(val.state);
              setDepartment(val.department);
              setPosition(val.position);
              setQualification(val.qualification);
              setNum(val.num);
            setEditId(id)}}>Edit</button> </td>

          </tr>)}))
       
        })
        
      .catch((error) => {
        
        //console.log("An error occurred:", error.response);

       
      })
      .finally(() => {
            setLoading(false);
            setSearch("");
        })
    
   

  }



const encodeImageFileAsURL=(e)=> {
    e.preventDefault();
    
     let file = e.target.files[0];
    let reader = new FileReader();
    
    reader.onloadend = function() {
      
        setItem(reader.result);

    }
    reader.readAsDataURL(file);
   // console.log(item)
}

  const addPost = async(e)=>{
    e.preventDefault()
    let objectOb = {
                    state:  e.target.state.value,
                    position: e.target.position.value,
                    department: e.target.department.value,
                    num: e.target.num.value,
                    qualification: e.target.qualification.value         
                     }
//console.log(objectOb)
              await axios.post(API+'/careervacancy', objectOb)
                .then((response) => {
                 // console.log(response.data);
                  // navigate(`/`);
                  e.target.state.value = "";
                  e.target.department.value = "";
                  e.target.position.value = "";
                  e.target.num.value = "";
                  e.target.qualification.value = "";

                  toast.success("Successfully Added.",{position: "top-center",});
                  getposts();
                  
                })
                .catch((error) => {
                  //console.log("err",error.response.data.replace("enquiries validation failed:", "").split(",",20));
                 // console.log(error.response)
                  //setErr(error.response.data.replace("enquiries validation failed:", "").split(",",20))
                 })
    
    

  }



  return (
    
    <div style={{backgroundColor:"#fff"}}>
<div style={{width:"100%"}}>
    <AdminAppbar title={"Job Posts"}/>
    </div><br />
<section>
<div className="container">
  <Grid item xs={12} >
        <Grid    columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1" style={{width:"100%"}}>

              <Grid item xs={12} style={{width:"100%",paddingLeft:"4px"}}>
                    
                  {  
                                     // <div style={{float:"left"}}><span><input className="form-control" type="search" name="enter" id="search" placeholder="Search By Name" value={search}  onChange={(e)=> {setSearch(e.target.value)}}/>
                                     //  <br /><input type="submit"  className="quiry-btn" value="Search" onClick={getposts} ></input></span></div>
                  }

                                  <span  style={{float:"right",marginRight:"25px",cursor:"pointer"}} className="quiry-btn" onClick={() => setShow(true)}>Post a job</span>


        </Grid>
  </Grid>
  </Grid><br />
    
    <ToastContainer />


          <table  style={{border:"solid green 2px"}}>
                <thead style={{}}>
                  <tr style={{}}>
                    <th className="slno"><h6>Sl. No</h6></th>
                    
                    <th scope="col" className="th"><h6>State</h6></th>
                    <th scope="col" className="th"><h6>Department</h6></th>
                    <th scope="col" className="th"><h6>Position</h6></th>

                     <th scope="col" className="th"><h6>Qualification</h6></th>
                     <th scope="col" className="th" style={{textAlign:"center"}}><h6>num</h6></th>
                     <th scope="col" className="th"><h6>Date</h6></th>
                    <th scope="col" className="th"><h6>Time</h6></th>
                    <th scope="col" className="th"><h6>Delete post </h6></th>
                    <th scope="col" className="th"><h6>Edit post </h6></th>

                  </tr>
                </thead>
                 <tbody style={{border:"solid green 1px"}}>
      {userData}
    </tbody>
              </table>

</div>
    </section>


<Modal
      show={show} onHide={handleClose}
      style={{paddingTop:'5px'}}
    > 
     
      <Modal.Body >
        
        <Card sx={{ maxWidth: 500,border:"solid green 2px" }} id="card-container" >
      <div  style={{textAlign:"center"}}><img src="img/mainlogo.png" alt="" width="inherit"/></div> <hr/>
    <h2 style={{paddingTop:"0px"}}>Add Posts</h2>
      <CardContent sx={{ maxWidth: 500}}>
        <form onSubmit={addPost}>   
    <Grid container  rowSpacing={2}>
     



    <Grid item xs={12} className="card-grid" >
              <Grid  columnSpacing={2}  className="container1">
                <Grid item xs={3} md={3} className="grid-card-label">
                      <label className="label" for="email">State </label></Grid>
                     <Grid item  xs={12} md={12}><select className="grid-card-input" name = "state"   style={{width:"100%",color:"black"}} 
                     required><option disabled selected>Select a State</option>
                                        {
                                          states.map((state)=>{
                                           // console.log(state)
                                            return(
                                              <option value={state.name}> {state.name}</option>
                                            );
                                          })
                                        }
                                                
                                                
                                            </select></Grid>
                        <Grid item  ></Grid>
                         </Grid>


                         </Grid><br /><br />

    <Grid item xs={12} className="card-grid" >
              <Grid  columnSpacing={2}  className="container1">
                <Grid item xs={3} md={3} className="grid-card-label">
                      <label className="label" for="email">Department </label></Grid>
                     <Grid item  xs={12} md={12}><select className="grid-card-input" name = "department"   style={{width:"100%",color:"black"}} 
                     required><option disabled selected>Select a Department</option>
                                        {
                                          departments.map((departments)=>{
                                            return(
                                              <option value={departments}> {departments}</option>
                                            );
                                          })
                                        }
                                                
                                                
                                            </select></Grid>
                        <Grid item  ></Grid>
                         </Grid>


                         </Grid><br /><br />
                     

                          <Grid item xs={12} className="card-grid">
                          <Grid    columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={3} md={3} className="grid-card-label">
                                  <label className="label" for="name">Position </label></Grid>
                    <Grid item xs={12} md={12}><span><input className="grid-input" name="position"  type="text" placeholder="Enter Position" style={{Width:"100%",color:"black"}}  
                     required/></span>
                          </Grid>
                               </Grid>
                                 </Grid>

                          <Grid item xs={12} className="card-grid">
                          <Grid    columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={3} md={3} className="grid-card-label">
                                  <label className="label" for="name">No. of vacancies </label></Grid>
                    <Grid item xs={12} md={12}><span><input className="grid-input" name="num"  type="text" placeholder="No of Posts" style={{Width:"100%",color:"black"}}  
                     required/></span>
                          </Grid>
                               </Grid>
                                 </Grid>


                           <Grid item xs={12} className="card-grid">
                          <Grid    columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={3} md={3} className="grid-card-label">
                                  <label className="label" for="name">Qualification </label></Grid>
                    <Grid item xs={12} md={12}><span><textarea className="grid-input" name="qualification" placeholder="Qualification or Experience"  type="text" style={{Width:"100%",color:"black"}} 
                     
                     required/></span>
                          </Grid>
                               </Grid>
                                 </Grid>      
                               

                  
               
                     <Grid item xs={12} className="card-grid" >
                     
                    <span ><input type="submit"  className="quiry-btn" value="Add" style={{background:"#1da912",color:"#fff"}}></input></span>
                    
                 </Grid>
                 
                          
               

            
            </Grid>

            
    </form>
      </CardContent>
              
<ToastContainer />
   </Card>
         
                         
      </Modal.Body>
         
    </Modal>


<Modal
      show={showEdit} onHide={handleClose}
      style={{paddingTop:'5px'}}
    > 
     
      <Modal.Body >
        
        <Card sx={{ maxWidth: 500,border:"solid green 2px" }} id="card-container" >
      <div  style={{textAlign:"center"}}><img src="img/mainlogo.png" alt="" width="inherit"/></div> <hr/>
    <h2 style={{paddingTop:"0px"}}>Edit Testimonials</h2>
      <CardContent sx={{ maxWidth: 500}}>
        <form onSubmit={updatePost}>   
    <Grid container  rowSpacing={2}>
     <Grid item xs={12} className="card-grid" >
              <Grid  columnSpacing={2}  className="container1">
                <Grid item xs={3} md={3} className="grid-card-label">
                      <label className="label" for="email">State </label></Grid>
                     <Grid item  xs={12} md={12}><select className="grid-card-input" name = "editstate" defaultValue={state}  style={{width:"100%",color:"black"}} 
                     required><option disabled selected>Select a State</option>
                                        {
                                          states.map((state)=>{
                                           // console.log(state)
                                            return(
                                              <option value={state.name}> {state.name}</option>
                                            );
                                          })
                                        }
                                                
                                                
                                            </select></Grid>
                        <Grid item  ></Grid>
                         </Grid>


                         </Grid><br /><br />

    <Grid item xs={12} className="card-grid" >
              <Grid  columnSpacing={2}  className="container1">
                <Grid item xs={3} md={3} className="grid-card-label">
                      <label className="label" for="email">Department </label></Grid>
                     <Grid item  xs={12} md={12}><select className="grid-card-input" name = "editdepartment" defaultValue={department}  style={{width:"100%",color:"black"}} 
                     required><option disabled selected>Select a Department</option>
                                        {
                                          departments.map((departments)=>{
                                            return(
                                              <option value={departments}> {departments}</option>
                                            );
                                          })
                                        }
                                                
                                                
                                            </select></Grid>
                        <Grid item  ></Grid>
                         </Grid>


                         </Grid><br /><br />
                     

                          <Grid item xs={12} className="card-grid">
                          <Grid    columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={3} md={3} className="grid-card-label">
                                  <label className="label" for="name">Position </label></Grid>
                    <Grid item xs={12} md={12}><span><input className="grid-input" name="editposition"  type="text" defaultValue={position} style={{Width:"100%",color:"black"}}  
                     required/></span>
                          </Grid>
                               </Grid>
                                 </Grid>

                          <Grid item xs={12} className="card-grid">
                          <Grid    columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={3} md={3} className="grid-card-label">
                                  <label className="label" for="name">No. of vacancies </label></Grid>
                    <Grid item xs={12} md={12}><span><input className="grid-input" name="editnum"  type="text" defaultValue={num} style={{Width:"100%",color:"black"}}  
                     required/></span>
                          </Grid>
                               </Grid>
                                 </Grid>


                           <Grid item xs={12} className="card-grid">
                          <Grid    columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={3} md={3} className="grid-card-label">
                                  <label className="label" for="name">Qualification </label></Grid>
                    <Grid item xs={12} md={12}><span><textarea className="grid-input" name="editqualification" defaultValue={qualification} type="text" style={{Width:"100%",color:"black"}} 
                     
                     required/></span>
                          </Grid>
                               </Grid>
                                 </Grid>      
                               

                  
               
                     <Grid item xs={12} className="card-grid" >
                     
                    <span ><input type="submit"  className="quiry-btn" value="Submit" style={{background:"#1da912",color:"#fff"}}></input></span>
                    
                 </Grid>
                 
                          
               

            
            </Grid>

            
    </form>
      </CardContent>
              
<ToastContainer />
   </Card>
         
                         
      </Modal.Body>
         
    </Modal>



   </div>
   
  );
}




 // <Grid item xs={12} className="card-grid">
 //                          <Grid    columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
 //                <Grid item xs={3} md={3} className="grid-card-label">
 //                                  <label className="label" for="name">Upload Photo* </label></Grid>
 //                    <Grid item xs={12} md={12}><span><input className="grid-input" name="file1"  type="file" style={{Width:"100%",color:"black"}}   onChange={encodeImageFileAsURL}
 //                     required/></span>
 //                          </Grid>
 //                               </Grid>
 //                                 </Grid> 


//defaultValue={designation}
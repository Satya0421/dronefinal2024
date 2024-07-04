import * as React from 'react';
import {useState,useEffect} from 'react';
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
import {makeStyles} from "@material-ui/styles";
import { ClassNames } from '@emotion/react';

const useStyles = makeStyles(theme => ({
    con:{
        
        "&:hover": {
      background:"green",
      color:"black"
    },
        '&:checked':{
            background:"green",
            color:"black"
        }
    }
   }));


export default function AddTestimonials(props) {
    const classes = useStyles();

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
  const [name,setName] = useState();
  const [designation,setDesignation] = useState();
  const [description,setDescription] = useState();


useEffect(()=>{
    if(!sessionStorage.regtoken){
      navigate(`/mdadmin`);
    } 

  },[]);

useEffect(()=>{
    
verify();

  },[]);

//let tableBody;

const deleteTestimonial= async(id)=>{
const Id = id;
   axios.delete(API+`/testimonials/${Id}`)
                .then((response) => {
                  //console.log(response.data);
                 

                  toast.success("Successfully Deleted.",{position: "top-center",});
                  verify()
                })
                .catch((error) => {
                  //console.log("err",error.response.data.replace("enquiries validation failed:", "").split(",",20));
                  //console.log(error.response)
                  //setErr(error.response.data.replace("enquiries validation failed:", "").split(",",20))
                 })

}

const updateTestimonial= async(e)=>{
  e.preventDefault();
const Id = editId;
    let objectOb = {
            name: e.target.nameedit.value,
            description: e.target.descriptionedit.value,
            designation: e.target.designationedit.value,
            category:e.target.categoryedit.value,
            img:item,
                     }
   axios.patch(API+`/testimonials/${Id}`,objectOb)
                .then((response) => {
                  //console.log(response.data);
                 

                  toast.success("Successfully Edited.",{position: "top-center",});
                  verify();
                  setShowEdit(false);
                })
                .catch((error) => {
                  //console.log("err",error.response.data.replace("enquiries validation failed:", "").split(",",20));
                  //console.log(error.response)
                  //setErr(error.response.data.replace("enquiries validation failed:", "").split(",",20))
                 })

}

const verify = async()=>{

     await axios
      .get(API+"/testimonials/getall")
      .then((response) => {
        //console.log(response)
        let data = response.data;
         //console.log(data.data)
        setData(data.data
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
            <td className="td">{val.name}</td>
            <td className="td">{val.designation}</td>
            <td className="td">{val.description}</td>
            <td className="td">{val.category}</td>
            <td className="td"><img src={val.img} width="150px" /></td>
            <td className="td">{val.date}</td>
            <td className="td">{val.time}</td>
            <td style={{padding:"10px"}}><button className="quiry-btn" onClick={()=>deleteTestimonial(id)}>Delete</button> </td>
            <td style={{padding:"10px"}}><button className="quiry-btn" onClick={()=>{setShowEdit(true);
              setName(val.name);
              setDescription(val.description);
              setDesignation(val.designation);
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
        console.log(reader.result)
        setItem(reader.result);

    }
    reader.readAsDataURL(file);
    console.log(item)
}

  const addTestimonial = async(e)=>{
    e.preventDefault()
    let objectOb = {
            name: e.target.name.value,
            description: e.target.description.value,
            designation: e.target.designation.value,
            category:e.target.category.value,
            img:item,
                     }
console.log(objectOb)
              await axios.post(API+'/testimonials', objectOb)
                .then((response) => {
                  console.log(response.data);
                  // navigate(`/`);
                  e.target.name.value = "";
                  e.target.description.value = "";
                  e.target.designation.value = "";
                  e.target.category.value = "";
                  e.target.file1.value = "";

                  toast.success("Successfully Added.",{position: "top-center",});
                  verify();
                  
                })
                .catch((error) => {
                  //console.log("err",error.response.data.replace("enquiries validation failed:", "").split(",",20));
                  console.log(error.response)
                  //setErr(error.response.data.replace("enquiries validation failed:", "").split(",",20))
                 })
    
    

  }



  return (
    
    <div style={{backgroundColor:"#fff"}}>
<div style={{width:"100%"}}>
    <AdminAppbar title={"Testimonials"}/>
    </div><br />
<section>
<div className="container">
  <Grid item xs={12} >
        <Grid    columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1" style={{width:"100%"}}>

              <Grid item xs={12} style={{width:"100%",paddingLeft:"4px"}}>
                    
                  {  
                     //                                   <div style={{float:"left"}}><span><input className="form-control" type="search" name="enter" id="search" placeholder="Search By Name" value={search}  onChange={(e)=> {setSearch(e.target.value)}}/>
                     //                                    <br /><input type="submit"  className="quiry-btn" value="Search" onClick={verify} ></input></span></div>
                                                          }                   
                          <span  style={{float:"right",marginRight:"25px",cursor:"pointer"}} className="quiry-btn" onClick={() => setShow(true)}>Add Testimonial</span>



        </Grid>
  </Grid>
  </Grid><br />
    
    <ToastContainer />

{loading?<CircularStatic />:

          <table  style={{border:"solid green 2px"}}>
                <thead style={{}}>
                  <tr style={{}}>
                    <th className="slno"><h6>Sl. No</h6></th>
                    
                    <th scope="col" className="th"><h6>Name</h6></th>
                    <th scope="col" className="th"><h6>Designation</h6></th>
                    <th scope="col" className="th"><h6>Description</h6></th>

                     <th scope="col" className="th"><h6>Category</h6></th>
                     <th scope="col" className="th" style={{textAlign:"center"}}><h6>Photo</h6></th>
                     <th scope="col" className="th"><h6>Date</h6></th>
                    <th scope="col" className="th"><h6>Time</h6></th>
                    <th scope="col" className="th"><h6>Delete Testimonial </h6></th>
                    <th scope="col" className="th"><h6>Edit Testimonial </h6></th>

                  </tr>
                </thead>
                 <tbody style={{border:"solid green 1px"}}>
      {userData}
    </tbody>
              </table>
}
</div>
    </section>


<Modal
      show={show} onHide={handleClose}
      style={{paddingTop:'5px'}}
    > 
     
      <Modal.Body >
        
        <Card sx={{ maxWidth: 500,border:"solid green 2px" }} id="card-container" >
      <div  style={{textAlign:"center"}}><img src="img/mainlogo.png" alt="" width="inherit"/></div> <hr/>
    <h2 style={{paddingTop:"0px"}}>Add Testimonials</h2>
      <CardContent sx={{ maxWidth: 500}}>
        <form onSubmit={addTestimonial}>   
    <Grid container  rowSpacing={2}>
     <Grid item xs={12} className="card-grid" >
              <Grid  columnSpacing={2}  className="container1">
                <Grid item xs={3} md={3} className="grid-card-label">
                      <label className="label" for="email">Category </label></Grid>
                     <Grid item  xs={12} md={12}><select className="grid-card-input" name = "category"   style={{width:"100%",color:"black"}} 
                     required><option disabled selected value = "">Select a Category</option>
                                                <option value="training" className={classes.con} style={{}}> Training Page </option>
                                                <option value="home"> Home Page </option>
                                                <option value="services"> Services Page </option>
                                            </select></Grid>
                        <Grid item  ></Grid>
                         </Grid>


                         </Grid><br /><br />

    <Grid item xs={12} className="card-grid" >
              <Grid  columnSpacing={2}  className="container1">
                <Grid item xs={3} md={3} className="grid-card-label">
                      <label className="label" for="email">Name </label></Grid>
                     <Grid item  xs={12} md={12}><input className="grid-card-input" name = "name"  type="text" style={{width:"100%",color:"black"}} 
                     required/></Grid>
                        <Grid item  ></Grid>
                         </Grid>


                         </Grid><br /><br />

                          <Grid item xs={12} className="card-grid">
                          <Grid    columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={3} md={3} className="grid-card-label">
                                  <label className="label" for="name">Designation </label></Grid>
                    <Grid item xs={12} md={12}><span><input className="grid-input" name="designation"  type="text" style={{Width:"100%",color:"black"}}  
                     required/></span>
                          </Grid>
                               </Grid>
                                 </Grid>

                          <Grid item xs={12} className="card-grid">
                          <Grid    columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={3} md={3} className="grid-card-label">
                                  <label className="label" for="name">Description </label></Grid>
                    <Grid item xs={12} md={12}><span><textarea className="grid-input" name="description"  type="text" style={{Width:"100%",color:"black"}} 
                     maxlength="250" minlength="100"
                     required/></span>
                          </Grid>
                               </Grid>
                                 </Grid>


                          <Grid item xs={12} className="card-grid">
                          <Grid    columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={3} md={3} className="grid-card-label">
                                  <label className="label" for="name">Upload Photo* </label></Grid>
                    <Grid item xs={12} md={12}><span><input className="grid-input" name="file1"  type="file" style={{Width:"100%",color:"black"}}   onChange={encodeImageFileAsURL}
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
        <form onSubmit={updateTestimonial}>   
    <Grid container  rowSpacing={2}>
     <Grid item xs={12} className="card-grid" >
              <Grid  columnSpacing={2}  className="container1">
                <Grid item xs={3} md={3} className="grid-card-label">
                      <label className="label" for="email">Name </label></Grid>
                     <Grid item  xs={12} md={12}><select className="grid-card-input" name = "categoryedit"   style={{width:"100%",color:"black"}} 
                     required><option disabled selected>Select a Training Level</option>
                                                <option value="training"> Training Page </option>
                                                <option value="home"> Home Page </option>
                                                <option value="services"> Services Page </option>
                                            </select></Grid>
                        <Grid item  ></Grid>
                         </Grid>


                         </Grid><br /><br />

    <Grid item xs={12} className="card-grid" >
              <Grid  columnSpacing={2}  className="container1">
                <Grid item xs={3} md={3} className="grid-card-label">
                      <label className="label" for="email">Name </label></Grid>
                     <Grid item  xs={12} md={12}><input className="grid-card-input" name = "nameedit" defaultValue={name} type="text" style={{width:"100%",color:"black"}} 
                     required/></Grid>
                        <Grid item  ></Grid>
                         </Grid>


                         </Grid><br /><br />

                          <Grid item xs={12} className="card-grid">
                          <Grid    columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={3} md={3} className="grid-card-label">
                                  <label className="label" for="name">Designation </label></Grid>
                    <Grid item xs={12} md={12}><span><input className="grid-input" name="designationedit" defaultValue={designation} type="text" style={{Width:"100%",color:"black"}}  
                     required/></span>
                          </Grid>
                               </Grid>
                                 </Grid>

                          <Grid item xs={12} className="card-grid">
                          <Grid    columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={3} md={3} className="grid-card-label">
                                  <label className="label" for="name">Description </label></Grid>
  <Grid item xs={12} md={12}><span><textarea className="grid-input" name="descriptionedit" defaultValue={description} type="text" style={{Width:"100%",color:"black"}} 
                     maxlength="250" minlength="100"
                     required/></span>
                          </Grid>
                               </Grid>
                                 </Grid>


                          <Grid item xs={12} className="card-grid">
                          <Grid    columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={3} md={3} className="grid-card-label">
                                  <label className="label" for="name">Upload Photo* </label></Grid>
                    <Grid item xs={12} md={12}><span><input className="grid-input" name="file1"  type="file" style={{Width:"100%",color:"black"}}   onChange={encodeImageFileAsURL}
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





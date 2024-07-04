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

export default function AddNewsAndEvents(props) {

    const navigate = useNavigate();
    const [item, setItem] = useState(null);
    const [eventData,seteventData] = useState();
    const [category,setCategory] = useState();
    const [description,setDescription] = useState();
    const [editImg,setEditImg]= useState();
    const [youtubelinkData,setyoutubelinkData] = useState();

      const [loading, setLoading] = useState(true);
      const [search, setSearch] = useState("");
      const [val, setVal] = useState();
      const [show, setShow] = useState(false);
       const [showEdit, setShowEdit] = useState(false);
      const [editId,setEditId]=useState();
      const handleClose = () => {setShow(false);setShowEdit(false)};
      const handleShow = () => setShow(true);
      const [modalShow, setModalShow] = React.useState(false);

     // const [editId,setEditId]=useState();

useEffect(()=>{
    if(!sessionStorage.regtoken){
      navigate(`/mdadmin`);
    } 

  },[]);

useEffect(()=>{
    
getEvents();
 

  },[]);

//let tableBody;

const deleteEvent= async(id)=>{
const Id = id;
   axios.delete(API+`/gallery/${Id}`)
                .then((response) => {
                  //console.log(response.data);
                 

                  toast.success("Successfully Deleted.",{position: "top-center",});
                  getEvents()
                })
                .catch((error) => {
                  //console.log("err",error.response.data.replace("enquiries validation failed:", "").split(",",20));
                  //console.log(error.response)
                  //setErr(error.response.data.replace("enquiries validation failed:", "").split(",",20))
                 })

}


const getEvents = async()=>{
     await axios
      .get(API+"/gallery/getall")
      .then((response) => {
        //console.log(response)
        let data = response.data;
        // console.log(data.data)
        seteventData(data.data
          .filter((valu) => {
           // console.log(search)
            //console.log(typeof valu.email)
        if (search === "") {
         
          return valu;
         } 
          //else if (
        //   //valu.name.toLowerCase().includes(search.toLowerCase())

        //   /
        // ) {

        //    console.log("search");
        //   return valu;
        // }
        //else{alert(`The result for the search value ${search} is not found`)}
      })
          .map((val,index)=>{
            const id = val._id;
            //console.log(id);
            //console.log(val.eventdate.split(' '));
            return(
            <tr key={index} >
            <td className="td">{index + 1}</td>
            <td className="td">{val.eventdate}</td>
            <td className="td">{val.description}</td>
            <td className="td">{val.category}</td>
            <td className="td"><img src={val.img} width="150px" height="inherit"/></td>
            <td className="td">{val.date}</td>
            <td className="td">{val.time}</td>
            <td style={{padding:"10px"}}><button className="quiry-btn" onClick={()=>deleteEvent(id)}>Delete</button> </td>
            <td style={{padding:"10px"}}><button className="quiry-btn" onClick={()=>{setShowEdit(true);
              setDescription(val.description);
              setEditImg(val.img);
              setEditId(id)}}>Edit</button> </td>

          </tr>)}))
        //console.log(eventData);
       
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
        //console.log(reader.result)
        setItem(reader.result);

    }
    reader.readAsDataURL(file);
    //console.log(item)
}

  const addGallery = async(e)=>{
    e.preventDefault();
    let eventDate =new Date(e.target.eventdate.value).toLocaleDateString() ;
    
    let objectOb = {
            
            description: e.target.description.value,
            eventdate:eventDate,
            category:e.target.category.value,
            img:item,
                     }
//console.log(objectOb)
              await axios.post(API+'/gallery', objectOb)
                .then((response) => {
                  //console.log(response.data);
                  // navigate(`/`);
                  
                  e.target.description.value = "";
                  e.target.eventdate.value = "";
                  e.target.file1.value = "";
                  e.target.category.value = "";

                  toast.success("Successfully Added.",{position: "top-center",});
                  getEvents();
                  
                })
                .catch((error) => {
                  //console.log("err",error.response.data.replace("enquiries validation failed:", "").split(",",20));
                  //console.log(error.response)
                  //setErr(error.response.data.replace("enquiries validation failed:", "").split(",",20))
                 })
    
    

  }


  const editEvent= async(e)=>{
  e.preventDefault();
  let eventDate =new Date(e.target.eventdate.value).toLocaleDateString() ;
const Id = editId;
    let objectOb = {
            description: e.target.description.value,
            eventdate:eventDate,
            category:e.target.category.value,
            img:item,
                     }
   axios.patch(API+`/gallery/${Id}`,objectOb)
                .then((response) => {
                  //console.log(response.data);
                  e.target.description.value = "";
                  e.target.eventdate.value = "";
                  e.target.file1.value = "";
                  e.target.category.value = "";

                  toast.success("Successfully Edited.",{position: "top-center",});
                  getEvents();
                  setShowEdit(false);
                })
                .catch((error) => {
                  //console.log("err",error.response.data.replace("enquiries validation failed:", "").split(",",20));
                  //console.log(error.response)
                  //setErr(error.response.data.replace("enquiries validation failed:", "").split(",",20))
                 })

}

  
const maxDate =(ids) =>{
  var x = document.getElementById("myDate").max = new Date().toISOString().split("T")[0];
  
}                
    

                 
                          
           
  return (
    
    <div style={{backgroundColor:"#fff"}}>
<div style={{width:"100%"}}>
    <AdminAppbar title={" Our Gallery"}/>
    </div><br />
<section>
<div className="container">
  <Grid item xs={12} >
        <Grid    columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1" style={{width:"100%"}}>

              <Grid item xs={12} style={{width:"100%",paddingLeft:"4px"}}>
                    
                   {  
                  //                         <div style={{float:"left"}}><span><input className="form-control" type="search" name="enter" id="search" placeholder="Search By Name" value={search}  onChange={(e)=> {setSearch(e.target.value)}}/>
                  //                          <br /><input type="submit"  className="quiry-btn" value="Search" onClick={getEvents} ></input></span></div>
                                             }     
                          <span  style={{float:"right",marginRight:"25px",cursor:"pointer"}} className="quiry-btn" onClick={() => setShow(true)}>Add Photo</span>




        </Grid>
  </Grid>
  </Grid><br />
    
    <ToastContainer />

    {loading?<CircularStatic />:

          <table  style={{border:"solid green 2px"}}>
                <thead style={{}}>
                  <tr style={{}}>
                    <th className="slno"><h6>Sl. No</h6></th>
                    
                    <th scope="col" className="th"><h6>Event Date</h6></th>
                    <th scope="col" className="th"><h6>Description</h6></th>
                    <th scope="col" className="th"><h6>Category</h6></th>
                    <th scope="col" className="th"><h6>Photo</h6></th>                     
                     <th scope="col" className="th"><h6>Date</h6></th>
                    <th scope="col" className="th"><h6>Time</h6></th>
                    <th scope="col" className="th"><h6>Delete Events </h6></th>
                    <th scope="col" className="th"><h6>Edit Events </h6></th>

                  </tr>
                </thead>
                 <tbody style={{border:"solid green 1px"}}>
      {eventData}
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
    <h2 style={{paddingTop:"0px"}}>Add Events</h2>
      <CardContent sx={{ maxWidth: 500}}>
        <form onSubmit={addGallery}>   
    <Grid container  rowSpacing={2}>
    

                             <Grid item xs={12} className="card-grid" >
              <Grid  columnSpacing={2}  className="container1">
                <Grid item xs={3} md={3} className="grid-card-label">
                      <label className="label">Category </label></Grid>
                     <Grid item  xs={12} md={12}><select className="grid-card-input" name = "category"   style={{width:"100%",color:"black"}} 
                     required><option disabled selected>Select a Category</option>
                                                <option value="training"> Training Page </option>
                                                <option value="ourgallery"> Gallery Page </option>
                                                <option value="newsandevents"> News And Events </option>
                                                {/* <option value="infrastructure"> Infrastructure </option> */}
                                            </select></Grid>
                        <Grid item  ></Grid>
                         </Grid>


                         </Grid><br /><br />
                          <Grid item xs={12} className="card-grid">
                          <Grid    columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={3} md={3} className="grid-card-label">
                                  <label className="label" for="name">Event Date </label></Grid>
                    <Grid item xs={12} md={12}><span><input className="grid-input" name="eventdate" id="myDate"  type="date" style={{Width:"100%",color:"black"}}  
                     required
                     max="2000-01-01"
                     onFocus={(e)=>{maxDate("myDate")}}/></span>
                          </Grid>
                               </Grid>
                                 </Grid>

                          <Grid item xs={12} className="card-grid">
                          <Grid    columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={3} md={3} className="grid-card-label">
                                  <label className="label" for="name">Description </label></Grid>
                    <Grid item xs={12} md={12}><span><textarea className="grid-input" name="description"  type="text" style={{Width:"100%",color:"black"}} 
                     maxlength="250" 
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
    <h2 style={{paddingTop:"0px"}}>Edit Events</h2>
      <CardContent sx={{ maxWidth: 500}}>
        <form onSubmit={editEvent}>   
    <Grid container  rowSpacing={2}>
    

                             <Grid item xs={12} className="card-grid" >
              <Grid  columnSpacing={2}  className="container1">
                <Grid item xs={3} md={3} className="grid-card-label">
                      <label className="label">Category </label></Grid>
                     <Grid item  xs={12} md={12}><select className="grid-card-input" name = "category"   style={{width:"100%",color:"black"}} 
                     required><option disabled selected>Select a Category</option>
                                                <option value="training"> Training Page </option>
                                                <option value="ourgallery"> Gallery Page </option>
                                                <option value="newsandevents"> News And Events </option>
                                                {/* <option value="infrastructure"> Infrastructure </option> */}
                                            </select></Grid>
                        <Grid item  ></Grid>
                         </Grid>


                         </Grid><br /><br />
                          <Grid item xs={12} className="card-grid">
                          <Grid    columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={3} md={3} className="grid-card-label">
                                  <label className="label" for="name">Event Date </label></Grid>
                    <Grid item xs={12} md={12}><span><input className="grid-input" name="eventdate" id="editdates" type="date" style={{Width:"100%",color:"black"}}  
                     required
                     max="2000-01-01"
                     onFocus={(e)=>{maxDate("editdates")}}/></span>
                          </Grid>
                               </Grid>
                                 </Grid>

                          <Grid item xs={12} className="card-grid">
                          <Grid    columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={3} md={3} className="grid-card-label">
                                  <label className="label" for="name">Description </label></Grid>
                    <Grid item xs={12} md={12}><span><textarea className="grid-input" name="description" defaultValue={description} type="text" style={{Width:"100%",color:"black"}} 
                     maxlength="250" 
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





// <Card sx={{ maxWidth: 500,border:"solid green 2px" }} id="card-container">
//       <img src="img/mainlogo.png" alt="" width="inherit"/><hr/>
//     <h2 style={{paddingTop:"0px"}}>Add Testimonials</h2>
//       <CardContent sx={{ maxWidth: 500}}>
//         <form onSubmit={addTestimonial}>   
//     <Grid container  rowSpacing={2}>
//     <Grid item xs={12} className="card-grid" >
//               <Grid  columnSpacing={2}  className="container1">
//                 <Grid item xs={3} md={3} className="grid-card-label">
//                       <label className="label" for="email">Name* </label></Grid>
//                      <Grid item  xs={12} md={12}><input className="grid-card-input" name = "name"  type="text" style={{width:"100%",color:"black"}} 
//                      required/></Grid>
//                         <Grid item  ></Grid>
//                          </Grid>


//                          </Grid><br /><br />

//                           <Grid item xs={12} className="card-grid">
//                           <Grid    columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
//                 <Grid item xs={3} md={3} className="grid-card-label">
//                                   <label className="label" for="name">Designation* </label></Grid>
//                     <Grid item xs={12} md={12}><span><input className="grid-input" name="designation"  type="text" style={{Width:"100%",color:"black"}}  
//                      required/></span>
//                           </Grid>
//                                </Grid>
//                                  </Grid>

//                           <Grid item xs={12} className="card-grid">
//                           <Grid    columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
//                 <Grid item xs={3} md={3} className="grid-card-label">
//                                   <label className="label" for="name">Description* </label></Grid>
//                     <Grid item xs={12} md={12}><span><textarea className="grid-input" name="description"  type="text" style={{Width:"100%",color:"black"}} 
//                      maxlength="250" minlength="100"
//                      required/></span>
//                           </Grid>
//                                </Grid>
//                                  </Grid>


//                           <Grid item xs={12} className="card-grid">
//                           <Grid    columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
//                 <Grid item xs={3} md={3} className="grid-card-label">
//                                   <label className="label" for="name">Upload Photo* </label></Grid>
//                     <Grid item xs={12} md={12}><span><input className="grid-input" name="file1"  type="file" style={{Width:"100%",color:"black"}}   onChange={encodeImageFileAsURL}
//                      required/></span>
//                           </Grid>
//                                </Grid>
//                                  </Grid>       

                  
               
//                      <Grid item xs={12} className="card-grid" >
                     
//                     <span><input type="submit"  className="quiry-btn" value="Add" style={{background:"#1da912",color:"#fff"}}></input></span>
                    
//                  </Grid>
                 
                          
               

            
//             </Grid>

            
//     </form>
//       </CardContent>
              
// <ToastContainer />
//    </Card>



//{
//         userData.map((val,index)=>{
         
//           return(
//           <div className="" style={{width:"100%"}}>
//             <iframe className="lazy" src={val.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
//               style={{margin:"0px",height:"300px",width:"100%"}} >
//             </iframe>
//             </div>
//             );
//         })
//       }

{
//       <Modal
//       show={modalShow}
//         onHide={() => setModalShow(false)}
//         sx={{width:"600px"}}
//     >
      
//       <Modal.Body style={{border:'solid green 2px',width:"600px"}}>
//         <Card sx={{border:"solid green 2px",width:"100%" }} id="" >
//       <div  style={{textAlign:"center"}}><img src="img/mainlogo.png" alt="" width="inherit"/></div> <hr/>
//     <h2 style={{paddingTop:"0px"}}>Add Youtube-Links</h2>
//       <CardContent sx={{ maxWidth: 500}}>
//         <form onSubmit={addYouTubeLinks}>   
//     <Grid container  rowSpacing={2}>
    

//                           <Grid item xs={12} className="card-grid">
//                           <Grid    columnSpacing={{ xs: 1, sm: 2, md: 4,large:4 }} className="container1">
//                 <Grid item xs={5} md={6} className="grid-card-label">
//                                   <label className="label" for="name">Youtube-Link </label></Grid>
//                     <Grid item xs={12} md={12}><span><input className="grid-input" name="link"  type="url" style={{Width:"100%",color:"black"}}  
//                      required/></span>
//                           </Grid>
//                                </Grid>
//                                  </Grid>

                    

                  
               
//                      <Grid item xs={12} className="card-grid" >
                     
//                     <span ><input type="submit"  className="quiry-btn" value="Add" style={{background:"#1da912",color:"#fff"}}></input></span>
                    
//                  </Grid>
                 
                          
               

            
//             </Grid>

            
//     </form>


//     <table  style={{border:"solid green 2px"}}>
//                 <thead style={{}}>
//                   <tr style={{}}>
//                     <th className="slno">Sl. No</th>
                    
//                     <th scope="col" className="">Link</th>
//                     <th scope="col" className="">Delete Link </th>

//                   </tr>
//                 </thead>
//                  <tbody style={{border:"solid green 1px"}}>
//       {youtubelinkData}
//     </tbody>
//               </table>
//       </CardContent>
              
// <ToastContainer />
//    </Card>
//       </Modal.Body>
      
//     </Modal>
}

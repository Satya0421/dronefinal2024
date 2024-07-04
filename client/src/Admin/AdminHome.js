import React, {useState, useEffect} from 'react';
import AdminAppbar from './AdminAppbar' ;
import AdminLogin from './AdminLogin'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import API from '../Api';

function AdminHome(){
	const [isAuthenticated,setisAuthenticated] = useState(false);
	const [visitors,setVisitors] = useState(0);
	const navigate = useNavigate();
useEffect(()=>{
    if(!sessionStorage.regtoken){
    	navigate(`/mdadmin`);
    } else{
    	axios.get(API+`/visitors/visitorsCount`).then((res)=>{
    		// console.log(res.data)
    		// alert(res.data[0].count)
    		setVisitors(res.data[0].count)
		}).catch((err)=>{
    //console.log(err.data)
			})

    	return;
    }

  },[]);
		





	return (
		<div style={{backgroundColor:"#fff"}}>
		<div style={{width:"100%"}}>
		<AdminAppbar title={"Dash Board"}/>
		</div><br />
		<div  className=" row" style={{textAlign:"center"}}>
		<div className=" row" style={{textAlign:"center"}}>
				<div style={{float:"left",padding:"10px"}} className="col-4"><button  sx={{ }} className="quiry-btn col-9" onClick = {()=>{navigate('/registeredusers')}}>Registered Users</button></div>
				<div style={{float:"left",padding:"10px"}} className="col-4"><button  sx={{ }} className="quiry-btn col-9" onClick = {()=>{navigate('/addtestimonials')}}>Testimonials</button></div>
				<div style={{float:"left",padding:"10px"}} className="col-4"><button  sx={{ }} className="quiry-btn col-9" onClick = {()=>{navigate('/addgallery')}}>Gallery</button></div>
				
				<div style={{float:"left",padding:"10px"}} className="col-4"><button  sx={{ }} className="quiry-btn col-9" onClick = {()=>{navigate('/addyoutubelinks')}}>YouTube-Links</button></div>
				<div style={{float:"left",padding:"10px"}} className="col-4"><button  sx={{ }} className="quiry-btn col-9" onClick = {()=>{navigate('/getCatlogsDownloaders')}}>Downloads</button></div>
				<div style={{float:"left",padding:"10px"}} className="col-4"><button  sx={{ }} className="quiry-btn col-9" onClick = {()=>{navigate('/addjobvacancies')}}>Post Jobs</button></div>

				<div style={{float:"left",padding:"10px"}} className="col-4"><button  sx={{ }} className="quiry-btn col-9" onClick = {()=>{navigate('/getjobapplicants')}}>Candidates</button></div>
				<div style={{float:"left",padding:"10px"}} className="col-4"><button  sx={{ }} className="quiry-btn col-9" onClick = {()=>{navigate('/getsprayservices')}}>SprayServices</button></div>
				<div style={{float:"left",padding:"10px"}} className="col-4"><button  sx={{ }} className="quiry-btn col-9" onClick = {()=>{navigate('/getenquiries')}}>Enquiries</button></div>	
		
		</div>

						<span style={{float:"left",padding:"10px"}}><button   className="quiry-btn" style={{backgroundColor:"#1da912"}} >No. of Visitors<br />{visitors}</button></span>

		</div>
		 <ToastContainer />
		</div>
);
}
export default AdminHome;


// <div style={{paddingLeft:"33%",paddingRight:"33%"}}>
// 		<span style={{float:"left"}}><Button  sx={{ backgroundColor:"#CFA660",color:"black" }} onClick = {RegisteredUsers}>Get RegisteredUsers</Button></span>
// 		<span style={{float:"right"}}><Button  sx={{ backgroundColor:"#CFA660",color:"black" }} onClick = {TransactionDetails}>Get TransactionDetails</Button></span>

// 		</div><br />
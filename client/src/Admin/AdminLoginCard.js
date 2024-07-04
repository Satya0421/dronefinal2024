import * as React from 'react';
import {useState,useCallback} from 'react';
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
import API from '../Api';

export default function AdminLoginCard(props) {

const navigate = useNavigate();
 let [email,setemail]= useState();
 let [password,setpassword]= useState();
    

  const verify = (e)=>{
    e.preventDefault();
     let Email = email;
     let Password = password;

     axios
      .post(API+"/admin/login", {
        email: Email,
        password: Password
      })
      .then((response) => {
        // setloading(false);
        sessionStorage.setItem("regtoken", JSON.stringify(response.data.token));
        sessionStorage.setItem("user", JSON.stringify(response.data.user.name));
        // console.log("User profile", response.data.user);
        // console.log("User token", response.data.jwt);
        // console.log(response.data.token);
        // console.log(response.data.user)
        //alert("Successfully Verified!");
        toast.success("Successfully Verified!",{position: "top-center"});
        navigate(`/adminhome`);
        
      })
      .catch((error) => {
        // setloading(false);
        //console.log("An error occurred:", error.response);

        // if (error.response) {
        //   setErrorMsg(true);
        // }
      });
    
    

  }



  return (
    
<>
    <Card sx={{ maxWidth: 500,border:"solid green 2px" }} id="card-container">
      <img src="img/mainlogo.png" alt="" width="inherit"/><hr/>
    <h2 style={{paddingTop:"0px"}}>Admin Login</h2>
      <CardContent sx={{ maxWidth: 500}}>
        <form onSubmit={verify}>   
    <Grid container  rowSpacing={2}>
    <Grid item xs={12} className="card-grid" >
              <Grid  columnSpacing={2}  className="container1">
                <Grid item xs={3} md={3} className="grid-card-label">
                      <label className="label" for="email">Email* </label></Grid>
                     <Grid item  xs={12} md={12}><input className="grid-card-input" name = "Email" id="email" type="email" autoComplete='email' style={{width:"100%",color:"black"}} value={email} onChange={ (e)=>setemail(e.target.value)}
                     required/></Grid>
                        <Grid item  ></Grid>
                         </Grid>


                         </Grid><br /><br />

                          <Grid item xs={12} className="card-grid">
                          <Grid    columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={3} md={3} className="grid-card-label">
                                  <label className="label" for="name">Password* </label></Grid>
                    <Grid item xs={12} md={12}><span><input className="grid-input" name="Password" id="password" type="password" autoComplete="current-password" style={{maxWidth:"100%",color:"black"}}  value={password} onChange={(e)=> setpassword(e.target.value)}
                     required/></span>
                          </Grid>
                               </Grid>
                                 </Grid>

                  
               
                     <Grid item xs={12} className="card-grid" >
                     
                    <span><input type="submit"  className="quiry-btn" value="Login" style={{background:"#1da912",color:"#fff"}}></input></span>
                    
                 </Grid>
                 
                          
               

            
            </Grid>

            
    </form>
      </CardContent>
              
<ToastContainer />
    </Card>
    <ToastContainer />
   </>
  );
}

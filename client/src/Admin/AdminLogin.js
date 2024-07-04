import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import React,{useState,useCallback} from 'react';
import '../App.css';

import AdminLoginCard from './AdminLoginCard';
// import { Link as RouterLink } from "react-router-dom";
// import Link from "@material-ui/core/Link";
 import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer, toast } from 'react-toastify';


function AdminLogin() {
 


  return (
    <div className="LoginCard">
    <div className="Card-header">
    <AdminLoginCard />
    </div>
    
    <ToastContainer />
    </div>
   
  );
}

export default AdminLogin;


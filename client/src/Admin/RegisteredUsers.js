import React, { useState, useEffect,useRef} from "react";
//import {trackPromise} from 'react-promise-tracker';
//import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
//import "@fontsource/mulish";
import AdminAppbar from './AdminAppbar' ;
import CircularStatic from './CircularLoaders';
import Grid from '@mui/material/Grid';
//import { DownloadTableExcel } from 'react-export-table-to-excel';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer, toast } from 'react-toastify';
import API from '../Api';

function RegisteredUsers() {
  const tableRef = useRef(null);
  const [isAuthenticated,setisAuthenticated] = useState(false);
  const [userData,setData] = useState();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [val, setVal] = useState();
  const navigate = useNavigate();

useEffect(()=>{
    if(!sessionStorage.regtoken){
      navigate(`/mdadmin`);
    } 

  },[]);

useEffect(()=>{
    
RegisteredUsers();

  },[]);

//let tableBody;
const RegisteredUsers = async()=>{

     await axios
      .get(API+"/trainingregistration")
      .then((response) => {
        
        let data = response.data;
         //console.log(data.data)
        setData(data.data
          .filter((valu) => {
            //console.log(typeof valu.email)
        if (search === "") {
         
          return valu;
        } else if (
          valu.phonenumber === parseInt(search)
          // || valu.email.toLowerCase() === search.toLowerCase()
          // || valu.email.toLowerCase().includes(search.toLowerCase())
        ) {
          // console.log("search")
          return valu;
        }
        //else{alert(`The result for the search value ${search} is not found`)}
      })
          .map((val,index)=>{
            //console.log(val)
            //const d = val.dob;
            const id = val._id;
            //const date1 = new Date(val.date).toLocaleTimeString();
            //console.log(date1)
            //console.log(typeof d)
            return(
            <tr key={index} >
            <td className="td">{index + 1}</td>
            <td className="td">{val.name}</td>
            <td className="td">{val.email}</td>
            <td className="td">{val.contactnumber}</td>
            <td className="td">{val.qualification}</td>
            <td className="td">{val.passportnumber}</td>
            <td className="td"><img src={val.passportcopy} width="150px" height="inherit"/></td>
            <td className="td">{val.traininglevel}</td>
            <td className="td">{val.date}</td>
            <td className="td">{val.address}</td>
           
            <td className="td">{val.paymentdetails?val.payment:"Pending"}</td>
            
          </tr>)}))
        //console.log(userData);<td style={{padding:"10px"}}><button className="quiry-btn" onClick={()=>deleteTestimonial(id)}>Delete</button> </td>
       
        })
        
      .catch((error) => {
        
       // console.log("An error occurred:", error.response);

       
      })
      .finally(() => {
            setLoading(false);
            setSearch("");
        })
    
   

  }

  const RegisteredBySearch = async()=>{
   setSearch(search.replace(/\s*/g,""));
     await axios
      .get(API+`/trainingregistration/search/${search}`)
      .then((response) => {
        //console.log(response)
        let data = response.data;
        // console.log(data)
        setData(data
      //     .filter((valu) => {
      //       //console.log(typeof valu.email)
      //   if (search === "") {
         
      //     return valu;
      //   } else if (
      //     valu.phonenumber === parseInt(search)
      //     // || valu.email.toLowerCase() === search.toLowerCase()
      //     // || valu.email.toLowerCase().includes(search.toLowerCase())
      //   ) {
      //     // console.log("search")
      //     return valu;
      //   }
      //   //else{alert(`The result for the search value ${search} is not found`)}
      // })
          .map((val,index)=>{
          //  console.log(val)
            const d = val.dob;
            const id = val._id;
            //console.log(typeof d)
            return(
            <tr key={index} >
            <td className="td">{index + 1}</td>
            <td className="td">{val.name}</td>
            <td className="td">{val.email}</td>
            <td className="td">{val.contactnumber}</td>
            <td className="td">{val.qualification}</td>
            <td className="td">{val.passportnumber}</td>
            <td className="td"><a download><img src={val.passportcopy} width="150px" height="inherit"/></a></td>
            <td className="td">{val.traininglevel}</td>
            <td className="td">{val.date}</td>
            <td className="td">{val.address}</td>
           
            <td className="td">{val.paymentdetails?val.payment:"Pending"}</td>            

          </tr>)}))
        //console.log(userData);<td style={{padding:"10px"}}><button className="quiry-btn" onClick={()=>deleteTestimonial(id)}>Delete</button> </td>
       
        })
        
      .catch((error) => {
        
       // console.log("An error occurred:", error.response);

       
      })
      .finally(() => {
            setLoading(false);
            setSearch("");
        })
    
   

  }

 const deleteTestimonial= async(id)=>{
const Id = id;
   axios.delete(API+`/trainingregistration/${Id}`)
                .then((response) => {
                  //console.log(response.data);
                 

                  toast.success("Successfully Deleted.",{position: "top-center",});
                  RegisteredUsers()
                })
                .catch((error) => {
                  //console.log("err",error.response.data.replace("enquiries validation failed:", "").split(",",20));
                  //console.log(error.response)
                  //setErr(error.response.data.replace("enquiries validation failed:", "").split(",",20))
                 })

}



    return (
      
      <div style={{backgroundColor:"#fff"}}>
<div style={{width:"100%"}}>
    <AdminAppbar title={"Registered Users"}/>
    </div><br />
<section>
<div className="container">
  <Grid item xs={12} >
        <Grid    columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1" style={{width:"100%"}}>

              <Grid item xs={12} style={{width:"100%",paddingLeft:"4px"}}>
                    
                    
                   <div style={{float:"left"}}><span><input className="form-control" type="text" name="enter" id="search" placeholder="Search" value={search}  onChange={(e)=> {setSearch(e.target.value)}} required/>
                    <small className="form-text text-muted">Search By Phone-Number or Email or Passport-Number or Training-Level</small><br />
                    <input type="submit"  className="quiry-btn" value="Search" onClick={RegisteredBySearch} ></input></span></div>
            
                <span  style={{float:"right",marginRight:"25px",cursor:"pointer",}} >
                     <ReactHTMLTableToExcel
                    id="table-xls-button"
                    className="quiry-btn"
                    table="table-to-xls"
                    filename="Training-Registered-List"
                    sheet="Training-Registered-List"
                    buttonText="Download"
                   
                    ></ReactHTMLTableToExcel>
                    </span>



        </Grid>
  </Grid>
  </Grid><br />
{loading?<CircularStatic />:
  <a download>  <table ref={tableRef} style={{border:"solid green 2px"}} id="table-to-xls">
                <thead style={{}}>
                  <tr style={{}}>
                    <th className="slno"><h6>Sl. No</h6></th>
                    
                    <th scope="col" className="th"><h6>Name</h6></th>
                    <th scope="col" className="th"><h6>Email</h6></th>
                    <th scope="col" className="th"><h6>Phone Number</h6></th>

                     <th scope="col" className="th"><h6>Qualification</h6></th>
                    <th scope="col" className="th"><h6>Passport Number</h6></th>
                    <th scope="col" className="th"><h6>Passport Copy</h6></th>
                    <th scope="col" className="th"><h6>Training Level</h6></th>

                     <th scope="col" className="th"><h6>Date</h6></th>
                    <th scope="col" className="th"><h6>Addres</h6></th>
                    
                    <th scope="col" className="th"><h6>Status</h6></th>
                   
  
                  </tr>
                </thead>
                 <tbody style={{border:"solid green 1px"}}>
      {userData}
    </tbody>
              </table> </a>
    }

    </div>
    </section>
    <ToastContainer />
   </div>
   
  );
}

export default RegisteredUsers;

/*

<td><img className="activator" style={{ width: '100%', height: 200 }} src={val.passportcopy} /></td>  
                   <th scope="col">Image</th>
                   
            

*/
  
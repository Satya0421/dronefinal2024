import React, { useState, useEffect,useRef} from "react";
import '../bootstrap-grid.css';
import '../critical.css';
import '../font-awesome.min.css';
import '../index.css';
import '../slick.min.css';
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

function JobApplicants() {
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
    
getApplicants();

  },[]);

//let tableBody;
const getApplicants = async()=>{

     await axios
      .get(API+"/careers")
      .then((response) => {
        
        let data = response.data;
         //console.log(data);
        setData(data
          //.filter((valu) => {
            //console.log(typeof valu.email)
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
            //const d = val.dob;
            //console.log(typeof d)
            return(
            <tr key={index} >
            <td className="td">{index + 1}</td>
            <td className="td">{val.name}</td>
            <td className="td">{val.email}</td>
            <td className="td">{val.mobile}</td>
            <td className="td">{val.position}</td>
            <td className="td">{val.qualification}</td>
            <td className="td">{val.date}</td>
            
            
            <td style={{padding:"10px"}}><button className="cvdownload" style={{}}><i className="fa fa-download" style={{}} onClick={()=>downloadPDF(val.cv)}></i></button> </td>

          </tr>)}))
        //console.log(userData);  <td style={{padding:"10px"}}><button className="quiry-btn" onClick={()=>deleteDownloader(val._id)}>Delete</button> </td>

       
        })
        
      .catch((error) => {
        
       // console.log("An error occurred:", error.response);

       
      })
      .finally(() => {
            setLoading(false);
            setSearch("");
        })
    
   

  }



const getApplicantsSearch = async()=>{
     //alert(search)
     await axios
      .get(API+`/careers/searchby/${search}`)
      .then((response) => {
        
        let data = response.data;
         console.log(data);
        setData(data
      //      .filter((valu) => {
      //        console.log(typeof valu.email)
      //    if (search === "") {
         
      //      return valu;
      //    } else if (
      //      valu.phonenumber === parseInt(search)
      //       || valu.email.toLowerCase() === search.toLowerCase()
      //       || valu.position.toLowerCase() === search.toLowerCase()
      //       || valu.qualification.toLowerCase().includes(search.toLowerCase())
      //      // || valu.email.toLowerCase().includes(search.toLowerCase())
      //    ) {
      //       console.log("search")
      //      return valu;
      //    }
      // //   //else{alert(`The result for the search value ${search} is not found`)}
      //  })
          .map((val,index)=>{
            //const d = val.dob;
            //console.log(typeof d)
            return(
            <tr key={index} >
            <td className="td">{index + 1}</td>
            <td className="td">{val.name}</td>
            <td className="td">{val.email}</td>
            <td className="td">{val.mobile}</td>
            <td className="td">{val.position}</td>
            <td className="td">{val.qualification}</td>
            <td className="td">{val.date}</td>
            
            
            <td style={{padding:"10px"}}><button className="cvdownload" style={{}} onClick={()=>downloadPDF(val.cv)}><i className="bi bi-download" style={{}} ></i></button> </td>
            

          </tr>)}))
        //console.log(userData);<td style={{padding:"10px"}}><button className="quiry-btn" onClick={()=>deleteDownloader(val._id)}>Delete</button> </td>
       
        })
        
      .catch((error) => {
        
       // console.log("An error occurred:", error.response);

       
      })
      .finally(() => {
            setLoading(false);
            setSearch("");
        })
    
   

  }



  const downloadPDF=(pdf)=> {
const linkSource = pdf;
const downloadLink = document.createElement("a");
const fileName = "cv.pdf";
downloadLink.href = linkSource;
downloadLink.download = fileName;
downloadLink.click();
}

const deleteDownloader= async(id)=>{
const Id = id;
   await axios
                .delete(API+`/careers/${Id}`)
                .then((response) => {
                  //console.log(response.data);
                  getApplicants();
                  toast.success("Successfully Deleted.",{position: "top-center",});
                  
                 
                   
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
    <AdminAppbar title={"Candidates"}/>
    </div><br />
<section>
<div className="container">
  <Grid item xs={12} >
        <Grid    columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1" style={{width:"100%"}}>

              <Grid item xs={12} style={{width:"100%",paddingLeft:"4px"}}>
                    
                    
                   <div style={{float:"left"}}><span><input className="form-control" type="text" name="enter" id="search" placeholder="Search " value={search}  onChange={(e)=> {setSearch(e.target.value)}}/>
                     <small className="form-text text-muted">Search By Phone Number or Email </small><br />
                     <input type="submit"  className="quiry-btn" value="Search" onClick={getApplicantsSearch} ></input></span></div>
                                        
                          


                    <span  style={{float:"right",marginRight:"25px",cursor:"pointer"}} >
                     <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button quiry-btn"
                    table="table-to-xls"
                    filename="JobApplicants-List"
                    sheet="JobApplicants-List"
                    buttonText="Download"
                    style={{float:"right",marginRight:"25px",cursor:"pointer"}}
                    ></ReactHTMLTableToExcel>
                    </span>

                




        </Grid>
  </Grid>
  </Grid><br />
{loading?<CircularStatic />:
    <table ref={tableRef} style={{border:"solid green 2px"}} id="table-to-xls">
                <thead className='headT' style={{}}>
                  <tr style={{}}>
                    <th className="slno"><h6>Sl. No</h6></th>
                    
                    <th scope="col" className="th"><h6>Name</h6></th>
                    <th scope="col" className="th"><h6>Email</h6></th>
                    <th scope="col" className="th"><h6>Phone Number</h6></th>
                    <th scope="col" className="th"><h6>Applied Position</h6></th>
                    <th scope="col" className="th"><h6>Qualification</h6></th>
                    <th scope="col" className="th"><h6>Date</h6></th>
                    <th scope="col" className="th"><h6>DownloadCV</h6></th>

                   

  
                  </tr>
                </thead>
                 <tbody style={{border:"solid green 1px"}}>
      {userData}
    </tbody>
              </table>
    }

    </div>
    </section>

    <ToastContainer />
   </div>
   
  );
}

export default JobApplicants;

/*

<td><img className="activator" style={{ width: '100%', height: 200 }} src={val.passportcopy} /></td>  
                   <th scope="col">Image</th>
                   
            

*/
  
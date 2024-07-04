import React, { useState, useEffect,useRef} from "react";
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
import { ToastContainer, toast } from 'react-toastify';import API from '../Api';

function CatLogsDownloaders() {
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
    
getDownloaderList();

  },[]);

//let tableBody;
const getDownloaderList = async()=>{

     await axios
      .get(API+"/catlogdownload")
      .then((response) => {
        
        let data = response.data;
        // console.log(data)
        setData(data
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
            //const d = val.dob;
            //console.log(typeof d)
            return(
            <tr key={index} >
            <td className="td">{index + 1}</td>
            <td className="td">{val.username}</td>
            <td className="td">{val.email}</td>
            <td className="td">{val.contactnumber}</td>
            <td className="td">{val.productname}</td>
            <td className="td">{val.date}</td>
            
            

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

const deleteDownloader= async(id)=>{
const Id = id;
   axios.delete(API+`/catlogdownload/${Id}`)
                .then((response) => {
                  //console.log(response.data);
                 

                  toast.success("Successfully Deleted.",{position: "top-center",});
                   getDownloaderList()
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
    <AdminAppbar title={"Catlogs Downloaded"}/>
    </div><br />
<section>
<div className="container">
  <Grid item xs={12} >
        <Grid    columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1" style={{width:"100%"}}>

              <Grid item xs={12} style={{width:"100%",paddingLeft:"4px"}}>
                    
                {    
                  //                                       <div style={{float:"left"}}><span><input className="form-control" type="text" name="enter" id="search" placeholder="Search By Phonenumber" value={search}  onChange={(e)=> {setSearch(e.target.value)}}/>
                  //                                        <input type="submit"  className="quiry-btn" value="Search" onClick={getDownloaderList} ></input></span></div>
                                                        }                      
                          
                          

                   <span  style={{float:"right",marginRight:"25px",cursor:"pointer",}} >
                     <ReactHTMLTableToExcel
                    id="table-xls-button"
                    className="quiry-btn"
                    table="table"
                    filename="Catlogs-Downloaders-List"
                    sheet="Catlogs-Downloaders-List"
                    buttonText="Download"
                   
                    ></ReactHTMLTableToExcel>
                    </span>


        </Grid>
  </Grid>
  </Grid><br />
{loading?<CircularStatic />:
    <table ref={tableRef} style={{border:"solid green 2px"}} id="table">
                <thead style={{}}>
                  <tr style={{}}>
                    <th className="slno"><h6>Sl. No</h6></th>
                    
                    <th scope="col" className="th"><h6>Name</h6></th>
                    <th scope="col" className="th"><h6>Email</h6></th>
                    <th scope="col" className="th"><h6>Phone Number</h6></th>
                    <th scope="col" className="th"><h6>Product</h6></th>
                    <th scope="col" className="th"><h6>Date</h6></th>
                    
                    
  
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

export default CatLogsDownloaders;

/*

<td><img className="activator" style={{ width: '100%', height: 200 }} src={val.passportcopy} /></td>  
                   <th scope="col">Image</th>
                   
            

*/
  
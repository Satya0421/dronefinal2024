import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/styles";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ClassNames } from '@emotion/react';
import axios from "axios";
 import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer, toast } from 'react-toastify';
import API from '../Api';
import { trackPromise } from 'react-promise-tracker';
import Loaders from './../loader/preloader';

const useStyles = makeStyles(theme => ({
   

   carousel:{
        display:"flex",
        flexDirection:"row",
        width:"400px",
        margin:"0.1%",
         padding:"0%",
          paddingLeft:"0%",
         paddingRight:"0%",
         paddingBottom:"0%",
         //height:"100%",
          //border:"solid green 1px",
         alignItems:"center",
          paddingBottom:"10px",
          //backgroundColor:"#fff"
        
    },
    container:{
        // paddingLeft:"1%",
        // paddingRight:"1%",
        // marginBottom:"10px",
        width:"100%",
        //height:"100%",
        display:"inline-block",
        //backgroundColor:"inherit",
        //backgroundColor:"#fff",
         //border:"solid green 2px"
    },

carousel1:{
        display:"flex",
        flexDirection:"row",
        width:"100%",
        height:"300px",
        margin:"0.5%",
         //padding:"0.150%",
        padding:"12px",
         //border:"solid green 1px",
         alignContent:"center",
        // boxShadow: "10px 10px 24px rgba(0, 0, 10, 0.1)",
         boxShadow: "6px 6px 6px rgb(0 0 0 / 25%)",
         // backgroundColor:"#fff"
        
    },
    /*container:{
        paddingLeft:"1%",
        paddingRight:"1%",
        marginBottom:"10px",
        width:"100%",
        display:"inline-block",
        backgroundColor:"whiteSmoke",
        border:"solid red 2px"
    }*/
    container1:{
         paddingLeft:"1%",
         paddingRight:"1%",
         paddingBottom:"1%",
        marginBottom:"10px",
        width:"100%",
        display:"inline-block",
        //backgroundColor:"inherit",
        //backgroundColor:"#fff"
        //border:"solid green 2px"
    }
    
}));


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  // tablet: {
  //   breakpoint: { max: 1024, min: 600 },
  //   items: 2,
  //   slidesToSlide: 1 // optional, default to 1.
  // },
  // mobile: {
  //   breakpoint: { max: 600, min: 0 },
  //   items: 1,
  //   slidesToSlide: 1, // optional, default to 1.

  // }
  tablet: {
    breakpoint: { max: 1024, min: 800 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 800, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.

  }
      
};



const Training_page_carousel = () => {

    
    const classes = useStyles();
     const [userData,setData] = useState([]);
      const [loading, setLoading] = useState(false);

    useEffect(()=>{
    
        verify();

                    },[]);


    const verify = async()=>{

     await axios
      .get(API+"/gallery/training")
      .then((response) => {
        //console.log(response)
        let data = response.data;
         //console.log(data);
        setLoading(false);
        setData(data);          
        
       })
         
      .catch((error) => {
        
      //  console.log("An error occurred:", error.response);

       
      })
      .finally(() => {
            //console.log(userData);

        })
    
   
  }

    return (
  

         <div className={classes.container}>

        

         <Carousel
         responsive={responsive}
         ssr={true} // means to render carousel on server-side.
         infinite={true}
         autoPlay={true}
         autoPlaySpeed={3000}
         keyBoardControl={true}
         transitionDuration={200}
         containerClass="react-multi-carousel-list"
         removeArrowOnDeviceType={["tablet", "mobile"]}
         dotListClass="custom-dot-list-style"
         itemClass={classes.carousel}
         showDots = {false}
         
         
         >
     
     {loading?<><Loaders /></>:
             userData.map((val,index)=>{
 {
//                   let eventDay= val.eventdate.split('/')[1] ;
//            let eventYear = val.eventdate.split('/')[2] ;

//            let eventMonth = val.eventdate.split('/')[0] ;
//               {
//              // var month = ['January', 'February', 'March',
//              //  'April', 'May', 'June', 'July',
//              // 'August', 'September', 'October',
//              //  'November', 'December'
//              // ][eventMonth-1].slice(0,3) || '';
//              //  //console.log(month);
//               }
              }

                 return(

               

     <div className="slider-new-product" style={{margin:"0px",marginTop:"0px",width:"100%",height:"100%",}}>
                   <div className="" style={{margin:"0px",padding:"0px",}}>
                     <div className="" style={{margin:"0px",padding:"0px",}}>
                       <div className="" style={{margin:"0px",padding:"0px",}}>
                         <div className="" style={{margin:"0px",padding:"0px",}}>
                           <img src={val.img} alt="img"  height = "300px" width="100%"  style={{padding:"5px",backgroundColor:"#fff"}}/>
                           <div className="text-dark text-4 bg-light" style={{position: "absolute", bottom: "0px",  width: "100%"}}><b>{val.description}</b></div> 
                         </div>
                          
                       </div>
                     </div>
                 </div>
                 <div className="row" style={{height:"auto",width:"100%",paddingLeft:"10px",paddingTop:"10px",backgroundColor:"#efefef"}}>
                                         {
                                         //<div className="post-date col-2" style={{paddingTop:"5px",color:"white",backgroundColor:"#1da912",height:"90px",fontWeight:"450",textAlign:"left",}}>
                                         //                                         <div className="day" style={{padding:"0px",marginRight:"0px",textAlign:"center"}}>{eventDay}<br /> {month}</div>
                                             
                                                                                 
                                         //                                          <div className="month" style={{padding:"0px",margin:"0px",textAlign:"center"}}>{eventYear}</div>
                                         //                                     </div>
             }
         
                                         {//<div className="post-content col-10" style={{textAlign:"justify"}}>
                                           //                                           <span style={{textAlign:"justify",color:"black"}} className="">{val.description}</span>
                                            //                                      </div>
                                                                              }
                                   </div> 
                 </div>
     
      );
             })
     
             }
     
     
     
       
             </Carousel>
         </div>
     
    );
}




export default Training_page_carousel;




import React, { useState,useEffect, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap-grid.css';
import './critical.css';
import './font-awesome.min.css';
import './index.css';
import './slick.min.css';
import './style.css';
import ResponsiveAppBar from './AppBar'; 
import Footer from './Footer';
//import Carousel from 'react-bootstrap/Carousel';

import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/styles";
import { ClassNames } from '@emotion/react';
import axios from 'axios';
import API from './Api';
import ModalImage from "react-modal-image";
import { Lightbox } from "react-modal-image";
import { trackPromise} from 'react-promise-tracker';
//import Lightbox from "react-awesome-lightbox";
 //import "react-awesome-lightbox/build/style.css";
 //import Lightbox from 'react-lightbox-component';
 //import Carousel, { Modal, ModalGateway } from "react-images";
 //import Carousel from "react-multi-carousel";
//import Lightbox from 'react-lightbox-component';
import {SRLWrapper, useLightbox} from "simple-react-lightbox";

const useStyles = makeStyles(theme => ({
   

   containerImg:{
        display:"flex",
        flexDirection:"row",
        width:"100%",
       // maxHeight:"300px",
        height:"300px",
          //border:"solid green 1px",
         alignItems:"center",
          padding:"10px 2px",
          //margin:"5px"
          //backgroundColor:"#fff"
        
 }
    
}));

const options = {
    buttons: {
      backgroundColor: 'rgba(30,30,36,0.8)',
      iconColor: 'rgba(255, 255, 255, 0.8)',
      iconPadding: '10px',
      showAutoplayButton: true,
      showCloseButton: true,
      showDownloadButton: true,
      showFullscreenButton: true,
      showNextButton: true,
      showPrevButton: true,
      showThumbnailsButton: true,
      size: '40px'
    }
}

function Infratsructure() {
  
  const classes = useStyles();
     const [userData,setData] = useState([]);
     const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [photos,setPhotos]= useState([]);
  const photoss = [];

     useEffect(()=>{
    
        getPhotos();

                     },[]);
    
     const getPhotos = async()=>{


      await axios
       .get(API+"/gallery/infrastructure")
       .then((response) => {
         //console.log(response)
         let data = response.data;
          //console.log(data.img);
         setPhotos(data);
        
         setData(data.reverse());          
        
        })
         
       .catch((error) => {
        
         console.log("An error occurred:", error.response);

       
       })
       .finally(() => {
             //console.log(userData);
             //console.log(photos);
         })
    
   
   }


 return (
<div > 
 <div style={{marginTop:"0px"}}><ResponsiveAppBar /> </div>                       

        <h2>Our Infrastructure</h2>


            <div>

            <div className="container" style={{}}>
            <div className="row" style={{}}>

{/* 
            <div className="col-12 col-sm-10 col-md-6 col-lg-4 galleryImg" style={{}}>
             {<div style={{width:"100%",}} className="galleryImg-margin"> <ModalImage
                              small="img/infra1.png"  
                              large="img/infra1.png"
                              hideDownload={true}
                              
                              loading="lazy"
                              /></div>
                         }
             { //<div> <p className="text-center text-capitalize" style={{color:"grey",fontWeight:"500"}}>
               //                                   {val.description}
               //                                 </p></div>
               //                 
            }

            </div>

            <div className="col-12 col-sm-10 col-md-6 col-lg-4 galleryImg" style={{}}>
             {<div style={{width:"100%",}} className="galleryImg-margin"> <ModalImage
                              small="img/infra2.png"  
                              large="img/infra2.png"
                              hideDownload={true}
                              
                              loading="lazy"
                              /></div>
                         }
             { //<div> <p className="text-center text-capitalize" style={{color:"grey",fontWeight:"500"}}>
               //                                   {val.description}
               //                                 </p></div>
               //                 
            }

            </div>
            <div className="col-12 col-sm-10 col-md-6 col-lg-4 galleryImg" style={{}}>
             {<div style={{width:"100%",}} className="galleryImg-margin"> <ModalImage
                              small="img/infra3.png"  
                              large="img/infra3.png"
                              hideDownload={true}
                              
                              loading="lazy"
                              /></div>
                         }
             { //<div> <p className="text-center text-capitalize" style={{color:"grey",fontWeight:"500"}}>
               //                                   {val.description}
               //                                 </p></div>
               //                 
            }

            </div>
            <div className="col-12 col-sm-10 col-md-6 col-lg-4 galleryImg" style={{}}>
             {<div style={{width:"100%",}} className="galleryImg-margin"> <ModalImage
                              small="img/infra4.png"  
                              large="img/infra4.png"
                              hideDownload={true}
                              
                              loading="lazy"
                              /></div>
                         }
             { //<div> <p className="text-center text-capitalize" style={{color:"grey",fontWeight:"500"}}>
               //                                   {val.description}
               //                                 </p></div>
               //                 
            }

            </div> */}
            
{userData
.map((val) => {
        return (
            <>
            
            <div className="col-12 col-sm-10 col-md-6 col-lg-4 galleryImg" style={{}}>
             {<div style={{width:"100%",}} className="galleryImg-margin"> <ModalImage
                              small={val.img}  
                              large={val.img}
                              hideDownload={true}
                              className={classes.carousel}
                              loading="lazy"
                              /></div>
                         }
             { //<div> <p className="text-center text-capitalize" style={{color:"grey",fontWeight:"500"}}>
               //                                   {val.description}
               //                                 </p></div>
               //                 
            }

            </div>

                </>
      );
      })
}

<SRLWrapper>
          {// <div>
         
         //             <div className="container" style={{}}>
         //             <div className="row" style={{}}>
                     
         // {userData
         // .map((val) => {
         //         return (
         //             <>
                     
         //             <div className="col-12 col-sm-10 col-md-6 col-lg-4 galleryImg" style={{}}>
         //              {<div style={{padding:"0px",margin:"12px",width:"100%"}}> <ModalImage
         //                               small={val.img}  
         //                               large={val.img}
         //                               hideDownload={true}
         //                               className={classes.carousel}
         //                               loading="lazy"
         //                               /></div>
         //                          }
         //              { //<div> <p className="text-center text-capitalize" style={{color:"grey",fontWeight:"500"}}>
         //                //                                   {val.description}
         //                //                                 </p></div>
         //                //                 
         //             }
         
         //             </div>
         
         //                 </>
         //       );
         //       })
         // }  
         //      /div>
         //             </div></div>
          }
                   
   </SRLWrapper>
            
            </div>
            </div>
            </div>
            
          <div>
            <h2>Our Participants</h2>
            <div className="row">
            <div className="col-12 col-sm-10 col-md-6 col-lg-10 galleryImg" style={{}}>
             <div style={{width:"100%",}} className="galleryImg-margin"> <ModalImage
                              small="img/particpants.png"  
                              large="img/particpants.png"
                              hideDownload={true}
                              
                              loading="lazy"
                              /></div>
                         
             
            </div>
            </div>
          </div>

<br />
<section >
        <Footer />  
        </section>


      

<a
        href="https://wa.me/919591999044"
        target="_blank"
        rel="noopener noreferrer"
                  style={{ position: "fixed", bottom: 90, right: 10, zIndex: 1000 }}

      >
                  <img className="whatsapp-icon" src="img/whatsapp.png" width="40px" />

      </a>
</div>
  );
}

export default Infratsructure;


// renderImages() {
//     return this.props.gallery
//       .filter((value) => {
//         if (value.category === "Our Gallery") {
//           return value;
//         }
//       })
      // .map((gallery) => {
      //   return (
      //     <div class="col-md-4 col-xs-6 my-15" key={gallery._id}>
      //       <div class="gallery-single">
      //         <a href={gallery.image}>
      //           <img src={gallery.image} alt="" />
      //           <span>
      //             <i class="fas fas-3x fa-eye"></i>
      //           </span>
      //           <h4 className="text-center text-capitalize">
      //             {gallery.thumbnail}
      //           </h4>
      //         </a>
      //       </div>
      //     </div>
      //   );
      // });
//   }


//     {<img src={val.img} height="300px" width="100%" alt="" />
                                
                                // <p className="text-center text-capitalize" style={{color:"grey",fontWeight:"500"}}>
                                //   {val.eventdate}
                                // </p>}




// <img src={val.img} height="300px" width="100%" alt="" onClick={()=>setshow(true)}/>  
//             <Lightbox
//       medium={val.img}
//       large={val.img}
//       show={show}
//       onClose={handleClose}
//     />


// import React, { Component } from 'react';
//  import { usePromiseTracker } from "react-promise-tracker";

//  const Gallery = (props) => {
//  const { promiseInProgress } = usePromiseTracker();

//   return (
//     <div>
//     {
//       (promiseInProgress === true) ?
//         <h3>Hey I'm a spinner loader wannabe !!!</h3>
//       :
//         <h1>Hello </h1>
//     }
//   </div>
//   )
// };

// export default Gallery;
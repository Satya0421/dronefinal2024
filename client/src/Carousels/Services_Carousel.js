
import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/styles";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ClassNames } from '@emotion/react';


const useStyles = makeStyles(theme => ({
   
    carousel:{
        display:"flex",
        flexDirection:"row",
        width:"100%",
        margin:"0.5%",
        // padding:"1%",
         // border:"solid blue 2px",
         alignItems:"center",
         // paddingBottom:"1%"
        
    },
    container:{
        // paddingLeft:"1%",
        // paddingRight:"1%",
        // marginBottom:"10px",
        width:"100%",
        display:"inline-block",
        backgroundColor:"inherit",
        // border:"solid red 2px"
    }
    // container:{
        
    //     marginBottom:"10px",
    //     width:"100%",
    //     display:"inline-block",
    //     backgroundColor:"inherit",
    //     // border:"solid red 2px"
    // }
}));


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.

  }
      
};



const Services_Carousel = () => {

    
    const classes = useStyles();

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
        <div className="slider-new-product" style={{margin:"0px",height:"inherit"}}>
          <div className="slide-new-product" style={{margin:"0px",height:"inherit"}}>
            <div className="prod-item new" style={{margin:"0px",height:"100%"}}>
              <div className="prod-thumbnail" style={{margin:"0px",height:"100%"}}>
                <div className="prod-img" style={{margin:"0px",height:"100%"}}>
                  <img src="img/prod-1.jpg" alt="img" height="inherit" style={{margin:"0px",height:"100%"}}/>
                  <ul className="prod-link-cover">
                    <li><a href="#"><i className="fa fa-play" aria-hidden="true"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
        
        </div>

        <div className="slider-new-product" style={{margin:"0px",height:"inherit"}}>
          <div className="slide-new-product" style={{margin:"0px",height:"inherit"}}>
            <div className="prod-item new" style={{margin:"0px",height:"100%"}}>
              <div className="prod-thumbnail" style={{margin:"0px",height:"100%"}}>
                <div className="prod-img" style={{margin:"0px",height:"100%"}}>
                  <img src="img/prod-1.jpg" alt="img" height="inherit" style={{margin:"0px",height:"100%"}}/>
                  <ul className="prod-link-cover">
                    <li><a href="#"><i className="fa fa-play" aria-hidden="true"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
        
        </div>
        <div className="slider-new-product" style={{margin:"0px",height:"inherit"}}>
          <div className="slide-new-product" style={{margin:"0px",height:"inherit"}}>
            <div className="prod-item new" style={{margin:"0px",height:"100%"}}>
              <div className="prod-thumbnail" style={{margin:"0px",height:"100%"}}>
                <div className="prod-img" style={{margin:"0px",height:"100%"}}>
                  <img src="img/prod-1.jpg" alt="img" height="inherit" style={{margin:"0px",height:"100%"}}/>
                  <ul className="prod-link-cover">
                    <li><a href="#"><i className="fa fa-play" aria-hidden="true"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
        
        </div>

    </Carousel>
    </div>
    );
}
export default Services_Carousel;

// /*
//  <Carousel
//     responsive={responsive}
//     ssr={true} // means to render carousel on server-side.
//     infinite={true}
//     autoPlay={true}
//     autoPlaySpeed={3000}
//     keyBoardControl={true}
//     transitionDuration={200}
//     containerClass="react-multi-carousel-list"
//     removeArrowOnDeviceType={["tablet", "mobile"]}
//     dotListClass="custom-dot-list-style"
//     itemClass={classes.carousel}
//     showDots = {false}
    
    
//     >
//         <div className="slider-new-product" style={{margin:"0px",height:"inherit"}}>
//           <div className="slide-new-product" style={{margin:"0px",height:"inherit"}}>
//             <div className="prod-item new" style={{margin:"0px",height:"100%"}}>
//               <div className="prod-thumbnail" style={{margin:"0px",height:"100%"}}>
//                 <div className="prod-img" style={{margin:"0px",height:"100%"}}>
//                   <img src="img/prod-1.jpg" alt="img" height="inherit" style={{margin:"0px",height:"100%"}}/>
//                   <ul className="prod-link-cover">
//                     <li><a href="#"><i className="fa fa-play" aria-hidden="true"></i></a></li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//         </div>
        
//         </div>

//         <div className="slider-new-product" style={{margin:"0px",height:"inherit"}}>
//           <div className="slide-new-product" style={{margin:"0px",height:"inherit"}}>
//             <div className="prod-item new" style={{margin:"0px",height:"100%"}}>
//               <div className="prod-thumbnail" style={{margin:"0px",height:"100%"}}>
//                 <div className="prod-img" style={{margin:"0px",height:"100%"}}>
//                   <img src="img/prod-1.jpg" alt="img" height="inherit" style={{margin:"0px",height:"100%"}}/>
//                   <ul className="prod-link-cover">
//                     <li><a href="#"><i className="fa fa-play" aria-hidden="true"></i></a></li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//         </div>
        
//         </div>
//         <div className="slider-new-product" style={{margin:"0px",height:"inherit"}}>
//           <div className="slide-new-product" style={{margin:"0px",height:"inherit"}}>
//             <div className="prod-item new" style={{margin:"0px",height:"100%"}}>
//               <div className="prod-thumbnail" style={{margin:"0px",height:"100%"}}>
//                 <div className="prod-img" style={{margin:"0px",height:"100%"}}>
//                   <img src="img/prod-1.jpg" alt="img" height="inherit" style={{margin:"0px",height:"100%"}}/>
//                   <ul className="prod-link-cover">
//                     <li><a href="#"><i className="fa fa-play" aria-hidden="true"></i></a></li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//         </div>
        
//         </div>
//         </Carousel>
// */

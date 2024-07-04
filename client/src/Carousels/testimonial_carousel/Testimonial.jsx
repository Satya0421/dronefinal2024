
import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/styles";

// import TestimonialCard from "./TestimonialCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ClassNames } from '@emotion/react';
import "./style.css";
import {useState,useEffect} from 'react';
import axios from "axios";
 import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer, toast } from 'react-toastify';
import API from '../../Api';

const useStyles = makeStyles(theme => ({
    
    carousel:{
        display:"flex",
        flexDirection:"row",
        width:"100%",
        // margin:"0.5%",
        // padding:"1%",
          //border:"solid blue 2px",
         alignContent:"center"
        
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
    container:{
        
        marginBottom:"10px",
        width:"100%",
        display:"inline-block",
        backgroundColor:"inherit",
         //border:"solid red 2px",

    }
}));


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  // tablet: {
  //   breakpoint: { max: 1024, min: 600 },
  //   items: 2,
  //   slidesToSlide: 1 // optional, default to 1.
  // },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.

  }
      
};



// 

        


const TestimonialCarousel = (props) => {

   
    const classes = useStyles();
    const [userData,setData] = useState([]);

    useEffect(()=>{
    
        verify();

                    },[]);


    const verify = async()=>{

     await axios
      .get(API+`/testimonials/${props.page}`)
      .then((response) => {
        
        //console.log(response)
        let data = response.data;
         //console.log(data);
        setData(data); 
        //console.log(userData)         
        
       })
         
      .catch((error) => {
        
        console.log("An error occurred:", error.response);

       
      })
      .finally(() => {
           // console.log(userData);

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
    /*itemClass= 'card1'*/
    showDots = {false}
    
    
    >
    
    {
        userData.map((val,index)=>{
            return(
            <div className="slide-testimonial"  style={{wordWrap: "break-word",height:"100%"}}>
            <div className="testimonial-item" style={{wordWrap: "break-word",height:"100%"}}>
              <img className="lazy" src={val.img} alt="img"  style={{
                                                                                    position: "relative",
                                                                                    zIndex: 1,
                                                                                    width: "100px",
                                                                                    height: "100px",
                                                                                    objectFit: "cover",
                                                                                    borderRadius: "50%",
                                                                                  }}/>
              <h5 className="name">{val.name}</h5>
              <div className="prof">{val.designation}</div>
              <div className="testimon-content" style={{wordWrap: "break-word"}}><div>{val.description} </div></div>

            </div>

          </div>

          );
        })

        }




    
    </Carousel>

    {

        //userData.map((val,index)=>{return(<div style={{border:"solid red 2px",color:"black"}}>{val.name}</div>)} )       
    }

    </div>
    );
}



// const TestimonialCarousel_Training = () => {

   
//     const classes = useStyles();
//     const [userData,setData] = useState([]);

//     useEffect(()=>{
    
//         verify();

//                     },[]);


//     const verify = async()=>{

//      await axios
//       .get(API+`/testimonials/training`)
//       .then((response) => {
        
//         //console.log(response)
//         let data = response.data;
//          //console.log(data);
//         setData(data); 
//         //console.log(userData)         
        
//        })
         
//       .catch((error) => {
        
//         console.log("An error occurred:", error.response);

       
//       })
//       .finally(() => {
//            // console.log(userData);

//         })
    
   
//   }
    




//     return (
//     <div className={classes.container}>
//     <Carousel
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
//     /*itemClass= 'card1'*/
//     showDots = {false}
    
    
//     >
    
//     {
//         userData.map((val,index)=>{
//             return(
//             <div className="slide-testimonial"  style={{wordWrap: "break-word",height:"100%"}}>
//             <div className="testimonial-item" style={{wordWrap: "break-word",height:"100%"}}>
//               <img className="lazy" src={val.img} alt="img"  style={{
//                                                                                     position: "relative",
//                                                                                     zIndex: 1,
//                                                                                     width: "100px",
//                                                                                     height: "100px",
//                                                                                     objectFit: "cover",
//                                                                                     borderRadius: "50%",
//                                                                                   }}/>
//               <h5 className="name">{val.name}</h5>
//               <div className="prof">{val.designation}</div>
//               <div className="testimon-content" style={{wordWrap: "break-word"}}><div>{val.description} </div></div>

//             </div>

//           </div>

//           );
//         })

//         }




    
//     </Carousel>

//     {

//         //userData.map((val,index)=>{return(<div style={{border:"solid red 2px",color:"black"}}>{val.name}</div>)} )       
//     }

//     </div>
//     );
// }



export  {TestimonialCarousel};






// import React,{useState} from 'react';
// import PropTypes from 'prop-types';
// import {makeStyles} from "@material-ui/styles";

// // import TestimonialCard from "./TestimonialCard";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { ClassNames } from '@emotion/react';
// import "./style.css";


// const useStyles = makeStyles(theme => ({
    
//     carousel:{
//         display:"flex",
//         flexDirection:"row",
//         width:"100%",
//         // margin:"0.5%",
//         // padding:"1%",
//          // border:"solid blue 2px",
//          alignContent:"center"
        
//     },
//     /*container:{
//         paddingLeft:"1%",
//         paddingRight:"1%",
//         marginBottom:"10px",
//         width:"100%",
//         display:"inline-block",
//         backgroundColor:"whiteSmoke",
//         border:"solid red 2px"
//     }*/
//     container:{
        
//         marginBottom:"10px",
//         width:"100%",
//         display:"inline-block",
//         backgroundColor:"inherit",
//         // border:"solid red 2px"
//     }
// }));


// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 2,
//     slidesToSlide: 1 // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 768 },
//     items: 2,
//     slidesToSlide: 1 // optional, default to 1.
//   },
//   // tablet: {
//   //   breakpoint: { max: 1024, min: 600 },
//   //   items: 2,
//   //   slidesToSlide: 1 // optional, default to 1.
//   // },
//   mobile: {
//     breakpoint: { max: 768, min: 0 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.

//   }
      
// };



// // 

        


// const TestimonialCarousel = () => {

    
//     const classes = useStyles();

    




//     return (
//     <div className={classes.container}>
//     <Carousel
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
//     /*itemClass= 'card1'*/
//     showDots = {false}
    
    
//     >
        // <div className="slide-testimonial"  style={{wordWrap: "break-word"}}>
        //     <div className="testimonial-item" >
        //       <img className="lazy" src="img/testimonials-2.png" alt="img"  style={{
        //                                                                             position: "relative",
        //                                                                             zIndex: 1,
        //                                                                             width: "100px",
        //                                                                             height: "100px",
        //                                                                             objectFit: "cover",
        //                                                                             borderRadius: "50%",
        //                                                                           }}/>
        //       <h5 className="name">Naveen More</h5>
        //       <div className="prof">Assistant Cinematographer</div>
        //       <div className="testimon-content" style={{wordWrap: "break-word"}}>I did attend Multirotor drone training -  Level 2, trainers are well qualified and taught me very well. I am completely satisified with the training, I would recommend for others who are passionate about drones to undergo training.</div>
        //     </div>
        //   </div>

// <div className="slide-testimonial" >
//             <div className="testimonial-item" >
//               <img className="lazy" src="img/testimonials-2.png" alt="img" style={{
//                                                                                     position: "relative",
//                                                                                     zIndex: 1,
//                                                                                     width: "100px",
//                                                                                     height: "100px",
//                                                                                     objectFit: "cover",
//                                                                                     borderRadius: "50%",
//                                                                                   }}/>
//                <h5 className="name">Pallatheri Padashekhara Samithi</h5>
//               <div className="prof">President</div>
//               <div className="testimon-content">We did invite team Multiplex Drone to demonstrate agricultural drone to our paddy field in pallatheri, Palakkad, kerala, it was very positive response from the farmers.</div><br></br>
//             </div>
//           </div>

// <div className="slide-testimonial" >
//             <div className="testimonial-item" >
//               <img className="lazy" src="img/testimonials-2.png" alt="img" style={{
//                                                                                     position: "relative",
//                                                                                     zIndex: 1,
//                                                                                     width: "100px",
//                                                                                     height: "100px",
//                                                                                     objectFit: "cover",
//                                                                                     borderRadius: "50%",
//                                                                                   }}/>
//               <h5 className="name">Muniraju Sorahunase</h5>
//               <div className="prof">Farmer</div>
//               <div className="testimon-content">5 liter medicine was sprayed over chrysanthemum flower for 0.5 acre, with just 6 min, this would bring revolution in the farming and am very happy with the spray quality</div><br></br><br></br>
//             </div>
//           </div>
    
//     </Carousel>
//     </div>
//     );
// }
// export default TestimonialCarousel;
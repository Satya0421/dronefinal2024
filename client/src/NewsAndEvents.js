import React, { useState } from 'react';
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
import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/styles";
import { ClassNames } from '@emotion/react';
import {Images_Carousel,Videos_Carousel} from './Carousels/NewsAndEvents_Carousel';
import CustomImageLoader from 'react-custom-image-loader.';
import { trackPromise } from 'react-promise-tracker';




function NewsAndEvents() {
  
  
  return (
<div  > 
  
 <div style={{marginTop:"0px"}}><ResponsiveAppBar /> </div> 



<section >
      <div className="container" style={{paddingTop:"10px",}}>
      <h2 style={{paddingTop:"10px",}}>Recent Posts</h2>
      <CustomImageLoader
    image={'img/favicon.png'}
    isLoaded={false}
    circle={false}
    
    animationType={'flash'}
/>
      <Images_Carousel />
       
        
        
        <Videos_Carousel page={"newsandevents"} />
          

      </div>
      
      

    </section>


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

export default NewsAndEvents;



/*<Carousel showThumbs={false} showStatus={false}>
                <div>
                    <img src="img/MD10H-img-1.jpg" />
                    
                </div>
                <div>
                    <img src="img/MD10H-img-2.jpg" />
                </div>
                <div>
                    <img src="img/MD10H-img-1.jpg" />
                </div>
            </Carousel>

<div className="page-title" style={{backgroundImage:"url(img/bg-page.jpg)"}}>
        <div className="container">
            <h1 className="title">NewsAndEvents</h1>
            <div className="breadcrumbs">
                <ul>
                    <li><a href="/">home</a></li>
                    <li>NewsAndEvents</li>
                </ul>
            </div>
        </div>
    </div> */ 
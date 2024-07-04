import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import 'jquery/dist/jquery.min.js';

// import $ from 'jquery';
// import Popper from 'popper.js';
import $ from 'jquery';
import Popper from 'popper.js';
import 'jquery/dist/jquery.min.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { usePromiseTracker } from "react-promise-tracker";
import SimpleReactLightbox from 'simple-react-lightbox';

// const LoadingIndicator = (props) => {
//   const { promiseInProgress } = usePromiseTracker();
//   return (
//     promiseInProgress && (
//       <div className="preloader_img">
//         <img src="img/favicon.png" className="loader" />
//       </div>
//     )
//   );
// };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <SimpleReactLightbox>
      <App />
  </SimpleReactLightbox>    
    
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//<i className="bi bi-chevron-double-up" style={{}}></i>
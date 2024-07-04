import React, { useState, useCallback, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RouterApp from "./Routes";
import Home from "./Home";
import ScrollToTop from "react-scroll-to-top";
import { BsChevronDoubleUp } from "react-icons/bs";
import { Helmet } from "react-helmet";
import axios from "axios";
import API from "./Api";

function App() {
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    let visitor = localStorage.getItem("Mdvisitors");
    //alert(visitor)
    if (visitor) {
      return;
    } else {
      localStorage.setItem("Mdvisitors", JSON.stringify(true));
      axios
        .post(API + `/visitors`)
        .then((res) => {
          //console.log(res.data.count);
        })
        .catch((err) => {
          //console.log(err.data)
        });
    }
  }, []);

  return (
    <div className="App">
      <Helmet>
        <title>Multiplex drones pvt ltd</title>
        <meta name="description" content="Multiplex drones pvt ltd" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <RouterApp />
      <ScrollToTop
        id="scrol-up"
        smooth
        component={<BsChevronDoubleUp size="20px" />}
        style={{
          borderRadius: "0px",
          boxShadow: "none",
          position: "fixed",
          bottom: "10px",
          right: "12px",
          backgroundColor: "#404040",
        }}
      />
    </div>
  );
}

export default App;

//            <img className="lazy" src="img/img-2.jpg" alt="img" />

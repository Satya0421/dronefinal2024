import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./bootstrap-grid.css";
import "./critical.css";
import "./font-awesome.min.css";
import "./index.css";
import "./slick.min.css";
import "./style.css";
import ResponsiveAppBar from "./AppBar";
import Footer from "./Footer";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css"; // import first
import { ToastContainer, toast } from "react-toastify"; // then this
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import API from "./Api";

function Products() {
  const [err, setErr] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setErr([]);
  };
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const sendEnquiryDetails = async (e) => {
    e.preventDefault();
    let objectOb = {
      name: e.target.yourname.value,
      contactnumber: e.target.yourphone.value,
      email: e.target.youremail.value,
      message: e.target.yourtext.value,
    };
    await axios
      .post(API + "/contactusenquiry", objectOb)
      .then((response) => {
        toast.success("Successfully Enquiry Submitted.", {
          position: "top-center",
        });

        e.target.yourname.value = "";
        e.target.yourphone.value = "";
        e.target.youremail.value = "";
        e.target.yourtext.value = "";
      })
      .catch((error) => {
        const Err = error.response.data
          .replace("contact validation failed:", "")
          .replace("contactnumber", "Contact Number");
        toast.error(Err, { position: "top-center" });
      });
  };

  return (
    <div>
      <div style={{ marginTop: "0px" }}>
        <ResponsiveAppBar />
      </div>
      <br />

      <div className="container" style={{ marginBottom: "1%", textAlign: "center" }}>
        <h2 style={{ paddingTop: "0px" }}>Our Products</h2>

        <section className="serv-block" style={{ padding: "5px 20px", width: "100%" }}>
          <a href="/md5q" className="serv-block-item" style={{ margin: "10px", width: "100%", height: "90%" }}>
            <span className="border-item"></span>
            <img className="lazy" src="img/img-1.png" alt="img" />
            <div className="serv-block-info">
              <h3>MD 5Q</h3>
              <span>Read More</span>
            </div>
          </a>
          <a href="/md10q" className="serv-block-item" style={{ margin: "10px", width: "100%", height: "90%" }}>
            <span className="border-item"></span>
            <img className="lazy" src="img/img-22.png" alt="img" />
            <div className="serv-block-info">
              <h3>MD 10Q</h3>
              <span>Read More</span>
            </div>
          </a>
        </section>

        <section className="serv-block" style={{ padding: "5px 20px", width: "100%" }}>
          <a href="/md10hv3" className="serv-block-item" style={{ margin: "10px", width: "100%", height: "90%" }}>
            <span className="border-item"></span>
            <img className="lazy" src="img/img-33.png" alt="img" />
            <div className="serv-block-info">
              <h3>MD-10H V3</h3>
              <span>Read More</span>
            </div>
          </a>
          <a href="/md10h" className="serv-block-item" style={{ margin: "10px", width: "100%", height: "90%" }}>
            <span className="border-item"></span>
            <img className="lazy" src="img/img-44.png" alt="img" />
            <div className="serv-block-info">
              <h3>MD 10H</h3>
              <span>Read More</span>
            </div>
          </a>
        </section>

        <section className="serv-block" style={{ padding: "5px 20px", width: "100%" }}>
          <a href="/ikshana" className="serv-block-item" style={{ margin: "10px", width: "100%", height: "90%" }}>
            <span className="border-item"></span>
            <img className="lazy" src="img/img-ikshan.png" alt="img" />
            <div className="serv-block-info">
              <h3>Ikshana</h3>
              <span>Read More</span>
            </div>
          </a>
          <a href="/chotabheem" className="serv-block-item" style={{ margin: "10px", width: "100%", height: "90%" }}>
            <span className="border-item"></span>
            <img className="lazy" src="img/chotabheem1.png" alt="img" />
            <div className="serv-block-info">
              <h3>ChotaBheem</h3>
              <span>Read More</span>
            </div>
          </a>
        </section>

        <section className="serv-block" style={{ padding: "5px 20px", width: "100%" }}>
          <a href="/fogstar" className="serv-block-item" style={{ margin: "10px", width: "100%", height: "90%" }}>
            <span className="border-item"></span>
            <img className="lazy" src="img/fogstar.png" alt="img" />
            <div className="serv-block-info">
              <h3>FogStar</h3>
              <span>Read More</span>
            </div>
          </a>
          <a href="/md16hv2" className="serv-block-item" style={{ margin: "10px", width: "100%", height: "90%" }}>
            <span className="border-item"></span>
            <img className="lazy" src="img/MD16H_V2.png" alt="img" />
            <div className="serv-block-info">
              <h3>MD-16H V2</h3>
              <span>Read More</span>
            </div>
          </a>
        </section>
      </div>

      <section className="s-contacts s-main-contacts">
        <div className="container s-anim">
          <h2 style={{ paddingTop: "0px" }}>Contact Us</h2>
          <form id="contactform" name="contactform" onSubmit={sendEnquiryDetails}>
            <ul className="form-cover" style={{ padding: "0px" }}>
              <li className="inp-name">
                <input
                  type="text"
                  name="yourname"
                  placeholder="Name"
                  style={{ color: "black" }}
                  pattern="^[a-zA-Z]+([\s][a-zA-Z]+)*$"
                  required
                  title="Please Enter only Alphabets without any numbers and special characters"
                />
              </li>
              <li className="inp-phone">
                <input
                  type="tel"
                  name="yourphone"
                  placeholder="Phone"
                  style={{ color: "black" }}
                  pattern="[0-9]{10}"
                  required
                  title="Please Enter Valid Contact Number"
                />
              </li>
              <li className="inp-email">
                <input
                  type="email"
                  name="youremail"
                  placeholder="Email"
                  style={{ color: "black" }}
                  required
                />
              </li>
              <li className="inp-text">
                <textarea
                  name="yourtext"
                  placeholder="Message"
                  style={{ color: "black" }}
                  required
                ></textarea>
              </li>
            </ul>
            <div className="checkbox-wrap">
              <div className="checkbox-cover">
                <input type="checkbox" required />
                <p style={{ color: "#000" }}>
                  I agree to use this information with the website.
                </p>
              </div>
            </div>
            <div className="btn-form-cover">
              <button className="quiry-btn">Submit</button>
            </div>
          </form>
          <div id="message"></div>
        </div>
      </section>

      <section>
        <Footer />
      </section>

      <ToastContainer />
      <a
        href="https://wa.me/916362900041"
        target="_blank"
        rel="noopener noreferrer"
        style={{ position: "fixed", bottom: 90, right: 10, zIndex: 1000 }}
      >
        <img className="whatsapp-icon" src="img/whatsapp.png" width="40px" alt="WhatsApp" />
      </a>
    </div>
  );
}

export default Products;

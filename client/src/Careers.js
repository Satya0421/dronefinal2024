import React, { useState, useEffect } from "react";
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
import { makeStyles } from "@material-ui/styles";
import { ClassNames } from "@emotion/react";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import API from "./Api";
import Modal from "react-bootstrap/Modal";
import $ from "jquery";
import Button from "react-bootstrap/Button";

function Careers() {
  const [item, setItem] = useState();
  const [userData, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [state, setStates] = useState();
  const [department, setDepartment] = useState();
  const [position, setPosition] = useState();
  const [dismiss, setDismiss] = useState();

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    getposts();
  }, []);

  const encodeImageFileAsURL = (e) => {
    e.preventDefault();

    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onloadend = function () {
      //console.log(reader.result)
      setItem(reader.result);
    };
    reader.readAsDataURL(file);
    //console.log(item)
  };

  const applyJob = async (e) => {
    e.preventDefault();

    let objectOb = {
      state: state,
      position: position,
      name: e.target.name.value,
      email: e.target.email.value,
      mobile: e.target.mobile.value,
      cv: item,
      qualification: e.target.qualification.value,
      msg: e.target.msg.value,
    };

    //console.log(objectOb)
    await axios
      .post(API + "/careers", objectOb)

      .then((response) => {
        //console.log(response.data);
        // navigate(`/`);

        e.target.state.value = "";
        e.target.position.value = "";
        e.target.name.value = "";
        e.target.email.value = "";
        e.target.mobile.value = "";
        e.target.qualification.value = "";
        e.target.msg.value = "";
        e.target.file1.value = "";

        setShow(false);

        toast.success("Successfully Submitted", { position: "top-center" });
      })
      .catch((error) => {
        //console.log("err",error.response.data.replace("enquiries validation failed:", "").split(",",20));
        //console.log(error.response);
        toast.error(error.response.data, { position: "top-center" });
        //setErr(error.response.data.replace("enquiries validation failed:", "").split(",",20))
      });
  };

  const getposts = async () => {
    //     const data1 = [
    //       { id: 1, name: "John Doe" },
    //       { id: 2, name: "Victor Wayne" },
    //       { id: 3, name: "Jane Doe" },
    //     ];
    // data1.map((val)=>{console.log(val)})
    await axios
      .get(API + "/careervacancy")
      .then((response) => {
        //console.log(response)
        let data = response.data;
        //console.log(data.data)
        setData(
          data
            .filter((valu) => {
              //console.log(search)
              //console.log(typeof valu.email)
              if (search === "") {
                return valu;
              } else if (
                valu.name.toLowerCase().includes(search.toLowerCase())

                //valu.name.toLowerCase() == search.toLowerCase()
                //valu.email.toLowerCase() === search.toLowerCase()
                // valu.email.toLowerCase().includes(search.toLowerCase())
              ) {
                //console.log("search");
                return valu;
              }
              //else{alert(`The result for the search value ${search} is not found`)}
            })
            .map((val, index) => {
              console.log(val);
              const id = val._id;
              //console.log(id);

              return (
                <tr key={index}>
                  <td className="td">{val.state}</td>
                  {
                    //<td className="">{val.department}</td>
                  }
                  <td className="">{val.position}</td>
                  <td className="">{val.qualification}</td>

                  <td className="" style={{ paddingLeft: "5%" }}>
                    {val.num}
                  </td>

                  <td style={{ padding: "1px" }}>
                    <button
                      className=" apply-btn"
                      style={{
                        color: "white",
                        backgroundColor: "#1da912",
                        border: "none",
                        width: "60px",
                        margin: "10px",
                        padding: "5px",
                      }}
                      onClick={() => {
                        setStates(val.state);
                        setDepartment(val.department);
                        setPosition(val.position);
                        setShow(true);
                      }}
                    >
                      Apply
                    </button>{" "}
                  </td>
                </tr>
              );
            })
        );
      })

      .catch((error) => {
        //console.log("An error occurred:", error.response);
      })
      .finally(() => {
        setLoading(false);
        setSearch("");
      });
  };
  return (
    <div id="home" className="">
      <div style={{ marginTop: "0px" }}>
        <ResponsiveAppBar />{" "}
      </div>

      <section>
        <div className="container">
          <h2 style={{ paddingTop: "10px" }}>Careers</h2>
          <div className="traininginfo">
            <h6
              className="sub-title"
              style={{ color: "black", textTransform: "none" }}
            >
              {" "}
              Interested to join our team, upload your CV we will get in touch
              with you
            </h6>
          </div>
        </div>
        <br />
      </section>

      <section>
        <div className="container" style={{ overflowX: "auto" }}>
          <table
            className="container"
            style={{ border: "solid green 2px", padding: "15px" }}
          >
            <thead style={{ backgroundColor: "#1da912", padding: "15px" }}>
              <tr style={{ color: "#fff" }} className="tr-th">
                <th scope="col" className="th">
                  <h6>State</h6>
                </th>

                <th scope="col" className="th">
                  <h6>Position</h6>
                </th>

                <th scope="col" className="th">
                  <h6>Qualification/Experience</h6>
                </th>

                <th scope="col" className="th">
                  <h6>No. of Vacancies</h6>
                </th>
                <th scope="col" className="th">
                  <h6>Apply</h6>
                </th>
              </tr>
            </thead>
            <tbody style={{ border: "solid green 1px", padding: "15px" }}>
              {userData}
            </tbody>
          </table>
        </div>
      </section>
      <br />
      <section>
        <Footer />
      </section>

      <Modal
        show={show}
        onHide={handleClose}
        style={{ paddingTop: "5px" }}
        className="grid-row"
      >
        <Modal.Header closeButton className="grid-row">
          <Modal.Title>Application Form</Modal.Title>
        </Modal.Header>
        <Modal.Body className="grid-row">
          <p>
            <h6
              className="grid-row-h"
              style={{
                color: "black",
                textAlign: "center",
                textTransform: "none",
              }}
            >
              Please Fill This Form
            </h6>
          </p>

          <form onSubmit={applyJob}>
            <Grid container spacing={1} style={{}} className="grid-row1">
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                style={{ textAlign: "left", fontWeight: "500" }}
              >
                <label>State</label>
                <input
                  className="grid-input"
                  name="state"
                  value={state}
                  disabled
                  type="text"
                  placeholder="Enter State"
                  style={{ Width: "100%", color: "black", paddingLeft: "10px" }}
                  required
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                style={{ textAlign: "left", fontWeight: "500" }}
              >
                <label>Position</label>
                <input
                  className="grid-input"
                  name="position"
                  value={position}
                  disabled
                  type="text"
                  placeholder="Enter Position"
                  style={{ Width: "100%", color: "black", paddingLeft: "10px" }}
                  required
                />
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                style={{ textAlign: "left", fontWeight: "500" }}
              >
                <label>Name</label>
                <input
                  className="grid-input"
                  name="name"
                  type="text"
                  placeholder="Enter Name"
                  style={{ Width: "100%", color: "black", paddingLeft: "10px" }}
                  pattern="^[a-zA-z]+([\s][a-zA-Z]+)*$"
                  required
                  title="Please Enter only Alphabets without any numbers and special characters"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                style={{ textAlign: "left", fontWeight: "500" }}
              >
                <label>Email</label>
                <input
                  className="grid-input"
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  style={{ Width: "100%", color: "black", paddingLeft: "10px" }}
                  required
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                style={{ textAlign: "left", fontWeight: "500" }}
              >
                <label>PhoneNumber</label>
                <input
                  className="grid-input"
                  name="mobile"
                  type="tel"
                  placeholder="Enter PhoneNumber"
                  pattern="[0-9]{10}"
                  title="Please Enter Valid Contact Number"
                  style={{ Width: "100%", color: "black", paddingLeft: "10px" }}
                  required
                />
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                style={{ textAlign: "left", fontWeight: "500" }}
              >
                <label>Qualification/Experience</label>
                <input
                  className="grid-input"
                  name="qualification"
                  type="text"
                  placeholder="Enter Qualification"
                  style={{ Width: "100%", color: "black", paddingLeft: "10px" }}
                  required
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                style={{ textAlign: "left", fontWeight: "500" }}
              >
                <label>Upload Your CV</label>
                <input
                  className="grid-input"
                  name="file1"
                  type="file"
                  style={{ color: "black", paddingLeft: "10px" }}
                  onChange={encodeImageFileAsURL}
                  required
                />
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ textAlign: "left", fontWeight: "500" }}
              >
                <label>Message</label>
                <textarea
                  className="grid-input"
                  name="msg"
                  type="text"
                  placeholder="Enter Description"
                  style={{
                    height: "90px",
                    width: "100%",
                    color: "black",
                    paddingLeft: "10px",
                  }}
                  required
                />
              </Grid>
            </Grid>{" "}
            <br />
            <Button
              type="submit"
              className=""
              style={{
                background: "#1da912",
                color: "#fff",
                border: "none",
                borderRadius: "0px",
              }}
            >
              Submit
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={handleClose}
            style={{
              background: "#1da912",
              color: "#fff",
              border: "none",
              borderRadius: "0px",
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Careers;

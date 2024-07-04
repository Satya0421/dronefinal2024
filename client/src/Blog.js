import React from "react";
import ResponsiveAppBar from "./AppBar";
import Footer from "./Footer";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

const Blogs = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  return (
    <>
      <div style={{ marginTop: "0px" }}>
        <ResponsiveAppBar />{" "}
      </div>
      <div className="container">
        <section
          className="about-top"
          style={{
            textAlign: " justify",
            paddingTop: "10px",
            paddingBottom: "0px",
          }}
        >
          <div
            className="row about-top-cover"
            style={{
              textAlign: " justify",
              paddingTop: "0px",
              paddingBottom: "0px",
            }}
          >
            <div className="col-10 "></div>

            <div className="col-10 about-info" style={{ textAlign: "center" }}>
            <h2 style={{ paddingTop: "0px" }}>Blogs</h2>
              <p>
                MD-10H drone is now DGCA-certified and ready for commercial
                sales & services
              </p>
            </div>
          </div>
        </section>
        <section
          className=" mask"
          style={{
            padding: "20px",
            backgroundImage: "url(blog.png)",
            backgroundSize: "100% 100%",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <section className="techspecs">
            <div className="container" style={{ textAlign: "center" }}>
              <div
                className="overviewinfo services-overviewinfo"
                style={{
                  textAlign: "",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    minWidth: "auto",
                    margin: "auto",
                  }}
                >
                  <p
                    style={{
                      color: "#fff",
                      textAlign: "justify",
                      color: "#dce1d7",
                      visibility: "hidden",
                    }}
                  >
                    Finding a problem to find skilled Labour?
                    <br />
                    Difficult to manage the pest control?
                    <br />
                    Difficult to give spray at correct time?
                  </p>
                </div>
              </div>
              <div
                className="overviewtitle services-overviewtitle"
                style={{
                  textAlign: "",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <div
                  className=""
                  style={{
                    textAlign: "center",
                    minWidth: "auto",
                    margin: "auto",
                  }}
                >
                  <p
                    style={{
                      color: "#fff",
                      textAlign: "justify",
                      color: "#dce1d7",
                      visibility: "hidden",
                    }}
                  >
                    Don't worry! Multiplex Drone Pvt Ltd is eager to make
                    farmers happy
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div
            className="container"
            style={{
              width: "100%",
              textAlign: "center",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <div
              className="servicestitle"
              style={{
                textAlign: "center",
                minWidth: "auto",
                margin: "auto",
              }}
            >
              <p
                className=""
                style={{
                  color: "#fff",
                  textAlign: "justify",
                  color: "#dce1d7",
                  visibility: "hidden",
                }}
              >
                1. Fill out the form or call to +91-9591999044
                <br />
                <br />
                2. Our experienced team will reach the location
                <br />
                <br />
                3. Site Inspection and our team complete the work
                <br />
                <br />
                4. Smiles on the farmer face
              </p>
              <br />
            </div>
          </div>
        </section>
        <div className="d-flex mt-5">
          <div>
            <p style={{ textAlign: "left", padding: "10px" }}>
              The MD-10H agricultural spraying drone, manufactured by Multiplex
              Drone Pvt. Ltd. (a subsidiary of Multiplex Group of Companies) is
              now DGCA Type Certified and ready for commercial sales & services.
              The MD-10H drone which is a Multirotor hexacopter, comes under the
              Small class.{" "}
            </p>

            <p style={{ textAlign: "left", padding: "10px" }}>
              This drone can carry 10 liter of water & agricultural inputs which
              is enough to spray 1 acre of farm land. Comparing with
              conventional spraying methods such as knapsack spraying, the
              MD-10H drone helps the farmer in saving water and prevents over
              uses of agricultural inputs. In conventional spraying method about
              200 liters of water-agri input mixture is required to spray only 1
              acre of agricultural land, whereas with for MD-10H drone, 10
              liters of water-agri input mixture is enough for spraying one acre
              agricultural land. After completing the spray of one acre agri
              land, the user can land the drone to refill and spray the next
              acre of agri land.
            </p>
          </div>
          <div>
            <p style={{ textAlign: "left", padding: "10px" }}>
              The MD-10H drone can fly up-to 15 minutes with a fully charged
              battery set. Within the 15 minutes flight time, the farmer can
              spray two acres of farm land which helps in time saving. Comparing
              with conventional spraying methods such as knapsack spraying, the
              farmer can save up-to 80% of time by using MD-10H drone for agri
              spraying. With conventional spraying methods such as knapsack
              spraying, two laborers can spray only 2 acres of farm land in a
              single day, whereas with the MD-10H agricultural spraying drone,
              the farmer can spray up-to 50 acres of land in one day. Each
              battery set takes only up-to 40 minutes for charging.
            </p>
            <p style={{ textAlign: "left", padding: "10px" }}>
              The foldable design of MD-10H drone makes it very compact, easy to
              carry and easy to transport. The light weight and strong carbon
              fiber structure with Nylon material makes the drone very strong
              and easily accessible. The structural weight of the drone is only
              about 9kg which can be carried by a single person easily. Also,
              the drone comes inside a strong box which can be easily fitted to
              the back side of any two-wheeler bike. So that even the
              small-scale farmers can easily carry the drone with their two
              wheelers.
            </p>
          </div>
        </div>
        {/* <div style={{ display: "flex", justifyContent: "center"}}> */}
        <TableContainer
          // sx={{ minWidth: 700, maxWidth: 900 }}
          component={Paper}
        >
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell align="right">
                  Conventional Spray
                </StyledTableCell>
                <StyledTableCell align="right">
                  MD-10H Drone Spray
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  Amount of area can be sprayed in 1 day
                </StyledTableCell>
                <StyledTableCell align="right">
                  2 Acre can be covered with 2 workers
                </StyledTableCell>
                <StyledTableCell align="right">
                  25 Acre can be covered with 1 MD-10H Drone
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  Time
                </StyledTableCell>
                <StyledTableCell align="right">3 hours/Acre</StyledTableCell>
                <StyledTableCell align="right">6 minutes/Acre</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  Water Consumption
                </StyledTableCell>
                <StyledTableCell align="right">200 lit./Acre</StyledTableCell>
                <StyledTableCell align="right">10 lit./Acre</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  Pesticide Utilization
                </StyledTableCell>
                <StyledTableCell align="right">
                  Over use of pesticide, wastage of pesticide
                </StyledTableCell>
                <StyledTableCell align="right">
                  Uses recommended doses, Zero wastage
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  Risk of exposure to chemical
                </StyledTableCell>
                <StyledTableCell align="right">100%</StyledTableCell>
                <StyledTableCell align="right">0.1 %</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  Uniform spraying
                </StyledTableCell>
                <StyledTableCell align="right">Not possible</StyledTableCell>
                <StyledTableCell align="right">
                  Uniform spraying
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
        {/* </div> */}
        <div className="d-flex mt-5">
          <div>
            <p style={{ textAlign: "left", padding: "10px" }}>
              Customer satisfaction, Quality spraying and Safety are the first
              priority of Multiplex Drone. Keeping all these in mind, we have
              integrated the MD-10H drone with different types of sensors such
              as Obstacle radar and terrain radar which help in uniform
              spraying, safe and easy operations. Also, the highly efficient
              spraying system of MD-10H drone, consists of powerful water pump
              and four nozzles, helps in uniform, cost effective pesticide
              spray. The drone spray system operates on nanotechnology,
              enhancing the efficacy of pesticides.
            </p>

            <p style={{ textAlign: "left", padding: "10px" }}>
              The MD-10H drone offers significant environmental benefits,
              including an 80 to 90% reduction in water usage, decreases over
              usage of chemical pesticides, and minimizes wastage. Additionally,
              users are completely safe from direct exposure to harmful
              chemicals, ensuring their safety.
            </p>
          </div>
          <div>
            <p style={{ textAlign: "left", padding: "10px" }}>
              The MD-10H drone has been tested for spraying over 58 different
              types of crops. The farmer can use the drone for spraying on any
              crop such as paddy, wheat, sugarcane, tomato, onion, potato,
              millets, soyabean, banana, mango, arecanut, tea etc. The drone can
              work at the temperature range between -15¬0 C to +550 C which
              makes it more useful. Whether it is a cold hill station or a warm
              tropical region, the drone can be used efficiently for spraying in
              any condition. Carbon Fiber, Nylon and Aluminum materials made
              drone structure helps to reduce the vibration and protects the
              drone from hard landing, crashes and tough weather conditions.
            </p>
            <p style={{ textAlign: "left", padding: "10px" }}>
              When the user purchases the MD-10H drone, the training is provided
              for free of cost. Also, the user gets the tool box, extra sets of
              propellers, allen key, screw driver etc. for drone maintenance.
              More importantly the user gets 24*7 customer support, All India
              Service and 50 years of trust of Multiplex Group.
            </p>
          </div>
        </div>
        <p style={{ textAlign: "left", padding: "10px" }}>
          Considering all the technical and commercial aspects, right now the
          MD-10H drone is the most ideal agricultural spraying drone in India.
          Considering the factors such as battery capacity, flight time, easy
          transportation, spraying efficiency, time and cost efficiency, MD-10H
          Drone is the best option for all types of farmers to invest now and
          gets good returns in future. By optimizing the day-to-day agricultural
          operations, it will help to increase the agricultural yield. Not only
          can the owner of the MD-10H drone spray their own farm land, but they
          can also assist other farmers with spraying.
        </p>
      </div>

      <section style={{}}>
        <Footer />
      </section>
    </>
  );
};

export default Blogs;
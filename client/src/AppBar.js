import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import "./bootstrap-grid.css";
import "./critical.css";
import "./font-awesome.min.css";
import "./index.css";
import "./slick.min.css";
import "./style.css";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { ClassNames } from "@emotion/react";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
// import Button from 'react-bootstrap/Button';

const useStyles = makeStyles((theme) => ({
  style: {
    backgroundColor: "#262c30",
    border: "solid red 2px",
    minWidth: "70px",
    width: "100%",
    padding: "0px",
    paddingRight: "20px",
    margin: "0px",
    textAlign: "center",
  },
  toggleColor: { color: "#fff" },
  container: {
    backgroundColor: "cyan",
    border: "solid red 2px",
    width: "100%",
    margin: "0px",
    marginRight: "0px",
  },
}));

const ResponsiveAppBar = () => {
  const classes = useStyles();
  const [modalShow, setModalShow] = React.useState(false);

  const [open, setOpen] = useState(false);

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#262c30",
          padding: "0px",
          minHeight: "70px",
          textAlign: "top-center",
          maxHeight: "70px",
          p: 0,
        }}
      >
        <Container maxWidth="xl" sx={{ textAlign: "center", height: "70px" }}>
          <Toolbar disableGutters sx={{ textAlign: "center", height: "100%" }}>
            <Box
              sx={{ flexGrow: 0 }}
              style={{
                float: "left",
                textAlign: "top-center",
                paddingRight: "0%",
              }}
            >
              <a href="/" className="logo">
                <img src="img/mainlogo.png" alt="logo" />
              </a>
            </Box>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              sx={{
                display: { xs: "block", md: "none" },
                padding: "0px",
              }}
              PaperProps={{
                style: {
                  position: "static",
                  top: "auto",
                  zIndex: 1,
                  marginRight: "0%",
                  marginTop: "69px",
                  float: "right",
                  backgroundColor: "#262c30",
                  borderRadius: "0px",
                },
              }}
            >
              <MenuItem className="activemenu">
                <li className="activeli">
                  <a href="/">Home</a>
                </li>
              </MenuItem>
              <MenuItem className="activemenu">
                <li className="activeli">
                  <a href="/about">About</a>
                </li>
              </MenuItem>
              <MenuItem className="activemenu">
                <li className="activeli">
                  <a href="/products">Products</a>
                </li>
              </MenuItem>
              <MenuItem className="activemenu">
                <li className="activeli">
                  <a href="/services">Services</a>
                </li>
              </MenuItem>
              <MenuItem className="activemenu">
                <li className="activeli">
                  <a href="/training">Training</a>
                </li>
              </MenuItem>
              <MenuItem className="activemenu">
                <li className="activeli">
                  <a href="/contact">Contact</a>
                </li>
              </MenuItem>
              <MenuItem>
                <ul className="header-icon" style={{ padding: "0px" }}>
                  <li className="search icon1" style={{}}>
                    <a className="icon" href="#" style={{ paddingLeft: "0px" }}>
                      <i
                        className="fa fa-search"
                        onClick={() => {
                          setModalShow(true);
                          setAnchorElNav(null);
                        }}
                      ></i>
                    </a>
                  </li>

                  <li className="favorites icon1" style={{}}>
                    <a
                      className="icon"
                      href="https://www.facebook.com/multiplexdrone/"
                      target="_blank"
                      style={{ textAlign: "center" }}
                    >
                      <i
                        className="fa fa-facebook"
                        aria-hidden="true"
                        style={{ textAlign: "center" }}
                      ></i>
                    </a>
                  </li>

                  <li className="icon1">
                    <a
                      className="icon"
                      href="https://www.youtube.com/channel/UCIwF0gAUl27P-6cahvTE7vw"
                      target="_blank"
                    >
                      <i className="fa fa-youtube" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="icon1">
                    <a
                      className="icon"
                      href="https://www.linkedin.com/company/multiplex-drone"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </MenuItem>
            </Menu>

            <Box
              sx={{
                flexGrow: 2,
                display: { xs: "none", md: "flex" },
                height: "100%",
                marginLeft: "10px",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  float: "left",
                  width: "80%",
                  paddingRight: "0%",
                  textAlign: "center",
                }}
              >
                <ul
                  className="header-icon"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <li className="link-head">
                    <a href="/">Home</a>
                  </li>
                  <li className="link-head">
                    <a href="/about">About</a>
                  </li>
                  <li className="link-head">
                    <a href="/products">Products</a>
                  </li>
                  <li className="link-head">
                    <a href="/services">Services</a>
                  </li>
                  <li className="link-head">
                    <a href="/blog">Blogs</a>
                  </li>
                  <li className="link-head" style={{ visibility: "visible" }}>
                    <a href="/training">Training</a>
                  </li>
                  <li className="link-head">
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </span>
              <span style={{ float: "right", width: "20%" }}>
                <ul className="header-icon">
                  <li
                    className="search icon1"
                    style={{ visibility: "visible" }}
                  >
                    <a className="icon" href="#">
                      <i
                        className="fa fa-search"
                        onClick={() => setModalShow(true)}
                      ></i>
                    </a>
                  </li>

                  <li
                    className="favorites icon1"
                    style={{ visibility: "visible" }}
                  >
                    <a
                      className="icon"
                      href="https://www.facebook.com/multiplexdrone/"
                      target="_blank"
                    >
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>

                  <li className="icon1" style={{ visibility: "visible" }}>
                    <a
                      className="icon"
                      href="https://www.youtube.com/channel/UCIwF0gAUl27P-6cahvTE7vw"
                      target="_blank"
                    >
                      <i className="fa fa-youtube" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="icon1" style={{ visibility: "visible" }}>
                    <a
                      className="icon"
                      href="https://www.linkedin.com/company/multiplex-drone"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </span>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="p"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <br />
            </Typography>
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                style={{ width: "inherit" }}
              >
                <MenuIcon sx={{ fontSize: 30 }} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <MGSCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};
export default ResponsiveAppBar;

function MGSCenteredModal(props) {
  const [search, setSearch] = useState([]);
  const navigate = useNavigate();
  const searches = [
    { searchTerm: "About", link: "/about" },
    { searchTerm: "Products", link: "/products" },
    { searchTerm: "Home", link: "/" },
    { searchTerm: "Services", link: "/services" },
    { searchTerm: "Blog", link: "/blog" },
    { searchTerm: "Contact", link: "/contact" },
    { searchTerm: "Careers", link: "/career" },
    { searchTerm: "Gallery", link: "/gallery" },
    { searchTerm: "NewsAndEvents", link: "/newsandevent" },
    { searchTerm: "Md10h", link: "/md10h" },
    { searchTerm: "Md10q", link: "/md10q" },
    { searchTerm: "Md16p", link: "/md16p" },
    { searchTerm: "Md5q", link: "/md5q" },
    { searchTerm: "Fogstar", link: "/fogstar" },
    { searchTerm: "Bheem", link: "/bheem" },
    { searchTerm: "Ikshana", link: "/ikshana" },
    { searchTerm: "ChotaBheem", link: "/chotabheem" },

    ,
  ];

  const getSearchList = () => {
    return searches
      .filter((val) => {
        if (search === "") {
          return;
        } else if (
          val.searchTerm.toLowerCase().includes(search.toLowerCase())
        ) {
          return val;
        }
      })
      .map((search) => {
        return (
          <li key={search._id} className="list-group-item text-capitalize">
            <a
              href={search.link}
              style={{
                textDecoration: "none",
                color: "#000",
                fontFamily: "Mulish",
                fontWeight: "700",
                fontSize: "14px",
                lineHeight: "18px",
              }}
            >
              {search.searchTerm}
            </a>
          </li>
        );
      });
  };

  const gotoPage = () => {
    let links = [
      "about",
      "products",
      "services",
      "blog",
      "contact",
      "career",
      "gallery",
      "newsandevent",
      "md10h",
      "md10q",
      "md16p",
      "md5q",
      "fogstar",
      "bheem",
      "ikshana",
      "chotabheem",
    ];
    // links.map((value)=>{
    //         if(search.toLowerCase()===value.toLowerCase()){
    //           return navigate(`/${search}`);
    //         }else if(search === ""){
    //           return ;
    //         } else{
    //           navigate(`/`)
    //         }
    // })
    if (search === "") {
      return;
    } else if (search.toLowerCase() == "home") {
      return navigate("/");
    } else {
      return navigate(`/${search.toLowerCase()}`);
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      style={{
        paddingTop: "10px",
        backgroundColor: "none",
        backgroundShadow: "none",
      }}
    >
      {
        <InputGroup
          className="mb-3"
          id="example-collapse-text"
          style={{
            position: "absolute",
            top: "70px",
            zIndex: "1",
            border: "solid green 1px",
            width: "100%",
          }}
        >
          <input
            type="search"
            className="form-control"
            placeholder="Search Here"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            style={{
              paddingLeft: "5px",
              borderColor: "#fff",
              backgroundColor: "#fff",
              height: "40px",
              borderRadius: "0px",
            }}
          />

          <InputGroup.Text
            id="basic-addon1"
            style={{
              backgroundColor: "green",
              color: "white",
              borderRadius: "0px",
            }}
          >
            <i
              className="fa fa-search"
              aria-hidden="true"
              onClick={() => {
                gotoPage();
              }}
            ></i>
          </InputGroup.Text>
        </InputGroup>
      }

      {
        // <div class="search">
        //   <input type="checkbox" id="trigger" class="search__checkbox" />
        //   <label class="search__label-init" for="trigger"></label>
        //   <label class="search__label-active" for="trigger"></label>
        //   <div class="search__border"></div>
        //   <input type="text" class="search__input" />
        //   <div class="search__close"></div>
        // </div>
      }

      <div>
        {search.length >= 1 ? (
          <ul
            className="list-group"
            style={{
              position: "absolute",
              top: "110px",
              zIndex: "0",
              width: "90%",
              borderRadius: "0px",
              marginLeft: "1px",
              marginRight: "50px",
            }}
          >
            {getSearchList()}
          </ul>
        ) : null}
      </div>
    </Modal>
  );
}

//

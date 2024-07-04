import * as React from 'react';
import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {Collapse} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import './bootstrap-grid.css';
import './critical.css';
import './font-awesome.min.css';
import './index.css';
import './slick.min.css';
import './style.css';
import { Link as RouterLink } from "react-router-dom";
import {makeStyles} from "@material-ui/styles";
import { ClassNames } from '@emotion/react';
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';


const useStyles = makeStyles(theme => ({
  style:{backgroundColor:"#262c30",border:"solid red 2px",minWidth:"70px",width:"100%",padding:"0px",paddingRight:"20px",margin:"0px",textAlign:"center"},
  toggleColor:{color:"#fff"},
  container:{backgroundColor:"cyan",border:"solid red 2px",width:"100%",margin:"0px",marginRight:"0px"}

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
       <AppBar position="static" sx={{backgroundColor:"#262c30",minHeight:"70px",maxHeight:"70px",p:0}}>
      <Container maxWidth="xl" sx={{height:"inherit"}}>
        <Toolbar disableGutters>
        <Box sx={{ flexGrow: 0,}}>
                                <a href="/" className="logo"><img src="img/mainlogo.png" alt="logo" /></a>
                              
            
          </Box>


 
                              
             <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none', },
               
                
    
              }}
              PaperProps={{
              style: {
               position:"static",
                top:"auto",
                zIndex: 1,
                marginLeft:"-0px", 
                marginTop:"69px",
                // width:"max-content",
                
                backgroundColor:"#262c30",
                borderRadius:"0px",
              }
            }}
            >
        <MenuItem className="activemenu" ><li className="activeli"  ><a href="/" >Home</a></li></MenuItem>
        <MenuItem className="activemenu"><li className="activeli"  ><a href="/about" >About</a></li></MenuItem>
        <MenuItem className="activemenu"><li className="activeli"><a href="/products">Products</a></li></MenuItem>
        <MenuItem className="activemenu"><li className="activeli"><a href="/services">Services</a></li></MenuItem>
        <MenuItem className="activemenu"><li className="activeli"><a href="/contact">Contact</a></li></MenuItem>
        <MenuItem className="activemenu"><li className="activeli"><a href="/contact">Contact</a></li></MenuItem>
        <MenuItem className="activemenu"><li className="activeli"><a href="/contact">Contact</a></li></MenuItem>
        <MenuItem><ul className="header-icon" >
                                          <li className="search">
                                            <a className="icon" href="#">
                                              <i className="fa fa-search"  onClick={() => setModalShow(true)}></i>
                                              </a>
               
                                          </li>
                                          <li className="favorites">
                                            <a className="icon" href="https://www.facebook.com/multiplexdrone/">
                                              <i className="fa fa-facebook" aria-hidden="true"></i>
                                            </a>
                                          </li>
                                          <li>
                                            <a className="icon" href="https://www.instagram.com/multiplexgroup/">
                                                <i className="fa fa-instagram" aria-hidden="true"></i>
                                              </a>
                                          </li>
                                          <li>
                                            <a className="icon" href="https://www.youtube.com/channel/UCIwF0gAUl27P-6cahvTE7vw">
                                              <i className="fa fa-youtube" aria-hidden="true"></i>
                                            </a>
                                          </li>
                                          <li>
                                            <a className="icon" href="https://www.linkedin.com/company/multiplex-drone">
                                              <i className="fa fa-linkedin" aria-hidden="true"></i>
                                            </a>
                                          </li>
                                        </ul></MenuItem>
                              
            </Menu>
          
         
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' },height:"inherit",}}>
                            <nav className="nav-menu">
                                  <ul className="nav-list">
                                    <li className="">
                                      <a href="/"></a>
                                    </li>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/products">Products</a></li>
                                    <li><a href="/services">Services</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                  </ul>
                                </nav>
                                
              
          </Box>
          

          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          
                   
          </Typography>
          <Box sx={{ flexGrow:0, display: { xs: 'flex', md: 'none' }}}>
            <IconButton
              
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              style={{width:"inherit"}}
            >
              <MenuIcon sx={{ fontSize:30}} />
            </IconButton>
           
          </Box>
        </Toolbar>
      </Container>
       
    </AppBar>






</>
  );
};
export default ResponsiveAppBar;


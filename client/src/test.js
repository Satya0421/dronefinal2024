import * as React from 'react';
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

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
    <AppBar position="static" sx={{backgroundColor:"#262c30",minHeight:"70px",maxHeight:"70px",p:0}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0,}}>
                                <a href="/" className="logo"><img src="img/mainlogo.png" alt="logo" /></a>
                              
            
          </Box>

          
        
          <Box sx={{  display: { xs: 'none', md: 'flex' },border:"solid red 2px" ,paddingRight:"20px",marginRight:"0px"}}>
          
<span>
<ul className="header-icon" ><li className="link-head">
                                      <a href="/">Home</a>
                                    </li>
                                    <li className="link-head"><a href="/about">About</a></li>
                                    <li className="link-head"><a href="/products">Products</a></li>
                                    <li className="link-head"><a href="/services">Services</a></li>
                                    <li className="link-head"><a href="/contact">Contact</a></li>
            </ul></span>

        <ul className="header-icon" >
            
                                  
                                          <li className="icon1">
                                            <a className="icon" href="#">
                                              <i className="fa fa-search"  ></i>
                                              </a>
               
                                          </li>
                                          <li className="  icon1">
                                            <a className="icon" href="https://www.facebook.com/multiplexdrone/">
                                              <i className="fa fa-facebook" aria-hidden="true"></i>
                                            </a>
                                          </li>
                                          <li className="  icon1">
                                            <a className="icon" href="https://www.instagram.com/multiplexgroup/">
                                                <i className="fa fa-instagram" aria-hidden="true"></i>
                                              </a>
                                          </li>
                                          <li className="  icon1">
                                            <a className="icon" href="https://www.youtube.com/channel/UCIwF0gAUl27P-6cahvTE7vw">
                                              <i className="fa fa-youtube" aria-hidden="true"></i>
                                            </a>
                                          </li>
                                          <li className="  icon1">
                                            <a className="icon" href="https://www.linkedin.com/company/multiplex-drone">
                                              <i className="fa fa-linkedin" aria-hidden="true"></i>
                                            </a>
                                          </li>
                                        </ul>


          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' },border:"solid green 2px",marginRight:"0px" }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
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
                                              <i className="fa fa-search"  ></i>
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

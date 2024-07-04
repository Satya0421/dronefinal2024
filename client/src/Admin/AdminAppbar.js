import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


export default function AdminApp(props) {
  const navigate = useNavigate();
  const logoutUser=()=>{
    sessionStorage.removeItem("regtoken");
    sessionStorage.removeItem("user");
    navigate(`/mdadmin`);
  }
  return (
    <Box sx={{ flexGrow: 1,width: '100%',marginRight:"auto"}}>
      <AppBar position="relative" sx={{backgroundColor:"#fff",width: '100%',border:"solid green 2px",padding:"0px"}}>
        <Toolbar sx={{ flexGrow: 1,width:"100%"}}>
        <img src="img/mainlogo.png" alt="" style={{marginLeft:0,width:250,height:50}}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
           <h2 style={{margin:"auto",textAlign:"center",padding:"0px",fontWeight:"700"}}>{props.title}</h2>
          </Typography>
           <Typography variant="h6" component="div" sx={{ flexGrow: 0.1}}>
           {props.title=="Dash Board"?null:<button className="quiry-btn" onClick={()=>{navigate(`/adminhome`)}}>Dash Board</button>}
                     

          </Typography>
          <button className="quiry-btn" onClick={logoutUser}>Log Out</button>
        </Toolbar>
      </AppBar>

    </Box>

  );
}
//#CFA660
// import { Button } from "@mui/material";
// import React from "react";

// function Nav(){
//     return(
//         <div className="nav">
//             <div className="left">
//             <a class="#mysite" href="#mysite">My Website</a>
//         </div> 
//         <div className="right">
//             <a class="active" href="#home">HOME</a>
//             <a href="#contact">CONTACT</a>
//             <a href="#about">ABOUT</a>
//         </div>   
//         </div>
        
//     )
// }
// export default Nav;
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DehazeIcon from "@mui/icons-material/Dehaze";


export default function Nav() {
  return (
    <Box className="Nav" sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#20232a" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography>My Website</Typography>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button color="inherit">HOME</Button>
            <Button color="inherit">ABOUT</Button>
            <Button color="inherit">CONTACT</Button>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Button sx={{ color: "white" }}>
              <DehazeIcon />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

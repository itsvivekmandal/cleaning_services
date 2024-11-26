import { Drawer, IconButton, Grid2, styled, Divider } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)({
  padding: "5px 10px",
  borderRadius: "5px",
  fontSize: "18px",
  color: "black",
  fontWeight: "bold",
  textDecoration: "none",
  transition: "background-color 0.3s ease, color 0.3s ease",
  "&:hover":{
    backgroundColor: "lightblue",
    color: "white"
  },
  "&.active": {
    backgroundColor: "blue",
    color: "white" 
  }
});

const MenuDrawer = () => {

  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  }

  return (
    <>
      <IconButton
        onClick={toggleDrawer}
      >
        <Menu />
      </IconButton>
      <Drawer
        open={drawer}
        onClose={toggleDrawer}
        sx={{'.MuiDrawer-paper': {width: "50%"}}}
      >
        <Grid2 container sx={{padding: "0px 15px"}}>
          <Grid2 size={{xs: 2, md: 2}}>
            <img src={logo} alt="logo" width="80" />
          </Grid2>
          <Divider width="100%" sx={{marginBottom: "10px"}} />
          <Grid2 container spacing={2}>
            <Grid2><StyledLink to="/">Home</StyledLink></Grid2>
            <Grid2><StyledLink to="/services">Services</StyledLink></Grid2>
            <Grid2><StyledLink to="/about">About Us</StyledLink></Grid2>
            <Grid2><StyledLink to="/contact">Contact Us</StyledLink></Grid2>
          </Grid2>
        </Grid2>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
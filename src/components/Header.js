import { AppBar, Toolbar, Grid2, styled} from "@mui/material";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import MenuDrawer from './MenuDrawer';

const StyledLink = styled(NavLink)({
  padding: "10px 15px",
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
    backgroundColor: "#498B43",
    color: "white" 
  }
});

const Header = () => {
  return (
    <AppBar elevation={10} position="sticky" sx={{bgcolor: "white"}}>
      <Toolbar>
        <Grid2 container spacing={4} justifyContent={"center"} alignItems={"center"} style={{width: "100%"}}>
          <Grid2 size={{xs: 2, md: 2}}>
            <img src={logo} alt="logo" width="80" />
          </Grid2>
          <Grid2 container size={{ md: 10}} sx={{display: {xs: "none", md: "flex"}}}>
            <Grid2><StyledLink to="/">Home</StyledLink></Grid2>
            <Grid2><StyledLink to="/services">Services</StyledLink></Grid2>
            <Grid2><StyledLink to="/about">About Us</StyledLink></Grid2>
            <Grid2><StyledLink to="/contact">Contact Us</StyledLink></Grid2>
          </Grid2>
          <Grid2 conatiner justifyContent={"right"} size={{xs: 10}} sx={{display: {xs: "flex", md: "none"}}}>
            <MenuDrawer />
          </Grid2>
        </Grid2>
      </Toolbar>
    </AppBar>
  );
};


export default Header;
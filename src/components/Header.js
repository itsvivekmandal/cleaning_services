import { AppBar, Toolbar, Grid2, styled} from "@mui/material";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)({
  fontSize: "18px",
  color: "black",
  fontWeight: "bold",
  textDecoration: "none"
});

const Header = () => {
  return (
    <AppBar position="static" color="white">
      <Toolbar>
        <Grid2 container spacing={4} justifyContent={"center"} alignItems={"center"} style={{width: "100%"}}>
          <Grid2 size={{sx: 4, md: 2}}>
            <img src={logo} alt="logo" width={80}/>
          </Grid2>
          <Grid2 container size={{sx: 8, md: 10}}>
            <Grid2><StyledLink to="/">Home</StyledLink></Grid2>
            <Grid2><StyledLink to="/services">Services</StyledLink></Grid2>
            <Grid2><StyledLink to="/about">About Us</StyledLink></Grid2>
            <Grid2><StyledLink to="/contact">Contact Us</StyledLink></Grid2>
          </Grid2>
        </Grid2>
      </Toolbar>
    </AppBar>
  );
};


export default Header;
import { Card, CardActionArea, CardContent, CardMedia, Grid2, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Heading from "./Heading";
import banner_1 from "../assets/banner_1.jpg";
import banner_2 from "../assets/banner_2.jpg";
import banner_3 from "../assets/banner_3.jpg";
import office_cleaning from "../assets/office_cleaning.webp";
import home_cleaning from "../assets/home_cleaning.webp";
import wall_cleaning from "../assets/wall_cleaning.webp";
import window_cleaning from "../assets/windows_balcony_cleaning.webp";
import floor_cleaning from "../assets/floor_cleaning.webp";
import { Link } from "react-router-dom";

const MyCarousel = () => {
  const items = [
    {
      name: "banner_1",
      banner: banner_1
    },
    {
      name: "banner_2",
      banner: banner_2
    },
    {
      name: "banner_2",
      banner: banner_3
    },
  ];

  return (
    <Grid2 container justifyContent={"center"} alignItems={"center"}>
      <Grid2 size={12}>
        <Carousel interval={1000} animation="slide" indicators={false}>
          {
            items.map((item, index) => (
              <img key={index}
                src={item.banner} 
                alt={item.name}
                style={{width: "100%", height: "auto"}}
              />
            ))
          }
        </Carousel>
      </Grid2>
    </Grid2>
  );

};

const cardItems = [
  {
    image: office_cleaning,
    name: "Office Cleaning",
    description: "Lizards are a widespread group of squamate reptiles, with over 600 species, ranging across all continents except Antarctica"
  },
  {
    image: home_cleaning,
    name: "Home Cleaning",
    description: "Lizards are a widespread group of squamate reptiles, with over 600 species, ranging across all continents except Antarctica"
  },
  {
    image: wall_cleaning,
    name: "Window Cleaning",
    description: "Lizards are a widespread group of squamate reptiles, with over 600 species, ranging across all continents except Antarctica"
  },
  {
    image: window_cleaning,
    name: "Wall Cleaning",
    description: "Lizards are a widespread group of squamate reptiles, with over 600 species, ranging across all continents except Antarctica"
  },
  {
    image: floor_cleaning,
    name: "Floor Cleaning",
    description: "Lizards are a widespread group of squamate reptiles, with over 600 species, ranging across all continents except Antarctica"
  },
  {
    image: floor_cleaning,
    name: "Floor Cleaning",
    description: "Lizards are a widespread group of squamate reptiles, with over 600 species, ranging across all continents except Antarctica"
  }
];

const Cards = ({image, name, description}) => {
  return (
    <Grid2 size={{xs: 12, sm: 6, md: 3}} sx={{padding: "15px"}}>
      <Card elevation={10} justifyContent="center" alignItems="center" >
        <Link to="/services" style={{textDecoration: "none", color: "inherit"}}>
          <CardActionArea sx={{justifyContent: "center", display: "flex", flexDirection: "column", padding: "15px"}}>
            <CardMedia 
              component="img"
              image={image}
              alt={name}
              sx={{width: "30%"}}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </Grid2>
  );
};

const Services = () => {
  return (
    <Grid2 spacing={2} container justifyContent={"center"} alignItems={"center"}>
      <Grid2 size={12}>
        <Heading heading="Services" color="#498B43" />
      </Grid2>
      {
        cardItems.map((item, index) => (
          <Cards key={index} {...item} />
        ))
      }
    </Grid2>
  )
};

const Home = () => {
  return (
      <>
        <MyCarousel />
        <Services />
      </>
  );
};

export default Home;
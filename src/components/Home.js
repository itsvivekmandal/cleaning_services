import { Card, CardActionArea, CardContent, CardMedia, Grid2, Paper, Typography } from "@mui/material";
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
import eco from '../assets/eco.png';
import satisfaction from '../assets/satisfaction.png';
import trust from '../assets/trust.png';
import { Link } from "react-router-dom";
import profile from '../assets/profile.jpg';
import stevejobs from '../assets/steve_jobs.jpg';

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
        <Heading heading="Services" />
      </Grid2>
      {
        cardItems.map((item, index) => (
          <Cards key={index} {...item} />
        ))
      }
    </Grid2>
  )
};

const WhyChoose = () => {
  return (
    <Grid2 container specing={2} justifyContent={"center"} alignItems={"center"} sx={{padding: '15px'}}>
      <Grid2><Heading heading="Why Choose Us" /></Grid2>
      <Grid2>
        <Paper elevation={10}>
          <Grid2 container specing={2} justifyContent={"center"} sx={{padding: "40px"}}>
            <Grid2 size={{xs: 12, md: 4}} padding={"15px"}>
              <img src={trust} alt="trust" style={{width: "30%"}} />
              <Typography gutterBottom variant="h4" component="div">
                Trusted Professionals
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                Our cleaning experts are carefully vetted and extensively trained to provide exceptional service. With a commitment to professionalism, reliability, and attention to detail, you can trust us to deliver spotless results every time.
              </Typography>
            </Grid2>
            <Grid2 size={{xs: 12, md: 4}} padding={"15px"}>
              <img src={eco} alt="eco" style={{width: "30%"}} />
              <Typography gutterBottom variant="h4" component="div">
                Eco-Friendly Excellence
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                We prioritize your health and the environment by using eco-friendly, non-toxic cleaning products. Our methods are safe for children, pets, and the planet, ensuring a clean and healthy space without compromising sustainability.
              </Typography>
            </Grid2>
            <Grid2 size={{xs: 12, md: 4}} padding={"15px"}>
              <img src={trust} alt="trust" style={{width: "30%"}} />
              <Typography gutterBottom variant="h4" component="div">
                Your Satisfaction
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                We are dedicated to exceeding your expectations. With transparent pricing, no hidden fees, and a 100% satisfaction guarantee, we ensure you're happy with the results. If there's ever an issue, we'll make it right!
              </Typography>
            </Grid2>
          </Grid2>
        </Paper>
      </Grid2>
    </Grid2>
  );
};

const testimonials = [
  {
    name: "Vivek Mandal",
    designation: "Software Engineer",
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    profile: profile
  },
  {
    name: "Steve Jobs",
    designation: "Software Engineer 2",
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Test 2",
    profile: stevejobs
  },
  {
    name: "Vivek Mandal 2",
    designation: "Software Engineer 3",
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Test 3",
    profile: stevejobs
  }
];

const Testimonials = () => {
  return (
    <Grid2 container justifyContent={"center"} alignItems={"center"} padding={"35px"}>
      <Grid2 size={{xs: 12, md: 12}}>
        <Heading heading="Testimonials" />
      </Grid2>
      <Grid2 size={{xs: 12, md: 8}}>
        <Paper elevation={10}>
          <Carousel indicators={false} interval={3000} animation="slide">
            {
              testimonials.map((testimonial, index) => (
                <Grid2 key={index} container justifyContent={"center"} alignItems={"center"}>
                  <Grid2 size={{xs: 12, md:4}} sx={{bgcolor: "#498B43"}} padding={"25px 15px"}>
                    <img src={testimonial.profile} alt={testimonial.name} style={{width: "150px", borderRadius: "50%"}}/>
                    <Typography variant="h5">{testimonial.name}</Typography>
                    <Typography variant="body1" color={"text.secondary"}>{testimonial.designation}</Typography>
                  </Grid2>
                  <Grid2 size={{xs: 12, md:8}}>
                    <Typography variant="body1" sx={{ fontSize: {xs: "1rem", md: "1.5rem"}}} padding={"25px 15px"}>
                      {testimonial.review}
                    </Typography>
                  </Grid2>
                </Grid2>
              ))
            }
          </Carousel>
        </Paper>
      </Grid2>
    </Grid2>
  );
};

const Home = () => {
  return (
      <>
        <MyCarousel />
        <Services />
        <WhyChoose />
        <Testimonials />
      </>
  );
};

export default Home;
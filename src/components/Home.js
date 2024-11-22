import { Grid2 } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import banner_1 from "../assets/banner_1.jpg";
import banner_2 from "../assets/banner_2.jpg";
import banner_3 from "../assets/banner_3.jpg";

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
  );

};

const Home = () => {
  return (
    <Grid2 container justifyContent={"center"} alignItems={"center"}>
      <Grid2 size={12}>
        <MyCarousel />
      </Grid2>
    </Grid2>
  );
};

export default Home;
import { Typography } from "@mui/material";

const Heading = ({heading, color}) => {
  return (
    <Typography
      variant="h4"
      sx={{textDecoration: "underline", textDecorationColor: color, textUnderlineOffset: "10px"}}
      padding={"15px 20px"}
    >
      {heading}
    </Typography>
  );
};

export default Heading;
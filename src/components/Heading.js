import { Typography } from "@mui/material";

const Heading = ({heading, color}) => {
  return (
    <Typography
      variant="h4"
      sx={{textDecoration: "underline", textDecorationColor: color, textUnderlineOffset: "10px"}}
      padding={"25px"}
    >
      {heading}
    </Typography>
  );
};

Heading.defaultProps = {
  heading: 'Your Heading',
  color: '#498B43'
};

export default Heading;
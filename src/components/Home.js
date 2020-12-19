import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  title: {
    color: "black",
  },
  subtitle: {
    color: "black",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "static",
    marginLeft: "240px",
    textAlign: "center",
    height: "90vh",
    display: "flex",
    flexDirection:"column",
    justifyContent:"center",
    zIndex: 1,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>

      <Typography className={classes.title} variant="h1">
        Jonathan Villa
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        Full Stack Developer
      </Typography>
    </Box>
  );
};

export default Home;

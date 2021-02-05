import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  rootContainer: {
    position: "relative",
    marginTop: "80px",
    backgroundColor: "transparent",
    height: "95vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,

    [theme.breakpoints.down("xs")]: {
        flexDirection:"column",
        justifyContent:"flex-start",
        height:"100%", 

    },
  },
  heading: {
    position: "relative",
  },
  headingWrap: {
    top: "-4em",
    position: "relative",
    width: "100%",
    height: "fit-content",
    display: "flex",
    alignItems: "center",
    paddingRight: "20px",

    [theme.breakpoints.down("xs")]: {
      top: "0%",
    },
  },

  txtHeading: {
    fontSize: "4.5rem",
    width: "100%",
    height: "auto",

    [theme.breakpoints.down("md")]: {
      fontSize: "4.0rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "3.0rem",
    },
  },

  txtSubHeading: {
    width: "100%",
    maxHeight: "auto",
    fontSize: "2.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4rem",
    },
  },
  imgSvgWrapper: {
    height: "400px",
    width: "400px",
    display: "flex",
    justifyContent: "center",
  },
  svg: {
    width: "100%",
    height: "100%",
  },
}));

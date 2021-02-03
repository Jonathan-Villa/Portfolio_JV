import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    marginTop: "80px",
    backgroundColor: "transparent",
    height: "60vh",
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    zIndex: 1,
  },
  heading:{
    position:"relative"
  },
  headingWrap: {
    position: "relative",
    width: "100%",
    height: "fit-content",
    display: "flex",
    alignItems: "center",
  },

  txtHeading: {
    position:"relative",
    fontFamily: "Merriweather, serif",
    fontFamily: "Noto Sans SC, sans-serif",
    width: "100%",
    maxHeight:"auto"
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

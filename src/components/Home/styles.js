import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    position: "static",
    marginTop: "68px",
    backgroundColor: "#ffff",
    height: "80vh",
    width: "100%",
    display: "flex",
    zIndex: 1,
  },
  headingWrap: {
    position: "static",
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
  },
  heading: {
    display:"flex",
    flexDirection:"column",
    alignItems:"flex-start",
    width: "auto",
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

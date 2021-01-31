import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    marginTop: "80px",
    backgroundColor: "transparent",
    height: "60vh",
    width: "100%",
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    zIndex: 1,
  },
  headingWrap: {
    position: "static",
    width: "100%",
    height: "fit-content",
    display: "flex",
    alignItems: "center",
  },
  heading: {
    color:"#fff",
    display:"flex",
    flexDirection:"column",
    alignItems:"flex-start",
    width: "auto",
  },
  txtHeading:{
    fontFamily: "Varela Round, san serif",
    width:"100%"
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

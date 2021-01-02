import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    position: "static",
    marginTop:"68px",

    backgroundColor: "#ffff", 
    textAlign: "center",
    height: "100vh",
    width:"100%",
    alignItems:"flex-start",
    display: "flex",
    flexDirection:"column", 
    zIndex: 1,
  },
  titlesContainer:{
    width:"100%",
    height:"400px",
  }, 
  title: {
    height:"400px",
    color: "black",
  }
}));

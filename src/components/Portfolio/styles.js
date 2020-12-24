import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
    mainContainer: {
      position: "static",
      background: "#ffff",
      height: "100%",
      width: "90%",

      display:"flex",
      flexWrap:"wrap",
      justifyContent:"space-evenly",
      marginTop:"20px"

    },
    cardContainer: {
      maxWidth: 370,
      height:"auto",
      margin: "3rem auto",
    },
  }));
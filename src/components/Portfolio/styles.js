import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
    mainContainer: {
      position: "static",
      background: "#ffff",
      height: "100%",
      width: "auto",
    },
    cardContainer: {
      maxWidth: 345,
      margin: "3rem auto",
    },
  }));
import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "3%",
    paddingBottom: "3%",
  },

  gridContainerCardWrapper: {
    display: "flex",
    width: "100%",
    height: "auto",
    margin: "auto",
  },
  gridItemCardWrapper: {
    boxSizing: "border-box",
    padding: "10px",
  },
  cardWrapper: {
    display: "flex",
    flexDirection: "column",
    minHeight: "350px",
    height: "100%",
    opacity:"0",
    transition:".5s",

    [theme.breakpoints.down("sm")]: {},
  },
  mediaCard: {
    flex: 1,
    height: 0,
    paddingTop: "56.25%",
    objectFit: "contain",
  },

  cardContentWrapper: {
    flex: 1,

    [theme.breakpoints.down("xs")]: {
      flex: 0,
    },
  },
  btnCardWrapper: {
    flex: 1,

    [theme.breakpoints.down("sm")]: {
      flex: 0,
    },
  },
}));

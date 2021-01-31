import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop:"7%"
  },
  images: {
    display: "flex",
    width: "100%"
  },
  btnHide: {
    display: "none",
  },
  imageWrapper: {
    position: "relative",
    display: "block",
    borderRadius: 0,
    height: "30em",

    "&:hover": {
      zIndex: 1,
    },
    "&:hover $imageBackdrop": {
      opacity: 0.15,
    
    },
    "&:hover $imageMarked": {
      opacity: 0,
    },
    "&:hover $imageTitle": {
      border: "4px solid #ffff",
      transition: ".2s ease",
    },
    "&:hover $btnHide": {
      display: "block",
      color: "#ffff",
    },
  },
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width:"100%",
    color: theme.palette.common.white,
  },
  imageSrc: {
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    transition: ".3s ease",
    fontFamily: "Varela Round, san serif",
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

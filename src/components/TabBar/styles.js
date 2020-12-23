import { makeStyles, withStyles, Tab, Tabs } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "inherit",
    height: "100%",
  },
  navBar: {

    height: "auto",
    width: " 100%",

  },
  paper: {
    width: "auto",

    backgroundColor: "inherit",

  },
}));

export const AntTabs = withStyles({
  root: {
    background: "inherit",
  },

  indicator: {
    backgroundColor: "#1778F2",
  },
})(Tabs);

export const AntTab = withStyles((theme) => ({
  root: {
    height: "48px",
    minWidth: "130px",
    margin: "4px 0px",
    borderRadius: "20px",
    marginRight: theme.spacing(2),
  
    "&$selected": {
      color: "#1778F2",
    },
    "&:focus": {
      color: "#1778F2",
    },
  },
  selected: {},
}))((props) => <Tab title={props.title}  {...props} />);

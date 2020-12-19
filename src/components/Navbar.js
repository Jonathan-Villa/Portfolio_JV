import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { CssBaseline, Hidden } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/icons/Menu";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  // drawer style
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
      background: "#ffff",
    },
  },
  // app bar style
  appBar: {
    background: "#212529",
    position: "static",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      position: "static",
    },
  },
  // Menu style
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // Handles content within
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    background: "#212529",
    width: drawerWidth,
  },
  collapse: {
    background: "#f8f9fa",
  },
  listItem: {
    "&:hover": {
      backgroundColor: "#495057",
    },
  },
  links: {
    textDecoration: "none",
    fontSize: "18px",
    width: "100%",
    height: "30px",
    display: "block",
    color: "#ffff",
  },
  linksCollapse: {
    marginLeft: "10px",
    height: "27px",
    fontSize: "15px",
    textDecoration: "none",
    color: "black",
    display: "block",
  },
}));

const menuItems = [
  { listText: "Home", listPath: "/" },
  { listText: "Resume", listPath: "/resume" },
  { listText: "Portfolio", listPath: "/portfolio" },
  { listText: "Contact", listPath: "/contact" },
];

const Navbar = (props) => {
  const { window } = props;
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const classes = useStyles();

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        {menuItems.map((item, i) => (
          <ListItem button key={i} className={classes.listItem}>
            <Link className={classes.links} to={item.listPath}>
              {item.listText}
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start"  className={classes.menuButton} onClick={() => setMobileOpen(!mobileOpen)}>
            <Menu />
          </IconButton>
          <Typography variant="h5" noWrap>
            Jonathan's Portfolio
          </Typography>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
      
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

export default Navbar;

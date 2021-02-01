import React, { useState } from "react";
import { AppBar, List, ListItem } from "@material-ui/core";
import { useStyles } from "./styles";
import { Link } from "react-scroll";
import IconButton from "@material-ui/core/IconButton";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./styles.css";

const linkItems = [
  { title: "Home", to: "home" },
  { title: "Portfolio", to: "portfolio" },
  { title: "Resume", to: "resume" },
];

const fontSizeLink = {
  fontSize: "1.2rem",
  fontFamily: "Merriweather, serif",
  fontFamily: "Noto Sans SC, sans-serif",
};

const menuDisplay = {
  transform: "translateX(0px)",
  transition: ".4s ease",
};

const menuDisable = {
  transform: "translateX(-200px)",
  transition: ".4s ease",
};

function NavBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleMenuClick = () => {
    setOpen(!open);
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      {open ? (
        <div className={classes.mobileDisableWrapper}>
          <IconButton className={classes.btnMenu} onClick={handleMenuClick}>
            <AiOutlineMenu size="30px" fill="#fff" />
          </IconButton>
        </div>
      ) : null}
      <nav id="deskTopNav" className={classes.desktopNavBar}>
        <div className={classes.desktopLogoWrapper}>
          <span>
            <a className={classes.topNavLogo} href="/">
              JV
            </a>
          </span>
        </div>
        <DrawerList />
      </nav>
      
      <div className={classes.backDrop}>
        <nav
          className={classes.mobileDrawer}
          style={open ? menuDisable : menuDisplay}
        >
          <div className={classes.btnMobileMenu}>
            <IconButton onClick={handleMenuClick}>
              <AiOutlineClose size="30px" />
            </IconButton>
          </div>

          <DrawerList />
        </nav>
      </div>
    </AppBar>
  );
}

const DrawerList = () => {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      {linkItems.map((m, key) => (
        <ListItem className={classes.link} key={key}>
          <Link style={fontSizeLink} to={m.to} smooth={true} duration={1000}>
            {m.title}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export { NavBar };

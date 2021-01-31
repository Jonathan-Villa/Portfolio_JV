import React, { useState } from "react";
import { AppBar, List, ListItem } from "@material-ui/core";
import { useStyles } from "./styles";
import { Link } from "react-scroll";
const linkItems = [
  { title: "Home", to: "home" },
  { title: "Portfolio", to: "portfolio" },
  { title: "Resume", to: "resume" },
];

const fontSizeLink = {
  fontSize:"1.2rem"
}

function NavBar() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <nav className={classes.topNavBar}>
        <div className={classes.topNavBarLogoWrapper}>
          <span>
            <a className={classes.topNavLogo} href="/">
              JV
            </a>
          </span>
        </div>

        <List className={classes.list}>
          {linkItems.map((m, key) => (
            <ListItem className={classes.link} key={key}>
              <Link style={fontSizeLink} to={m.to} smooth={true} duration={1000}>
                {m.title}
              </Link>
            </ListItem>
          ))}
        </List>
      </nav>
    </AppBar>
  );
}

export { NavBar };

import React, { useState, useRef, useMemo } from "react";

import { AppBar, List, ListItem } from "@material-ui/core";
import { useStyles } from "./styles";
import { Link } from "react-scroll";

const linkItems = [
  { title: "Home", to: "home" },
  { title: "Portfolio", to: "portfolio" },
  { title: "Resume", to: "resume" },
  { title: "Contact", to: "contact" },
];


function NavBar() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleTabClick = (e, newValue) => {
    setValue(newValue);
  };

  return (

      <AppBar position="fixed" elevation={0} className={classes.appBar}>
        <List component="nav" className={classes.list}>
          {linkItems.map((m, key) => (
            <ListItem button component="a"  className={classes.link} key={key}>
              <Link to={m.to} smooth={true} duration={2000} />
              {m.title}
            </ListItem>
          ))}
        </List>
      </AppBar>

  );
}

export { NavBar };

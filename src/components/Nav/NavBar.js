import React, { useState } from "react";
import { AppBar, ListItem, List, Typography, Tab, Button } from "@material-ui/core";
import { Link } from "react-scroll";
import { useStyles } from "./styles";
const linkItems = [
  { title: "Home", to: "home" },
  { title: "Portfolio", to: "portfolio" },
  { title: "Resume", to: "resume" },
  { title: "Contact", to: "contact" },
];

function NavBar() {
  const classes = useStyles();
  const [value, setValue] = useState(0)



  return (
    <AppBar position="static" className={classes.appBar}>
      <List className={classes.list}>
        {linkItems.map((m, key) => (

          <Link className={classes.link} to={m.to} key={key} smooth duration={1000}>
            <Button  >
              {m.title}
            </Button>
          </Link>
        ))}
      </List>
    </AppBar>
  );
}

export { NavBar };

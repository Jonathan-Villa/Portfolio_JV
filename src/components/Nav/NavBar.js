import React, {useState} from "react";
import { AppBar, ListItem, List, Typography, Tab, Tabs } from "@material-ui/core";
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


  const handleChange =(e, newValue)=> {
    setValue(newValue)
  }

  return (
    <AppBar position="static" className={classes.appBar}>
      <Tabs value={value} onChange={handleChange} className={classes.list}>
        {linkItems.map((m, key) => (
          <Tab label={m.title}  className={classes.listItem} key={key} button>
            <Link to={m.to} smooth duration={1000}/>
          </Tab>
        ))}
      </Tabs>
    </AppBar>
  );
}

export { NavBar };

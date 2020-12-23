import React, { useState } from "react";
import { CssBaseline, AppBar, Tooltip, Paper } from "@material-ui/core";
import { useStyles, AntTab, AntTabs } from "./styles";
import { tabItems } from "./tabItems";
function Navbar() {
  const [value, setValue] = useState(0)
  const classes = useStyles();

  const handleChange = (e, newValue)=>{
    setValue(newValue)
  }

  return (
    <AppBar position="static" className={classes.appBar}>
      <nav className={classes.navBar}>
        <Paper className={classes.paper} elevation={0}>
          <AntTabs
          value={value}
            onChange={handleChange}
            variant="standard"
            indicatorColor="primary"
            textColor="primary"
          >
            {tabItems.map((m, key) => (
              <Tooltip placement="bottom" title={m.tip} key={key} >
                <AntTab title={m.title} />
              </Tooltip>
            ))}
          </AntTabs>
        </Paper>
      </nav>
    </AppBar>
  );
}

export default Navbar;

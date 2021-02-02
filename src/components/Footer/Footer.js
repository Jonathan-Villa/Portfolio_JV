import React from "react";
import {
  Container,
  List,
  Button,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import { Link } from "react-scroll";
import { useStyles } from "./styles";

import { nav, icons } from "./listItems";
const Footer = () => {
  const classes = useStyles();

  return (
    <Container disableGutters className={classes.mainContainer} maxWidth="xl">
      <Container className={classes.subContainer} maxWidth="md">
        <div className={classes.footerTopWrapper}>
          <nav>
            <List className={classes.list}>
              {nav.map((m, key) => (
                <Button disableRipple key={key} variant="text">
                  <Link
                    className={classes.link}
                    to={m.to}
                    smooth={true}
                    duration={1000}
                  >
                    {m.title}
                  </Link>
                </Button>
              ))}
            </List>
          </nav>
        </div>
        <div className={classes.footerBottomWrapper}>
          <span
            style={{
              alignSelf: "flex-end",
              fontSize: ".75rem",
              color: "#ffff",
              fontFamily: "Merriweather, serif",
              fontFamily: "Noto Sans SC, sans-serif",
            }}
          >
            @ 2021 Jonathan Villa. All Rights Reserved.
          </span>

          <List className={classes.btnIconList}>
            {icons.map((m, key) => (
              <Tooltip title={m.title} key={key}>
                <IconButton href={m.link} className={classes.btnIcons}>
                  {m.icon}
                </IconButton>
              </Tooltip>
            ))}
          </List>
        </div>
      </Container>
    </Container>
  );
};

export { Footer };

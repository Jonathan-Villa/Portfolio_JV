import React from "react";
import {
  Container,
  List,
  Button,
  IconButton,
  Tooltip,
  Divider,
} from "@material-ui/core";
import { Link } from "react-scroll";
import { useStyles } from "./styles";

import { nav, icons } from "./listItems";
const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <Divider variant="fullWidth" />
      <Container className={classes.subContainer} maxWidth="lg">
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
              color: "#000",
              fontFamily: "Merriweather, serif",
              fontFamily: "Noto Sans SC, sans-serif",
            }}
          >
            @ 2021 Jonathan Villa. All Rights Reserved.
          </span>

          <List className={classes.btnIconList}>
            {icons.map((m, key) => (
              <IconButton key={key} href={m.link} className={classes.btnIcons}>
                {m.icon}
              </IconButton>
            ))}
          </List>
        </div>
      </Container>
    </>
  );
};

export { Footer };

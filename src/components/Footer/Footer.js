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
import ContactForm from "./ContactForm";
import { nav, icons } from "./listItems";
import Grid from "@material-ui/core/Grid";

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <Divider variant="fullWidth" />
      <Container className={classes.mainContainer} maxWidth="lg">
        <div className={classes.subWrapper}>
          <ContactForm />

          <div className={classes.verticalDividerWrapper}>
            <div className={classes.dividerDiv}>
              <Divider className={classes.divider} orientation="vertical" />
            </div>

            <div style={{textTransform:"lowercase"}}>
              <span>or</span>
            </div>
            <div className={classes.dividerDiv}>
              <Divider className={classes.divider} orientation="vertical" />
            </div>
          </div>


          <Grid item xs={12} lg={6} className={classes.footerTopWrapper}>
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

            <div className={classes.listWrapper}>
              <List className={classes.btnIconList}>
                {icons.map((m, key) => (
                  <IconButton
                    key={key}
                    href={m.link}
                    className={classes.btnIcons}
                  >
                    {m.icon}
                  </IconButton>
                ))}
              </List>
            </div>
          </Grid>
        </div>
        <div className={classes.footerBottomWrapper}>
          <div style={{ gridColumn: "1" }}>
            <span
              style={{
                paddingRight: "8px",
                alignSelf: "flex-end",
                fontSize: ".75rem",
                color: "#000",
                fontFamily: "Merriweather, serif",
                fontFamily: "Noto Sans SC, sans-serif",
                textAlign: "left",
              }}
            >
              @ 2021 Jonathan Villa. All Rights Reserved.
            </span>
          </div>
        </div>
      </Container>
    </>
  );
};

export { Footer };

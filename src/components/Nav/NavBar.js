import React, { useState, useEffect, useRef } from "react";
import { AppBar, List, ListItem } from "@material-ui/core";
import { useStyles } from "./styles";
import { Link } from "react-scroll";
import IconButton from "@material-ui/core/IconButton";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./styles.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);
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

function NavBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    gsap.to(ref.current, {
      backgroundColor:"#48cae4",
      boxShadow:
        "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
      color: "#ffff",
      duration: 0.3,

      scrollTrigger: {
        id: "appBarID",
        start: "top+=10",
        end: "top top",
        toggleActions: "restart none none reset",
      },
    });
  }, []);

  const handleMenuClick = () => {
    setOpen(true);
  };
  const handleMenuClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <div className={classes.mobileDisableWrapper}>
          {open ? (
            <IconButton className={classes.btnMenu} onClick={handleMenuClose}>
              <AiOutlineClose size="30px" fill="#000000" />
            </IconButton>
          ) : (
            <IconButton className={classes.btnMenu} onClick={handleMenuClick}>
              <AiOutlineMenu size="30px" fill="#000000" />
            </IconButton>
          )}
        </div>
        <nav
          id="appBarID"
          ref={ref}
          id="deskTopNav"
          className={classes.desktopNavBar}
        >
          <div className={classes.desktopLogoWrapper}>
            <span>
              <a className={classes.topNavLogo} href="/">
                JV
              </a>
            </span>
          </div>
          <DrawerList />
        </nav>
      </AppBar>

      <div>
        <nav
          className={classes.mobileDrawer}
          style={open === true ? menuDisplay : null}
        >
          <div className={classes.listMobileWrapper}>
            <DrawerList />
          </div>
        </nav>

        <div
          onClick={handleMenuClose}
          className={open === true ? "overlay" : null}
        />
      </div>
    </>
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

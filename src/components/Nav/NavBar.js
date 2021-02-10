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
  { title: "Portfolio", to: "projects" },
  { title: "Resume", to: "resume" },
];

const fontSizeLink = {
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

  useEffect(() => {
    let navAnim = gsap.to(ref.current, {
      y: "-=60",
      color: "#ffff",
      duration: 0.3,
      paused: true,
      ease: "power2.In",
    });

    ScrollTrigger.create({
      id: "appBarID",
      start: "10px top",
      end: 999999,
      onUpdate: ({ progress, direction, isActive }) => {
        if (direction === -1) {
          navAnim.reverse();
        }
        if (direction === 1) {
          navAnim.play();
        } else if (direction === 1 && isActive === true) {
          navAnim.play();
        }
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

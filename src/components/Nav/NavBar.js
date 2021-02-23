import React from "react";
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
  { title: "Contact", to: "contact" },
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
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  const pref = 0;

  React.useEffect(() => {
    let navAnim = gsap.to(ref.current, {
      y: "-=90",
      color: "#ffff",
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

        // check window on every render
        if (window.innerWidth < 1280) {
          ScrollTrigger.getById("appBarID").disable() ||
            navAnim.pause(0).kill(true);
        } else {
          ScrollTrigger.getById("appBarID").enable();
        }
      },
    });

    const checkWindowWidth = () => {
      // check width of window when resized
      window.addEventListener("resize", () => {
        if (window.innerWidth < 1280) {
          return (
            ScrollTrigger.getById("appBarID").disable() ||
            navAnim.pause(0).kill(true)
          );
        } else {
          return ScrollTrigger.getById("appBarID").enable();
        }
      });
    };
    checkWindowWidth();
  }, []);

  const handleMenuClose = () => {
    setOpen(!open);
  };

  const navLogo = (
    <div className={classes.desktopLogoWrapper}>
      <span>
        <a className={classes.topNavLogo} href="/">
          JV
        </a>
      </span>
    </div>
  );

  return (
    <>
      <AppBar
        id="appBarID"
        ref={ref}
        position="fixed"
        className={classes.appBar}
      >
        <div className={classes.mobileDisableWrapper}>
          <IconButton
            className={classes.btnActiveMenu}
            onClick={handleMenuClose}
          >
            {open ? (
              <AiOutlineClose size="30px" fill="#eff1f3" />
            ) : (
              <AiOutlineMenu size="30px" fill="#eff1f3" />
            )}
          </IconButton>
        </div>
        <nav className={classes.desktopNavBar}>
          {navLogo}
          <DrawerList />
        </nav>

        <div>
          <nav
            style={open === true ? menuDisplay : null}
            className={classes.mobileDrawer}
          >
            <DrawerList handleListItemClick={handleMenuClose} />
          </nav>

          <div
            onClick={handleMenuClose}
            className={open === true ? "overlay" : null}
          />
        </div>
      </AppBar>
    </>
  );
}

const DrawerList = ({ handleListItemClick }) => {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      {linkItems.map((m, key) => (
        <Link
          onClick={handleListItemClick}
          key={key}
          className={classes.link}
          style={fontSizeLink}
          to={m.to}
          smooth={true}
          duration={1000}
        >
          {m.title}
        </Link>
      ))}
    </List>
  );
};

export default NavBar;

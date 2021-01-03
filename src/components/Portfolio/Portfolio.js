import React from "react";
import { Container, Typography, ButtonBase } from "@material-ui/core/";
import { projects } from "./portfolioList";
import { useStyles } from "./styles";

function Portfolio(props) {
  const classes = useStyles();

  return (
    <Container
      maxWidth="md"
      id="portfolio"
      className={classes.root}
      component="section"
    >
      <Typography
        style={{ fontFamily: "Varela Round, san serif" }}
        variant="h4"
        marked="center"
        align="center"
        component="h2"
      >
        Projects
      </Typography>
      <div className={classes.images}>
        {projects.map((image, key) => (
          <ButtonBase
            key={key}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.name}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

export { Portfolio };

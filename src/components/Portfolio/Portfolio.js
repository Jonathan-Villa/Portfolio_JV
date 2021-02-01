import React, { useState } from "react";
import { Container, Typography, ButtonBase } from "@material-ui/core/";
import { projects } from "./portfolioList";
import { useStyles } from "./styles";
import Grid from "@material-ui/core/Grid";
import {DialogComponent} from "../Dialog/dialog"
import Paper from "@material-ui/core/Paper"

function Portfolio(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false)

  const handleClick=()=>{
      setOpen(!open)
  }

  return (
    <Container
      maxWidth="lg"
      id="portfolio"
      className={classes.root}
      component="section"
    >
      {projects.map((image, key) => (
        <Grid key={key} className={classes.images} style={image.style}>
          <Grid item xs className={classes.imageWrapper}>
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <ButtonBase className={classes.imageButton} onClick={handleClick}>
              <Typography
                className={classes.imageTitle}
                style={{ color: "#ffff" }}
                component="h3"
                variant="h6"
                color="inherit"
              >
                {image.name}
                <div className={classes.imageMarked} />
              </Typography>
            </ButtonBase>
          </Grid>
          {image.grid}
        </Grid>
      ))}

      
    </Container>
  );
}

export { Portfolio };

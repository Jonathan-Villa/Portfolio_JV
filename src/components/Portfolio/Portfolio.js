import React, { useState } from "react";
import { Container, Typography, Button } from "@material-ui/core/";
import { projects } from "./portfolioList";
import { useStyles } from "./styles";
import Grid from "@material-ui/core/Grid";
import { DialogComponent } from "../Dialog/dialog";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardAction from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";

const fontFamily = {
  fontFamily: "Merriweather, serif",
  fontFamily: "Noto Sans SC, sans-serif",
};

function Portfolio() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [url, setURL] = useState("");
  const [close, setClose] = useState(false);

  const handleClick = (URL) => {
    setOpen(!open);
    setURL(URL);
  };

  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <Container
      maxWidth="lg"
      id="portfolio"
      disableGutters
      className={classes.root}
      component="section"
    >
      <Grid
        container
        className={classes.gridContainerCardWrapper}
        direction="row"
        justify="center"
      >
        {projects.map((image, key) => (
          <Grid
            xs={12}
            sm={6}
            lg
            item
            key={key}
            className={classes.gridItemCardWrapper}
          >
            <Card elevation={3} className={classes.cardWrapper}>
              <CardMedia image={image.url} className={classes.mediaCard} />

              <CardContent className={classes.cardContentWrapper}>
                <Typography variant="body1" style={fontFamily}>
                  {image.name}
                </Typography>
                <Typography variant="body2" style={fontFamily}>
                  Tools:{image.tools}
                </Typography>
              </CardContent>

              <CardAction className={classes.btnCardWrapper}>
                <Button
                  component="a"
                  href={image.repo}
                  style={fontFamily}
                  color="primary"
                  variant="outlined"
                >
                  Github
                </Button>
                <Button
                  onClick={() => handleClick(image.demo)}
                  style={fontFamily}
                  color="secondary"
                  variant="outlined"
                >
                  Demo
                </Button>
              </CardAction>
            </Card>
          </Grid>
        ))}
      </Grid>
      <DialogComponent open={open} closeDialog={handleClose} src={url} />
    </Container>
  );
}

export { Portfolio };

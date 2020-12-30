import React, { useState } from "react";
import { projects } from "./portfolioList";
import * as M from "@material-ui/core";
import { useStyles } from "./styles";
import { DialogComponent } from "../Dialog/dialog";

function Portfolio() {
  const classes = useStyles();
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(true);
  };

  return (
    <div id="portfolio" className={classes.mainContainer}>
      {projects.map((project, i) => (
        <M.Card key={i} className={classes.cardContainer}>
          <M.CardMedia
            component="img"
            alt="Project 1"
            height="140"
            image={project.image}
          />
          <M.CardContent>
            <M.Typography variant="h5" gutterBottom>
              {project.name}
            </M.Typography>
            <M.Typography variant="body2" color="textSecondary">
              {project.description}
              <br />
              <br />
              {project.frontEnd}
              <br />
              {project.backEnd}
            </M.Typography>
          </M.CardContent>

          <M.CardActions>
            <M.Button onClick={handleClick} size="small" color="primary">
              Live Demo
            </M.Button>
            <M.Button onClick={handleClick} size="small" color="secondary">
              Repository
            </M.Button>
          </M.CardActions>
        </M.Card>
      ))}

      <DialogComponent
        open={click}
        onClose={setClick}
        src="https://mapmaniajv.azurewebsites.net/"
      />
    </div>
  );
}

export { Portfolio };

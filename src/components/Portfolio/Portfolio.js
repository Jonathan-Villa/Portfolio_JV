import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import {projects} from "./portfolioList"
import * as M from "@material-ui/core";
import { useStyles } from "./styles"
import {DialogComponent} from "../Dialog/dialog"

const Portfolio = () => {
  const classes = useStyles();
  const [click, setClick] = useState(false)

  const handleClick = ()=> {
    setClick(true)
  }

  return (
    <div className={classes.mainContainer}>
      <M.Grid container justify="center">
        {projects.map((project, i) => (
          <M.Grid item xs={12} sm={8} md={4} key={i}>
            <M.Card className={classes.cardContainer}>
              <M.CardActionArea>
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
              </M.CardActionArea>
              <M.CardActions>
                <M.Button onClick={handleClick} size="small" color="primary">
                  Live Demo
                </M.Button>
              </M.CardActions>
            </M.Card>
          </M.Grid>
        ))}

      </M.Grid>
      <DialogComponent open={click} onClose={setClick} src="https://mapmaniajv.azurewebsites.net/" />
    </div>
  );
};

export default Portfolio;

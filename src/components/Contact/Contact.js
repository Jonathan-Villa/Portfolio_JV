import React from "react";
import { Container, Paper, Button, Box, Typography } from "@material-ui/core";
import Send from "@material-ui/icons/Send";
import { useStyles, InputField } from "./styles";

const Contact = () => {

  const classes = useStyles();
  return (
    <Box
      id="contact"
      component="div"
      className={classes.contactContainer}
    >
      <Paper elevation={5}>
        <Container maxWidth="sm" component="form" className={classes.form}>
          <Typography variant="h5" className={classes.heading}>
            Contact me
          </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            inputProps={{ className: classes.input }}
          />
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            inputProps={{ className: classes.input }}
            className={classes.field}
          />
          <InputField
            fullWidth={true}
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            inputProps={{ className: classes.input }}
          />
          <Button
            variant="outlined"
            fullWidth={true}
            endIcon={<Send />}
            className={classes.button}
          >
            Contact Me
          </Button>
        </Container>
      </Paper>
    </Box>
  );
};

export { Contact };
